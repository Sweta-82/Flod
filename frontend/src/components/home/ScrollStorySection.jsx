import ScrollReveal from "../ui/ScrollReveal";

const ScrollStorySection = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-background border-t border-border overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-16 py-8">
        
        {/* Story Block 1 */}
        <ScrollReveal
          baseOpacity={0.15}
          enableBlur
          baseRotation={2}
          blurStrength={4}
          textClassName="text-foreground tracking-tight"
        >
          What happens after you upload a presentation? You could just open it. Or you could understand it before you present it.
        </ScrollReveal>

        {/* Story Block 2 */}
        <ScrollReveal
          baseOpacity={0.15}
          enableBlur
          baseRotation={-2}
          blurStrength={4}
          textClassName="text-primary font-black tracking-tight"
        >
          Let AI summarize it? Yes. Generate speaker notes? Yes. Create questions from your slides? Yes. Present it from anywhere? Of course. Share it with one link? Absolutely.
        </ScrollReveal>

        {/* Story Block 3 */}
        <ScrollReveal
          baseOpacity={0.15}
          enableBlur
          baseRotation={2}
          blurStrength={4}
          textClassName="text-foreground tracking-tight"
        >
          And when your team needs to jump in? Everyone works together. Live.
        </ScrollReveal>

      </div>
    </section>
  );
};

export default ScrollStorySection;
