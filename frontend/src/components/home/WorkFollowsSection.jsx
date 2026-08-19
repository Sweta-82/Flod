import { Monitor, Tablet, Smartphone } from "lucide-react";

const WorkFollowsSection = () => {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Card Container */}
        <div className="rounded-3xl border border-border/80 bg-surface p-8 text-center space-y-8 shadow-sm">
          
          <div className="flex items-center justify-center gap-2 text-primary font-bold text-base tracking-tight">
            <Monitor className="h-5 w-5" />
            <span>Your work follows you</span>
          </div>

          {/* Device Icons Row */}
          <div className="flex items-center justify-center gap-8 md:gap-16 py-4">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-sm">
              <Monitor className="h-7 w-7" />
            </div>

            <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-sm">
              <Tablet className="h-7 w-7" />
            </div>

            <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-sm">
              <Smartphone className="h-7 w-7" />
            </div>
          </div>

          <p className="text-muted text-xs md:text-sm font-medium">
            One link opens the same presentation and workspace everywhere.
          </p>

        </div>

      </div>
    </section>
  );
};

export default WorkFollowsSection;
