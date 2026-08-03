import type { Metadata } from "next";
import Nav from "@/components/v3/Nav";
import Footer from "@/components/v3/Footer";

export const metadata: Metadata = {
  title: "Entwurf 3 – warm & handwerklich",
  robots: { index: false, follow: false },
};

export default function V3Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="v3-root relative min-h-screen overflow-clip">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
