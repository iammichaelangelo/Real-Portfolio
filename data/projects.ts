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
  ,{
    slug:"automation-projects",
    category:"Automation Systems",
    title:"Automation Projects",
    subtitle:"A collection of connected systems for hiring, lead management, content, support, proposals, and invoice processing",
    tools:["n8n","Next.js","TypeScript","Supabase","Slack","Google Drive"],
    cover:"/images/projects/automation-projects/cover.svg",
    gallery:[],
    kind:"automation-index",
    summary:[
      {title:"Purpose",text:"Present practical automation systems in one organized gallery without making the homepage longer."},
      {title:"Approach",text:"Each system has its own case-study page showing the workflow, connected tools, and operational result."},
      {title:"Result",text:"Visitors can quickly browse the automation portfolio and open only the systems they want to review."}
    ]
  }

];


export const automationProjects: Project[] = [
  {
    slug:"hireflow-ai",
    category:"Hiring Automation",
    title:"HireFlow AI",
    subtitle:"An applicant-screening workflow that parses resumes, evaluates experience and skills, organizes candidates, and prepares interview communication.",
    tools:["n8n","Groq","Sheets","Gmail","Slack","Google Drive"],
    cover:"/images/projects/automation-projects/hireflow-ai.svg",
    gallery:["/images/projects/automation-projects/hireflow-ai.svg"],
    kind:"automation",
    workflow:["Resume","n8n","AI Scoring","Google Sheets","Gmail","Slack"],
    highlights:["Resume parsing","Candidate scoring","Duplicate detection","Interview email drafts","Recruitment notifications"],
    summary:[
      {title:"Challenge",text:"Reviewing applications manually makes it difficult to compare candidates consistently and respond quickly."},
      {title:"Solution",text:"HireFlow reads each resume, calculates relevant experience, scores the candidate against the role, and organizes the result in an applicant tracker."},
      {title:"Result",text:"Recruiters receive structured candidate records, recommendations, and ready-to-review interview communication in one workflow."}
    ]
  },
  {
    slug:"leadflow-ai",
    category:"Lead Automation",
    title:"LeadFlow AI",
    subtitle:"A lead-management workflow that qualifies inquiries, records them in a CRM, sends confirmation messages, and manages scheduled follow-ups.",
    tools:["Next.js","n8n","Groq","Sheets","Gmail","Slack"],
    cover:"/images/projects/automation-projects/leadflow-ai.svg",
    gallery:["/images/projects/automation-projects/leadflow-ai.svg"],
    kind:"automation",
    workflow:["Contact Form","n8n","AI Qualification","CRM","Email","Slack"],
    highlights:["Lead scoring","Intent and priority analysis","CRM record creation","Three-stage follow-ups","Team notifications"],
    summary:[
      {title:"Challenge",text:"New inquiries can be missed or followed up inconsistently when qualification and recordkeeping are handled manually."},
      {title:"Solution",text:"LeadFlow analyzes each inquiry, assigns a score and priority, saves the lead to a CRM, and schedules structured follow-up stages."},
      {title:"Result",text:"Every inquiry receives a consistent response while high-value leads are surfaced quickly for action."}
    ]
  },
  {
    slug:"contentflow-ai",
    category:"Content Automation",
    title:"ContentFlow AI",
    subtitle:"A content-generation system that turns campaign details and brand information into organized platform-ready content.",
    tools:["Next.js","TypeScript","Supabase","Groq","n8n"],
    cover:"/images/projects/automation-projects/contentflow-ai.svg",
    gallery:["/images/projects/automation-projects/contentflow-ai.svg"],
    kind:"automation",
    workflow:["Campaign Brief","Dashboard","AI Generation","Supabase","Content Library"],
    highlights:["Brand profiles","Campaign organization","Platform-specific captions","Hashtags and calls to action","Image and video prompts"],
    summary:[
      {title:"Challenge",text:"Creating consistent content for several platforms takes time and often leads to scattered drafts and brand inconsistencies."},
      {title:"Solution",text:"ContentFlow combines campaign goals, buyer intent, and brand information to generate structured content for multiple channels."},
      {title:"Result",text:"Campaign outputs are organized in a reusable content library with captions, hashtags, calls to action, and creative prompts."}
    ]
  },
  {
    slug:"supportflow-ai",
    category:"Support Automation",
    title:"SupportFlow AI",
    subtitle:"A customer-support workflow that reads incoming emails, classifies tickets, creates records, and prepares draft replies for review.",
    tools:["Next.js","n8n","Groq","Supabase","Gmail","Slack","Sheets"],
    cover:"/images/projects/automation-projects/supportflow-ai.svg",
    gallery:["/images/projects/automation-projects/supportflow-ai.svg"],
    kind:"automation",
    workflow:["Customer Email","n8n","AI Classification","Ticket Database","Draft Reply","Slack"],
    highlights:["Ticket IDs","Category and priority detection","Sentiment analysis","Thread-aware updates","Draft reply preparation"],
    summary:[
      {title:"Challenge",text:"Support teams need to organize incoming requests quickly while keeping replies accurate and connected to the existing email thread."},
      {title:"Solution",text:"SupportFlow classifies each email, summarizes the request, creates or updates a ticket, and prepares a response draft for human review."},
      {title:"Result",text:"The support queue becomes searchable and easier to prioritize, with the original message, ticket context, and draft response kept together."}
    ]
  },
  {
    slug:"proposalflow-ai",
    category:"Proposal Automation",
    title:"ProposalFlow AI",
    subtitle:"A proposal-generation workflow that converts qualified lead information into a branded PDF, sends it by email, and reports the result to the team.",
    tools:["n8n","Groq","Google Drive","Gmail","Slack","Railway"],
    cover:"/images/projects/automation-projects/proposalflow-ai.svg",
    gallery:["/images/projects/automation-projects/proposalflow-ai.svg"],
    kind:"automation",
    workflow:["Lead Data","n8n","AI Proposal","PDF","Google Drive","Gmail","Slack"],
    highlights:["Proposal IDs","Scope and package generation","PDF conversion","Drive sharing","Email delivery"],
    summary:[
      {title:"Challenge",text:"Preparing proposals manually slows down response time and creates inconsistent pricing, scope, and formatting."},
      {title:"Solution",text:"ProposalFlow uses lead details to generate the proposal structure, converts it into a PDF, stores it, and emails it to the prospective client."},
      {title:"Result",text:"Qualified leads receive organized proposals faster, while the team gets a searchable record and delivery notification."}
    ]
  },
  {
    slug:"invoiceflow-ai",
    category:"Invoice Automation",
    title:"InvoiceFlow AI",
    subtitle:"An end-to-end invoice processing system that turns uploaded documents into searchable records, stored files, and team notifications.",
    tools:["Next.js","TypeScript","n8n","Groq","Supabase","Google Drive","Slack","Railway","Vercel"],
    cover:"/images/projects/invoiceflow-ai/cover.png",
    gallery:[
      "/images/projects/invoiceflow-ai/dashboard-overview.png",
      "/images/projects/invoiceflow-ai/workflow-canvas.png",
      "/images/projects/invoiceflow-ai/workflow-success.png",
      "/images/projects/invoiceflow-ai/invoice-records.png"
    ],
    gallerySections:[
      {
        title:"Live Operations Dashboard",
        subtitle:"A responsive dashboard for uploading, monitoring, searching, and reviewing invoice records in one place.",
        liveUrl:"https://invoice-automation-rosy.vercel.app",
        liveLabel:"Open Live Dashboard",
        images:[
          "/images/projects/invoiceflow-ai/dashboard-overview.png",
          "/images/projects/invoiceflow-ai/invoice-records.png"
        ]
      },
      {
        title:"Automated Processing Workflow",
        subtitle:"The n8n workflow validates every upload, extracts structured invoice data, checks duplicates, stores the file, and returns the final result.",
        images:[
          "/images/projects/invoiceflow-ai/workflow-canvas.png",
          "/images/projects/invoiceflow-ai/workflow-success.png"
        ]
      }
    ],
    liveUrl:"https://invoice-automation-rosy.vercel.app",
    kind:"automation",
    workflow:["Dashboard","n8n","Groq","Supabase","Google Drive","Slack"],
    highlights:["PDF, PNG, and JPG upload","Duplicate invoice detection","Vendor and line-item extraction","Google Drive file storage","Live Slack notifications"],
    summary:[
      {title:"Challenge",text:"Manual invoice entry takes time, creates inconsistent records, and makes duplicate files difficult to catch."},
      {title:"Solution",text:"InvoiceFlow connects a Next.js dashboard to an n8n workflow that extracts, validates, stores, and routes invoice information automatically."},
      {title:"Result",text:"Invoices become searchable records within seconds, while original files, line items, duplicate status, and team notifications stay connected."}
    ]
  }
];
export const allProjects = [...projects, ...automationProjects];

export function getProject(slug:string){
  return allProjects.find((project)=>project.slug===slug);
}
