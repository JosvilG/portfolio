import React from "react";
import { TracingBeam } from "./ui";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import CardsSection from "./CardsSection";
import SpecialtiesSection from "./SpecialtiesSection";
import DemoSection from "./DemoSection";
import ContactForm from "./ContactForm";

const MainContent: React.FC = () => {
  return (
    <TracingBeam className="w-full">
      <div className="space-y-0">
        {/* Hero Section */}
        <section id="inicio" className="min-h-screen">
          <HeroSection />
        </section>
        {/* About Section */}
        <section id="sobre-mi" className="py-20">
          <AboutSection />
        </section>
        <section id="especialidades" className="py-20">
          <DemoSection />
        </section>
        {/* Proyectos Section */}
        <section id="proyectos" className="py-20">
          <CardsSection />
        </section>{" "}
        {/* Especialidades Section */}
        <section id="especialidades" className="py-20">
          <SpecialtiesSection />
        </section>
        {/* Contacto Section */}
        <section id="contacto" className="py-20">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Contacto
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              ¿Tienes una idea, proyecto o simplemente quieres saludar? ¡Envíame
              un mensaje!
            </p>
            <ContactForm />
          </div>
        </section>
      </div>
    </TracingBeam>
  );
};

export { MainContent };
export default MainContent;
