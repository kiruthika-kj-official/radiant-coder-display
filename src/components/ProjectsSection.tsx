import { Folder, Smartphone, Globe, Layout } from "lucide-react";

const projects = [
  {
    title: "Food Delivery App UI",
    description: "Designed a modern mobile app UI for food ordering with clean navigation and user-friendly experience.",
    tools: ["Figma", "Canva"],
    icon: Smartphone,
    gradient: "from-[hsl(270,80%,60%)] to-[hsl(300,80%,65%)]",
  },
  {
    title: "College Event Website",
    description: "Created responsive event registration website wireframes and UI mockups.",
    tools: ["Figma", "Photoshop"],
    icon: Globe,
    gradient: "from-[hsl(260,80%,60%)] to-[hsl(280,90%,65%)]",
  },
  {
    title: "Portfolio Website Design",
    description: "Designed and developed a personal portfolio website with modern dark theme UI.",
    tools: ["Lovable", "HTML", "CSS"],
    icon: Layout,
    gradient: "from-[hsl(280,80%,55%)] to-[hsl(260,80%,65%)]",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">
          Featured <span className="glow-text">Projects</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-12 scroll-reveal" style={{ transitionDelay: "80ms" }} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="glass-card p-0 hover-lift group scroll-reveal relative overflow-hidden"
              style={{ transitionDelay: `${120 + i * 120}ms` }}
            >
              <div className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon size={60} className="text-white/90 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
                </div>
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Folder size={16} className="text-primary" />
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span key={t} className="mono text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary/80 border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
