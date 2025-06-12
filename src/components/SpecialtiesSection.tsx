import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./ui";
import {
  SiReact,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiLaravel,
  SiPhp,
  SiBootstrap,
  SiMysql,
  SiFirebase,
  SiFilezilla,
  SiAdobe,
  SiFigma,
  SiJira,
  SiConfluence,
  SiTrello,
  SiBitbucket,
  SiGithub,
  SiGit,
} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";

const SpecialtiesSection: React.FC = () => {
  const specialties = [
    {
      title: "Desarrollo Frontend & Backend",
      header: <DevelopmentIcons />,
      className: "md:col-span-2",
      technologies: [
        "React",
        "Angular",
        "TypeScript",
        "Node.js",
        "Express",
        "PHP",
      ],
    },
    {
      title: "BBDD & File Management",
      header: <DatabaseIcons />,
      className: "md:col-span-1",
      technologies: ["MySQL", "Firebase", "Firestore", "MongoDB"],
    },
    {
      title: "Design & UX/UI",
      header: <DesignIcons />,
      className: "md:col-span-1",
      technologies: ["Figma", "Adobe XD", "Tailwind CSS", "SCSS"],
    },
    {
      title: "Project Management & Documentation",
      header: <ProjectManagementIcons />,
      className: "md:col-span-2",
      technologies: ["Scrum", "Agile", "Git", "Jira", "Notion", "Confluence"],
    },
  ];

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

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          >
            Mis Especialidades
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-center text-neutral-400 text-lg mb-12 max-w-3xl mx-auto"
          >
            Combinando desarrollo técnico con gestión de proyectos para crear
            soluciones completas y eficientes
          </motion.p>

          <motion.div variants={itemVariants}>
            <BentoGrid className="max-w-4xl mx-auto">
              {specialties.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  header={item.header}
                  className={item.className}
                />
              ))}
            </BentoGrid>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Componente para iconos de desarrollo
const DevelopmentIcons = () => {
  const techIcons = [
    { Icon: SiReact, name: "React", color: "text-blue-400" },
    { Icon: SiAngular, name: "Angular", color: "text-red-500" },
    { Icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
    { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { Icon: SiFlutter, name: "Flutter", color: "text-blue-300" },
    { Icon: SiHtml5, name: "HTML5", color: "text-orange-500" },
    { Icon: SiCss3, name: "CSS3", color: "text-blue-500" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
    { Icon: SiSass, name: "Sass", color: "text-pink-400" },
    { Icon: SiLaravel, name: "Laravel", color: "text-red-600" },
    { Icon: SiPhp, name: "PHP", color: "text-purple-500" },
    { Icon: SiBootstrap, name: "Bootstrap", color: "text-purple-600" },
  ];
  return (
    <div className="flex flex-wrap gap-4 p-6 relative">
      {/* Grid de iconos de tecnologías */}
      <div className="relative z-10 grid grid-cols-4 md:grid-cols-6 gap-4 w-full">
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center group"
          >
            <div
              className={`p-2 rounded-lg bg-black/30 ${tech.color} transition-all group-hover:bg-black/50`}
            >
              <tech.Icon size={24} />
            </div>
            <span className="text-xs text-white mt-1 text-center">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Componente para iconos de bases de datos
const DatabaseIcons = () => {
  const dbIcons = [
    { Icon: SiMysql, name: "MySQL", color: "text-orange-500" },
    { Icon: SiFirebase, name: "Firebase", color: "text-yellow-500" },
    { Icon: SiFilezilla, name: "Filezilla", color: "text-red-500" },
  ];

  // Icono personalizado para Putty (no está en react-icons)
  const PuttyIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <rect
        x="3"
        y="4"
        width="18"
        height="14"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="5"
        y="6"
        width="14"
        height="10"
        fill="currentColor"
        opacity="0.3"
      />
      <path d="M8 20h8" stroke="currentColor" strokeWidth="2" />
      <path d="M10 18v2" stroke="currentColor" strokeWidth="2" />
      <path d="M14 18v2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  return (
    <div className="flex flex-col items-center justify-center p-6 h-full">
      {/* Grid de iconos */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {dbIcons.map((db, index) => (
          <motion.div
            key={db.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center group"
          >
            <div
              className={`p-2 rounded-lg bg-black/30 ${db.color} transition-all group-hover:bg-black/50`}
            >
              <db.Icon size={24} />
            </div>
            <span className="text-xs text-white mt-1 text-center">
              {db.name}
            </span>
          </motion.div>
        ))}

        {/* Putty con icono personalizado */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center group"
        >
          <div className="p-2 rounded-lg bg-black/30 text-green-400 transition-all group-hover:bg-black/50">
            <PuttyIcon />
          </div>
          <span className="text-xs text-white mt-1 text-center">Putty</span>
        </motion.div>
      </div>
    </div>
  );
};

// Componente para iconos de diseño
const DesignIcons = () => {
  const designTools = [
    { Icon: DiPhotoshop, name: "Photoshop", color: "text-blue-500" },
    { Icon: SiFigma, name: "Figma", color: "text-purple-400" },
    { Icon: SiAdobe, name: "Adobe XD", color: "text-pink-500" },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 h-full">
      {/* Paleta de colores animada */}
      <div className="flex gap-2 mb-6">
        {[
          "bg-blue-500",
          "bg-purple-500",
          "bg-pink-500",
          "bg-cyan-500",
          "bg-green-500",
        ].map((color, index) => (
          <motion.div
            key={index}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              delay: index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`w-3 h-3 ${color} rounded-full`}
          />
        ))}
      </div>

      {/* Herramientas de diseño */}
      <div className="flex gap-4 justify-center">
        {designTools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center group"
          >
            <div
              className={`p-2 rounded-lg bg-black/30 ${tool.color} transition-all group-hover:bg-black/50`}
            >
              <tool.Icon size={24} />
            </div>
            <span className="text-xs text-white mt-1 text-center">
              {tool.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Componente para iconos de gestión de proyectos
const ProjectManagementIcons = () => {
  const pmTools = [
    { Icon: SiJira, name: "Jira", color: "text-blue-600" },
    { Icon: SiConfluence, name: "Confluence", color: "text-blue-500" },
    { Icon: SiTrello, name: "Trello", color: "text-blue-400" },
    { Icon: SiBitbucket, name: "Bitbucket", color: "text-blue-700" },
    { Icon: SiGithub, name: "GitHub", color: "text-gray-400" },
    { Icon: SiGit, name: "Git", color: "text-orange-500" },
  ];

  return (
    <div className="flex items-center justify-between p-6 h-full">
      {/* Diagrama de flujo animado */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-12 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
          >
            <span className="text-xs text-white font-bold">Plan</span>
          </motion.div>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-6 bg-blue-400 mt-2"
          />
        </div>

        <div className="flex flex-col items-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-12 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center"
          >
            <span className="text-xs text-white font-bold">Dev</span>
          </motion.div>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            className="w-px h-6 bg-green-400 mt-2"
          />
        </div>

        <div className="flex flex-col items-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="w-12 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
          >
            <span className="text-xs text-white font-bold">Deploy</span>
          </motion.div>
        </div>
      </div>

      {/* Grid de herramientas con iconos */}
      <div className="grid grid-cols-3 gap-2 max-w-xs">
        {pmTools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center group"
          >
            <div
              className={`p-1 rounded bg-black/30 ${tool.color} transition-all group-hover:bg-black/50`}
            >
              <tool.Icon size={16} />
            </div>
            <span className="text-xs text-white mt-1 text-center">
              {tool.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export { SpecialtiesSection };
export default SpecialtiesSection;
