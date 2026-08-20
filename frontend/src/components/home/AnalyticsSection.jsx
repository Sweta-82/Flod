import { BarChart3, Clock, Eye, Users } from "lucide-react";

const AnalyticsSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Main Analytics Container Card */}
        <div className="rounded-3xl border border-border/80 bg-surface p-6 md:p-8 shadow-sm space-y-8">
          
          {/* Header */}
          <div className="flex items-center gap-2 text-primary font-bold text-base tracking-tight">
            <BarChart3 className="h-5 w-5" />
            <span>Share it, then see what happens</span>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="cursor-target p-5 rounded-2xl bg-elevated/60 border border-border/60 space-y-1">
              <span className="font-primary text-3xl md:text-4xl font-black text-foreground tracking-tight">
                128
              </span>
              <p className="text-xs font-semibold text-muted uppercase tracking-wider">Views</p>
            </div>

            <div className="cursor-target p-5 rounded-2xl bg-elevated/60 border border-border/60 space-y-1">
              <span className="font-primary text-3xl md:text-4xl font-black text-foreground tracking-tight">
                84
              </span>
              <p className="text-xs font-semibold text-muted uppercase tracking-wider">Unique viewers</p>
            </div>

            <div className="cursor-target p-5 rounded-2xl bg-elevated/60 border border-border/60 space-y-1">
              <span className="font-primary text-3xl md:text-4xl font-black text-foreground tracking-tight">
                4m 32s
              </span>
              <p className="text-xs font-semibold text-muted uppercase tracking-wider">Avg. engagement</p>
            </div>
          </div>

          <p className="text-[11px] font-mono text-muted">
            Demo values shown for illustration.
          </p>

          {/* Activity Log Feed */}
          <div className="pt-4 border-t border-border/60 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between py-2 border-b border-border/40 text-foreground/80">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Alex opened the presentation</span>
              </span>
              <span className="text-muted text-[11px]">2 min ago</span>
            </div>

            <div className="flex items-center justify-between py-2 text-foreground/80">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span>Rahul viewed slide 8</span>
              </span>
              <span className="text-muted text-[11px]">12 min ago</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AnalyticsSection;
