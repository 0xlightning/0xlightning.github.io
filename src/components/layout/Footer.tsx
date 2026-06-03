import Link from "next/link";

export function Footer() {
  return (
    <footer id="footer" className="relative mt-24 border-t border-border bg-background pt-16 pb-8 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-foreground">
              <span className="text-2xl">♟</span>
              <span>K S PRAVEEN</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Architecting intelligent solutions across the full stack.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="flex flex-col gap-2">
              {["About", "Projects", "Timeline", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground uppercase tracking-wider text-sm">Status</h4>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-foreground">Ready for the next move</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Based in Salem, Tamil Nadu <br /> +91 90251 00335
            </p>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} · Designed & developed with precision
          </p>
        </div>
      </div>
      
      {/* Animated bottom border line (Cyan highlight) */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent w-full opacity-50"></div>
    </footer>
  );
}
