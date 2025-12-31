import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  tech: string[];
  link: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  link,
}: ProjectProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative p-px rounded-2xl overflow-hidden bg-white/5 border border-white/10 group"
    >
      {/* Efecto RGB que se activa al hacer hover */}
      <div className="absolute inset-[-1000%] animate-rgb-border opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-[#000319]/90 rounded-[15px] h-full flex flex-col justify-between overflow-hidden">
        {/* Imagen del proyecto (si existe) */}
        {image && (
          <div className="relative aspect-video overflow-hidden bg-slate-900">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
          </div>
        )}

        {/* Contenido */}
        <div className="p-8">
          {/* Tech Stack */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono text-blue-400/80 border border-blue-400/20 px-2 py-0.5 rounded"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Título */}
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>

          {/* Descripción */}
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

          {/* Link al proyecto */}
          <a
            href={link}
            className="mt-8 flex items-center gap-4 text-xs font-medium text-white/50 group-hover:text-white transition-colors"
          >
            <span>View Project</span>
            <div className="h-px w-8 bg-white/20 group-hover:w-12 group-hover:bg-blue-400 transition-all" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
