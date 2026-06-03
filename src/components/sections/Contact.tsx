"use client";

import { Mail, Code, Briefcase, MessageCircle, Send } from "lucide-react";
import Image from "next/image";

export function Contact() {
  const contacts = [
    { icon: <Mail />, title: "Email", info: "praveenresearcher14@gmail.com", href: "mailto:praveenresearcher14@gmail.com" },
    { icon: <Code />, title: "GitHub", info: "@0xlightning", href: "https://github.com/0xlightning" },
    { icon: <Briefcase />, title: "LinkedIn", info: "Praveen KS", href: "https://linkedin.com/in/kspraveen20" },
    { icon: <MessageCircle />, title: "X / Twitter", info: "@0xlightning", href: "https://twitter.com/0xlightning" },
    { icon: <Send />, title: "Telegram", info: "@0xlightning", href: "https://t.me/0xlightning" },
  ];

  const orgs = [
    {
      name: "Kithackclub",
      href: "https://github.com/Kithackclub",
      avatar: "https://avatars.githubusercontent.com/u/75631289?s=400&v=4"
    },
    {
      name: "EddieHub",
      href: "https://github.com/EddieHubCommunity",
      avatar: "https://avatars3.githubusercontent.com/u/66388388?s=150&v=4"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[250px] font-black text-foreground opacity-[0.02] pointer-events-none tracking-tighter z-[-1]">
            1-0
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Let&apos;s build something.
          </h2>
          <p className="text-lg text-muted-foreground">
            Open to collabs, projects, and interesting problems.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {contacts.map((contact, i) => (
            <a
              key={i}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="bg-card border border-border p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-primary/5 hover:border-primary/50 transition-all group shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                {contact.icon}
              </div>
              <h4 className="font-bold text-sm mb-1">{contact.title}</h4>
              <p className="text-xs text-muted-foreground line-clamp-1 break-all w-full">{contact.info}</p>
            </a>
          ))}
        </div>

        <hr className="border-border mb-20" />

        {/* Profile Views + GitHub Stats */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-extrabold tracking-tight">GitHub Stats</h3>
            {/* Profile Views Badge */}
            <img
              src="https://komarev.com/ghpvc/?username=0xlightning&label=Profile+Views&color=00D9FF&style=flat"
              alt="Profile Views"
              className="h-6"
            />
          </div>

          {/* Streak Stats */}
          <div className="flex justify-center mb-6">
            <div className="rounded-2xl overflow-hidden border border-border bg-card p-3 shadow-sm hover:shadow-md transition-shadow w-full max-w-xl">
              <img
                src="https://github-readme-streak-stats.herokuapp.com?user=0xlightning&theme=tokyonight&hide_border=true&stroke=00D9FF"
                alt="GitHub Streak"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Contribution Activity */}
        <div className="mb-16">
          <h3 className="text-2xl font-extrabold tracking-tight mb-8">Contribution Activity</h3>
          <div className="rounded-2xl overflow-hidden border border-border bg-card p-3 shadow-sm hover:shadow-md transition-shadow">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=0xlightning&theme=tokyo-night&hide_border=true&color=00D9FF&line=26A69A&point=ffffff"
              alt="Contribution Activity Graph"
              className="w-full h-auto"
            />
          </div>
        </div>

        <hr className="border-border mb-16" />

        {/* Organizations */}
        <div className="mb-16">
          <h3 className="text-2xl font-extrabold tracking-tight mb-8">Organizations</h3>
          <div className="flex flex-wrap gap-6">
            {orgs.map((org, i) => (
              <a
                key={i}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors shadow-sm">
                  <img
                    src={org.avatar}
                    alt={org.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                  {org.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        <hr className="border-border mb-16" />

        {/* Holopin Board */}
        <div className="mb-8">
          <h3 className="text-2xl font-extrabold tracking-tight mb-8">Holopin Badges</h3>
          <a
            href="https://holopin.io/@0xlightning"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden border border-border bg-card p-3 shadow-sm hover:shadow-md hover:border-primary/50 transition-all"
          >
            <img
              src="https://holopin.io/api/user/board?user=0xlightning"
              alt="0xlightning's Holopin Board"
              className="w-full h-auto"
            />
          </a>
        </div>

      </div>
    </section>
  );
}
