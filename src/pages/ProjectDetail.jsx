import React from "react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { findProjectBySlug } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = findProjectBySlug(slug);

  if (!project) {
    return (
      <section className="section-wrap pb-24 pt-32">
        <div className="section-inner">
          <div className="surface-card-strong p-10 text-center">
            <h1 className="text-4xl font-bold text-white">Project not found</h1>
            <p className="mt-4 text-slate-400">
              The project you are looking for does not exist or has moved.
            </p>
            <Link to="/projects" className="btn-primary mt-8">
              <ArrowLeft size={18} />
              Back to projects
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="pt-24">
      <section className="section-wrap py-16">
        <div className="section-inner">
          <Link to="/projects" className="btn-ghost mb-8">
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <div className="space-y-6">
              <span className="eyebrow">{project.category}</span>
              <h1 className="section-title max-w-3xl">{project.title}</h1>
              <p className="section-copy max-w-3xl">{project.longDescription}</p>

              <div className="grid gap-4 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="metric-tile">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-xl font-bold text-white">{metric.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.links?.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <ExternalLink size={18} />
                    {link.label}
                  </a>
                ))}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="media-frame">
              <img
                src={project.image}
                alt={project.title}
                className="h-full min-h-[24rem] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap pb-24">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.8fr,1.2fr]">
          <div className="surface-card p-8">
            <h2 className="text-2xl font-bold text-white">Tech stack</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="pill border-white/10 text-[11px] tracking-[0.18em]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8">
            <div className="surface-card p-8">
              <h2 className="text-2xl font-bold text-white">Highlights</h2>
              <div className="mt-5 grid gap-3">
                {project.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="surface-card p-8">
                <h2 className="text-2xl font-bold text-white">Challenge</h2>
                <p className="mt-4 text-sm leading-8 text-slate-300">{project.challenge}</p>
              </div>
              <div className="surface-card p-8">
                <h2 className="text-2xl font-bold text-white">Impact</h2>
                <p className="mt-4 text-sm leading-8 text-slate-300">{project.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
