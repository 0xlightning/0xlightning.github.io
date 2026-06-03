"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="container max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Tactical Plays
          </h2>
          <p className="text-lg text-muted-foreground">
            Selected builds from the board.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, i) => (
            <div 
              key={i} 
              className="relative h-[450px] w-full [perspective:1000px] cursor-pointer"
              onClick={() => setFlipped(flipped === i ? null : i)}
            >
              <div className={`w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${flipped === i ? "[transform:rotateY(180deg)]" : ""}`}>
                
                {/* Front */}
                <div className="absolute inset-0 backface-hidden [backface-visibility:hidden] bg-card border border-border rounded-3xl p-6 flex flex-col shadow-sm hover:shadow-md hover:border-primary/50 transition-all">
                  <div className="w-full h-48 bg-muted rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
                    <Image 
                      src={project.thumb} 
                      alt={project.name} 
                      width={100} 
                      height={100} 
                      className="opacity-50"
                    />
                    {/* Mini board overlay */}
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-5 pointer-events-none">
                      {Array(16).fill(0).map((_, j) => (
                        <div key={j} className="border border-foreground"></div>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground leading-tight">{project.name}</h3>
                  <p className="text-sm font-medium text-primary mb-auto">{project.type}</p>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider text-center mt-4">
                    tap to see more →
                  </span>
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] bg-foreground text-background border border-border rounded-3xl p-8 flex flex-col shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl mb-6">
                    ✓
                  </div>
                  <p className="text-sm leading-relaxed mb-6 opacity-90">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-auto">
                    {project.tech.map((t, j) => (
                      <Badge key={j} variant="outline" className="border-background/20 text-background/80 hover:bg-background/10">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm font-bold text-primary hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View on GitHub →
                  </a>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
