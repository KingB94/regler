import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Entwurf 1 – technisch-editorial",
  robots: { index: false, follow: false },
};

export default function V1Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="v1-root flex min-h-screen flex-col bg-frost text-ink">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
