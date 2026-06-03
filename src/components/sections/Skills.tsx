"use client";

import { useState } from "react";
import { skillsData, categoryMap } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const [filter, setFilter] = useState("all");

  const filteredSkills = filter === "all" 
    ? skillsData 
    : skillsData.filter(s => s.category === filter);

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Pieces on the Board
          </h2>
          <p className="text-lg text-muted-foreground">
            Every piece has a role. Every skill has a story.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button 
            onClick={() => setFilter("all")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${filter === "all" ? "bg-primary text-primary-foreground shadow-md" : "bg-card border border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground"}`}
          >
            All
          </button>
          {Object.entries(categoryMap).map(([key, label]) => (
            <button 
              key={key}
              onClick={() => setFilter(key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${filter === key ? "bg-primary text-primary-foreground shadow-md" : "bg-card border border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground"}`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 skills-grid">
          {filteredSkills.map((skill, i) => (
            <div 
              key={`${skill.name}-${i}`} 
              className="bg-card border border-border p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors group shadow-sm hover:shadow-md skill-card"
              title={skill.tooltip}
            >
              <div className="text-3xl mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform">
                {skill.symbol}
              </div>
              <p className="font-bold text-sm mb-1">{skill.name}</p>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                {categoryMap[skill.category] || skill.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
