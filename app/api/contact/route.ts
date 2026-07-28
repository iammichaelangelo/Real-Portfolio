import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
};

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const destination = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!apiKey || !destination || !fromEmail) {
      return NextResponse.json(
        { error: "Resend environment variables are not configured." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const company = body.company?.trim() || "Not provided";
    const service = body.service?.trim();
    const budget = body.budget?.trim() || "Not specified";
    const message = body.message?.trim();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Name, email, service, and project details are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: `Michael Acuña Portfolio <${fromEmail}>`,
      to: [destination],
      replyTo: email,
      subject: `New Portfolio Lead: ${service}`,
      text: [
        "New portfolio project inquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Service: ${service}`,
        `Estimated budget: ${budget}`,
        "",
        "Project details:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#181818">
          <h1 style="font-size:26px">New portfolio project inquiry</h1>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company)}</p>
          <p><strong>Service:</strong> ${escapeHtml(service)}</p>
          <p><strong>Estimated budget:</strong> ${escapeHtml(budget)}</p>
          <div style="margin-top:24px;padding:20px;border-radius:14px;background:#f4f4f4;line-height:1.7">
            ${escapeHtml(message).replace(/\n/g, "<br />")}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "The email service could not send the message." },
        { status: 500 }
      );
    }

    let n8nSuccess = false;

    if (n8nWebhookUrl) {
      try {
        const n8nResponse = await fetch(n8nWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            company,
            service,
            budget,
            message,
          }),
          cache: "no-store",
        });

        if (!n8nResponse.ok) {
          const n8nError = await n8nResponse.text();

          console.error(
            "n8n webhook returned an error:",
            n8nResponse.status,
            n8nError
          );
        } else {
          n8nSuccess = true;
        }
      } catch (n8nError) {
        console.error("Unable to send the lead to n8n:", n8nError);
      }
    } else {
      console.warn("N8N_WEBHOOK_URL is not configured.");
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
      n8nSuccess,
    });
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      { error: "Unable to send the message." },
      { status: 500 }
    );
  }
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}