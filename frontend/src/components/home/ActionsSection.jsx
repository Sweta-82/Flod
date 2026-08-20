import { Upload, Plus, Play, Users } from "lucide-react";
import { AnimatedItem } from "../ui/AnimatedList";

const actions = [
  {
    icon: Upload,
    label: "Upload presentation",
  },
  {
    icon: Plus,
    label: "Create workspace",
  },
  {
    icon: Play,
    label: "Present",
  },
  {
    icon: Users,
    label: "Join workspace",
  },
];

const ActionsSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto space-y-8 text-center">
        
        <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          What do you want to do?
        </h2>

        {/* 4 Action Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((action, idx) => {
            const Icon = action.icon;
            return (
              <AnimatedItem key={idx} index={idx} delay={idx * 0.06} className="mb-0">
                <button
                  className="w-full p-6 rounded-3xl bg-surface border border-border/80 hover:border-primary/50 hover:shadow-md transition flex flex-col items-center justify-center gap-3 cursor-pointer group"
                >
                  <div className="h-10 w-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-primary text-sm font-semibold text-foreground">
                    {action.label}
                  </span>
                </button>
              </AnimatedItem>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ActionsSection;
