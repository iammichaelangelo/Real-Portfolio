import Image from "next/image";
import Link from "next/link";
import {ArrowLeft,ArrowRight,ExternalLink} from "lucide-react";
import {automationProjects} from "@/data/projects";

export default function AutomationProjectsPage(){
  return (
    <main className="automation-index-page">
      <header className="automation-index-hero shell">
        <Link className="automation-index-back" href="/#portfolio">
          <ArrowLeft size={18}/>
          Back to Portfolio
        </Link>

        <div className="automation-index-heading">
          <div>
            <p className="blue-note">#Automation Systems</p>
            <h1>Automation Projects</h1>
          </div>
          <p>
            Practical systems built to reduce repetitive work, organize information,
            and connect dashboards, workflows, databases, email, files, and team updates.
          </p>
        </div>
      </header>

      <section className="automation-index-grid shell" aria-label="Automation project list">
        {automationProjects.map((project,index)=>(
          <article className="automation-index-card" key={project.slug}>
            <Link className="automation-index-image" href={`/projects/${project.slug}`}>
              <Image
                src={project.cover}
                alt={`${project.title} project cover`}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
            </Link>

            <div className="automation-index-card-content">
              <div className="automation-index-number">{String(index+1).padStart(2,"0")}</div>
              <p className="blue-note">#{project.category.replaceAll(" ","")}</p>
              <h2>{project.title}</h2>
              <p className="automation-index-description">{project.subtitle}</p>

              <div className="automation-index-tools">
                {project.tools.slice(0,5).map((tool)=><span key={tool}>{tool}</span>)}
              </div>

              <div className="automation-index-actions">
                <Link href={`/projects/${project.slug}`}>
                  View Full Project
                  <ArrowRight size={16}/>
                </Link>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live Demo
                    <ExternalLink size={15}/>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
