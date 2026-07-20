export type ChatbotAnswer = {
  keywords: string[];
  answer: string;
};

export const chatbotProfile = {
  name: "Michael Angelo Acuña",
  role: "Virtual Assistant, Digital Creative, and Web Developer",
  location: "Philippines",
  education:
    "Bachelor of Science in Information Technology, specializing in Web Development (2026 graduate)",

  experienceYears: "More than two years",

  experience:
    "More than two years of experience in virtual assistance, data and administrative support, e-commerce support, creative design, and web development.",

  availability:
    "Open to remote opportunities and project-based work. Use the contact form on this portfolio to discuss availability and schedules.",
};

export const chatbotAnswers: ChatbotAnswer[] = [
  {
    keywords: [
      "who",
      "about",
      "introduce",
      "yourself",
      "michael",
      "who is michael",
      "tell me about michael",
    ],
    answer:
      "Michael Angelo Acuña is a Philippines-based Virtual Assistant, Digital Creative, and Web Developer. He combines more than two years of virtual-assistance experience with administrative support, design, video editing, and web-development skills.",
  },

  // Keep this before the general experience answer.
  {
    keywords: [
      "how many years",
      "years of experience",
      "years experience",
      "experience years",
      "how long",
      "how long working",
      "how long has he worked",
      "how many year",
      "how much experience",
      "length of experience",
      "working experience",
      "va experience years",
      "how long va",
      "years as va",
      "how lng experience",
      "how many yrs",
      "yrs experience",
    ],
    answer:
      "Michael has more than two years of experience in virtual assistance. His experience includes administrative support, data entry, e-commerce customer service, social-media assistance, quality checking, creative work, and web development.",
  },

  {
    keywords: [
      "experience",
      "work",
      "background",
      "career",
      "job experience",
      "employment",
      "work history",
    ],
    answer:
      "Michael has more than two years of experience in virtual assistance, including data entry, administrative support, e-commerce customer service, social-media support, and quality checking. He also has practical experience in creative design, video editing, and Laravel web development. His work emphasizes accuracy, organization, clear communication, and reliable follow-through.",
  },

  {
    keywords: [
      "virtual assistant",
      "va",
      "admin",
      "administrative",
      "data entry",
      "assistant services",
      "va services",
    ],
    answer:
      "Michael has more than two years of virtual-assistance experience. His services include data entry, spreadsheet management, online research, email and customer support, file organization, scheduling support, reporting, content assistance, and other structured administrative tasks.",
  },

  {
    keywords: [
      "design",
      "graphic",
      "canva",
      "photoshop",
      "creative",
      "graphic design",
      "design experience",
    ],
    answer:
      "Michael creates social-media graphics, campaign posters, brochures, menus, carousels, promotional materials, and branded portfolio content. He works with Canva and Photoshop and focuses on clean hierarchy, balanced spacing, and realistic professional layouts.",
  },

  {
    keywords: [
      "video",
      "editing",
      "capcut",
      "alight",
      "motion",
      "video editor",
      "video editing experience",
    ],
    answer:
      "Michael's video-editing work includes short-form social videos, podcast clips, animated captions, motion typography, clean cuts, zooms, pacing, sound effects, and visual emphasis. His main editing tools include CapCut and Alight Motion.",
  },

  {
    keywords: [
      "web",
      "developer",
      "development",
      "laravel",
      "coding",
      "website",
      "programming",
      "web development experience",
    ],
    answer:
      "Michael has a BSIT background specializing in Web Development and practical experience with Laravel, PHP, MySQL, JavaScript, Git, GitHub, Next.js, and responsive frontend work. His portfolio includes projects such as Origami Invoice and this custom Next.js portfolio.",
  },

  {
    keywords: [
      "tools",
      "software",
      "technology",
      "apps",
      "platforms",
      "programs",
      "what tools",
    ],
    answer:
      "Tools Michael has used include Canva, Photoshop, CapCut, Alight Motion, Google Workspace, Microsoft Office, Slack, Trello, Asana, Notion, Shopify, GitHub, Visual Studio Code, Laravel, PHP, MySQL, JavaScript, Next.js, and related web tools.",
  },

  {
    keywords: [
      "education",
      "school",
      "degree",
      "college",
      "graduate",
      "graduated",
      "course",
      "bsit",
    ],
    answer:
      "Michael completed a Bachelor of Science in Information Technology specializing in Web Development in 2026. His studies and internship work strengthened his skills in application development, databases, collaboration, and technical problem-solving.",
  },

  {
    keywords: [
      "certificate",
      "certification",
      "civil service",
      "eligibility",
      "certificates",
      "exam",
    ],
    answer:
      "Michael passed the Philippine Civil Service Examination at the Professional Level. His other certificates can be viewed in the Certificates section of this portfolio.",
  },

  {
    keywords: [
      "project",
      "portfolio",
      "works",
      "sample",
      "projects",
      "work samples",
      "previous work",
    ],
    answer:
      "Michael's featured work includes a designer portfolio, Origami Invoice, social-media designs, a coffee-shop brochure, video-editing samples, student campaign posters, virtual-assistant content, and food-brand designs. Open the Latest Works section to view each project.",
  },

  {
    keywords: [
      "hire",
      "why",
      "strength",
      "good fit",
      "qualities",
      "why hire him",
      "why should we hire",
      "skills",
    ],
    answer:
      "Michael is detail-oriented, adaptable, organized, and committed to accurate work. He is comfortable learning new systems, following clear processes, communicating updates, and combining administrative support with creative and technical skills.",
  },

  {
    keywords: [
      "location",
      "country",
      "philippines",
      "based",
      "where",
      "where is he",
      "where does he live",
    ],
    answer:
      "Michael is based in the Philippines and is interested in remote work with clients and teams from different locations.",
  },

  {
    keywords: [
      "available",
      "availability",
      "schedule",
      "hours",
      "start",
      "when can he start",
      "working hours",
      "time zone",
    ],
    answer:
      "Michael is open to remote opportunities and project-based work. His availability may depend on the position and required schedule. Please use the contact form to provide the working hours, time zone, expected start date, and job details.",
  },

  {
    keywords: [
      "contact",
      "email",
      "message",
      "reach",
      "contact him",
      "how to contact",
      "get in touch",
    ],
    answer:
      "You can contact Michael through the Contact section of this portfolio. Include your email, subject, project or role details, expected schedule, and any important requirements.",
  },
];

export const chatbotSuggestions = [
  "Tell me about Michael",
  "How many years of experience does he have?",
  "What services does he offer?",
  "What tools does he use?",
  "Show me his experience",
  "How can I contact him?",
];