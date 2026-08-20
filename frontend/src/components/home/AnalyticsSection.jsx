import { BarChart3, Clock, Eye, Activity, ChevronRight } from "lucide-react";

const AnalyticsSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Main Analytics Container Card */}
        <div className="rounded-3xl border border-border/80 bg-surface p-6 md:p-8 shadow-sm space-y-8">
          
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              <BarChart3 className="h-4 w-4" />
              <span>Real-Time Presentation Insights</span>
            </div>

            <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Know what happens after you hit share
            </h2>
            
            <p className="text-muted text-xs sm:text-sm md:text-base max-w-2xl font-medium leading-relaxed">
              Track slide retention, viewer duration, and active sessions directly inside your presentation workspace.
            </p>
          </div>

          {/* 3 Capability Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-elevated/60 border border-border/60 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Clock className="h-4 w-4" />
              </div>
              <h3 className="font-primary text-base font-bold text-foreground">
                Slide Retention
              </h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                See exact time spent per slide to pinpoint where audience focus peaks or drops.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-elevated/60 border border-border/60 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Eye className="h-4 w-4" />
              </div>
              <h3 className="font-primary text-base font-bold text-foreground">
                Live Viewer Alerts
              </h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Receive subtle notifications when stakeholders open your shared link or jump to key slides.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-elevated/60 border border-border/60 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Activity className="h-4 w-4" />
              </div>
              <h3 className="font-primary text-base font-bold text-foreground">
                Engagement Reports
              </h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Export presentation activity metrics to refine your deck before your next meeting.
              </p>
            </div>
          </div>

          {/* Analytics Visual Feature Breakdown (Authentic Slide Breakdown Visual) */}
          <div className="pt-4 border-t border-border/60 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-muted">
              <span className="uppercase tracking-wider font-semibold">Slide Retention Analytics Overview</span>
              <span className="flex items-center gap-1.5 text-primary font-semibold">
                <span>Feature Preview</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl bg-elevated border border-border/80 space-y-3 font-mono text-xs">
              {/* Slide Bar 1 */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px] text-foreground/80">
                  <span>Slide 01 • Executive Overview</span>
                  <span className="text-muted">High Retention</span>
                </div>
                <div className="w-full h-2 rounded-full bg-background overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-[85%]" />
                </div>
              </div>

              {/* Slide Bar 2 */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px] text-foreground/80">
                  <span>Slide 02 • Architecture & Tech Stack</span>
                  <span className="text-muted">Peak Engagement</span>
                </div>
                <div className="w-full h-2 rounded-full bg-background overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[95%]" />
                </div>
              </div>

              {/* Slide Bar 3 */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px] text-foreground/80">
                  <span>Slide 03 • Deployment Timeline</span>
                  <span className="text-muted">Moderate View Time</span>
                </div>
                <div className="w-full h-2 rounded-full bg-background overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-[60%]" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AnalyticsSection;
