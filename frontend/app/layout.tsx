import type { Metadata } from "next";
import { Lora, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ThemeProvider from "./components/ThemeProvider";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "UCC Claude Builders Club",
  description:
    "University College Cork Claude Builders Club – Learn AI, build projects, and collaborate with students exploring the future of AI.",
icons: {
  icon: "/images/claude_logo.svg",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=null;try{t=localStorage.getItem('theme')}catch(e){}var p=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';if((t||p)==='dark')document.documentElement.classList.add('dark');})();`,
          }}
        />
      </head>
      <body className={`${sourceSerif.variable} ${lora.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
