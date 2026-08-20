import { Upload, Wand2, Users, MousePointer, MessageSquare, ShieldCheck } from "lucide-react";
import { AnimatedItem } from "../ui/AnimatedList";

const features = [
  {
    icon: Upload,
    title: "Upload once, open anywhere",
    description: "PPT, PPTX or PDF — access and present it from any browser, on any device.",
  },
  {
    icon: Wand2,
    title: "AI that reads the deck for you",
    description: "Summaries, speaker notes and likely questions, generated from the actual slides.",
  },
  {
    icon: Users,
    title: "See who's in the room",
    description: "Live presence shows who's viewing, editing or commenting, in real time.",
  },
  {
    icon: MousePointer,
    title: "Live cursors, live edits",
    description: "Everyone's changes land instantly. No refresh, no duplicate copies.",
  },
  {
    icon: MessageSquare,
    title: "Comment where the work is",
    description: "Leave a note on the exact slide or line. Reply and resolve inline.",
  },
  {
    icon: ShieldCheck,
    title: "Control who can do what",
    description: "Set view, comment or edit access per person, per workspace.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="font-primary text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
            One <span className="text-primary bg-gradient-to-r from-purple-400 via-primary to-pink-500 bg-clip-text text-transparent">workspace</span>. Every part of the work.
          </h2>
          <p className="text-muted text-sm md:text-base font-medium leading-relaxed">
            Not a viewer plus a chat tool bolted together — one surface your deck and your team both live in.
          </p>
        </div>

        {/* 6 Feature Grid Cards animated with AnimatedItem */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedItem key={idx} index={idx} delay={idx * 0.08} className="mb-0 h-full">
                <div className="cursor-target h-full p-6 md:p-8 rounded-3xl bg-surface border border-border/80 hover:border-primary/40 transition shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="h-10 w-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-primary text-lg md:text-xl font-bold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted text-xs md:text-sm font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
