const Footer = () => {
  return (
    <footer className="w-full py-16 px-4 md:px-8 border-t border-border bg-surface text-foreground">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        
        {/* Left Brand Column */}
        <div className="space-y-3 max-w-xs">
          <span className="font-primary text-2xl font-bold tracking-tight text-primary">
            Flod
          </span>
          <p className="text-muted text-xs md:text-sm leading-relaxed font-medium">
            Present anywhere. Work together, live.
          </p>
        </div>

        {/* Right Links Columns */}
        <div className="grid grid-cols-2 gap-12 text-xs font-medium">
          {/* Column 1 */}
          <div className="space-y-3">
            <span className="font-semibold text-foreground uppercase tracking-wider text-[11px]">
              Product
            </span>
            <ul className="space-y-2 text-muted">
              <li><a href="#" className="hover:text-primary transition">Presentations</a></li>
              <li><a href="#" className="hover:text-primary transition">Workspaces</a></li>
              <li><a href="#" className="hover:text-primary transition">AI Assistant</a></li>
              <li><a href="#" className="hover:text-primary transition">Documentation</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <span className="font-semibold text-foreground uppercase tracking-wider text-[11px]">
              Resources
            </span>
            <ul className="space-y-2 text-muted">
              <li><a href="#" className="hover:text-primary transition">GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition">Terms</a></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-6xl mx-auto pt-12 mt-12 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-muted">
        <span>© {new Date().getFullYear()} Flod Inc. All rights reserved.</span>
        <span>Built for velocity</span>
      </div>
    </footer>
  );
};

export default Footer;
