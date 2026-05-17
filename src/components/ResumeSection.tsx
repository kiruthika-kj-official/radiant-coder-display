import { Download, FileText } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <div className="glass-card p-10 md:p-14 glow-border scroll-reveal relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[hsl(300,80%,65%)]/15 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-[hsl(300,80%,65%)] flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_-4px_hsl(var(--primary)/0.6)]">
              <FileText size={28} className="text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              My <span className="glow-text">Resume</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Take a closer look at my experience, education, and design journey.
            </p>
            <a
              href="/Kiruthika_K_Resume.pdf"
              download="Kiruthika_K_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-[hsl(300,80%,65%)] text-primary-foreground font-semibold text-sm transition-all duration-300 shadow-[0_0_30px_-4px_hsl(var(--primary)/0.6)] hover:shadow-[0_0_40px_-2px_hsl(var(--primary)/0.9)] hover:scale-105 active:scale-95"
            >
              Download Resume <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
