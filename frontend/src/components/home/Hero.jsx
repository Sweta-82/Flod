import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Zap, ArrowDown, Layers, Sparkles, Users, Presentation, Move } from "lucide-react";
import { FlipButton } from "../ui/btn";
import Aurora from "../ui/Aurora";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const topDivRef = useRef(null);
  const innerContentRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (!topDivRef.current || !containerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1200",
          scrub: 1,
          pin: true,
        },
      });

      // Phase 1: Decrease width from left & right (scaleX), reveal PRESENT and COLLABORATE text
      tl.to(
        topDivRef.current,
        {
          scaleX: 0.38,
          borderRadius: "32px",
          ease: "power2.inOut",
          duration: 0.5,
        },
        0
      );

      tl.fromTo(
        leftDivRef.current,
        { x: -140, opacity: 0 },
        { x: 0, opacity: 1, ease: "power2.inOut", duration: 0.5 },
        0
      );

      tl.fromTo(
        rightDivRef.current,
        { x: 140, opacity: 0 },
        { x: 0, opacity: 1, ease: "power2.inOut", duration: 0.5 },
        0
      );

      // Phase 2: Fade inner content out & collapse orange div into a sleek single vertical line in center
      tl.to(
        innerContentRef.current,
        {
          opacity: 0,
          pointerEvents: "none",
          ease: "power1.inOut",
          duration: 0.2,
        },
        ">-=0.1"
      );

      tl.to(
        topDivRef.current,
        {
          scaleX: 0.002, // collapses width to a thin single line
          scaleY: 0.65,  // vertical divider height
          rotation: 0,
          borderRadius: "999px",
          boxShadow: "0 0 25px rgba(160, 48, 122, 0.9)",
          opacity: 0.85,
          pointerEvents: "none",
          ease: "power2.inOut",
          duration: 0.5,
        },
        "<"
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="w-full min-h-screen md:h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden"
    >
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-3 sm:px-6 md:px-12 py-6 md:py-0">
        {/* Orange/Primary Banner Div */}
        <div
          ref={topDivRef}
          className="relative md:absolute inset-0 z-20 w-full h-full bg-primary text-white shadow-2xl flex flex-col items-center justify-between p-4 sm:p-6 md:p-10 text-center border-none transform-origin-center overflow-hidden rounded-3xl md:rounded-none"
        >
          {/* WebGL Aurora Background Effect */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <Aurora
              colorStops={["#341539", "#A0307A", "#C084FC"]}
              blend={0.5}
              amplitude={1.0}
              speed={1}
            />
          </div>

          {/* Full Screen Inner Content */}
          <div
            ref={innerContentRef}
            className="relative z-10 flex flex-col items-center justify-between h-full w-full max-w-6xl mx-auto py-2 space-y-4 md:space-y-0"
          >
            {/* Top Tagline */}
            <div className="flex items-center gap-2 text-white/80 font-mono text-[10px] sm:text-xs uppercase tracking-widest font-semibold">
              <span>SAN FRANCISCO, CA</span>
              <span>•</span>
              <span>EST. 2026</span>
            </div>

            {/* Top Main Title: FLOD */}
            <h1 className="font-primary text-5xl sm:text-7xl md:text-9xl lg:text-[10.5rem] font-black tracking-tighter text-white uppercase leading-none mt-1 drop-shadow-md">
              FLOD
            </h1>

            {/* Center Draggable Presentation Slide Cards powered by Framer Motion */}
            <div
              ref={cardsContainerRef}
              className="relative my-2 flex items-center justify-center h-40 sm:h-56 md:h-64 w-full max-w-xs sm:max-w-md md:max-w-xl select-none overflow-hidden"
            >
              <div className="absolute top-0 z-30 text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-white/90 flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                <Move className="h-3 w-3 text-white" />
                <span>DRAG CARDS TO EXPLORE</span>
              </div>

              {/* Card 1 - Framer Motion Draggable */}
              <motion.div
                drag
                dragConstraints={cardsContainerRef}
                dragElastic={0.2}
                whileHover={{ scale: 1.05, zIndex: 40 }}
                whileTap={{ scale: 1.02 }}
                className="absolute w-28 sm:w-44 md:w-56 h-24 sm:h-34 md:h-44 rounded-xl sm:rounded-2xl bg-zinc-900 border border-white/20 shadow-2xl -rotate-12 -translate-x-12 sm:-translate-x-20 flex flex-col justify-between p-3 sm:p-4 cursor-grab active:cursor-grabbing backdrop-blur-md"
              >
                <div className="flex items-center justify-between">
                  <Presentation className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                  <span className="text-[9px] sm:text-[10px] font-mono bg-white/10 px-1.5 py-0.5 rounded text-white/80">
                    SLIDE 01
                  </span>
                </div>
                <div className="space-y-1 text-left">
                  <div className="h-1.5 sm:h-2 w-3/4 bg-white/90 rounded" />
                  <div className="h-1 sm:h-1.5 w-1/2 bg-white/40 rounded" />
                </div>
                <div className="text-[9px] sm:text-[10px] font-mono text-white/50 text-left">
                  AI SLIDE DECK
                </div>
              </motion.div>

              {/* Card 2 - Framer Motion Draggable */}
              <motion.div
                drag
                dragConstraints={cardsContainerRef}
                dragElastic={0.2}
                whileHover={{ scale: 1.05, zIndex: 40 }}
                whileTap={{ scale: 1.02 }}
                className="absolute w-28 sm:w-44 md:w-56 h-24 sm:h-34 md:h-44 rounded-xl sm:rounded-2xl bg-white text-zinc-900 shadow-2xl -rotate-4 -translate-x-3 sm:-translate-x-6 flex flex-col justify-between p-3 sm:p-4 border border-zinc-200 cursor-grab active:cursor-grabbing"
              >
                <div className="flex items-center justify-between">
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                  <span className="text-[9px] sm:text-[10px] font-mono bg-primary/10 text-primary px-1.5 py-0.5 rounded font-bold">
                    AI AGENT
                  </span>
                </div>
                <div className="bg-primary/5 p-1.5 sm:p-2 rounded-lg border border-primary/20 text-left">
                  <p className="text-[8px] sm:text-[10px] font-bold text-primary uppercase tracking-wider">
                    SPEAKER NOTES
                  </p>
                </div>
                <div className="text-[9px] sm:text-[10px] font-mono text-zinc-400 text-left">
                  AUTO GENERATED
                </div>
              </motion.div>

              {/* Card 3 - Framer Motion Draggable */}
              <motion.div
                drag
                dragConstraints={cardsContainerRef}
                dragElastic={0.2}
                whileHover={{ scale: 1.05, zIndex: 40 }}
                whileTap={{ scale: 1.02 }}
                className="absolute w-28 sm:w-44 md:w-56 h-24 sm:h-34 md:h-44 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 text-white shadow-2xl rotate-6 translate-x-4 sm:translate-x-8 flex flex-col justify-between p-3 sm:p-4 border border-white/30 cursor-grab active:cursor-grabbing"
              >
                <div className="flex items-center justify-between">
                  <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                  <span className="text-[9px] sm:text-[10px] font-mono bg-white/20 px-1.5 py-0.5 rounded text-white font-bold">
                    LIVE SYNC
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white text-primary flex items-center justify-center text-[10px] font-bold shadow">
                    A
                  </div>
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-zinc-900 text-white flex items-center justify-center text-[10px] font-bold shadow">
                    B
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-medium text-white/90">2 EDITING</span>
                </div>
                <div className="text-[9px] sm:text-[10px] font-mono text-white/80 text-left">
                  SUB-MS LATENCY
                </div>
              </motion.div>

              {/* Card 4 - Framer Motion Draggable */}
              <motion.div
                drag
                dragConstraints={cardsContainerRef}
                dragElastic={0.2}
                whileHover={{ scale: 1.05, zIndex: 40 }}
                whileTap={{ scale: 1.02 }}
                className="absolute w-28 sm:w-44 md:w-56 h-24 sm:h-34 md:h-44 rounded-xl sm:rounded-2xl bg-zinc-950 text-white border border-white/20 shadow-2xl rotate-12 translate-x-12 sm:translate-x-20 flex flex-col justify-between p-3 sm:p-4 cursor-grab active:cursor-grabbing"
              >
                <div className="flex items-center justify-between">
                  <Layers className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-400" />
                  <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-400 animate-pulse" />
                </div>
                <div className="text-left space-y-0.5">
                  <p className="text-[10px] sm:text-xs font-bold text-white uppercase">
                    FLUID WORKFLOW
                  </p>
                  <p className="text-[8px] sm:text-[10px] font-mono text-white/60">
                    EVERY CHANGE INSTANT
                  </p>
                </div>
                <div className="text-[9px] sm:text-[10px] font-mono text-orange-400 text-left">
                  CONNECTED
                </div>
              </motion.div>
            </div>

            {/* Bottom Subtitle Headline */}
            <div className="flex flex-col items-center gap-1 sm:gap-2">
              <h2 className="font-primary text-lg sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white/90 uppercase leading-tight drop-shadow-sm px-2">
                PRESENTATION, COLLABORATION & AI
              </h2>

              <p className="text-white/80 text-[10px] sm:text-xs md:text-base font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] max-w-xl mt-0.5">
                ONE WORKSPACE FOR EVERY PRESENTATION
              </p>
            </div>

            {/* Footer Scroll Prompt */}
            <div className="flex items-center gap-2 text-white/80 text-[10px] sm:text-[11px] uppercase tracking-widest font-mono pt-1 font-semibold">
              <span>SCROLL DOWN TO REVEAL</span>
              <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
            </div>
          </div>
        </div>        {/* Hero Text Section in BACK - Completely Clear & Uncluttered */}
        <div className="relative w-full z-30 max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-36 items-center relative w-full">
            {/* Left: PRESENT */}
            <div ref={leftDivRef} className="flex flex-col gap-4 text-left items-start">
              <h1 className="font-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-primary uppercase leading-none">
                PRESENT
              </h1>

              <p className="font-primary text-xs md:text-sm uppercase tracking-[0.14em] leading-relaxed text-foreground/90 max-w-md font-medium">
                MAKE YOUR SLIDES SPEAK. UPLOAD ANY DECK AND LET AI
                SUMMARIZE CONTENT, GENERATE SPEAKER NOTES, AND PREPARE
                INTERACTIVE QUESTIONS BEFORE YOU STEP INTO THE ROOM.
              </p>

              <div className="pt-2">
                <FlipButton
                  href="#present"
                  frontText="START PRESENTING"
                  backText="LAUNCH SLIDES"
                />
              </div>
            </div>

            {/* Right: COLLABORATE */}
            <div
              ref={rightDivRef}
              className="flex flex-col gap-4 md:pl-6 text-left md:text-right items-start md:items-end"
            >
              <h2 className="font-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-primary uppercase leading-none">
                COLLABORATE
              </h2>

              <p className="font-primary text-xs md:text-sm uppercase tracking-[0.14em] leading-relaxed text-foreground/90 max-w-md font-medium">
                ONE WORKSPACE. EVERYONE LIVE. EVERY CHANGE INSTANTLY
                SYNCED. BUILT FOR MODERN TEAMS THAT DEMAND VELOCITY,
                SILENT EFFICIENCY, AND FLUID CONTROL.
              </p>

              <div className="pt-2">
                <FlipButton
                  href="#collaborate"
                  frontText="START COLLABORATING"
                  backText="JOIN WORKSPACE"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;