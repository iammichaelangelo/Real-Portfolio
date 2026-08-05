export type Project = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  tools: string[];
  cover: string;
  gallery: string[];
  gallerySections?: {title:string;subtitle:string;images:string[];liveUrl?:string;liveLabel?:string}[];
  liveUrl?: string;
  summary: {title:string;text:string}[];
  type?: "image" | "video";
  videos?: {src:string;poster?:string;title:string}[];
  kind?: "standard" | "automation" | "automation-index";
  workflow?: string[];
  highlights?: string[];
};

export const projects: Project[] = [
  {
    slug: "designer-portfolio",
    category: "Web Design & Development",
    title: "Website Projects",
    subtitle: "Responsive websites and web applications presented through dedicated project galleries",
    tools: [
      "VS Code",
      "React",
      "Laravel",
      "PHP",
      "MySQL",
      "CSS",
      "GitHub",
      "Vercel",
      "JavaScript"
    ],
    cover: "/images/projects/designer-portfolio/cover1.png",
    gallery: [
      "/images/projects/designer-portfolio/cover.png",
      "/images/projects/designer-portfolio/detail-2.png",
      "/images/projects/designer-portfolio/detail-3.png",
      "/images/projects/origami-invoice/cover.png",
      "/images/projects/origami-invoice/detail-2.png",
      "/images/projects/origami-invoice/detail-3.png"
    ],
    gallerySections: [
      {
        title: "Professional Portfolio Website",
        subtitle: "A custom responsive portfolio for presenting creative, administrative, and technical services",
        liveUrl: "/",
        liveLabel: "Visit Live Portfolio",
        images: [
          "/images/projects/designer-portfolio/cover.png",
          "/images/projects/designer-portfolio/detail-2.png",
          "/images/projects/designer-portfolio/detail-3.png"
        ]
      },
      {
        title: "Origami Invoice",
        subtitle: "A Laravel-based invoice, client, payment, subscription, and reporting management system",
        liveUrl: "https://origami-education.com/",
        liveLabel: "Visit Live Website",
        images: [
          "/images/projects/origami-invoice/cover.png",
          "/images/projects/origami-invoice/detail-2.png",
          "/images/projects/origami-invoice/detail-3.png",
          "/images/projects/origami-invoice/detail-4.png",
          "/images/projects/origami-invoice/detail-5.png",
          "/images/projects/origami-invoice/detail-6.png",
          "/images/projects/origami-invoice/detail-7.png",
          "/images/projects/origami-invoice/detail-8.png",
          "/images/projects/origami-invoice/detail-9.png",
          "/images/projects/origami-invoice/detail-10.png"
        ]
      }
    ],
    summary: [
      {
        title: "Purpose",
        text: "Showcase multiple website projects in one organized portfolio category instead of presenting only a single web application."
      },
      {
        title: "Approach",
        text: "Each website has its own title, description, screenshot gallery, and optional live-site link for deployed projects."
      },
      {
        title: "Result",
        text: "Potential clients can compare different website styles, inspect the interfaces, and directly visit available live builds."
      }
    ]
  },
  {
    slug:"social-media-designs",
    category:"Graphic Design",
    title:"Social Media Designs",
    subtitle:"Campaign posts, carousels, and promotional graphics",
    tools:["Canva","Photoshop","Pinterest","Freepik"],
    cover:"/images/projects/social-media-designs/cover1.png",
    gallery:[
      "/images/projects/social-media-designs/detail-1.jpg",
      "/images/projects/social-media-designs/detail-2.jpg",
      "/images/projects/social-media-designs/detail-3.jpg"
    ],
    gallerySections:[
      {
        title:"Promotional Pubmats",
        subtitle:"Product advertisements, service promotions, and branded campaign posts",
        images:[
          "/images/projects/social-media-designs/pubs-1.png",
          "/images/projects/social-media-designs/pubs-2.png",
          "/images/projects/social-media-designs/pubs-3.png",
          "/images/projects/social-media-designs/pubs-4.png",
          "/images/projects/social-media-designs/pubs-5.png",
          "/images/projects/social-media-designs/pubs-6.png",
          "/images/projects/social-media-designs/pubs-7.png",
          "/images/projects/social-media-designs/pubs-8.png",

        ]
      },
      {
        title:"Food Promotions",
        subtitle:"Restaurant offers, menu highlights, and product-focused food graphics",
        images:[
          "/images/projects/social-media-designs/burger-1.png",
          "/images/projects/social-media-designs/burger-2.png",
          "/images/projects/social-media-designs/burger-33.png",
          "/images/projects/social-media-designs/burger-4.png",
          "/images/projects/social-media-designs/8.png",
          "/images/projects/social-media-designs/9.png",
          "/images/projects/social-media-designs/10.png",
          "/images/projects/social-media-designs/11.png",
          "/images/projects/social-media-designs/14.png",
          "/images/projects/social-media-designs/16.png",
          "/images/projects/social-media-designs/17.png",
          "/images/projects/social-media-designs/18.png",
        ]
      },
      {
        title:"Food Menu",
        subtitle:"Structured menu layouts featuring food selections, pricing, and clear visual hierarchy",
        images:[
          "/images/projects/social-media-designs/11.5.png",
          "/images/projects/social-media-designs/12.png", 
          "/images/projects/social-media-designs/13.png"
          
        ]
      },
      {
        title:"Product Promotion",
        subtitle:"Product-focused advertisements created to highlight features, benefits, and promotional offers",
        images:[
          "/images/projects/social-media-designs/42.png",
          "/images/projects/social-media-designs/43.png", 
          "/images/projects/social-media-designs/44.png", 
          "/images/projects/social-media-designs/45.png"
          
        ]
      }
      

    ],
    summary:[
      {title:"Purpose",text:"A collection of branded visuals for campaigns, services, and educational content."},
      {title:"Approach",text:"Clear hierarchy, consistent colors, and platform-appropriate sizes across every design."},
      {title:"Result",text:"Professional graphics ready for social channels and portfolio presentation."}
    ]
  },
  {
    slug:"automation-projects",
    category:"Automation Systems",
    title:"Automation Projects",
    subtitle:"A collection of connected systems for hiring, lead management, content, support, proposals, and invoice processing",
    tools:["n8n","Next.js","TypeScript","Supabase","Slack","Google Drive"],
    cover:"/images/projects/automation-projects/cover.png",
    gallery:[],
    kind:"automation-index",
    summary:[
      {title:"Purpose",text:"Present practical automation systems in one organized gallery without making the homepage longer."},
      {title:"Approach",text:"Each system has its own case-study page showing the workflow, connected tools, and operational result."},
      {title:"Result",text:"Visitors can quickly browse the automation portfolio and open only the systems they want to review."}
    ]
  },
    {
    slug:"youtube-thumbnails",
    category:"Thumbnails",
    title:"YouTube Thumbnails",
    subtitle:"Eye-catching thumbnails designed to improve clicks, readability, and viewer engagement",
    tools:["Canva","Photoshop","Pinterest","Freepik"],
    cover:"/images/projects/coffee-shop-brochure/cover1.png",
    gallery:[
      "/images/projects/coffee-shop-brochure/cover.png",
      "/images/projects/coffee-shop-brochure/1.png",
      "/images/projects/coffee-shop-brochure/2.png",
      "/images/projects/coffee-shop-brochure/3.png",
      "/images/projects/coffee-shop-brochure/5.png",
      "/images/projects/coffee-shop-brochure/6.png",
      "/images/projects/coffee-shop-brochure/7.png",
      "/images/projects/coffee-shop-brochure/8.png"
    ],
    summary:[
      {title:"Purpose",text:"Create compelling YouTube thumbnails that capture attention and encourage viewers to click."},
      {title:"Approach",text:"Used bold typography, expressive compositions, strong contrast, and clear visual hierarchy to maximize readability."},
      {title:"Result",text:"Professional thumbnail concepts suitable for educational, entertainment, lifestyle, and promotional content."}
    ]
  },
    {
    slug:"coffee-shop-brochure",
    category:"Habits",
    title:"Personal Projects",
    subtitle:"Eye-catching thumbnails designed to improve clicks, readability, and viewer engagement",
    tools:["Canva","Photoshop","Pinterest","Freepik"],
    cover:"/images/projects/habits/cover.png",
    gallery:[
      "/images/projects/habits/habit-1.png",
      "/images/projects/habits/habit-2.png",
      "/images/projects/habits/habit-3.png",
      "/images/projects/habits/habit-4.png",
      "/images/projects/habits/habit-5.png",

    ],
    summary:[
      {title:"Purpose",text:"A collection of personal projects that showcase productivity, habit tracking, learning resources, and self-improvement ideas."},
      {title:"Approach",text:"Designed with clean, organized layouts that make information easy to understand and visually engaging."},
      {title:"Result",text:"Creative personal projects that demonstrate consistency, organization, and practical design skills."}
    ]
  },
  {
    slug:"student-campaign-posters",
    category:"Design",
    title:"Brochures",
    subtitle:"Professional brochure layouts for brands, products, services, and promotional campaigns",
    tools:["Canva","Photoshop","Pinterest","Freepik"],
    cover:"/images/projects/student-campaign-posters/cover.png",
    gallery:[
      "/images/projects/student-campaign-posters/2.png",
      "/images/projects/student-campaign-posters/3.png",
      "/images/projects/student-campaign-posters/4.png",
      "/images/projects/student-campaign-posters/5.png",
      "/images/projects/student-campaign-posters/6.png",
      "/images/projects/student-campaign-posters/7.png",
      "/images/projects/student-campaign-posters/8.png",
      "/images/projects/student-campaign-posters/9.png",
      "/images/projects/student-campaign-posters/10.png",
      "/images/projects/student-campaign-posters/11.png",
      "/images/projects/student-campaign-posters/12.png",
      "/images/projects/student-campaign-posters/13.png",
      "/images/projects/student-campaign-posters/14.png",
      "/images/projects/student-campaign-posters/15.png",
      "/images/projects/student-campaign-posters/16.png",
      "/images/projects/student-campaign-posters/17.png",
    ],
    summary:[
      {title:"Purpose",text:"Design modern brochures that communicate information clearly while strengthening the identity of each featured brand or organization."},
      {title:"Approach",text:"Applied clean panel layouts, balanced typography, professional imagery, and consistent visual hierarchy across each design."},
      {title:"Result",text:"Print-ready brochure concepts suitable for restaurants, coffee shops, businesses, events, and promotional marketing."}
    ]
  },
      {
    slug:"virtual-assistant-content",
    category:"Social Media",
    title:"Virtual Assistant Content",
    subtitle:"Educational carousels, service posts, reels, and branded content created for Facebook, Instagram, TikTok, and LinkedIn",
    tools:[
      "Canva",
      "Photoshop",
      "Pinterest",
      "Freepik",
      "Meta",
      "Buffer",
      "Sheets"
    ],
    cover:"/images/projects/virtual-assistant-content/cover.png",
    gallery:[
      "/images/projects/virtual-assistant-content/post-1.png",
      "/images/projects/virtual-assistant-content/post-2.png",
      "/images/projects/virtual-assistant-content/post-3.png",
      "/images/projects/virtual-assistant-content/post-4.png",
      "/images/projects/virtual-assistant-content/post-5.png",
      "/images/projects/virtual-assistant-content/post-6.png",
      "/images/projects/virtual-assistant-content/post-7.png",
      "/images/projects/virtual-assistant-content/post-8.png",
      "/images/projects/virtual-assistant-content/post-9.png",
      "/images/projects/virtual-assistant-content/post-10.png",
      "/images/projects/virtual-assistant-content/post-11.png",
      "/images/projects/virtual-assistant-content/post-12.png",
      "/images/projects/virtual-assistant-content/post-13.png",
      "/images/projects/virtual-assistant-content/post-14.png",
    ],
    summary:[
      {title:"Purpose",text:"Content that explains virtual assistant services, tools, benefits, and workflows."},
      {title:"Approach",text:"Consistent brand styling, educational structure, and concise audience-focused copy."},
      {title:"Result",text:"A reusable content library for personal branding and client acquisition."}
    ]
  },
  {
    slug:"food-brand-designs",
    category:"Brand Design",
    title:"Brand Identity",
    subtitle:"Logo systems, color palettes, typography, and branded visual applications",
    tools:["Canva","Photoshop","Pinterest","Freepik"],
    cover:"/images/projects/food-brand-designs/cover.png",
    gallery:[
      "/images/projects/social-media-designs/4.png",
      "/images/projects/social-media-designs/5.png",
      "/images/projects/social-media-designs/6.png",
      "/images/projects/social-media-designs/7.png",
      "/images/projects/food-brand-designs/21.png",
      "/images/projects/food-brand-designs/23.png",
      "/images/projects/food-brand-designs/22.png",
      "/images/projects/food-brand-designs/24.png",
    ],
    summary:[
      {title:"Purpose",text:"Develop memorable brand identities that create a consistent visual presence across digital and print materials."},
      {title:"Approach",text:"Designed logos, color palettes, typography systems, brand applications, and marketing assets with consistency and flexibility in mind."},
      {title:"Result",text:"Professional branding presentations that help businesses establish a recognizable and cohesive visual identity."}
    ]
  }


];


export const automationProjects: Project[] = [
  {
    slug:"invoiceflow-ai",
    category:"Invoice Automation",
    title:"InvoiceFlow AI",
    subtitle:"An end-to-end invoice processing system that validates uploaded documents, extracts structured financial data, stores the original file, and keeps the finance team updated.",
    tools:["Next.js","TypeScript","n8n","Groq","Supabase","Google Drive","Slack","Railway","Vercel"],
    cover:"/images/projects/invoiceflow-ai/invopage3.png",
    gallery:[
      "/images/projects/invoiceflow-ai/invopage1.png",
      "/images/projects/invoiceflow-ai/invopage2.png",
      "/images/projects/invoiceflow-ai/invopage3.png",
      "/images/projects/invoiceflow-ai/invopage4.png",
    ],
    kind:"automation",
    workflow:["Invoice Upload","Validation","Duplicate Check","AI Extraction","Supabase","Google Drive","Slack"],
    highlights:[
      "PDF, PNG, and JPG invoice uploads",
      "File-hash and invoice-number duplicate detection",
      "Vendor, dates, totals, balances, and line-item extraction",
      "Confidence scoring and human-review flags",
      "Original-file storage in Google Drive",
      "Searchable Supabase invoice and line-item records",
      "Live Slack processing notifications"
    ],
    summary:[
      {title:"Challenge",text:"Manual invoice entry is slow, prone to inconsistent formatting, and makes it difficult to identify duplicate invoices or verify extracted totals."},
      {title:"Automation Process",text:"A user uploads an invoice through the Next.js dashboard. The n8n workflow validates the file, generates a duplicate hash, extracts the document content, and sends the data to Groq for structured invoice analysis."},
      {title:"Data Handling",text:"Invoice details, confidence scores, review flags, and individual line items are stored in Supabase, while the original document is uploaded to Google Drive and linked back to the record."},
      {title:"Operational Output",text:"The dashboard displays the processed invoice, total amount, extracted line items, source-file preview, duplicate status, and AI summary in one place."},
      {title:"Result",text:"Invoices become organized and searchable within seconds, reducing repetitive data entry while keeping the document, extracted values, and team notification connected."}
    ]
  },
  {
    slug:"supportflow-ai",
    category:"Support Automation",
    title:"SupportFlow AI",
    subtitle:"A customer-support automation that turns incoming email conversations into organized tickets, AI-assisted summaries, prioritized queues, and draft replies for review.",
    tools:["Next.js","n8n","Groq","Supabase","Gmail","Slack","Sheets"],
    cover:"/images/projects/automation-projects/supopage3.png",
    gallery:[
      "/images/projects/automation-projects/supopage1.png",
      "/images/projects/automation-projects/supopage2.png",
      "/images/projects/automation-projects/supopage3.png",
      "/images/projects/automation-projects/supopage4.png",
    ],
    kind:"automation",
    workflow:["Customer Email","Thread Detection","AI Classification","Ticket Database","Gmail Draft","Slack Alert"],
    highlights:[
      "Automatic support ticket IDs",
      "Intent, category, priority, and sentiment detection",
      "AI summaries and customer-request extraction",
      "Thread-aware ticket updates",
      "Human-review and recommended-action fields",
      "Gmail draft replies created in the original thread",
      "Urgent-ticket notifications in Slack"
    ],
    summary:[
      {title:"Challenge",text:"Support teams need to organize incoming requests quickly without losing the context of the original email conversation or overlooking urgent issues."},
      {title:"Automation Process",text:"SupportFlow reads unread Gmail messages, identifies whether the message belongs to a new or existing thread, and uses AI to classify the request, priority, sentiment, and recommended next action."},
      {title:"Ticket Management",text:"The workflow creates or updates a structured ticket in Supabase and Google Sheets, preserving the message ID, thread ID, customer details, summary, status, and follow-up information."},
      {title:"Human-in-the-Loop Reply",text:"Instead of sending an uncontrolled response, the system prepares a Gmail draft in the same thread so a support representative can review and send it."},
      {title:"Result",text:"The support queue becomes easier to search and prioritize, while the customer message, AI analysis, ticket history, draft response, and Slack alert remain connected."}
    ]
  },
  {
    slug:"hireflow-ai",
    category:"Hiring Automation",
    title:"HireFlow AI",
    subtitle:"A two-workflow recruitment system that screens resumes, scores candidates, maintains a live ATS, and automatically records completed interview bookings.",
    tools:["Next.js","TypeScript","n8n","Groq","Sheets","Gmail","Slack","Calendar","Calendly","Google Drive"],
    cover:"/images/projects/automation-projects/hirapage3.png",
    gallery:[
      "/images/projects/automation-projects/hirapage1.png",
      "/images/projects/automation-projects/hirapage2.png",
      "/images/projects/automation-projects/hirapage3.png",
      "/images/projects/automation-projects/hirapage4.png",
      "/images/projects/automation-projects/hirapage5.png",
      "/images/projects/automation-projects/hirapage6.png",
      "/images/projects/automation-projects/hirapage7.png",
      "/images/projects/automation-projects/hirapage8.png",
      "/images/projects/automation-projects/hirapage9.png",
      "/images/projects/automation-projects/hirapage10.png",
      "/images/projects/automation-projects/hirapage11.png",
    ],
    kind:"automation",
    workflow:["Resume Application","Resume Screening Workflow","AI Scoring","Google Sheets ATS","Booking Tracker","Google Calendar","Slack"],
    highlights:[
      "Two connected n8n workflows",
      "Resume parsing and employment-timeline analysis",
      "Candidate scoring, recommendation, strengths, and concerns",
      "Duplicate-applicant detection",
      "Live Google Sheets ATS and private admin dashboard",
      "Interview invitation and Calendly booking flow",
      "Automatic interview date, time, link, and calendar-event updates",
      "Recruitment notifications through Gmail and Slack"
    ],
    summary:[
      {title:"Challenge",text:"Reviewing resumes manually makes candidate comparison inconsistent, slows down communication, and requires recruiters to update interview records by hand."},
      {title:"Main Workflow: Resume Screening",text:"The public application form sends the resume and applicant details to n8n. The workflow extracts the resume content, calculates relevant experience, identifies skills, scores the candidate, detects duplicates, and saves the structured result to the Google Sheets ATS."},
      {title:"Candidate Communication",text:"Qualified applicants can receive interview communication while the recruitment team receives a Slack update containing the applicant summary, score, recommendation, and next action."},
      {title:"Connected Workflow: ATS – Interview Booking Tracker",text:"A separate scheduled n8n workflow checks Google Calendar for new Calendly bookings, extracts the attendee email and Candidate ID, matches the correct ATS row, and updates the interview date, time, Zoom link, calendar event ID, and status."},
      {title:"Dashboard",text:"The protected sticky-note admin dashboard reads the live ATS data and organizes applicants by stage, score, recommendation, experience, and scheduled interview information."},
      {title:"Result",text:"HireFlow connects application intake, AI screening, candidate records, recruiter notifications, and interview scheduling in one complete recruitment system."}
    ]
  },
  {
    slug:"proposalflow-ai",
    category:"Proposal Automation",
    title:"ProposalFlow AI",
    subtitle:"A proposal-generation workflow that transforms client requirements into a structured proposal, creates a branded PDF, delivers it by email, and records the result for the team.",
    tools:["Next.js","n8n","Groq","Supabase","Gotenberg","Google Drive","Gmail","Slack","Railway"],
    cover:"/images/projects/automation-projects/propo6.png",
    gallery:[
      "/images/projects/automation-projects/propo1.png",
      "/images/projects/automation-projects/propo2.png",
      "/images/projects/automation-projects/propo3.png",
      "/images/projects/automation-projects/propo4.png",
      "/images/projects/automation-projects/propo5.png",
      "/images/projects/automation-projects/propo6.png",
    ],
    kind:"automation",
    workflow:["Client Requirements","AI Proposal","Supabase","HTML Template","Gotenberg PDF","Google Drive","Gmail","Slack"],
    highlights:[
      "Unique proposal IDs",
      "AI-generated summary, scope, package, pricing, and timeline",
      "Structured proposal records in Supabase",
      "HTML-to-PDF conversion through Gotenberg",
      "Google Drive upload and shareable file link",
      "Automatic client email delivery",
      "Slack delivery and value notification"
    ],
    summary:[
      {title:"Challenge",text:"Preparing proposals manually delays client response time and can produce inconsistent scope, pricing, structure, and document formatting."},
      {title:"Automation Process",text:"The client requirements are submitted through the ProposalFlow interface and sent to n8n, where AI generates the proposal summary, recommended package, scope of work, estimated price, timeline, and client-facing content."},
      {title:"Document Generation",text:"The proposal is inserted into a structured HTML template, converted into a PDF through Gotenberg, and uploaded to Google Drive with a shareable link."},
      {title:"Delivery and Tracking",text:"The final proposal is emailed to the client, saved to Supabase, and reported to Slack with the proposal ID, client, package, estimated value, status, and PDF link."},
      {title:"Result",text:"Qualified leads receive consistent and professional proposals faster, while the team retains a searchable record of every generated and delivered document."}
    ]
  },
  {
    slug:"contentflow-ai",
    category:"Content Automation",
    title:"ContentFlow AI",
    subtitle:"A multi-platform content system that combines reusable brand profiles and campaign briefs to generate organized, platform-ready marketing content.",
    tools:["Next.js","TypeScript","Supabase","Groq","Vercel"],
    cover:"/images/projects/automation-projects/cont1.png",
    gallery:[
      "/images/projects/automation-projects/cont1.png",
      "/images/projects/automation-projects/cont2.png",
      "/images/projects/automation-projects/cont3.png",
      "/images/projects/automation-projects/cont4.png",
      "/images/projects/automation-projects/cont5.png",
      "/images/projects/automation-projects/cont6.png",
    ],
    kind:"automation",
    workflow:["Brand Profile","Campaign Brief","AI Generation","Supabase","Content Library","Analytics"],
    highlights:[
      "Reusable brand profiles",
      "Campaign goals, buyer intent, tone, and product context",
      "Seven platform-specific content outputs",
      "Captions, hashtags, and calls to action",
      "Image and video creative prompts",
      "Saved campaign and content library",
      "Persistent Supabase workspace data"
    ],
    summary:[
      {title:"Challenge",text:"Creating consistent content for several platforms takes time and often leads to scattered drafts, repeated work, and an inconsistent brand voice."},
      {title:"Brand Foundation",text:"Users can save reusable brand profiles containing the business description, website, target audience, and default tone, allowing future campaign forms to be completed faster."},
      {title:"Campaign Generation",text:"ContentFlow combines the brand profile with the campaign description, buyer-intent keyword, tone, and goal to create separate content for Instagram, Facebook, LinkedIn, Google Business, Pinterest, X, and Threads."},
      {title:"Content Organization",text:"Generated captions, hashtags, calls to action, image prompts, and video prompts are stored in Supabase and organized inside the campaign library for later review and reuse."},
      {title:"Result",text:"One campaign brief becomes a structured multi-platform content package while the brand settings, campaign history, and generated posts remain permanently available in the workspace."}
    ]
  },
  {
    slug:"leadflow-ai",
    category:"Lead Automation",
    title:"LeadFlow AI",
    subtitle:"A two-workflow lead-management system that qualifies portfolio inquiries, records them in a CRM, sends immediate responses, and manages scheduled follow-ups until the lead replies or the sequence is completed.",
    tools:["Next.js","n8n","Google Gemini","Google Sheets","Gmail","Slack"],
    cover:"/images/projects/automation-projects/lead3.png",
    gallery:[
      "/images/projects/automation-projects/lead1.png",
      "/images/projects/automation-projects/lead2.png",
      "/images/projects/automation-projects/lead3.png",
      "/images/projects/automation-projects/lead4.png",
      "/images/projects/automation-projects/lead5.png",
      "/images/projects/automation-projects/lead6.png",
      "/images/projects/automation-projects/lead7.png",
    ],
    kind:"automation",
    workflow:["Portfolio Contact Form","Lead Qualification Workflow","AI Scoring","Google Sheets CRM","Confirmation","Slack","Follow-Up Manager"],
    highlights:[
      "Two connected n8n workflows",
      "Lead score, priority, intent, business type, and sentiment analysis",
      "AI summary, services needed, and recommended next step",
      "Automatic Google Sheets CRM creation",
      "Immediate confirmation email and Slack notification",
      "Three-stage scheduled follow-up sequence",
      "CRM stage, last-contact, next-follow-up, and status updates",
      "Automatic closure after the final no-response stage"
    ],
    summary:[
      {title:"Challenge",text:"New portfolio inquiries can be missed, assessed inconsistently, or forgotten when lead qualification, recordkeeping, and follow-up are handled manually."},
      {title:"Main Workflow: Lead Qualification",text:"The portfolio contact form sends each inquiry to n8n. AI analyzes the request and returns a lead score, priority, intent, business type, sentiment, services needed, summary, and recommended next step."},
      {title:"CRM and Immediate Response",text:"The qualified lead is saved to Google Sheets with its follow-up stage and next-contact date. The system also sends a confirmation email to the prospect and a detailed lead notification to Slack."},
      {title:"Connected Workflow: LeadFlow AI – Follow-Up Manager",text:"A separate scheduled n8n workflow reads the CRM, checks the next-follow-up date and current stage, and sends Follow-Up 1, Follow-Up 2, or the final follow-up. After each email, it updates the same CRM row with the new stage, last-contact date, next-follow-up date, and status."},
      {title:"Completion Logic",text:"When the third follow-up is completed without a response, the workflow can mark the lead as Closed – No Response, preventing the same sequence from continuing indefinitely."},
      {title:"Result",text:"Every inquiry receives a consistent first response and structured follow-up, while high-value leads are surfaced quickly and the full contact history remains visible in one CRM."}
    ]
  },
];

export const allProjects = [...projects, ...automationProjects];

export function getProject(slug:string){
  return allProjects.find((project)=>project.slug===slug);
}
