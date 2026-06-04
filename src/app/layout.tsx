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

const siteUrl = "https://0xlightning.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Praveen KS — Full Stack Developer | React, Next.js, Node.js",
    template: "%s | Praveen KS",
  },
  description:
    "Full Stack Developer with 2+ years of experience building scalable SaaS platforms, eCommerce solutions, and real-time web applications. Expert in React.js, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, Firebase, and AI integration. Based in Salem, Tamil Nadu.",
  keywords: [
    "Full Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "SaaS Developer",
    "Firebase Developer",
    "MongoDB",
    "Shopify Developer",
    "WhatsApp Business API",
    "AI Integration",
    "LLM Orchestration",
    "IoT Developer",
    "Praveen KS",
    "0xlightning",
    "Salem Tamil Nadu",
    "Coimbatore Developer",
    "Active Theory",
    "Freelance Developer India",
  ],
  authors: [{ name: "Praveen KS", url: siteUrl }],
  creator: "Praveen KS",
  publisher: "Praveen KS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Praveen KS Portfolio",
    title: "Praveen KS — Full Stack Developer | React, Next.js, Node.js",
    description:
      "Full Stack Developer with 2+ years of experience. Building scalable SaaS, eCommerce & real-time apps. Reduced cart abandonment 30%, cut dev time 40–75% with AI tools. MVP delivery in 4–7 days.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Praveen KS — Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@0xlightning",
    creator: "@0xlightning",
    title: "Praveen KS — Full Stack Developer | React, Next.js, Node.js",
    description:
      "Full Stack Developer. SaaS · eCommerce · IoT · AI Integration. MVP in 4–7 days. Based in Salem, Tamil Nadu.",
    images: [`${siteUrl}/og-image.png`],
  },
  verification: {
    google: "",
  },
  category: "technology",
};

// JSON-LD Structured Data — Person + WebSite + WebPage (SEO + AEO + GEO)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Praveen KS",
      alternateName: "0xlightning",
      url: siteUrl,
      jobTitle: "Full Stack Developer",
      worksFor: {
        "@type": "Organization",
        name: "Active Theory",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Coimbatore",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Salem",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      email: "praveenresearcher14@gmail.com",
      telephone: "+919025100335",
      sameAs: [
        "https://github.com/0xlightning",
        "https://linkedin.com/in/kspraveen20",
      ],
      knowsAbout: [
        "React.js",
        "Next.js",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "PostgreSQL",
        "Firebase",
        "SaaS Development",
        "eCommerce Development",
        "Shopify",
        "WhatsApp Business API",
        "AI Integration",
        "LLM Orchestration",
        "IoT Systems",
        "REST API Development",
        "JWT Authentication",
        "OAuth 2.0",
        "Role-Based Access Control",
        "WebSocket",
        "Docker",
        "CI/CD",
      ],
      description:
        "Full Stack Developer with 2+ years of experience building scalable SaaS platforms, eCommerce solutions, and real-time web applications using React.js, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, and Firebase.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Praveen KS — Full Stack Developer Portfolio",
      description:
        "Portfolio of Praveen KS, a Full Stack Developer specialising in SaaS, eCommerce, and AI-integrated web applications.",
      author: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Praveen KS — Full Stack Developer | React, Next.js, Node.js",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      description:
        "Portfolio showcasing full-stack projects, technical skills, and professional experience across SaaS, eCommerce, and IoT domains.",
      inLanguage: "en-US",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What technologies does Praveen KS specialise in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Praveen KS specialises in React.js, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, Firebase, Shopify, and AI/LLM integration. He has 2+ years of full-stack development experience.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can Praveen KS deliver an MVP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Praveen KS delivers production-ready MVPs in 4–7 days, using AI boilerplate generation and agile sprints.",
          },
        },
        {
          "@type": "Question",
          name: "What industries has Praveen KS worked in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Praveen KS has built full-stack systems across SaaS, eCommerce (Shopify), IoT dashboards, and AI-integrated internal tools.",
          },
        },
        {
          "@type": "Question",
          name: "Is Praveen KS available for freelance work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Praveen KS is open to freelance projects and collaborations. You can contact him at praveenresearcher14@gmail.com.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        {/* JSON-LD Structured Data for SEO / AEO / GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased relative min-h-screen flex flex-col`}
      >
        <div className="fixed inset-0 z-[-1] opacity-[0.025] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
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
