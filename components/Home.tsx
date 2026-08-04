"use client";
import Image from "next/image";
import Link from "next/link";
import {AnimatePresence,motion,useScroll,useTransform} from "framer-motion";
import {ArrowUp,Menu,Moon,RotateCcw,Sun,ChevronLeft,ChevronRight,X} from "lucide-react";
import {FormEvent,useEffect,useRef,useState} from "react";
import { Download } from "lucide-react";
import {projects,automationProjects} from "@/data/projects";
import {certificates} from "@/data/certificates";
import {useRouter} from "next/navigation";
import PortfolioChatbot from "@/components/PortfolioChatbot";
const reveal = {
 hidden:{opacity:0,y:70},
 show:{opacity:1,y:0,transition:{duration:.85,ease:[.22,1,.36,1] as const}}
};

const stagger = {
 hidden:{},
 show:{transition:{staggerChildren:.14}}
};



function MagneticLink({
  href,
  className,
  children
}:{
  href:string;
  className?:string;
  children:React.ReactNode;
}){
  const ref=useRef<HTMLAnchorElement>(null);

  function move(event:React.MouseEvent<HTMLAnchorElement>){
    const element=ref.current;
    if(!element) return;
    const rect=element.getBoundingClientRect();
    const x=event.clientX-(rect.left+rect.width/2);
    const y=event.clientY-(rect.top+rect.height/2);
    element.style.transform=`translate(${x*.14}px,${y*.14}px)`;
  }

  function reset(){
    if(ref.current) ref.current.style.transform="translate(0,0)";
  }

  return <a
    ref={ref}
    href={href}
    className={className}
    onMouseMove={move}
    onMouseLeave={reset}
  >{children}</a>;
}

function FadeImage(props:React.ComponentProps<typeof Image>){
  const [loaded,setLoaded]=useState(false);
  return <Image
    {...props}
    onLoad={(event)=>{
      setLoaded(true);
      props.onLoad?.(event);
    }}
    className={`${props.className || ""} fade-image ${loaded ? "is-loaded" : ""}`}
  />;
}

export default function Home(){
 const router=useRouter();
 const [flipped,setFlipped]=useState(false);
 const [mobileMenuOpen,setMobileMenuOpen]=useState(false);
 const [formStatus,setFormStatus]=useState<"idle"|"sending"|"success"|"error">("idle");
 const [showBackToTop,setShowBackToTop]=useState(false);
 const [worksPage,setWorksPage]=useState(0);
 const worksPerPage=4;
 const worksPageCount=Math.max(1,Math.ceil(projects.length/worksPerPage));
 const visibleWorks=projects.slice(
   worksPage*worksPerPage,
   worksPage*worksPerPage+worksPerPage
 );
 const [loading,setLoading]=useState(true);
 const [darkMode,setDarkMode]=useState(false);
 const [selectedCertificate,setSelectedCertificate]=useState<(typeof certificates)[number] | null>(null);
 const [cursorPosition,setCursorPosition]=useState({x:-100,y:-100});
 const [cursorActive,setCursorActive]=useState(false);
 const heroCardRef=useRef<HTMLDivElement>(null);
 const {scrollYProgress}=useScroll();
 const heroNameY=useTransform(scrollYProgress,[0,.35],[0,110]);
 const heroNameOpacity=useTransform(scrollYProgress,[0,.28],[1,.18]);

 useEffect(()=>{
   [...projects,...automationProjects].forEach((project)=>{
     router.prefetch(`/projects/${project.slug}`);
   });
 },[router]);

 useEffect(()=>{
   const onScroll=()=>setShowBackToTop(window.scrollY>650);
   onScroll();
   window.addEventListener("scroll",onScroll,{passive:true});
   return ()=>window.removeEventListener("scroll",onScroll);
 },[]);


 useEffect(()=>{
   const navigationEntry=performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
   const isReload=navigationEntry?.type==="reload";
   const hasPlayed=sessionStorage.getItem("portfolio-loader-played")==="true";

   if(hasPlayed && !isReload){
     setLoading(false);
     return;
   }

   sessionStorage.setItem("portfolio-loader-played","true");
   const timer=window.setTimeout(()=>setLoading(false),1250);
   return ()=>window.clearTimeout(timer);
 },[]);

 useEffect(()=>{
   document.documentElement.dataset.theme=darkMode ? "dark" : "light";
 },[darkMode]);

 useEffect(()=>{
   const onMove=(event:MouseEvent)=>setCursorPosition({x:event.clientX,y:event.clientY});
   const onOver=(event:MouseEvent)=>{
     const target=event.target as HTMLElement;
     setCursorActive(Boolean(target.closest("a,button,summary,.work-image")));
   };
   window.addEventListener("mousemove",onMove);
   window.addEventListener("mouseover",onOver);
   return ()=>{
     window.removeEventListener("mousemove",onMove);
     window.removeEventListener("mouseover",onOver);
   };
 },[]);

 async function handleContactSubmit(event:FormEvent<HTMLFormElement>){
   event.preventDefault();
   setFormStatus("sending");

   const form = event.currentTarget;
   const formData = new FormData(form);
   const payload = {
     name:String(formData.get("name") || ""),
     email:String(formData.get("email") || ""),
     company:String(formData.get("company") || ""),
     service:String(formData.get("service") || ""),
     budget:String(formData.get("budget") || ""),
     message:String(formData.get("message") || "")
   };

   try{
     const response = await fetch("/api/contact",{
       method:"POST",
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify(payload)
     });

     if(!response.ok) throw new Error("Unable to send");
     form.reset();
     setFormStatus("success");
   }catch{
     setFormStatus("error");
   }
 }


 function handleHeroTilt(event:React.MouseEvent<HTMLDivElement>){
   const element=heroCardRef.current;
   if(!element) return;
   const rect=element.getBoundingClientRect();
   const x=(event.clientX-rect.left)/rect.width-.5;
   const y=(event.clientY-rect.top)/rect.height-.5;
   element.style.setProperty("--tilt-x",`${(-y*8).toFixed(2)}deg`);
   element.style.setProperty("--tilt-y",`${(x*10).toFixed(2)}deg`);
   element.style.setProperty("--glow-x",`${((x+.5)*100).toFixed(1)}%`);
   element.style.setProperty("--glow-y",`${((y+.5)*100).toFixed(1)}%`);
 }

 function resetHeroTilt(){
   const element=heroCardRef.current;
   if(!element) return;
   element.style.setProperty("--tilt-x","0deg");
   element.style.setProperty("--tilt-y","0deg");
 }
 return <>
  <AnimatePresence>
    {loading && (
      <motion.div
        className="site-loader"
        initial={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:.55}}
      >
        <motion.div
          className="loader-logo"
          initial={{opacity:0,scale:.85,y:12}}
          animate={{opacity:1,scale:1,y:0}}
          transition={{duration:.6}}
        >
          Michael
        </motion.div>
        <motion.span
          initial={{scaleX:0}}
          animate={{scaleX:1}}
          transition={{duration:1,ease:"easeInOut"}}
        />
      </motion.div>
    )}
  </AnimatePresence>

  <motion.div
    className={`custom-cursor ${cursorActive ? "active" : ""}`}
    animate={{x:cursorPosition.x-10,y:cursorPosition.y-10}}
    transition={{type:"spring",stiffness:700,damping:42,mass:.2}}
  />

  <main>
  <motion.header
   className="nav shell"
   initial={{opacity:0,y:-25}}
   animate={{opacity:1,y:0}}
   transition={{duration:.7}}
  >
    <a className="logo" href="#">Michael Angelo</a>
    <nav><a href="#portfolio">Portfolio</a><Link href="/projects/automation-projects">Automations</Link><a href="#certificates">Certificates</a><a href="#experience">Experience</a><a href="#testimonials">Testimonials</a><a href="#contact">Contact</a></nav>
    <MagneticLink className="black-btn" href="#contact">Get In Touch</MagneticLink>
    <button
      className="theme-toggle"
      onClick={()=>setDarkMode(!darkMode)}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      {darkMode ? <Sun size={17}/> : <Moon size={17}/>}
    </button>
    <button
      type="button"
      className="mobile-menu"
      onClick={()=>setMobileMenuOpen((open)=>!open)}
      aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={mobileMenuOpen}
      aria-controls="mobile-navigation"
    >
      {mobileMenuOpen ? <X size={22}/> : <Menu size={22}/>}
    </button>
  </motion.header>

  <AnimatePresence>
    {mobileMenuOpen && (
      <>
        <motion.button
          type="button"
          className="mobile-menu-backdrop"
          aria-label="Close navigation menu"
          onClick={()=>setMobileMenuOpen(false)}
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
        />
        <motion.nav
          id="mobile-navigation"
          className="mobile-nav-panel"
          initial={{opacity:0,y:-14}}
          animate={{opacity:1,y:0}}
          exit={{opacity:0,y:-14}}
          transition={{duration:.22}}
        >
          <a href="#portfolio" onClick={()=>setMobileMenuOpen(false)}>Portfolio</a>
          <Link href="/projects/automation-projects" onClick={()=>setMobileMenuOpen(false)}>Automations</Link>
          <a href="#certificates" onClick={()=>setMobileMenuOpen(false)}>Certificates</a>
          <a href="#experience" onClick={()=>setMobileMenuOpen(false)}>Experience</a>
          <a href="#testimonials" onClick={()=>setMobileMenuOpen(false)}>Testimonials</a>
          <a href="#contact" onClick={()=>setMobileMenuOpen(false)}>Contact</a>
          <a className="black-btn mobile-nav-cta" href="#contact" onClick={()=>setMobileMenuOpen(false)}>Get In Touch</a>
        </motion.nav>
      </>
    )}
  </AnimatePresence>

  <section className="hero shell">
    <div className="giant-name-layer">
<motion.div
      className="giant-name"
      style={{y:heroNameY,opacity:heroNameOpacity}}
      initial={{opacity:0,scale:.9}}
      animate={{opacity:1,scale:1}}
      transition={{duration:1.1,delay:.15}}
    >Michael Angelo</motion.div>
      </div>

    <motion.div
      className="flip-scene"
      initial={{opacity:0,y:55,rotate:-7}}
      animate={{opacity:1,y:0,rotate:0}}
      transition={{duration:.9,delay:.25,ease:[.22,1,.36,1] as const}}
    >
      <button
        className={`flip-card ${flipped ? "is-flipped" : ""}`}
        onClick={()=>setFlipped(!flipped)}
        aria-label="Flip profile card"
      >
        <div className="flip-card-inner">
          <div className="flip-face flip-front">
            <FadeImage
              src="/images/hero/michael.png"
              alt="Michael Acuña"
              fill
              priority
              className="profile-cover"
            />
            <div className="photo-overlay">
              <span>Michael Angelo Acuña</span>
              <small>Click to see my experience</small>
            </div>
          </div>

          <div className="flip-face flip-back">
            <div className="flip-back-content">
              <div className="flip-back-top">
                <span className="blue-note">#My Experience</span>
                <RotateCcw size={17}/>
              </div>

              <h3>Experience</h3>
              <div className="flip-badge-list">
                <span>Web Development</span>
                <span>Virtual Assistance</span>
                <span>Data Entry</span>
                <span>Graphic Design</span>
                <span>and more</span>
              </div>

              <h3>Tech Stack</h3>
              <div className="flip-stack">
                <span>Laravel</span>
                <span>PHP</span>
                <span>MySQL</span>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Javascript</span>
              </div>

              <h3>Tools</h3>
              <div className="flip-stack flip-tools">
                <span>Canva</span>
                <span>CapCut</span>
                <span>Slack</span>
                <span>and more</span>
              </div>

              <span className="flip-hint">Click again to return</span>
            </div>
          </div>
        </div>
      </button>
      <motion.div
        className="blue-note note-left"
        animate={{y:[0,-8,0],rotate:[-15,-11,-15]}}
        transition={{duration:2.8,repeat:Infinity}}
      >
        Click me!
      </motion.div>
    </motion.div>

<motion.a
  className="template-pill"
  href="/resume/Michael-Angelo-L.-Acuña_RESUME.pdf"
  download
  initial={{ opacity: 0, x: 35 }}
  animate={{ opacity: 1, x: 0 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  transition={{ delay: .8, duration: .7 }}
>
  <Download size={14} strokeWidth={2.2} />
  <span>Download My Resume</span>
</motion.a>
  </section>

  <motion.section
    id="portfolio"
    className="works shell portfolio-section-with-arrows"
    variants={stagger}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:.12}}
  >
    <motion.div className="works-intro" variants={reveal}>
      <p className="blue-note">#Portfolio Pieces</p>
      <h2>Check Out My<br/>Latest Works</h2>
      <p>Selected creative, administrative, and web projects.</p>
      <MagneticLink className="black-btn" href="#contact">Get In Touch</MagneticLink>
      <motion.div
        className="blue-note scribble"
        animate={{y:[0,8,0]}}
        transition={{duration:2,repeat:Infinity}}
      >
        see details ↓
      </motion.div>
    </motion.div>

    <div className="works-slider-stage">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={worksPage}
          className="works-grid"
          initial={{opacity:0,x:worksPage===0 ? 0 : 34}}
          animate={{opacity:1,x:0}}
          exit={{opacity:0,x:-34}}
          transition={{duration:.38,ease:[.22,1,.36,1] as const}}
        >
          {visibleWorks.map((w,index)=>(
            <motion.article
              key={w.slug}
              initial={{opacity:0,y:24}}
              animate={{opacity:1,y:0}}
              transition={{
                duration:.42,
                delay:index*.07,
                ease:[.22,1,.36,1] as const
              }}
              whileHover={{y:-10}}
            >
              <Link
                href={`/projects/${w.slug}`}
                prefetch={true}
                onMouseEnter={()=>router.prefetch(`/projects/${w.slug}`)}
                onTouchStart={()=>router.prefetch(`/projects/${w.slug}`)}
              >
                <div className="work-image">
                  <FadeImage
                    src={w.cover}
                    alt={w.title}
                    fill
                    className="cover animated-cover"
                  />
                </div>
                <p className="blue-note">
                  #{w.category.replaceAll(" ","")}
                </p>
                <h3>{w.title}</h3>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="works-slider-side-controls" aria-label="Project slider controls">
      <button
        className="works-arrow works-arrow-left"
        onClick={()=>setWorksPage((page)=>(page-1+worksPageCount)%worksPageCount)}
        aria-label="Show previous projects"
        title="Previous projects"
      >
        <ChevronLeft size={24}/>
      </button>

      <button
        className="works-arrow works-arrow-right"
        onClick={()=>setWorksPage((page)=>(page+1)%worksPageCount)}
        aria-label="Show next projects"
        title="Next projects"
      >
        <ChevronRight size={24}/>
      </button>
    </div>
    </div>

    
  </motion.section>

  <motion.section
    id="about"
    className="expertise-section shell"
    variants={reveal}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:.14}}
  >
    <p className="blue-note section-kicker">#Stack and Process</p>
    <h2 className="expertise-title">About My Work and Expertise</h2>

    <div className="expertise-layout">
      <div className="expertise-left">
        <div>
          <h3 className="hand-title">My Tool Stack</h3>
          <div className="tool-marquee-window">
            <div className="tool-marquee-row row-left">
              {[...[
                ["Canva","/images/icons/canva.png"],
                ["Figma","/images/icons/figma.png"],
                ["Laravel","/images/icons/laravel.png"],
                ["GitHub","/images/icons/github.png"],
                ["Slack","/images/icons/slack.png"],
                ["Gmail","/images/icons/gmail.png"],
                ["HTML","/images/icons/html.png"],
                ["CSS","/images/icons/css.png"],
              ],...[
                ["Trello","/images/icons/trello.png"],
                ["Figma","/images/icons/figma.png"],
                ["Laravel","/images/icons/laravel.png"],
                ["GitHub","/images/icons/github.png"],
                ["Slack","/images/icons/slack.png"],
                ["Gmail","/images/icons/gmail.png"],
                ["Calendly","/images/icons/calendly.png"]
              ]].map(([name,icon],index)=>
                <div className="stack-icon logo-only" key={`${name}-left-${index}`}>
                  <FadeImage src={icon} alt={name} width={42} height={42}/>
                </div>
              )}
            </div>

            <div className="tool-marquee-row row-right">
              {[...[
                ["Shopify","/images/icons/shopify.png"],
                ["VS Code","/images/icons/vscode.png"],
                ["Google Drive","/images/icons/gdrive.png"],
                ["Notion","/images/icons/notion.png"],
                ["ChatGPT","/images/icons/gpt.png"],
                ["Photoshop","/images/icons/photoshop.png"],
                ["Photoshop","/images/icons/am.png"]
              ],...[
                ["Shopify","/images/icons/deepseek.png"],
                ["VS Code","/images/icons/claude.png"],
                ["Google Drive","/images/icons/gemini.png"],
                ["Notion","/images/icons/vscode.png"],
                ["ChatGPT","/images/icons/apollo.jpeg"],
                ["Photoshop","/images/icons/capcut.png"],
                ["React","/images/icons/react.png"],
                ["Javascript","/images/icons/jsjs.png"]
              ]].map(([name,icon],index)=>
                <div className="stack-icon logo-only" key={`${name}-right-${index}`}>
                  <FadeImage src={icon} alt={name} width={42} height={42}/>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="process-block">
          <h3 className="hand-title">Work Process</h3>
          <motion.div
            className="process-grid"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{once:false,amount:.1}}
          >
            {[
              ["#Step 1","Understand & Organize","Review instructions, identify priorities, gather the needed information, and organize the task before starting."],
              ["#Step 2","Research & Verify","Check details carefully, verify data, and make sure the information is accurate and complete."],
              ["#Step 3","Create & Complete","Perform the assigned task using the correct tools, workflow, and quality standards."],
              ["#Step 4","Review & Report","Double-check the final output, correct errors, and provide a clear completion update."]
            ].map(([step,title,description])=>
              <motion.article className="process-card" key={step} variants={reveal} whileHover={{y:-6}}>
                <span className="blue-note">{step}</span>
                <h4>{title}</h4>
                <p>{description}</p>
              </motion.article>
            )}
          </motion.div>
        </div>
      </div>

      <motion.div className="expertise-photo" variants={reveal} whileHover={{scale:1.01}}>
        <FadeImage
          src="/images/about/about.jpg"
          alt="Michael Acuña"
          fill
          className="cover"
        />
        <span className="photo-hi blue-note">Hi :)</span>

      </motion.div>
    </div>
  </motion.section>



  <motion.section
    id="certificates"
    className="certificates-section"
    variants={reveal}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:.12}}
  >
    <div className="certificates-inner shell">
      <div className="center-heading certificates-heading">
        <p className="blue-note">#Education & Certifications</p>
        <h2>Education, Academic Achievements & Professional Certifications</h2>
        <p>
          My educational background, academic recognition, and professional certifications.
        </p>
      </div>

      <div className="certificate-category-block">
        <div className="certificate-category-heading">
          <p className="blue-note">#Academic Achievements</p>
          <h3>Education and Academic Recognition</h3>
        </div>

        <motion.div
          className="certificates-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{once:false,amount:.08}}
        >
          {certificates
            .filter((certificate)=>certificate.category==="academic")
            .map((certificate)=>(
              <motion.article
                className="certificate-card"
                key={`${certificate.title}-${certificate.image}`}
                variants={reveal}
                whileHover={{y:-7}}
              >
                <button
                  type="button"
                  className="certificate-open"
                  onClick={()=>setSelectedCertificate(certificate)}
                  aria-label={`View ${certificate.title} in full screen`}
                >
                  <div className="certificate-image">
                    <FadeImage
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 25vw"
                      className="certificate-cover"
                    />
                  </div>

                  <div className="certificate-info">
                    <h3>{certificate.title}</h3>
                    <p>{certificate.issuer}</p>
                    <span>{certificate.date}</span>
                  </div>
                </button>
              </motion.article>
            ))}
        </motion.div>
      </div>

      <div className="certificate-category-block">
        <div className="certificate-category-heading">
          <p className="blue-note">#Professional Certifications</p>
          <h3>Training and Professional Development</h3>
        </div>

        <motion.div
          className="certificates-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{once:false,amount:.08}}
        >
          {certificates
            .filter((certificate)=>certificate.category==="professional")
            .map((certificate)=>(
              <motion.article
                className="certificate-card"
                key={`${certificate.title}-${certificate.image}`}
                variants={reveal}
                whileHover={{y:-7}}
              >
                <button
                  type="button"
                  className="certificate-open"
                  onClick={()=>setSelectedCertificate(certificate)}
                  aria-label={`View ${certificate.title} in full screen`}
                >
                  <div className="certificate-image">
                    <FadeImage
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 25vw"
                      className="certificate-cover"
                    />
                  </div>

                  <div className="certificate-info">
                    <h3>{certificate.title}</h3>
                    <p>{certificate.issuer}</p>
                    <span>{certificate.date}</span>
                  </div>
                </button>
              </motion.article>
            ))}
        </motion.div>
      </div>
    </div>
  </motion.section>

  <AnimatePresence>
    {selectedCertificate && (
      <motion.div
        className="certificate-lightbox"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        onClick={()=>setSelectedCertificate(null)}
      >
        <motion.div
          className="certificate-lightbox-panel"
          initial={{opacity:0,scale:.94,y:25}}
          animate={{opacity:1,scale:1,y:0}}
          exit={{opacity:0,scale:.96,y:15}}
          transition={{duration:.28}}
          onClick={(event)=>event.stopPropagation()}
        >
          <button
            type="button"
            className="certificate-lightbox-close"
            onClick={()=>setSelectedCertificate(null)}
            aria-label="Close certificate"
          >
            <X size={22}/>
          </button>

          <div className="certificate-lightbox-image">
            <Image
              src={selectedCertificate.image}
              alt={`${selectedCertificate.title} certificate full view`}
              fill
              sizes="96vw"
              className="certificate-lightbox-cover"
              priority
            />
          </div>

          <div className="certificate-lightbox-info">
            <div>
              <h3>{selectedCertificate.title}</h3>
              <p>{selectedCertificate.issuer} · {selectedCertificate.date}</p>
            </div>
            {selectedCertificate.credentialUrl && (
              <a
                href={selectedCertificate.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="blue-btn"
              >
                View Credential
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>

  <motion.section
    id="faqs"
    className="faq-showcase shell"
    variants={reveal}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:.15}}
  >
    <div className="center-heading">
      <p className="blue-note">#Questions</p>
      <h2>What Can I Do For You</h2>
      <p>Most common questions clients and employers ask</p>
    </div>

    <div className="faq-rows">
      {[
        [
          "What services can you provide?",
          "I provide administrative support, data entry, web research, spreadsheet management, email and calendar organization, customer support, social media assistance, graphic design, basic web development, and general virtual assistant services. I adapt quickly to new tools and workflows to support business operations efficiently."
        ],
        [
          "Can you work with existing procedures and systems?",
          "Absolutely. I understand the importance of consistency and accuracy when working with established processes. I can follow standard operating procedures (SOPs), documented workflows, naming conventions, reporting formats, and company guidelines while ensuring every task is completed according to your expectations."
        ],
        [
          "How do you maintain accuracy and quality?",
          "I pay close attention to detail by carefully reviewing source information, verifying important data, checking completed work before submission, and documenting any inconsistencies or concerns. If something is unclear, I ask for clarification instead of making assumptions to ensure reliable and accurate results."
        ],
        [
          "Can you support long-term projects and growing businesses?",
          "Yes. I am looking for long-term opportunities where I can build trust, understand your business, and become a dependable member of your team. I enjoy learning new systems, improving workflows, and contributing consistently as the business grows."
        ],
        [
          "What tools and technologies are you familiar with?",
          "I have experience using Google Workspace, Microsoft Office, Google Sheets, Microsoft Excel, Canva, Figma, Slack, Trello, Shopify, GitHub, Gmail, Google Drive, Notion, Visual Studio Code, PHP, JavaScript, MySQL, Laravel, and other productivity, collaboration, design, and web development tools. I am also comfortable learning new software whenever required."
        ]
      ].map(([question, answer]) => (
        <details className="faq-row" key={question}>
          <summary>
            <span className="faq-question-mark">?</span>
            <b>{question}</b>
            <span className="faq-x">×</span>
          </summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  </motion.section>

  <motion.section
    id="experience"
    className="experience-section shell"
    variants={reveal}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:.12}}
  >
<div className="center-heading experience-heading">
  <p className="blue-note">#Professional Experience</p>
  <h2>Real-world experience delivering reliable business support</h2>
  <p>
    From virtual assistance and customer support to creative design and web
    development, I've helped businesses improve daily operations through
    practical, detail-oriented solutions.
  </p>
</div>

    <motion.div
      className="experience-grid"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{once:false,amount:.1}}
    >
      {[
        {
          type: "E-commerce Virtual Assistance",
          title: "Virtual Assistant",
          period: "Uncle Pinoy Lechons UK • Jan 2024 – Apr 2026",
          bullets: [
            "Managed customer inquiries through Facebook Messenger, Instagram, and Outlook",
            "Processed Shopify orders, delivery coordination, and customer support requests",
            "Maintained accurate customer records and order documentation",
            "Engaged with customers through social media to improve response time and customer satisfaction",
            "Assisted with refunds, order updates, and general administrative tasks"
          ]
        },
        {
          type: "Administrative & Data Support",
          title: "Data Entry Virtual Assistant",
          period: "European Client (Remote) • Jun 2025 – Jan 2026",
          bullets: [
            "Maintained spreadsheets and databases with high accuracy using Google Sheets and Excel",
            "Performed data entry, verification, and daily monitoring tasks",
            "Prepared reports and coordinated updates with remote team members",
            "Ensured data consistency while following established workflows and procedures",
            "Supported day-to-day administrative operations in a remote work environment"
          ]
        },
        {
          type: "Virtual Assistant Internship",
          title: "Virtual Assistant Intern",
          period: "The VA BAR • Jun 2026 – Present",
          bullets: [
            "Completed hands-on training in Administrative Support and Virtual Assistance",
            "Created social media content using Canva and other digital tools",
            "Learned Lead Generation, Email Marketing, and CRM workflows",
            "Applied industry-standard productivity and communication tools",
            "Performed practical administrative tasks and business support activities"
          ]
        },
        {
          type: "Web Development Internship",
          title: "Front-End Developer Intern",
          period: "Affirm Technology • Jan 2026 – Apr 2026",
          bullets: [
            "Developed and improved web applications using PHP, Laravel, JavaScript, HTML, CSS, and MySQL",
            "Worked on the Origami Invoice and Origami Education systems during a 5-month internship",
            "Implemented responsive user interfaces from design references",
            "Collaborated using GitHub, Docker, and version control workflows",
            "Performed testing, debugging, documentation, and feature enhancements"
          ]
        }
      ].map((job)=>
        <motion.article className="experience-card" key={job.title} variants={reveal} whileHover={{y:-9}}>
          <div className="experience-card-top">
            <p className="blue-note">{job.type}</p>
            <h3>{job.title}</h3>
            <strong>{job.period}</strong>
            
          </div>
          <div className="experience-list">
            {job.bullets.map(item=><p key={item}><span>✓</span>{item}</p>)}
          </div>
        </motion.article>
      )}
    </motion.div>
      </motion.section>

      <motion.section
        id="testimonials"
        className="testimonials-section shell"
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{once:false,amount:.14}}
      >
        <div className="testimonials-heading">
          <div>
            <p className="blue-note">#Client Feedback</p>
            <h2>What People Say About My Work</h2>
          </div>
          <p>
            A small collection of feedback from people I have supported through
            administrative, creative, and technical work.
          </p>
        </div>

    <motion.div
      className="testimonials-grid"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{once:false,amount:.1}}
    >
      {[
        {
          quote:
            "I'm happy and glad, Michael. Keep up the good work. Be focused always. I'm happy to provide a reference for your future projects if needed.",
          context:
            "Alexander appreciated my work, encouraged me to continue improving, and even offered to be a reference for future opportunities.",
          name: "Alexander Guinid Jr.",
          role: "Owner, Uncle Pinoy"
        },
        {
          quote:
            "Michael consistently worked quickly and accurately. His performance, reliability, and attention to detail showed that he was capable of taking on greater responsibilities.",
          context:
            "This testimonial summarizes feedback I received from my former European client, who recognized my speed, accuracy, and potential for a higher-level role.",
          name: "Former European Client",
          role: "Administrative & Data Support"
        },
        {
          quote:
            "Michael consistently delivered quality work, completed tasks independently, and required very little supervision. He quickly adapted to new tasks and worked well with the team.",
          context:
            "This testimonial summarizes feedback from my supervisor at Affirm Technology, highlighting my ability to work independently, learn quickly, and earn the team's trust.",
          name: "Project Supervisor",
          role: "Affirm Technology"
        }
      ].map((testimonial,index)=>(
        <motion.article
          className="testimonial-card"
          key={`${testimonial.role}-${index}`}
          variants={reveal}
          whileHover={{y:-8}}
        >
          <div className="testimonial-card-top">
            <span
              className="testimonial-quote-mark"
              aria-hidden="true"
            >
              “
            </span>

            <div
              className="testimonial-stars"
              aria-label="Five-star feedback"
            >
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>

          <blockquote>
            “{testimonial.quote}”
          </blockquote>

          <p className="testimonial-context">
            <strong>Context:</strong> {testimonial.context}
          </p>

          <footer className="testimonial-author">
            <span
              className="testimonial-avatar"
              aria-hidden="true"
            >
              {testimonial.name.charAt(0)}
            </span>

            <div>
              <strong>{testimonial.name}</strong>
              <p>{testimonial.role}</p>
            </div>
          </footer>
        </motion.article>
      ))}
    </motion.div>


  </motion.section>

  <motion.section
    id="contact"
    className="direct-contact shell"
    variants={reveal}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:.16}}
  >
    <div className="direct-contact-copy">
      <p className="blue-note">#Contact</p>
      <h2>Start Your Project</h2>
      <p>
        Tell me about your project. The more details you provide, the better I
        can understand your goals and recommend the right solution.
      </p>
    </div>

    <form className="direct-contact-form" onSubmit={handleContactSubmit}>
      <div className="contact-form-grid">
        <label>
          Full Name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </label>

        <label>
          Your Email
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </label>

        <label>
          Company <span className="optional-label">(Optional)</span>
          <input
            type="text"
            name="company"
            placeholder="Company or business name"
            autoComplete="organization"
          />
        </label>

        <label>
          Service Needed
          <select name="service" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            <option value="AI Automation">AI Automation</option>
            <option value="Virtual Assistant">Virtual Assistant</option>
            <option value="Web Development">Web Development</option>
            <option value="Social Media Management">Social Media Management</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Administrative Support">Administrative Support</option>
            <option value="Ecommerce Support">Ecommerce Support</option>
            <option value="Customer Support">Customer Support</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="contact-field-wide">
          Estimated Budget
          <select name="budget" defaultValue="">
            <option value="">Select a budget range (optional)</option>
            <option value="Under $500">Under $500</option>
            <option value="$500–$1,000">$500–$1,000</option>
            <option value="$1,000–$3,000">$1,000–$3,000</option>
            <option value="$3,000+">$3,000+</option>
            <option value="Let's Discuss">Let&apos;s Discuss</option>
          </select>
        </label>

        <label className="contact-field-wide">
          Project Details
          <textarea
            name="message"
            rows={6}
            placeholder="Tell me about your project, goals, timeline, and the support you need..."
            required
          />
        </label>
      </div>

      <button
        className="black-btn contact-submit"
        type="submit"
        disabled={formStatus==="sending"}
      >
        {formStatus==="sending" ? "Sending..." : "Start Project"}
      </button>

      {formStatus==="success" && (
        <p className="form-message success">Your project inquiry was sent successfully.</p>
      )}

      {formStatus==="error" && (
        <p className="form-message error">
          The message could not be sent. Please check the SMTP settings.
        </p>
      )}
    </form>
  </motion.section>

  <motion.footer
    className="footer-card footer-simple shell"
    variants={reveal}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:.15}}
  >
    <div>
      <span className="logo">Michael Acuña</span>
      <p className="footer-tagline">
        Virtual Assistant · Digital Creative · Web Developer
      </p>
    </div>

    <div className="footer-links">
      <span>Pages</span>
      <a href="#">Home</a>
      <a href="#about">About</a>
      <a href="#certificates">Certificates</a>
      <a href="#experience">Experience</a>
      <a href="#testimonials">Testimonials</a>
    </div>

    <div className="footer-links">
      <span>Quick Links</span>
      <a href="#portfolio">Portfolio</a>
      <Link href="/projects/automation-projects">Automations</Link>
      <a href="#faqs">FAQs</a>
      <a href="#contact">Contact</a>
    </div>
  </motion.footer>

  {showBackToTop && (
    <motion.button
      className="back-to-top"
      onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
      initial={{opacity:0,scale:.8,y:12}}
      animate={{opacity:1,scale:1,y:0}}
      exit={{opacity:0,scale:.8}}
      whileHover={{y:-4,scale:1.05}}
      whileTap={{scale:.95}}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={22}/>
    </motion.button>
  )}
 </main>
   <PortfolioChatbot/>
 </>
}