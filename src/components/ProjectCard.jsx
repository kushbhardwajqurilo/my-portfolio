import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  const fallbackSlug =
    project.slug ??
    project.title
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  const primaryLink = project.links?.[0]?.url || project.liveDemo || "#";

  return (
    <motion.article whileHover={{ scale: 1.02 }} className="surface-card overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="pill">{project.category}</span>
          <a
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
          </a>
        </div>
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <p className="line-clamp-3 text-sm leading-7 text-slate-400">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech?.slice(0, 3).map((item) => (
            <span key={item} className="pill border-white/8 text-[11px] tracking-[0.18em]">
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <a
            className="btn-secondary px-4 py-2.5 text-sm"
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open
          </a>
          <Link to={`/projects/${fallbackSlug}`} className="btn-ghost">
            Details
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
