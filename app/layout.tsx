import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://takamatsu-hikaru.github.io"),
  title: "Bofan Zhu · Researcher & Builder",
  description: "Bofan Zhu (Hikaru) — student researcher exploring long-horizon agents, agent failure, embodied intelligence, VLA, and robotic manipulation.",
  icons: { icon: "/hikaru-avatar-2026.jpg", shortcut: "/hikaru-avatar-2026.jpg" },
  openGraph: {
    title: "Bofan Zhu · Agents that keep going",
    description: "Student researcher exploring long-horizon agents and embodied intelligence.",
    images: [{ url: "/og.png", width: 1734, height: 909, alt: "Bofan Zhu — Agents that keep going" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bofan Zhu · Agents that keep going",
    description: "Student researcher exploring long-horizon agents and embodied intelligence.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}


