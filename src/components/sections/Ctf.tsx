import { ctfData } from "@/lib/data";

export function Ctf() {
  return (
    <section id="ctf" className="py-24 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Capture The Flag
          </h2>
          <div className="border-l-4 border-primary pl-6 py-2 italic text-muted-foreground mb-10 max-w-2xl mx-auto text-left bg-card/50 rounded-r-lg shadow-sm">
            <p className="leading-relaxed">
              "If you're a good hacker, everyone knows you. If you're a great hacker, no one knows you."
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {ctfData.map((ctf, i) => (
            <a
              key={i}
              href={ctf.url}
              className="bg-card border border-border p-6 rounded-2xl flex items-center gap-4 transition-all hover:border-primary hover:-translate-y-1 hover:shadow-md group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                🛡
              </div>
              <div className="flex-1">
                <h4 className="text-foreground font-bold text-lg mb-1">{ctf.name}</h4>
                <span className="text-xs text-muted-foreground">{ctf.year}</span>
              </div>
              <span className="text-sm font-medium text-primary group-hover:underline">
                View writeup →
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
