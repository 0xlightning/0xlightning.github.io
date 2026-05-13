# Implementation Plan: Premium Chess Redesign

This plan outlines the steps to migrate the current dark-themed portfolio to the "Premium Light" aesthetic defined in the strategy docs, while adhering to the project's core constraints (Vanilla HTML/CSS/JS, GSAP).

## Phase 1: Foundation & Global Styles
- [ ] **Global CSS Variable Overhaul:** Transition from dark variables to light/premium palette (white backgrounds, soft shadows, minimal black typography).
- [ ] **Typography Integration:** Replace/Augment Fira Code with a premium sans-serif (e.g., Inter or Satoshi via Google Fonts) for headings and body.
- [ ] **Layout Skeleton:** Update the container system to allow for "Scandinavian-inspired" breathing room and clean spacing.

## Phase 2: Core Components
- [ ] **Premium Navbar:** Implement the glassmorphism floating navbar with smooth underline hover effects.
- [ ] **Chess SVG System:** Integrate low-opacity floating SVG chess pieces (King, Queen, Knight, Bishop) as background elements.
- [ ] **Scroll Progress & Scroll Effects:** Integrate Lenis (via CDN) for smooth scrolling or refine GSAP scroll triggers.

## Phase 3: Section Redesign (Iterative)
- [ ] **Hero Section:** Redesign for strong typography, floating visuals, and a clean white background.
- [ ] **About Section:** Implement the two-column layout with a subtle grid texture.
- [ ] **Skills Section:** Replace badges with modern glassmorphism cards and hover-glow effects.
- [ ] **Experience Timeline:** Transform the current timeline into a "Dynamic/Editorial" layout with move notation and path lines.
- [ ] **Projects Grid:** Implement the 3D hover/reveal interaction for project cards.

## Phase 4: Refinement & Micro-Interactions
- [ ] **GSAP Animation Suite:** Add "magnetic" hover effects, parallax motion for chess pieces, and smooth section reveals.
- [ ] **Mobile Optimization:** Ensure the light theme and floating elements remain clean and performant on mobile devices.
- [ ] **Branding Cleanup:** Remove "Built with Jules" and replace with a custom, handcrafted footer signature.

## Technical Note
While the strategy recommends a modern React-based stack, this implementation will focus on achieving the identical **UX and Aesthetic** using the project's current "No-Framework" architecture (HTML/CSS/JS + GSAP) to maintain portability and adhere to existing build rules.
