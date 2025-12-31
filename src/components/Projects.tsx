import ProjectCard from "./ProjectCard";
import steamPlusImg from "../assets/projectsImages/Steam+.png";
import tuTiendaImg from "../assets/projectsImages/TuTienda.png";

const Projects = () => {
  const myProjects = [
    {
      title: "Stream+",
      description:
        "Plataforma de streaming con funcionalidades similares a Twitch.",
      tech: ["React", "TypeScript", "Tailwind"],
      link: "https://twitch-clone-lake.vercel.app/",
      image: steamPlusImg,
    },
    {
      title: "Tienda eCommerce",
      description: "E-commerce especializado en productos digitales.",
      tech: ["PHP", "MySQL"],
      link: "http://ecommerce-df.infinityfreeapp.com/",
      image: tuTiendaImg,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-12 text-center opacity-80">
          Selected Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {myProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>

        {/* Pequeño detalle inferior para cerrar la sección */}
        <p className="text-center mt-16 text-gray-600 text-xs tracking-widest uppercase">
          More projects coming soon
        </p>
      </div>
    </section>
  );
};

export default Projects;
