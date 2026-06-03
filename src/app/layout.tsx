import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Praveen KS (0xlightning) — Full Stack Developer",
  description:
    "Full Stack Developer with 2+ years of experience building scalable SaaS platforms, eCommerce solutions, and real-time web applications using React.js, Next.js, Node.js, TypeScript, MongoDB, and Firebase.",
  keywords: [
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "SaaS",
    "Firebase",
    "MongoDB",
    "Praveen KS",
    "0xlightning",
  ],
  authors: [{ name: "Praveen KS", url: "https://github.com/0xlightning" }],
  openGraph: {
    title: "Praveen KS — Full Stack Developer",
    description:
      "Architecting scalable SaaS platforms, eCommerce solutions & real-time web applications. 2+ years of production experience.",
    url: "https://0xlightning.github.io",
    siteName: "0xlightning Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praveen KS — Full Stack Developer",
    description:
      "Architecting scalable SaaS platforms, eCommerce solutions & real-time web applications.",
    creator: "@0xlightning",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased relative min-h-screen flex flex-col`}
      >
        <div className="fixed inset-0 z-[-1] opacity-[0.025] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 w-full relative z-0">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
