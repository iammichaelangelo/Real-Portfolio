"use client";

import {FormEvent,useEffect,useRef,useState} from "react";
import {Bot,ChevronDown,MessageCircle,Send,Sparkles,X} from "lucide-react";
import {chatbotAnswers,chatbotProfile,chatbotSuggestions} from "@/data/chatbot";

type Message={id:number;role:"bot"|"user";text:string};

const welcome=`Hi! I’m Michael’s portfolio assistant. You can ask naturally—even with spelling or grammar mistakes—about his experience, services, tools, projects, education, certificates, or contact details.`;

const ignoredWords=new Set([
  "a","an","and","are","about","can","could","do","does","for","he","his","how","i","in","is","it","me","of","on","please","tell","the","to","what","who","with","you"
]);

const commonCorrections:Record<string,string>={
  abot:"about",adminstrative:"administrative",availble:"available",avialable:"available",
  backgroud:"background",backround:"background",certficate:"certificate",certficates:"certificates",
  certificast:"certificate",certificat:"certificate",contac:"contact",contect:"contact",
  desgin:"design",deisgn:"design",devloper:"developer",developement:"development",
  educaton:"education",experiance:"experience",exprience:"experience",grahic:"graphic",
  grammer:"grammar",hie:"hire",micheal:"michael",porfolio:"portfolio",portflio:"portfolio",
  projct:"project",projecs:"projects",servces:"services",sevice:"service",skils:"skills",
  sofware:"software",strenght:"strength",teh:"the",toolss:"tools",vido:"video",
  vidoe:"video",webiste:"website",waht:"what",whta:"what",wer:"where",wrk:"work"
};

function normalize(value:string){
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g," ")
    .replace(/\s+/g," ")
    .trim();
}

function editDistance(a:string,b:string){
  if(a===b)return 0;
  if(!a.length)return b.length;
  if(!b.length)return a.length;
  const previous=Array.from({length:b.length+1},(_,index)=>index);
  const current=new Array<number>(b.length+1);
  for(let i=1;i<=a.length;i++){
    current[0]=i;
    for(let j=1;j<=b.length;j++){
      current[j]=Math.min(
        current[j-1]+1,
        previous[j]+1,
        previous[j-1]+(a[i-1]===b[j-1]?0:1)
      );
    }
    for(let j=0;j<=b.length;j++)previous[j]=current[j];
  }
  return previous[b.length];
}

function wordSimilarity(a:string,b:string){
  if(a===b)return 1;
  if(a.length<3||b.length<3)return 0;
  const distance=editDistance(a,b);
  return 1-distance/Math.max(a.length,b.length);
}

function correctToken(token:string,vocabulary:string[]){
  if(commonCorrections[token])return commonCorrections[token];
  if(token.length<4)return token;
  let best=token;
  let score=0;
  for(const word of vocabulary){
    const similarity=wordSimilarity(token,word);
    if(similarity>score){score=similarity;best=word;}
  }
  return score>=0.72?best:token;
}

const vocabulary=Array.from(new Set([
  ...chatbotAnswers.flatMap(item=>item.keywords.flatMap(keyword=>normalize(keyword).split(" "))),
  "services","skills","details","offer","offers","email","contact","portfolio","michael"
]));

function prepareQuestion(question:string){
  const rawTokens=normalize(question).split(" ").filter(Boolean);
  const correctedTokens=rawTokens.map(token=>correctToken(token,vocabulary));
  return {
    text:correctedTokens.join(" "),
    tokens:correctedTokens.filter(token=>!ignoredWords.has(token))
  };
}

function scoreKeyword(questionText:string,questionTokens:string[],keyword:string){
  const key=normalize(keyword);
  const keyTokens=key.split(" ").filter(Boolean);

  if(questionText.includes(key))return keyTokens.length>1?8:4;

  let score=0;
  for(const keyToken of keyTokens){
    let best=0;
    for(const questionToken of questionTokens){
      best=Math.max(best,wordSimilarity(questionToken,keyToken));
    }
    if(best>=0.86)score+=3;
    else if(best>=0.72)score+=1.5;
  }
  return score;
}

function getAnswer(question:string){
  const prepared=prepareQuestion(question);
  if(!prepared.text)return "Please type a question about Michael’s portfolio.";

  let bestAnswer="";
  let bestScore=0;

  for(const item of chatbotAnswers){
    const score=item.keywords.reduce(
      (total,keyword)=>total+scoreKeyword(prepared.text,prepared.tokens,keyword),
      0
    );
    if(score>bestScore){bestScore=score;bestAnswer=item.answer;}
  }

  if(bestScore>=1.5)return bestAnswer;
  return `I’m not fully sure what you meant, but I can answer questions about ${chatbotProfile.name}’s experience, services, design work, video editing, web development, tools, projects, education, certificates, availability, and contact information. Try asking, “What services does Michael offer?”`;
}

export default function PortfolioChatbot(){
  const [open,setOpen]=useState(false);
  const [input,setInput]=useState("");
  const [messages,setMessages]=useState<Message[]>([{id:1,role:"bot",text:welcome}]);
  const [typing,setTyping]=useState(false);
  const endRef=useRef<HTMLDivElement>(null);
  const nextId=useRef(2);

  useEffect(()=>{endRef.current?.scrollIntoView({behavior:"smooth"});},[messages,typing,open]);

  function ask(text:string){
    const clean=text.trim();
    if(!clean||typing)return;
    setMessages(current=>[...current,{id:nextId.current++,role:"user",text:clean}]);
    setInput("");
    setTyping(true);
    window.setTimeout(()=>{
      setMessages(current=>[...current,{id:nextId.current++,role:"bot",text:getAnswer(clean)}]);
      setTyping(false);
    },420);
  }

  function submit(event:FormEvent){event.preventDefault();ask(input);}

  return <div className={`portfolio-chatbot ${open?"is-open":""}`}>
    {open&&<section className="chatbot-panel" aria-label="Portfolio assistant">
      <header className="chatbot-header">
        <div className="chatbot-avatar"><Bot size={22}/></div>
        <div><strong>Michael’s Assistant</strong><span><i/> Typo-friendly portfolio guide</span></div>
        <button type="button" onClick={()=>setOpen(false)} aria-label="Close chatbot"><ChevronDown size={21}/></button>
      </header>

      <div className="chatbot-messages">
        {messages.map(message=><div key={message.id} className={`chat-message ${message.role}`}>
          {message.role==="bot"&&<span className="message-bot-icon"><Sparkles size={13}/></span>}
          <p>{message.text}</p>
        </div>)}
        {typing&&<div className="chat-message bot chatbot-typing"><span/><span/><span/></div>}
        <div ref={endRef}/>
      </div>

      {messages.length<4&&<div className="chatbot-suggestions">
        {chatbotSuggestions.slice(0,3).map(suggestion=><button key={suggestion} type="button" onClick={()=>ask(suggestion)}>{suggestion}</button>)}
      </div>}

      <form className="chatbot-form" onSubmit={submit}>
        <input value={input} onChange={event=>setInput(event.target.value)} placeholder="Ask naturally—even with typos..." aria-label="Ask about Michael"/>
        <button type="submit" disabled={!input.trim()||typing} aria-label="Send message"><Send size={18}/></button>
      </form>
      <p className="chatbot-note">Understands common spelling and grammar mistakes.</p>
    </section>}

    <button className="chatbot-launcher" type="button" onClick={()=>setOpen(value=>!value)} aria-label={open?"Close portfolio assistant":"Open portfolio assistant"}>
      {open?<X size={23}/>:<MessageCircle size={25}/>}<span>Ask about me</span>
    </button>
  </div>;
}
