import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "lxx9 — Full-stack developer",
  description: "Frontend-first full-stack development for companies and founders.",
  metadataBase: new URL("https://lxx9.dev"),
  openGraph: { title: "lxx9 — Full-stack developer", description: "I build digital products that hold up under real use.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
