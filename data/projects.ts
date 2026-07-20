export type Project = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  tools: string[];
  cover: string;
  gallery: string[];
  summary: {title:string;text:string}[];
  type?: "image" | "video";
  videos?: {src:string;poster?:string;title:string}[];
};

export const projects: Project[] = [
  {
    slug:"designer-portfolio",
    category:"Web Design",
    title:"Designer Portfolio",
    subtitle:"Clean and premium portfolio website",
    tools:["Figma","Photoshop","Development","Strategy"],
    cover:"/images/projects/designer-portfolio/cover.png",
    gallery:[
      "/images/projects/designer-portfolio/cover.png",
      "/images/projects/designer-portfolio/detail-2.png",
      "/images/projects/designer-portfolio/detail-3.png"
    ],
    summary:[
      {title:"Purpose",text:"A polished portfolio designed to present creative work, experience, and services clearly."},
      {title:"Approach",text:"Large typography, spacious sections, responsive cards, and subtle interaction create a premium experience."},
      {title:"Result",text:"A modern responsive portfolio that helps visitors understand the creator's strengths quickly."}
    ]
  },
  {
    slug:"origami-invoice",
    category:"Laravel Web App",
    title:"Origami Invoice",
    subtitle:"Invoice, subscription, and payment management system",
    tools:["Laravel","PHP","MySQL","JavaScript"],
    cover:"/images/projects/origami-invoice/cover.png",
    gallery:[
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
    ],
    summary:[
      {title:"Purpose",text:"A web app for managing clients, invoices, payments, subscriptions, and reports."},
      {title:"Contribution",text:"Improved navigation, redirects, role handling, and multiple Laravel application sections."},
      {title:"Result",text:"A clearer and more consistent workflow for administrators and clients."}
    ]
  },
  {
    slug:"social-media-designs",
    category:"Graphic Design",
    title:"Social Media Designs",
    subtitle:"Campaign posts, carousels, and promotional graphics",
    tools:["Canva","Photoshop","Branding","Content"],
    cover:"/images/projects/social-media-designs/cover.jpg",
    gallery:[
      "/images/projects/social-media-designs/detail-1.jpg",
      "/images/projects/social-media-designs/detail-2.jpg",
      "/images/projects/social-media-designs/detail-3.jpg"
    ],
    summary:[
      {title:"Purpose",text:"A collection of branded visuals for campaigns, services, and educational content."},
      {title:"Approach",text:"Clear hierarchy, consistent colors, and platform-appropriate sizes across every design."},
      {title:"Result",text:"Professional graphics ready for social channels and portfolio presentation."}
    ]
  },
  {
    slug:"coffee-shop-brochure",
    category:"Print Design",
    title:"Coffee Shop Brochure",
    subtitle:"Warm and modern tri-fold brochure design",
    tools:["Canva","Photoshop","Layout","Print"],
    cover:"/images/projects/coffee-shop-brochure/cover.jpg",
    gallery:[
      "/images/projects/coffee-shop-brochure/detail-1.jpg",
      "/images/projects/coffee-shop-brochure/detail-2.jpg",
      "/images/projects/coffee-shop-brochure/detail-3.jpg"
    ],
    summary:[
      {title:"Purpose",text:"A complete tri-fold brochure showing the brand story, menu, hours, and call to action."},
      {title:"Approach",text:"Warm imagery and practical panel organization maintain consistency inside and outside."},
      {title:"Result",text:"A print-ready marketing piece suitable for customer handouts and events."}
    ]
  },
  {
    slug:"video-editing-showcase",
    category:"Video Editing",
    title:"Video Editing Showcase",
    subtitle:"Short-form edits, podcast clips, motion text, and social videos",
    tools:["Alight Motion","CapCut","Motion","Storytelling"],
    cover:"/images/projects/video-editing-showcase/cover.jpg",
    gallery:[],
    type:"video",
    videos:[
      {src:"/videos/video-editing/showcase-1.mp4",poster:"/images/projects/video-editing-showcase/detail-1.jpg",title:"Podcast Motion Edit"},
      {src:"/videos/video-editing/showcase-2.mp4",poster:"/images/projects/video-editing-showcase/detail-2.jpg",title:"Short-Form Social Edit"},
      {src:"/videos/video-editing/showcase-3.mp4",poster:"/images/projects/video-editing-showcase/detail-3.jpg",title:"Typography and Motion Edit"}
    ],
    summary:[
      {title:"Editing Style",text:"Clean cuts, animated captions, pacing, zooms, sound effects, and visual emphasis."},
      {title:"Content Types",text:"Podcast clips, educational shorts, promotional edits, and social media videos."},
      {title:"Goal",text:"Turn raw footage into engaging edits that hold attention and communicate clearly."}
    ]
  },
  {
    slug:"student-campaign-posters",
    category:"Campaign Design",
    title:"Student Campaign Posters",
    subtitle:"Modern and believable student election materials",
    tools:["Canva","Photoshop","Layout","Typography"],
    cover:"/images/projects/student-campaign-posters/cover.jpg",
    gallery:[
      "/images/projects/student-campaign-posters/detail-1.jpg",
      "/images/projects/student-campaign-posters/detail-2.jpg",
      "/images/projects/student-campaign-posters/detail-3.jpg"
    ],
    summary:[
      {title:"Purpose",text:"Original campaign posters with strong candidate focus and clear information hierarchy."},
      {title:"Approach",text:"Professional cutouts, layered shapes, bold typography, and balanced school branding."},
      {title:"Result",text:"Campaign visuals suitable for social posts, print, and election announcements."}
    ]
  },
  {
    slug:"virtual-assistant-content",
    category:"Social Media",
    title:"Virtual Assistant Content",
    subtitle:"Educational carousels, service posts, and reels",
    tools:["Canva","Content","Branding","SMM"],
    cover:"/images/projects/virtual-assistant-content/cover.jpg",
    gallery:[
      "/images/projects/virtual-assistant-content/detail-1.jpg",
      "/images/projects/virtual-assistant-content/detail-2.jpg",
      "/images/projects/virtual-assistant-content/detail-3.jpg"
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
    title:"Food Brand Designs",
    subtitle:"Menus, promotions, and product-focused social visuals",
    tools:["Canva","Photoshop","Branding","Food Design"],
    cover:"/images/projects/food-brand-designs/cover.jpg",
    gallery:[
      "/images/projects/food-brand-designs/detail-1.jpg",
      "/images/projects/food-brand-designs/detail-2.jpg",
      "/images/projects/food-brand-designs/detail-3.jpg"
    ],
    summary:[
      {title:"Purpose",text:"Promotional visuals for food businesses, menus, special offers, and featured products."},
      {title:"Approach",text:"Appetizing imagery, strong pricing hierarchy, and clear brand personality."},
      {title:"Result",text:"Flexible marketing designs suitable for digital posts and printed menus."}
    ]
  }
];

export function getProject(slug:string){
  return projects.find((project)=>project.slug===slug);
}
