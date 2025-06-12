import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui";
import { cn } from "../lib/utils";

const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const valores = [
    "Calidad",
    "Velocidad",
    "Colaboración",
    "Fiabilidad",
    "Enfoque en el usuario",
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Contenido principal */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Sobre mí
            </h2>

            <div className="space-y-6 text-neutral-300 text-lg leading-relaxed">
              <p>
                ¡Hola! Soy{" "}
                <strong className="text-yellow-400">
                  Josep Vilchez Garcia
                </strong>
                , nacido en Roquetes (Tarragona). Llevo{" "}
                <strong className="text-yellow-400">
                  3 años de experiencia
                </strong>{" "}
                como desarrollador, iniciándome en la programación durante la
                universidad. He combinado mi faceta de Front-End developer con
                roles de Project Management para liderar equipos y proyectos de
                software.
              </p>

              <p>
                Me apasiona{" "}
                <strong className="text-orange-400">
                  dar solución a problemas a través de la programación
                </strong>
                ,{" "}
                <strong className="text-orange-400">
                  aprender nuevas tecnologías
                </strong>{" "}
                y crear software que aporte valor real a las personas.
              </p>

              <p>
                Hablo catalán y español de forma nativa, y tengo un nivel
                conversacional de inglés. En mi tiempo libre me gusta seguir
                aprendiendo nuevas tecnologías, desarrollar software propio y
                llevar a cabo proyectos personales.
              </p>
            </div>

            {/* Botones de acción */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white border-0"
                onClick={() => {
                  // Aquí añadirás el enlace real de tu CV
                  window.open("#", "_blank");
                }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Descargar CV
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-yellow-500 text-black hover:text-black hover:bg-yellow-200"
                onClick={() => {
                  // Aquí añadirás tu URL real de GitHub
                  window.open("https://github.com/JosvilG", "_blank");
                }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-yellow-500 text-black hover:text-black hover:bg-yellow-200"
                onClick={() => {
                  // Aquí añadirás tu URL real de LinkedIn
                  window.open(
                    "https://www.linkedin.com/in/josep-vilchez-garcia/",
                    "_blank"
                  );
                }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
                LinkedIn
              </Button>
            </motion.div>
          </motion.div>

          {/* Panel lateral con valores */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Mis Valores */}
            <div className="bg-black/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                Mis Valores
              </h3>
              <ul className="space-y-3">
                {valores.map((valor, index) => (
                  <motion.li
                    key={valor}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-neutral-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mr-3" />
                    {valor}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Estadísticas rápidas */}
            <div className="grid grid-cols-1 gap-4">
              <motion.div
                variants={itemVariants}
                className="bg-black/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-bold text-yellow-400">3+</div>
                <div className="text-sm text-neutral-400">
                  Años de experiencia
                </div>
              </motion.div>
            </div>

            {/* Idiomas */}
            <div className="bg-black/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">
                Idiomas
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300">Catalán</span>
                  <span className="text-orange-400 text-sm font-medium">
                    Nativo
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300">Español</span>
                  <span className="text-orange-400 text-sm font-medium">
                    Nativo
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300">Inglés</span>
                  <span className="text-yellow-400 text-sm font-medium">
                    Conversacional
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { AboutSection };
export default AboutSection;
