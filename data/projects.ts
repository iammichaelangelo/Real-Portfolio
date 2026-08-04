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
  kind?: "standard" | "automation";
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
];


export const automationProjects: Project[] = [
  {
    slug: "invoiceflow-ai",
    category: "Automation System",
    title: "InvoiceFlow AI",
    subtitle: "An end-to-end invoice processing system that turns uploaded documents into searchable records, stored files, and team notifications",
    tools: [
      "Next.js",
      "TypeScript",
      "n8n",
      "Groq",
      "Supabase",
      "Google Drive",
      "Slack",
      "Railway",
      "Vercel"
    ],
    cover: "/images/projects/invoiceflow-ai/cover.png",
    gallery: [
      "/images/projects/invoiceflow-ai/dashboard-overview.png",
      "/images/projects/invoiceflow-ai/workflow-canvas.png",
      "/images/projects/invoiceflow-ai/workflow-success.png",
      "/images/projects/invoiceflow-ai/invoice-records.png"
    ],
    gallerySections: [
      {
        title: "Live Operations Dashboard",
        subtitle: "A responsive dashboard for uploading, monitoring, searching, and reviewing invoice records in one place.",
        liveUrl: "https://invoice-automation-rosy.vercel.app",
        liveLabel: "Open Live Dashboard",
        images: [
          "/images/projects/invoiceflow-ai/dashboard-overview.png",
          "/images/projects/invoiceflow-ai/invoice-records.png"
        ]
      },
      {
        title: "Automated Processing Workflow",
        subtitle: "The n8n workflow validates every upload, extracts structured invoice data, checks duplicates, stores the file, and returns the final result.",
        images: [
          "/images/projects/invoiceflow-ai/workflow-canvas.png",
          "/images/projects/invoiceflow-ai/workflow-success.png"
        ]
      }
    ],
    liveUrl: "https://invoice-automation-rosy.vercel.app",
    kind: "automation",
    workflow: [
      "Dashboard",
      "n8n",
      "Groq",
      "Supabase",
      "Google Drive",
      "Slack"
    ],
    highlights: [
      "PDF, PNG, and JPG upload",
      "Duplicate invoice detection",
      "Vendor and line-item extraction",
      "Google Drive file storage",
      "Live Slack notifications"
    ],
    summary: [
      {
        title: "Challenge",
        text: "Manual invoice entry takes time, creates inconsistent records, and makes duplicate files difficult to catch."
      },
      {
        title: "Solution",
        text: "InvoiceFlow connects a Next.js dashboard to an n8n workflow that extracts, validates, stores, and routes invoice information automatically."
      },
      {
        title: "Result",
        text: "Invoices become searchable records within seconds, while original files, line items, duplicate status, and team notifications stay connected."
      }
    ]
  }
];

export const allProjects = [...projects, ...automationProjects];

export function getProject(slug:string){
  return allProjects.find((project)=>project.slug===slug);
}
