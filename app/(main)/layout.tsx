import Nav from "@/components/v2/Nav";
import Footer from "@/components/v2/Footer";

// Hauptseite: Titel und Indexierung kommen aus app/layout.tsx bzw.
// aus den einzelnen Unterseiten.
export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="v2-root relative min-h-screen overflow-clip">
      <div className="v2-noise" aria-hidden />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
