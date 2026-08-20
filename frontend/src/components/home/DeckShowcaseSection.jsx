import { useState } from "react";
import { Play, Share2, Sparkles, Copy, Check, Eye, Lock, Layers } from "lucide-react";
import Button from "../ui/btn";

const DeckShowcaseSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("flod.app/p/project-alpha");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Main Deck Container Card */}
        <div className="rounded-3xl border border-border bg-surface p-6 md:p-8 shadow-sm space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border/60 pb-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-primary text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span>Project Presentation</span>
                  <span className="text-xs font-mono font-normal text-muted bg-muted/10 px-2 py-0.5 rounded-full">
                    12 slides
                  </span>
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button icon={Play} variant="secondary" className="!rounded-full !py-2 !px-4">
                Present
              </Button>

              <Button icon={Share2} variant="primary" className="!rounded-full !py-2 !px-4 shadow-sm">
                Share
              </Button>
            </div>
          </div>

          {/* Presentation Slide View Canvas */}
          <div className="w-full min-h-[260px] md:min-h-[320px] rounded-2xl bg-gradient-to-br from-elevated to-background border border-border/80 p-8 flex flex-col justify-center gap-4 relative overflow-hidden shadow-inner">
            <div className="space-y-3 max-w-xl">
              <div className="h-4 w-3/4 bg-foreground/15 rounded-full" />
              <div className="h-3 w-full bg-foreground/10 rounded-full" />
              <div className="h-3 w-5/6 bg-foreground/10 rounded-full" />
              <div className="h-3 w-2/3 bg-foreground/10 rounded-full" />
            </div>

            {/* Deck Footer Stats */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-muted font-mono">
              <span className="flex items-center gap-1.5">
                <Eye className="h-3.5 w-3.5" />
                <span>Live Deck View</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Editing</span>
              </span>
            </div>
          </div>

          {/* AI Assistant Section */}
          <div className="space-y-6 pt-4 border-t border-border/60">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              <Sparkles className="h-4 w-4" />
              <span>AI ASSISTANT</span>
            </div>

            <div className="space-y-4 text-sm text-foreground/80 font-medium max-w-3xl">
              <div>
                <p className="font-semibold text-xs text-muted uppercase tracking-wider mb-1">Summary</p>
                <p className="italic text-foreground">
                  "Three key points: architecture, collaboration model, deployment."
                </p>
              </div>

              <div>
                <p className="font-semibold text-xs text-muted uppercase tracking-wider mb-1">Speaker notes</p>
                <p className="italic text-foreground">
                  "Explain the architecture before the implementation slide..."
                </p>
              </div>

              <div>
                <p className="font-semibold text-xs text-muted uppercase tracking-wider mb-1">Questions</p>
                <p className="italic text-foreground">
                  "How does real-time sync work?"
                </p>
              </div>
            </div>

            {/* Share Link Input */}
            <div className="pt-4 border-t border-border/40 space-y-2">
              <span className="font-mono text-xs font-bold text-muted uppercase tracking-wider">
                SHARE LINK
              </span>
              
              <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-elevated border border-border max-w-lg">
                <span className="font-mono text-xs font-semibold text-foreground/90 select-all">
                  flod.app/p/project-alpha
                </span>
                
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg text-muted hover:text-primary hover:bg-primary/10 transition cursor-pointer"
                  aria-label="Copy share link"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              <p className="text-[11px] font-mono text-muted flex items-center gap-1.5 pt-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Share link created</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DeckShowcaseSection;
