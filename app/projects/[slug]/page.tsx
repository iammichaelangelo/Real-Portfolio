"use client";

import Image from "next/image";
import {notFound} from "next/navigation";
import {ArrowLeft,ArrowUp} from "lucide-react";
import {motion,useScroll,useSpring} from "framer-motion";
import {useEffect,useState,use} from "react";
import {getProject} from "@/data/projects";

export default function ProjectPage({
  params
}:{
  params:Promise<{slug:string}>
}){
  const {slug}=use(params);
  const project=getProject(slug);
  const [showBackToTop,setShowBackToTop]=useState(false);
  const {scrollYProgress}=useScroll();
  const progress=useSpring(scrollYProgress,{
    stiffness:140,
    damping:28,
    mass:.25
  });

  useEffect(()=>{
    const onScroll=()=>setShowBackToTop(window.scrollY>600);
    onScroll();
    window.addEventListener("scroll",onScroll,{passive:true});
    return ()=>window.removeEventListener("scroll",onScroll);
  },[]);

  if(!project){
    notFound();
  }

  return (
    <main className="project-detail-page">
      <motion.div
        className="project-progress"
        style={{scaleX:progress}}
      />

      <a className="sticky-back-button" href="/#portfolio">
        <ArrowLeft size={18}/>
        Back to Portfolio
      </a>

      <section className="project-detail-hero shell">
        <div>
          <p className="project-category">#{project.category.replaceAll(" ","")}</p>
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>

        <div className="project-tools-block">
          <p>Made With</p>
          <div className="project-tools-list">
            {project.tools.map((tool)=>(
              <span key={tool} title={tool}>
                {tool.charAt(0)}
              </span>
            ))}
          </div>
        </div>
      </section>

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
      ) : (
        <section className="project-gallery shell">
          {project.gallery.map((image,index)=>(
            <motion.figure
              key={image}
              className="project-gallery-item"
              initial={{opacity:0,y:35}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:false,amount:.12}}
              transition={{duration:.6,delay:index*.06}}
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
