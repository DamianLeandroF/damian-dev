import { motion } from "framer-motion";
import { Linkedin, Github, MessageCircle, Mail } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      link: "https://linkedin.com/in/damian-fregocini",
      color: "group-hover:text-blue-500",
      label: "Professional Network",
    },
    {
      name: "GitHub",
      icon: <Github size={24} />,
      link: "https://github.com/DamianLeandroF",
      color: "group-hover:text-gray-200",
      label: "Source Code",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle size={24} />,
      link: "https://wa.me/5492235275832",
      color: "group-hover:text-green-500",
      label: "Direct Message",
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=damian.fregocini@gmail.com",
      color: "group-hover:text-red-400",
      label: "Send an Inquiry",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
          Ready to start <span className="text-[#cbacf9]">together?</span>
        </h2>
        <p className="text-gray-400 max-w-md mx-auto">
          If you're looking for a developer for your next project or just want
          to say hello, my networks are open!
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {contactLinks.map((item) => (
          <motion.a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative p-[1px] rounded-2xl overflow-hidden"
          >
            {/* El efecto de borde RGB */}
            <div className="absolute inset-[-1000%] animate-rgb-border opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Cuerpo de la tarjeta */}
            <div className="relative bg-[#000319]/80 backdrop-blur-2xl border border-white/5 p-6 rounded-[15px] flex flex-col items-center justify-center text-center h-full">
              <div
                className={`mb-3 text-gray-500 transition-colors duration-300 ${item.color}`}
              >
                {item.icon}
              </div>
              <h3 className="text-white font-medium text-sm">{item.name}</h3>
              <p className="text-[10px] text-gray-600 mt-1 uppercase tracking-tighter">
                {item.label}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      <footer className="mt-32 pt-8 border-t border-white/5 text-center">
        <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} — Built by me with React & Motion
        </p>
      </footer>
    </section>
  );
};

export default Contact;
