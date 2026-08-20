import { Target, MousePointer, Sparkles, Zap, Crosshair, Move } from "lucide-react";

const TargetCursorSection = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-surface/50 border-t border-border relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase cursor-target">
            <Target className="w-3.5 h-3.5" />
            Interactive Target Tracking
          </div>

          <h2 className="font-primary text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Precision Target Cursor
          </h2>

          <p className="text-muted text-base sm:text-lg font-sora">
            Hover over any element below to watch the target cursor lock onto elements with magnetic precision.
          </p>
        </div>

        {/* Demo Targets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="cursor-target p-6 rounded-3xl bg-surface border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Crosshair className="w-6 h-6" />
              </div>
              <h3 className="font-primary text-xl font-bold text-foreground">
                Corner Lock-On
              </h3>
              <p className="text-muted text-sm font-sora leading-relaxed">
                The 4 brackets dynamically expand or shrink to encapsulate any targeted container cleanly.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted">
              <span>Hover target</span>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="cursor-target p-6 rounded-3xl bg-surface border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-primary text-xl font-bold text-foreground">
                GSAP Smoothness
              </h3>
              <p className="text-muted text-sm font-sora leading-relaxed">
                Smooth parallax easing smoothly follows pointer movements while keeping rotation synchronized.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted">
              <span>Hover target</span>
              <Move className="w-4 h-4 text-primary" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="cursor-target p-6 rounded-3xl bg-surface border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <MousePointer className="w-6 h-6" />
              </div>
              <h3 className="font-primary text-xl font-bold text-foreground">
                Mobile Safe
              </h3>
              <p className="text-muted text-sm font-sora leading-relaxed">
                Automatically detects touch screens and small viewports to gracefully fall back to native touch.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted">
              <span>Hover target</span>
              <Target className="w-4 h-4 text-primary" />
            </div>
          </div>

        </div>

        {/* Interactive Action Pill Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button className="cursor-target px-6 py-3 rounded-2xl bg-primary text-white font-primary font-semibold text-sm hover:opacity-90 active:scale-95 transition">
            Primary Target Action
          </button>
          
          <button className="cursor-target px-6 py-3 rounded-2xl bg-surface border border-border text-foreground font-primary font-semibold text-sm hover:border-primary/40 active:scale-95 transition">
            Secondary Target Action
          </button>

          <div className="cursor-target px-5 py-3 rounded-2xl bg-elevated border border-border text-muted text-xs font-mono">
            class="cursor-target"
          </div>
        </div>

      </div>
    </section>
  );
};

export default TargetCursorSection;
