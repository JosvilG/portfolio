import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
} from "./ui";
import { motion } from "framer-motion";

const CardsSection: React.FC = () => {
  const projects = [
    {
      title: "SEAT/CUPRA Park & Pay",
      description:
        "Aplicación desarrollada durante mi estancia en SEAT/CUPRA que permite iniciar sesiones de pago en zonas azules y verdes desde el infotainment del vehículo.",
      role: "Desarrollo front-end y Project Manager",
      tech: ["Angular", "SCSS", "TypeScript", "JWT", "API REST"],
      websiteLink:
        "https://www.cupraofficial.es/cupra-connect/buscador-servicios/detalle-servicios.connect-services.service-059",
      slug: "seat-cupra-park-pay",
      featured: true,
    },
    {
      title: "ZEMRA - Zero Emissions Ratio",
      description:
        "App interna para SEAT/CUPRA que comparaba la contaminación de modelos eléctricos e híbridos frente a gasolina (proyecto iniciado para el mercado alemán).",
      role: "Desarrollo front-end",
      tech: ["Angular", "SCSS", "TypeScript", "JWT", "API REST"],
      slug: "zemra-zero-emissions",
      featured: false,
    },
    {
      title: "Web del Patronat de Festes de Roquetes",
      description:
        "Página web para mostrar toda la información necesaria sobre la organización y facilitar la interacción entre las personas del pueblo y la organización de fiestas.",
      role: "Diseño, desarrollo front-end y back-end completo",
      tech: ["React", "Tailwind CSS", "Javascript", "Firebase"],
      websiteLink: "https://festesroquetes.com",
      repoLink: "https://github.com/JosvilG/patronat-react-web",
      slug: "patronat-festes-roquetes",
      featured: true,
    },
    {
      title: "PDSP",
      description:
        "Página web para Soldebre SCCL que gestiona socios, control de producción agrícola, cuadernos de campo, historial fitosanitario, comunicación entre socios y creación de documentos oficiales, entre otras funcionalidades.",
      role: "Full-stack developer y diseñador UX/UI",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      websiteLink: "https://pdsp.es",
      repoLink: "https://github.com/JosvilG/PDSP",
      slug: "pdsp",
      featured: false,
    },
    {
      title: "Harvest Hub",
      description:
        "Rework de PDSP con mejoras visuales y arquitectónicas; en fase de conceptualización y diseño, sin desarrollo activo aún.",
      role: "Full-stack developer y diseñador UX/UI",
      tech: ["Angular", "SCSS ", "TypeScript", "Express.js", "MySQL"],
      repoLink: "https://github.com/JosvilG/harvesthub",
      slug: "harvest-hub",
      featured: false,
    },
    {
      title: "Fraudify",
      description:
        "Aplicación móvil en progreso para la detección de SCAMS mediante capturas de pantalla, mensajes de texto y el uso de inteligencia artificial.",
      role: "Full-stack developer y diseñador UX/UI",
      tech: ["React Native", "TypeScript", "Tailwind CSS", "Firebase"],
      repoLink: "https://github.com/JosvilG/fraudify",
      slug: "fraudify",
      featured: true,
    },
    {
      title: "P2M",
      description:
        "Aplicación móvil para facilitar la repartición de los pagos entre distintos usuarios a través del escaneo de un QR y una base de datos en tiempo real.",
      role: "Full-stack developer y diseñador UX/UI",
      tech: ["React Native", "TypeScript", "Tailwind CSS", "Firebase"],
      repoLink: "https://github.com/JosvilG/pay2me",
      slug: "p2m",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
      >
        Mis Proyectos
      </motion.h2>{" "}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={`project-${index}`}
            variants={itemVariants}
            className="w-full"
          >
            <Card
              className="h-full flex flex-col bg-black/50 backdrop-blur-sm border-neutral-800 relative"
              containerClassName={`group-hover:shadow-2xl group-hover:shadow-orange-500/[0.1] h-full w-full ${
                project.featured ? "ring-2 ring-yellow-500/50" : ""
              }`}
            >
              {project.featured && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-xs px-2 py-1 rounded-full">
                  Destacado
                </div>
              )}

              <CardHeader className="flex-grow-0">
                <CardTitle className="text-neutral-100 text-lg">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-neutral-400 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="mt-2">
                  <p className="text-xs text-yellow-400 font-medium">Mi rol:</p>
                  <p className="text-xs text-neutral-300">{project.role}</p>
                </div>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-orange-500/20 text-orange-300 rounded-md border border-orange-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>{" "}
                <div className="flex gap-2 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-yellow-500 text-yellow-400 hover:bg-yellow-500/10"
                    onClick={() =>
                      (window.location.href = `/proyecto/${project.slug}`)
                    }
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    Ver detalles
                  </Button>

                  {project.websiteLink && project.websiteLink !== "#" && (
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white border-0"
                      onClick={() => window.open(project.websiteLink, "_blank")}
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.148.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Web
                    </Button>
                  )}

                  {project.repoLink && project.repoLink !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-neutral-700 text-neutral-300 hover:bg-neutral-800"
                      onClick={() => window.open(project.repoLink, "_blank")}
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Código
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export { CardsSection };
export default CardsSection;
