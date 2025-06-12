import React from "react";
import { StickyBanner, Timeline } from "./ui";
import { motion } from "framer-motion";

const DemoSection: React.FC = () => {
  // Datos para Timeline organizado por años
  const timelineData = [
    {
      title: "2025",
      date: "febrero - Presente",
      content: (
        <div>
          <h4 className="text-yellow-400 font-semibold mb-3 text-lg">
            Project Manager - VASS – SEAT/CUPRA, Martorell
          </h4>
          <ul className="text-neutral-300 text-sm space-y-2">
            <li>
              • Planificación y coordinación de la Webapp Park & Pay, ya
              disponibles en todos los modelos de la marca SEAT/CUPRA.
            </li>
            <li>
              • Organización y liderazgo de los equipos de UX/UI, desarrollo y
              testing; establecimiento de sprints y ceremonias ágiles.
            </li>
            <li>
              • Comunicación continua con stakeholders del grupo WAG para
              alinear expectativas y reportar avances.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2023-2024",
      date: "marzo 2023 - Presente",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-yellow-400 font-semibold mb-3 text-lg">
              Desarrollador de Software - VASS – SEAT/CUPRA, Martorell
            </h4>
            <ul className="text-neutral-300 text-sm space-y-2">
              <li>
                • Desarrollo desde cero de las webapps Park & Pay y Zemra para
                SEAT/CUPRA, empleando Angular, SCSS, TypeScript y JWT, entre
                otras tecnologías.
              </li>
              <li>
                • Implantación de buenas prácticas de despliegue continuo.
              </li>
              <li>
                • Colaboración estrecha con equipos de UX/UI, backend y QA para
                asegurar entregables de alta calidad.
              </li>
              <li>
                • Gestión de tareas y seguimiento de incidencias mediante JIRA y
                la plataforma Atlassian.
              </li>
            </ul>
          </div>

          <div>
            <p className="text-neutral-400 text-xs mb-2">
              febrero 2023 - enero 2024
            </p>
            <h4 className="text-yellow-400 font-semibold mb-3 text-lg">
              Web Developer - Soldebre, Tortosa
            </h4>
            <ul className="text-neutral-300 text-sm space-y-2">
              <li>
                • Desarrollé un portal web para la gestión integral de la
                cooperativa agrícola, incluyendo módulos de socios, producciones
                y comunicados.
              </li>
              <li>
                • Implementé un sistema de creación automática de documentos y
                de cuadernos agrícolas para el seguimiento de tareas de campo.
              </li>
              <li>
                • Diseñé y desarrollé el módulo de gestión de productos
                sanitarios, con registro de lotes y caducidades.
              </li>
              <li>
                • Frontend construido con HTML, CSS y JavaScript, interactuando
                con un backend desarrollado en PHP para la lógica de negocio y
                acceso a base de datos.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "2017-2021",
      date: "septiembre 2017 - julio 2021",
      content: (
        <div>
          <h4 className="text-orange-400 font-semibold mb-3 text-lg">
            Multimedia - UPC – CITM, Terrassa
          </h4>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Durante mi formación en Multimedia adquirí sólidos conocimientos en
            programación, profundizando en el desarrollo de interfaces y
            experiencias interactivas. Trabajé con tecnologías como React
            Native, Unity, HTML5, CSS y JavaScript, y cursé asignaturas clave de
            desarrollo web, desarrollo de aplicaciones móviles y gráficos 3D.
            Participé en proyectos académicos que incluyeron el diseño de
            prototipos de apps y la creación de entornos 3D, aplicando
            metodologías ágiles de trabajo. Esta combinación de habilidades
            técnicas y creativas me dotó de una visión integral para abordar
            soluciones multimedia innovadoras.
          </p>
        </div>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-20 px-4"
    >
      {/* Timeline principal */}
      <motion.section variants={itemVariants}>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Mi Trayectoria
        </h2>
        <p className="text-center text-neutral-400 text-lg mb-16 max-w-3xl mx-auto">
          Un recorrido por mi vida profesional y educativa
        </p>

        <Timeline data={timelineData} />
      </motion.section>
    </motion.div>
  );
};

export { DemoSection };
export default DemoSection;
