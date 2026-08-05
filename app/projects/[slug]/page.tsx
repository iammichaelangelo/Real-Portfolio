"use client";

import Image from "next/image";
import {notFound} from "next/navigation";
import {ArrowLeft,ArrowUp,ChevronLeft,ChevronRight,ExternalLink,X,ArrowRight} from "lucide-react";
import {motion,useScroll,useSpring} from "framer-motion";
import {useEffect,useState,use} from "react";
import {getProject} from "@/data/projects";


const toolIcons: Record<string, string> = {
  "Canva": "/images/icons/canva.png",
  "Figma": "/images/icons/figma.png",
  "Laravel": "/images/icons/laravel.png",
  "GitHub": "/images/icons/github.png",
  "Slack": "/images/icons/slack.png",
  "Gmail": "/images/icons/gmail.png",
  "HTML": "/images/icons/html.png",
  "CSS": "/images/icons/css.png",
  "Trello": "/images/icons/trello.png",
  "Calendly": "/images/icons/calendly.png",
  "Calendar": "/images/icons/calendar.png",
  "Vercel": "/images/icons/vercel.png",
  "Freepik": "/images/icons/freepik.png",


  "MySQL": "/images/icons/mysql.png",  
  "PHP": "/images/icons/php.png",  
  "Shopify": "/images/icons/shopify.png",
  "VS Code": "/images/icons/vscode.png",
  "Google Drive": "/images/icons/gdrive.png",
  "Notion": "/images/icons/notion.png",
  "ChatGPT": "/images/icons/gpt.png",
  "Photoshop": "/images/icons/photoshop.png",
  "After Effects": "/images/icons/am.png",
  "Pinterest": "/images/icons/pinterest.png",

  "DeepSeek": "/images/icons/deepseek.png",
  "Claude": "/images/icons/claude.png",
  "Gemini": "/images/icons/gemini.png",
  "Apollo": "/images/icons/apollo.jpeg",
  "CapCut": "/images/icons/capcut.png",
  "React": "/images/icons/react.png",
  "JavaScript": "/images/icons/jsjs.png",
  "Meta": "/images/icons/meta.png",
  "Buffer": "/images/icons/buffer.png",
  "Sheets": "/images/icons/sheets.png",
  "Next.js": "/images/icons/nextjs.png",
  "TypeScript": "/images/icons/typescript.png",
  "n8n": "/images/icons/n8n.png",
  "Groq": "/images/icons/groq.png",
  "Supabase": "/images/icons/supabase.png",
  "Railway": "/images/icons/railway.png",
};

export default function ProjectPage({
  params
}:{
  params:Promise<{slug:string}>
}){
  const {slug}=use(params);
  const project=getProject(slug);
  const [showBackToTop,setShowBackToTop]=useState(false);
  const [lightboxIndex,setLightboxIndex]=useState<number|null>(null);
  const {scrollYProgress}=useScroll();
  const progress=useSpring(scrollYProgress,{
    stiffness:140,
    damping:28,
    mass:.25
  });

  const lightboxImages=project?.gallerySections?.length
    ? project.gallerySections.flatMap((section)=>section.images)
    : project?.gallery ?? [];

  const openLightbox=(image:string)=>{
    const index=lightboxImages.indexOf(image);
    if(index>=0)setLightboxIndex(index);
  };

  const closeLightbox=()=>setLightboxIndex(null);

  const showPreviousImage=()=>{
    setLightboxIndex((current)=>{
      if(current===null)return null;
      return (current-1+lightboxImages.length)%lightboxImages.length;
    });
  };

  const showNextImage=()=>{
    setLightboxIndex((current)=>{
      if(current===null)return null;
      return (current+1)%lightboxImages.length;
    });
  };

  useEffect(()=>{
    const onScroll=()=>setShowBackToTop(window.scrollY>600);
    onScroll();
    window.addEventListener("scroll",onScroll,{passive:true});
    return ()=>window.removeEventListener("scroll",onScroll);
  },[]);

  useEffect(()=>{
    if(lightboxIndex===null)return;

    const previousOverflow=document.body.style.overflow;
    document.body.style.overflow="hidden";

    const onKeyDown=(event:KeyboardEvent)=>{
      if(event.key==="Escape")closeLightbox();
      if(event.key==="ArrowLeft")showPreviousImage();
      if(event.key==="ArrowRight")showNextImage();
    };

    window.addEventListener("keydown",onKeyDown);

    return ()=>{
      document.body.style.overflow=previousOverflow;
      window.removeEventListener("keydown",onKeyDown);
    };
  },[lightboxIndex,lightboxImages.length]);

  if(!project){
    notFound();
  }

  return (
    <main className={`project-detail-page ${project.kind==="automation" ? "project-detail-automation" : ""}`}>
      <motion.div
        className="project-progress"
        style={{scaleX:progress}}
      />

      <a
        className="sticky-back-button"
        href={project.kind==="automation" ? "/projects/automation-projects" : "/#portfolio"}
      >
        <ArrowLeft size={18}/>
        {project.kind==="automation" ? "Back to Automations" : "Back to Portfolio"}
      </a>

      <section className="project-detail-hero shell">
        <div>
          <p className="project-category">#{project.category.replaceAll(" ","")}</p>
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
          {project.liveUrl && (
            <div className="project-detail-live-actions">
              <a
                className="project-live-site-button"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Live Dashboard
                <ExternalLink size={16}/>
              </a>
            </div>
          )}
        </div>

        <div className="project-tools-block">
          <p>Made With</p>
          <div className="project-tools-list">
            {project.tools.map((tool) => (
              <span key={tool} data-name={tool}>
                <img src={toolIcons[tool]} alt={tool} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {project.kind==="automation" && project.workflow && (
        <section className="project-system-route" aria-label={`${project.title} system route`}>
          {project.workflow.map((step,index)=>(
            <div className="project-system-route-step" key={step}>
              <span>{step}</span>
              {index<project.workflow!.length-1 && <ArrowRight size={16}/>}
            </div>
          ))}
        </section>
      )}

      {project.type==="video" ? (
        <section className="project-video-gallery shell">
          {project.videos?.map((video,index)=>(
            <motion.article
              key={video.src}
              className="project-video-card"
              initial={{opacity:0,y:35}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:false,amount:.12}}
              transition={{duration:.6,delay:index*.06}}
            >
              <video controls preload="metadata" poster={video.poster} playsInline>
                <source src={video.src} type="video/mp4"/>
                Your browser does not support the video element.
              </video>
              <h3>{video.title}</h3>
            </motion.article>
          ))}
        </section>
      ) : project.gallerySections?.length ? (
        <section className="project-sectioned-gallery shell">
          {project.gallerySections.map((section,sectionIndex)=>(
            <motion.section
              className="project-gallery-section"
              key={section.title}
              initial={{opacity:0,y:38}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true,amount:.1}}
              transition={{duration:.6,delay:sectionIndex*.06}}
            >
              <header className="project-gallery-section-heading">
                <div>
                  <p className="project-gallery-section-number">0{sectionIndex+1}</p>
                  <h2>{section.title}</h2>
                </div>
                <div className="project-gallery-section-meta">
                  <p>{section.subtitle}</p>
                  {section.liveUrl && (
                    <a
                      className="project-live-site-button"
                      href={section.liveUrl}
                      target={section.liveUrl.startsWith("http") ? "_blank" : undefined}
                      rel={section.liveUrl.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <span className="project-live-site-text">
                        {section.liveLabel ?? "Visit Live Site"}
                      </span>

                      <ExternalLink
                        size={16}
                        className="project-live-site-icon"
                      />
                    </a>
                  )}
                </div>
              </header>

              <div className={`project-gallery project-gallery-count-${section.images.length}`}>
                {section.images.map((image,index)=>(
                  <motion.figure
                    key={image}
                    className="project-gallery-item project-gallery-clickable"
                    initial={{opacity:0,y:28}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true,amount:.12}}
                    transition={{duration:.55,delay:index*.06}}
                    onClick={()=>openLightbox(image)}
                    onKeyDown={(event)=>{
                      if(event.key==="Enter"||event.key===" "){
                        event.preventDefault();
                        openLightbox(image);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open ${section.title} design ${index+1} in full screen`}
                  >
                    <Image
                      src={image}
                      alt={`${section.title} design ${index+1}`}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                      className="project-gallery-image"
                    />
                  </motion.figure>
                ))}
              </div>
            </motion.section>
          ))}
        </section>
      ) : (
        <section className="project-gallery shell">
          {project.gallery.map((image,index)=>(
            <motion.figure
              key={image}
              className="project-gallery-item project-gallery-clickable"
              initial={{opacity:0,y:35}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:false,amount:.12}}
              transition={{duration:.6,delay:index*.06}}
              onClick={()=>openLightbox(image)}
              onKeyDown={(event)=>{
                if(event.key==="Enter"||event.key===" "){
                  event.preventDefault();
                  openLightbox(image);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Open ${project.title} project image ${index+1} in full screen`}
            >
              <Image
                src={image}
                alt={`${project.title} project image ${index+1}`}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 20vw"
                className="project-gallery-image"
              />
            </motion.figure>
          ))}
        </section>
      )}

      <section className="project-useful-ending">
        <div className="project-outcome">
          <p className="eyebrow">Project Summary</p>
          <h2>What this project demonstrates</h2>

          <div className="outcome-grid">
            {project.summary.map((item)=>(
              <article key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex!==null && lightboxImages[lightboxIndex] && (
        <motion.div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Full-screen project image viewer"
          initial={{opacity:0}}
          animate={{opacity:1}}
          onClick={closeLightbox}
        >
          <button
            className="project-lightbox-close"
            type="button"
            onClick={closeLightbox}
            aria-label="Close full-screen image"
          >
            <X size={24}/>
          </button>

          {lightboxImages.length>1 && (
            <>
              <button
                className="project-lightbox-arrow project-lightbox-previous"
                type="button"
                onClick={(event)=>{
                  event.stopPropagation();
                  showPreviousImage();
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={28}/>
              </button>

              <button
                className="project-lightbox-arrow project-lightbox-next"
                type="button"
                onClick={(event)=>{
                  event.stopPropagation();
                  showNextImage();
                }}
                aria-label="Next image"
              >
                <ChevronRight size={28}/>
              </button>
            </>
          )}

          <motion.div
            className="project-lightbox-content"
            initial={{scale:.96,y:16}}
            animate={{scale:1,y:0}}
            onClick={(event)=>event.stopPropagation()}
          >
            <div className="project-lightbox-image-wrap">
              <Image
                src={lightboxImages[lightboxIndex]}
                alt={`${project.title} full-screen image ${lightboxIndex+1}`}
                fill
                priority
                sizes="96vw"
                className="project-lightbox-image"
              />
            </div>

            <p className="project-lightbox-counter">
              {lightboxIndex+1} / {lightboxImages.length}
            </p>
          </motion.div>
        </motion.div>
      )}

      {showBackToTop && (
        <motion.button
          className="project-back-to-top"
          onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
          initial={{opacity:0,scale:.82,y:12}}
          animate={{opacity:1,scale:1,y:0}}
          whileHover={{y:-4,scale:1.05}}
          whileTap={{scale:.95}}
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp size={21}/>
        </motion.button>
      )}
    </main>
  );
}
