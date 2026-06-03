"use client";

import { timelineData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function Timeline() {
  return (
    <section id="timeline" className="py-24">
      <div className="container max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            "The Game So Far"
          </h2>
          <p className="text-lg text-muted-foreground">
            Every move has a reason.
          </p>
        </div>

        <div className="space-y-12">
          {timelineData.map((entry, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 group timeline-entry">
              <div className="md:w-32 flex-shrink-0">
                <span className="text-5xl md:text-6xl font-black text-foreground/5 tracking-tighter user-select-none transition-colors group-hover:text-primary/10">
                  {entry.notation}
                </span>
              </div>
              
              <div className="flex-1 bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-all group-hover:-translate-y-1 group-hover:border-primary/50">
                <span className="text-primary text-xs font-bold uppercase tracking-[0.1em] mb-2 block">
                  {entry.period}
                </span>
                <h3 className="text-2xl font-bold mb-4">{entry.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {entry.description}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-foreground/70 font-medium mr-2">Skills unlocked:</span>
                  {entry.skills.map((skill, j) => (
                    <Badge key={j} variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                      {skill}
                    </Badge>
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
