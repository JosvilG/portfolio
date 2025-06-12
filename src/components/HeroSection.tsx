import React from "react";
import { BackgroundBeams, TextGenerateEffect, Button, Sparkles } from "./ui";

const HeroSection: React.FC = () => {
  const slogan = "Calidad y velocidad, no son incompatibles.";

  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden">
      <BackgroundBeams />
      <Sparkles className="absolute inset-0" density={50} />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Josep Vilchez Garcia
        </h1>

        <h2 className="text-xl md:text-3xl font-semibold text-center text-yellow-400 mt-4 mb-6">
          Desarrollador Full-Stack & Project Manager
        </h2>
        <TextGenerateEffect
          words={slogan}
          className="text-center text-lg md:text-xl mt-6 text-neutral-300 max-w-2xl mx-auto"
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button
            variant="default"
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white border-0"
            onClick={() => {
              const aboutSection = document.getElementById("sobre-mi");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Conoce más sobre mí
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-yellow-500 text-black hover:text-black hover:bg-yellow-200"
            onClick={() => {
              const projectsSection = document.getElementById("proyectos");
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Ver mis proyectos
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-yellow-500 text-black hover:text-black hover:bg-yellow-200"
            onClick={() => {
              const contactSection = document.getElementById("contacto");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contáctame
          </Button>
        </div>
      </div>
    </div>
  );
};

export { HeroSection };
export default HeroSection;
