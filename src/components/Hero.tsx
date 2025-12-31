import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-transparent flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 2. Gradientes Radiales (Efecto de Luz) */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] z-0"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] z-0"
      />

      {/* 3. Contenido */}
      <div className="relative z-10 text-center px-4">
        {/* Badge Superior */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-xs tracking-[0.2em] text-gray-500 font-bold uppercase mb-6"
        >
          Building the future of the web
        </motion.span>

        {/* Título Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-tight"
        >
          Crafting{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-blue-500">
            Digital
          </span>{" "}
          <br />
          Experiences
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-400 max-w-xl mx-auto text-lg md:text-xl font-light"
        >
          Frontend Engineer specializing in minimalist interfaces and
          high-performance React applications.
        </motion.p>

        {/* Botón de Acción */}
        <a href="./DAMIÁN FREGOCINI CV.pdf">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10"
            >
              <button
                className="group relative px-8 py-3 rounded-full bg-white text-black font-semibold 
              flex items-center gap-2 transition-all hover:bg-transparent hover:text-white border border-white overflow-hidden cursor-pointer"
              >
                <span>My Resume</span>
                <ArrowUpRight
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </motion.div>
          </div>
        </a>
      </div>

      {/* Decoración inferior sutil */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-linear-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
