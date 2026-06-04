"use client";

import { useEffect, useRef } from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Ctf } from "@/components/sections/Ctf";
import { Contact } from "@/components/sections/Contact";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function Home() {
  const container = useRef(null);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 2. Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // Timeline entries
      gsap.fromTo(".timeline-entry",
        { x: 60, opacity: 0, y: 20 },
        {
          x: 0, opacity: 1, y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: "#timeline",
            start: "top 70%"
          }
        }
      );

      // Skills Grid
      gsap.from(".skill-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: { amount: 0.8 },
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });

      // About Section
      gsap.from(".about-visual", {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%"
        }
      });

      gsap.from(".about-text", {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%"
        }
      });

      // Hero Floating Animations
      gsap.to(".floating-piece", {
        y: 20,
        x: 10,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });

      // Hero Text Reveal
      const heroTl = gsap.timeline();
      heroTl.from(".hero-badge", { opacity: 0, y: 10, duration: 0.5, delay: 0.5 })
            .from(".hero-title", { opacity: 0, y: 20, duration: 0.8 }, "-=0.3")
            .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
            .from(".hero-cta", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
            .from(".social-links-hero", { opacity: 0, duration: 0.5 }, "-=0.3")
            .from(".hero-visual", { opacity: 0, scale: 0.9, duration: 1, ease: "power2.out" }, "-=0.8");
            
    }, container);

    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div ref={container} className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Ctf />
      <Contact />
    </div>
  );
}
