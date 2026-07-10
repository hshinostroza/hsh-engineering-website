import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import ServicesAbout from "@/components/ServicesAbout";
import ServiceSections from "@/components/ServiceSections";
import MeetTheTeam from "@/components/MeetTheTeam";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesAbout />
        <ServiceSections />
        <MeetTheTeam />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
