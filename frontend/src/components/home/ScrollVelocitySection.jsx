import ScrollVelocity from "../ui/ScrollVelocity";

const ScrollVelocitySection = () => {
  return (
    <section className="w-full py-12 bg-background border-t border-border overflow-hidden">
      <ScrollVelocity
        texts={[
          "UPLOAD • UNDERSTAND • PRESENT • SHARE • COLLABORATE • TRACK • REPEAT",
          "FLOD WORKSPACE • PRESENTATION • AI COLLABORATION • REAL-TIME SYNC"
        ]}
        velocity={80}
        numCopies={6}
        damping={40}
        stiffness={300}
        className="text-primary/90 hover:text-primary transition-colors text-3xl sm:text-5xl md:text-6xl font-black py-2"
      />
    </section>
  );
};

export default ScrollVelocitySection;
