import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui";

interface ProjectDetailProps {
  slug: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ slug }) => {
  const projectsData = {
    "seat-cupra-park-pay": {
      title: "SEAT/CUPRA Park & Pay",
      description:
        "Aplicación desarrollada durante mi estancia en SEAT/CUPRA que permite iniciar sesiones de pago en zonas azules y verdes desde el infotainment del vehículo.",
      longDescription:
        "Durante mi tiempo en SEAT/CUPRA, lideré el desarrollo de esta innovadora aplicación que revoluciona la experiencia de estacionamiento urbano. La aplicación se integra directamente con el sistema de infotainment del vehículo, permitiendo a los usuarios iniciar y gestionar sesiones de pago en zonas azules y verdes sin necesidad de salir del coche.",
      role: "Desarrollo front-end y Project Manager",
      tech: ["Angular", "SCSS", "TypeScript", "JWT", "API REST"],
      websiteLink:
        "https://www.cupraofficial.es/cupra-connect/buscador-servicios/detalle-servicios.connect-services.service-059",
      images: [
        "/public/images/projects/p&p/Cupra-logo.png",
        "/public/images/projects/p&p/1.jpg",
        "/public/images/projects/p&p/2.jpg",
        "/public/images/projects/p&p/3.jpg",
        "/public/images/projects/p&p/4.jpg",
        "/public/images/projects/p&p/5.jpg",
      ],
      features: [
        "Integración directa con el infotainment del vehículo",
        "Pago automático de zonas azules y verdes",
        "Interfaz intuitiva adaptada al contexto automotriz",
        "Gestión de sesiones en tiempo real",
        "Notificaciones de vencimiento de tiempo",
      ],
      challenges: [
        "Adaptación de la UI para pantallas de infotainment",
        "Integración con Parkopedia APIs de pago urbano",
        "Optimización de la experiencia de usuario en contexto de conducción",
      ],
      duration: "En desarrollo...",
      team: "1 desarrolladores, 4 diseñadores UX/UI, 1 Product Manager, 5 traductoras, 1 QA",
      year: "2023-Actualidad",
    },
    "zemra-zero-emissions": {
      title: "ZEMRA - Zero Emissions Ratio",
      description:
        "App interna para SEAT/CUPRA que comparaba la contaminación de modelos eléctricos e híbridos frente a gasolina (proyecto iniciado para el mercado alemán).",
      longDescription:
        "ZEMRA fue una aplicación estratégica desarrollada para el mercado alemán que ayudaba a los clientes y vendedores a visualizar y comparar el impacto ambiental de diferentes tipos de vehículos. La aplicación calculaba en tiempo real las emisiones de CO2 y otros contaminantes, proporcionando datos precisos para la toma de decisiones de compra.",
      role: "Desarrollo front-end",
      tech: ["Angular", "SCSS", "TypeScript", "JWT", "API REST"],
      images: [],
      features: [
        "Cálculo en tiempo real de emisiones de CO2",
        "Comparativas visuales entre modelos eléctricos, híbridos y gasolina",
        "Dashboard interactivo con gráficos y estadísticas",
        "Integración con base de datos de vehículos SEAT/CUPRA",
        "Reportes personalizados de impacto ambiental",
      ],
      challenges: [
        "Integración con múltiples fuentes de datos de emisiones",
        "Creación de gráficas complejas de datos ambientales",
        "Optimización de performance para cálculos en tiempo real",
      ],
      duration: "1 año",
      year: "2023-2024",
    },
    "patronat-festes-roquetes": {
      title: "Web del Patronat de Festes de Roquetes",
      description:
        "Página web para mostrar toda la información necesaria sobre la organización y facilitar la interacción entre las personas del pueblo y la organización de fiestas.",
      longDescription:
        "Proyecto personal desarrollado para modernizar la presencia digital del Patronat de Festes de mi pueblo natal, Roquetes. La web centraliza toda la información sobre las fiestas patronales, eventos, noticias y permite una comunicación directa entre los organizadores y los vecinos.",
      role: "Diseño, desarrollo front-end y back-end completo",
      tech: ["React", "Tailwind CSS", "Firebase", "Firestore"],
      websiteLink: "https://festesroquetes.com",
      repoLink: "https://github.com/JosvilG/patronat-react-web",
      images: [
        "/api/placeholder/800/500",
        "/api/placeholder/800/500",
        "/api/placeholder/800/500",
        "/api/placeholder/800/500",
      ],
      features: [
        "Sistema de gestión de contenido para eventos y noticias",
        "Calendario interactivo de actividades",
        "Galería de fotos de ediciones anteriores",
        "Sistema de notificaciones para eventos importantes",
        "Panel de administración para gestionar contenido",
        "Diseño responsive adaptado a todos los dispositivos",
      ],
      challenges: [
        "Diseño de una experiencia de usuario atractiva para todas las edades",
        "Implementación de un CMS fácil de usar para los organizadores",
        "Optimización de imágenes y performance para conexiones lentas",
        "Integración con redes sociales para mayor alcance",
      ],
      duration: "En desarrollo...",
      team: "Desarrollo individual",
      year: "2025",
    },
    pdsp: {
      title: "PDSP",
      description:
        "Página web para Soldebre SCCL que gestiona socios, control de producción agrícola, cuadernos de campo, historial fitosanitario, comunicación entre socios y creación de documentos oficiales, entre otras funcionalidades.",
      longDescription:
        "Sistema integral de gestión para la cooperativa agrícola Soldebre SCCL. La plataforma digitaliza y automatiza los procesos tradicionales de gestión agrícola, desde el control de socios hasta la generación de documentos oficiales requeridos por la administración.",
      role: "Full-stack developer y diseñador UX/UI",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      websiteLink: "https://pdsp.es",
      repoLink: "https://github.com/JosvilG/PDSP",
      images: [
        "/api/placeholder/800/500",
        "/api/placeholder/800/500",
        "/api/placeholder/800/500",
      ],
      features: [
        "Gestión completa de socios y sus datos",
        "Control de producción agrícola por parcelas",
        "Cuadernos de campo digitales",
        "Historial fitosanitario automatizado",
        "Sistema de comunicación interna",
        "Generación automática de documentos oficiales",
        "Reportes de producción y estadísticas",
      ],
      challenges: [
        "Digitalización de procesos agrícolas tradicionales",
        "Creación de interfaces intuitivas para usuarios no técnicos",
        "Integración con normativas agrícolas oficiales",
        "Gestión de grandes volúmenes de datos de producción",
      ],
      duration: "12 meses",
      team: "Desarrollo individual",
      year: "2023-2024",
    },
    "harvest-hub": {
      title: "Harvest Hub",
      description:
        "Rework de PDSP con mejoras visuales y arquitectónicas; en fase de conceptualización y diseño, sin desarrollo activo aún.",
      longDescription:
        "Harvest Hub representa la evolución natural de PDSP, incorporando tecnologías modernas y una arquitectura más robusta. Este proyecto busca mejorar significativamente la experiencia de usuario y la escalabilidad del sistema, preparándolo para futuras expansiones y nuevas funcionalidades.",
      role: "Full-stack developer y diseñador UX/UI",
      tech: ["Angular", "SCSS", "TypeScript", "Express.js", "MySQL"],
      repoLink: "https://github.com/JosvilG/harvesthub",
      images: [
        "/public/images/projects/hhb/1.png",
        "/public/images/projects/hhb/2.png",
        "/public/images/projects/hhb/3.png",
        "/public/images/projects/hhb/4.png",
        "/public/images/projects/hhb/5.png",
        "/public/images/projects/hhb/6.png",
        "/public/images/projects/hhb/7.png",
        "/public/images/projects/hhb/8.png",
        "/public/images/projects/hhb/9.png",
        "/public/images/projects/hhb/10.png",
        "/public/images/projects/hhb/11.png",
      ],
      features: [
        "Arquitectura modular y escalable",
        "Interfaz de usuario completamente rediseñada",
        "API REST robusta con TypeScript",
        "Sistema de autenticación avanzado",
        "Dashboard analítico mejorado",
        "Integración con servicios en la nube",
      ],
      challenges: [
        "Migración de datos desde el sistema legacy",
        "Rediseño completo de la experiencia de usuario",
        "Implementación de nuevas tecnologías",
        "Mantenimiento de compatibilidad con procesos existentes",
      ],
      duration: "Indefinida",
      team: "Desarrollo individual",
      year: "2024-presente",
    },
    fraudify: {
      title: "Fraudify",
      description:
        "Aplicación móvil en progreso para la detección de SCAMS mediante capturas de pantalla, mensajes de texto y el uso de inteligencia artificial.",
      longDescription:
        "Fraudify es una aplicación móvil innovadora que utiliza inteligencia artificial para detectar y prevenir estafas digitales. La app analiza capturas de pantalla, mensajes de texto y otros contenidos para identificar patrones comunes de fraude y alertar a los usuarios antes de que caigan en trampas.",
      role: "Full-stack developer y diseñador UX/UI",
      tech: ["React Native", "TypeScript", "Tailwind CSS", "Firebase"],
      repoLink: "https://github.com/JosvilG/fraudify",
      images: [
        "/public/images/projects/fraudify/Loading view.png",
        "/public/images/projects/fraudify/Loading view-1.png",
        "/public/images/projects/fraudify/Loading view-2.png",
        "/public/images/projects/fraudify/Loading view-3.png",
        "/public/images/projects/fraudify/Loading view-4.png",
        "/public/images/projects/fraudify/Loading view-5.png",
        "/public/images/projects/fraudify/Loading view-6.png",
        "/public/images/projects/fraudify/Loading view-7.png",
        "/public/images/projects/fraudify/Loading view-8.png",
        "/public/images/projects/fraudify/Loading view-9.png",
        "/public/images/projects/fraudify/Loading view-10.png",
        "/public/images/projects/fraudify/Loading view-11.png",
        "/public/images/projects/fraudify/Loading view-12.png",
        "/public/images/projects/fraudify/Loading view-13.png",
        "/public/images/projects/fraudify/Loading view-14.png",
        "/public/images/projects/fraudify/Loading view-15.png",
        "/public/images/projects/fraudify/Loading view-16.png",
        "/public/images/projects/fraudify/Loading view-17.png",
        "/public/images/projects/fraudify/Loading view-18.png",
        "/public/images/projects/fraudify/Loading view-19.png",
      ],
      features: [
        "Análisis de imágenes con IA para detectar fraudes",
        "Procesamiento de mensajes de texto sospechosos",
        "Base de datos de patrones de estafa conocidos",
        "Alertas en tiempo real",
        "Educación sobre tipos de fraude",
        "Reportes comunitarios de nuevas amenazas",
        "Integración con sistemas de seguridad móvil",
      ],
      challenges: [
        "Implementación de modelos de machine learning en dispositivos móviles",
        "Balanceamiento entre privacidad y funcionalidad",
        "Creación de una base de datos robusta de patrones de fraude",
        "Optimización de performance para análisis en tiempo real",
      ],
      duration: "En desarrollo...",
      team: "Desarrollo individual",
      year: "2025-presente",
    },
    p2m: {
      title: "P2M (Pay2Me)",
      description:
        "Aplicación móvil para facilitar la repartición de los pagos entre distintos usuarios a través del escaneo de un QR y una base de datos en tiempo real.",
      longDescription:
        "Pay2Me es una solución móvil que simplifica el proceso de dividir gastos entre amigos, familiares o compañeros. Utilizando códigos QR y una base de datos en tiempo real, la aplicación facilita el cálculo y seguimiento de deudas compartidas de manera intuitiva y eficiente.",
      role: "Full-stack developer y diseñador UX/UI",
      tech: ["React Native", "TypeScript", "Tailwind CSS", "Firebase"],
      repoLink: "https://github.com/JosvilG/pay2me",
      images: [
        "/public/images/projects/p2m/1.png",
        "/public/images/projects/p2m/2.png",
        "/public/images/projects/p2m/3.png",
        "/public/images/projects/p2m/4.png",
        "/public/images/projects/p2m/5.png",
        "/public/images/projects/p2m/6.png",
        "/public/images/projects/p2m/7.png",
        "/public/images/projects/p2m/8.png",
        "/public/images/projects/p2m/9.png",
        "/public/images/projects/p2m/10.png",
        "/public/images/projects/p2m/11.png",
        "/public/images/projects/p2m/12.png",
        "/public/images/projects/p2m/13.png",
        "/public/images/projects/p2m/14.png",
        "/public/images/projects/p2m/15.png",
        "/public/images/projects/p2m/16.png",
        "/public/images/projects/p2m/17.png",
        "/public/images/projects/p2m/18.png",
        "/public/images/projects/p2m/19.png",
        "/public/images/projects/p2m/20.png",
        "/public/images/projects/p2m/21.png",
        "/public/images/projects/p2m/22.png",
      ],
      features: [
        "Escaneo de QR para unirse a grupos de gasto",
        "Cálculo automático de divisiones de gastos",
        "Seguimiento en tiempo real de deudas",
        "Notificaciones de pagos pendientes",
        "Historial completo de transacciones",
        "Integración con métodos de pago populares",
        "Grupos temporales y permanentes",
      ],
      challenges: [
        "Sincronización en tiempo real entre múltiples usuarios",
        "Gestión segura de información financiera",
        "Creación de algoritmos justos para división de gastos",
        "Diseño de UX intuitiva para transacciones financieras",
      ],
      duration: "Indefinida",
      team: "Desarrollo individual",
      year: "2024",
    },
  };

  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado</h1>
          <p className="text-neutral-300">El proyecto que buscas no existe.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-gray-900">
      <div className="container mx-auto px-4 py-20">
        {/* Botón de regreso */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button
            variant="outline"
            className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white border-0"
            onClick={() => window.history.back()}
          >
            ← Volver a proyectos
          </Button>
        </motion.div>

        {/* Header del proyecto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-500 to-yellow-400 mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
            {project.longDescription}
          </p>

          {/* Metadatos del proyecto */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-400">
            <div>
              <strong>Rol:</strong> {project.role}
            </div>
            <div>
              <strong>Duración:</strong> {project.duration}
            </div>
            <div>
              <strong>Año:</strong> {project.year}
            </div>
            <div>
              <strong>Equipo:</strong> {project.team}
            </div>
          </div>
        </motion.div>

        {/* Enlaces del proyecto */}
        {(project.websiteLink || project.repoLink) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {project.websiteLink && (
              <Button
                variant="default"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white border-0"
                onClick={() => window.open(project.websiteLink, "_blank")}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.148.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                    clipRule="evenodd"
                  />
                </svg>
                Ver sitio web
              </Button>
            )}
            {project.repoLink && (
              <Button
                variant="outline"
                className="border-neutral-600 text-neutral-300 hover:bg-neutral-800"
                onClick={() => window.open(project.repoLink, "_blank")}
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
                Ver código
              </Button>
            )}
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Imágenes del proyecto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Capturas del proyecto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-neutral-800 rounded-lg overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`${project.title} - Captura ${index + 1}`}
                    className="w-full h-64 object-contain "
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Información lateral */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Tecnologías */}
            <div className="bg-black/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Tecnologías utilizadas
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-orange-500/20 text-orange-300 rounded-md border border-orange-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Características principales */}
            <div className="bg-black/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Características principales
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-neutral-300">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desafíos técnicos */}
            <div className="bg-black/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Desafíos técnicos
              </h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start text-neutral-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export { ProjectDetail };
export default ProjectDetail;
