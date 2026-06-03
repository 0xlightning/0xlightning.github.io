"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      {/* Background & Floating Pieces */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(var(--color-foreground)_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]"></div>
        
        {/* Animated chess pieces (handled by GSAP later, for now just positioned) */}
        <div className="absolute top-[10%] right-[5%] opacity-5 w-[15vw] max-w-[200px] pointer-events-none">
          <Image src="/assets/chess/king.svg" alt="King" width={200} height={200} className="w-full h-auto floating-piece" />
        </div>
        <div className="absolute bottom-[15%] left-[10%] opacity-5 w-[15vw] max-w-[200px] pointer-events-none">
          <Image src="/assets/chess/queen.svg" alt="Queen" width={200} height={200} className="w-full h-auto floating-piece" />
        </div>
        <div className="absolute top-[40%] left-[5%] opacity-5 w-[15vw] max-w-[200px] pointer-events-none">
          <Image src="/assets/chess/knight.svg" alt="Knight" width={200} height={200} className="w-full h-auto floating-piece" />
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="flex flex-col items-start text-left hero-content">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-8 tracking-wider uppercase">
            Open to opportunities · Salem, TN
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
            Architecting scalable <br />
            <span className="text-primary">digital systems.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg">
            Full Stack Developer · MERN · Next.js · Firebase · AI Integration
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link href="#projects" className={buttonVariants({ size: "lg", variant: "default" }) + " rounded-full h-12 px-8 font-semibold"}>
              View tactical plays
            </Link>
            <Link href="#contact" className={buttonVariants({ size: "lg", variant: "outline" }) + " rounded-full h-12 px-8 font-semibold hover:bg-primary/5 hover:border-primary"}>
              Let&apos;s talk
            </Link>
          </div>

          <div className="flex items-center gap-6 text-sm font-bold text-muted-foreground">
            <Link href="https://twitter.com/0xlightning" className="hover:text-foreground transition-colors" target="_blank">𝕏</Link>
            <Link href="https://linkedin.com/in/kspraveen20" className="hover:text-foreground transition-colors" target="_blank">LN</Link>
            <Link href="https://github.com/0xlightning" className="hover:text-foreground transition-colors" target="_blank">GH</Link>
            <Link href="mailto:praveenresearcher14@gmail.com" className="hover:text-foreground transition-colors">✉</Link>
          </div>
        </div>

        <div className="hidden md:flex justify-center relative hero-visual">
          <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
            <Image 
              src="/assets/chess/king.svg" 
              alt="Premium King" 
              width={350} 
              height={350} 
              className="w-full h-auto opacity-10 drop-shadow-[0_0_15px_rgba(var(--color-primary),0.3)] z-10" 
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[100px] rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
