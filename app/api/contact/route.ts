import {NextResponse} from "next/server";
import {Resend} from "resend";

type ContactPayload = {
  email?: string;
  subject?: string;
  message?: string;
};

export const runtime = "nodejs";

export async function POST(request: Request){
  try{
    const apiKey = process.env.RESEND_API_KEY;
    const destination = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if(!apiKey || !destination || !fromEmail){
      return NextResponse.json(
        {error:"Resend environment variables are not configured."},
        {status:500}
      );
    }

    const body = (await request.json()) as ContactPayload;
    const email = body.email?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    if(!email || !subject || !message){
      return NextResponse.json(
        {error:"Email, subject, and message are required."},
        {status:400}
      );
    }

    if(!isValidEmail(email)){
      return NextResponse.json(
        {error:"Please enter a valid email address."},
        {status:400}
      );
    }

    const resend = new Resend(apiKey);

    const {data, error} = await resend.emails.send({
      from:`Michael Acuña Portfolio <${fromEmail}>`,
      to:[destination],
      replyTo:email,
      subject:`Portfolio Contact: ${subject}`,
      text:[
        "New portfolio message",
        "",
        `Sender: ${email}`,
        `Subject: ${subject}`,
        "",
        message
      ].join("\n"),
      html:`
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#181818">
          <h1 style="font-size:26px">New portfolio message</h1>
          <p><strong>Sender:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <div style="margin-top:24px;padding:20px;border-radius:14px;background:#f4f4f4;line-height:1.7">
            ${escapeHtml(message).replace(/\n/g,"<br />")}
          </div>
        </div>
      `
    });

    if(error){
      console.error("Resend error:",error);
      return NextResponse.json(
        {error:"The email service could not send the message."},
        {status:500}
      );
    }

    return NextResponse.json({success:true,id:data?.id});
  }catch(error){
    console.error("Contact route error:",error);
    return NextResponse.json(
      {error:"Unable to send the message."},
      {status:500}
    );
  }
}

function isValidEmail(value:string){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value:string){
  return value
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
