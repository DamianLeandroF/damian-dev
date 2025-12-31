export const About = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="about">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tarjeta Grande: Bio */}
        <div className="md:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-4">About me</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            I'm a developer passionate about detail. My goal is to transform
            complex ideas into simple and intuitive digital products. I
            specialize in the <span className="font-semibold">React</span>{" "}
            ecosystem and <span className="font-semibold">Minimalist</span>{" "}
            design.
          </p>
        </div>

        {/* Tarjeta Pequeña: Ubicación/Disponibilidad */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 flex flex-col justify-center items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mb-2" />
          <p className="text-white font-medium">Available for projects</p>
          <p className="text-gray-500 text-sm">Remoto / UTC-3</p>
        </div>

        {/* Tarjeta: Stack Técnico (puedes mapear tus iconos aquí) */}
        <div className="md:col-span-3 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <h3 className="text-white font-semibold mb-6">My Tech Stack</h3>
          <div className="flex flex-wrap gap-4">
            {[
              "React",
              "PHP",
              "TypeScript",
              "Tailwind",
              "Framer Motion",
              "Node.js",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
