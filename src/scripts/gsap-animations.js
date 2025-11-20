// src/scripts/gsap-animations.js
import { gsap } from "gsap";

function initAnimations() {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(".hero-chip", { y: 20, opacity: 0, duration: 0.5 })
    .from(".hero-title", { y: 25, opacity: 0, duration: 0.7 }, "-=0.2")
    .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.6 }, "-=0.3")
    .from(".hero-actions .btn", { y: 20, opacity: 0, stagger: 0.08, duration: 0.5 }, "-=0.3")
    .from(".hero-meta span", { y: 15, opacity: 0, stagger: 0.06, duration: 0.45 }, "-=0.4")
    .from(".section", { y: 30, opacity: 0, stagger: 0.15, duration: 0.7 }, "-=0.1");
}

if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", initAnimations);
} else {
  initAnimations();
}
