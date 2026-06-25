import { About } from "@/components/About";
import { AttorneySection } from "@/components/AttorneySection";
import { BlogPreview } from "@/components/BlogPreview";
import { CaseResults } from "@/components/CaseResults";
import { FAQContact } from "@/components/FAQContact";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { PracticeAreas } from "@/components/PracticeAreas";
import { Testimonials } from "@/components/Testimonials";
import { TrustCards } from "@/components/TrustCards";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-pearl">
      <Header />
      <Hero />
      <TrustCards />
      <About />
      <PracticeAreas />
      <CaseResults />
      <AttorneySection />
      <FAQContact />
      <Testimonials />
      <Metrics />
      <BlogPreview />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
