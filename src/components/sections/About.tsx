"use client";

import Image from "next/image";

export function About() {
  const stats = [
    { num: "30%", label: "Cart Abandonment ↓" },
    { num: "40-75%", label: "Dev Time Saved" },
    { num: "4-7d", label: "MVP Delivery" },
    { num: "40%", label: "Productivity ↑" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          
          <div className="flex justify-center relative about-visual">
            <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-3xl border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-2xl">
              <Image 
                src="/assets/chess/pawn.svg" 
                alt="Pawn" 
                width={150} 
                height={150} 
                className="w-1/2 h-auto opacity-10" 
              />
              <Image 
                src="/assets/chess/king.svg" 
                alt="King Decor" 
                width={60} 
                height={60} 
                className="absolute -top-4 -right-4 opacity-20" 
              />
              <Image 
                src="/assets/chess/queen.svg" 
                alt="Queen Decor" 
                width={60} 
                height={60} 
                className="absolute -bottom-4 -left-4 opacity-20" 
              />
            </div>
          </div>

          <div className="flex flex-col about-text">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-4">
              Professional Summary
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Full Stack Developer & Systems Architect.
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground mb-10 leading-relaxed">
              <p>
                I am a Full Stack Developer with 2+ years of experience building scalable SaaS platforms, eCommerce solutions, and real-time web applications using React.js, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, and Firebase.
              </p>
              <p>
                My technical expertise spans REST API development, authentication systems, cloud deployment, and scalable architecture design. I have a proven track record of delivering production-ready MVPs in agile environments with measurable improvements in automation, development efficiency, and client outcomes.
              </p>
              <p>
                My background in Electronics and Communication Engineering enables me to bridge software and hardware effectively, adding practical depth for IoT and embedded systems integration.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl font-black text-foreground tracking-tighter">
                    {stat.num}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
