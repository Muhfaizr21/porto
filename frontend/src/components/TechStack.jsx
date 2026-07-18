import React from 'react';
import { 
  FaReact, FaLaravel, FaPhp, FaPython, FaNodeJs, 
  FaHtml5, FaCss3Alt, FaFigma, FaGitAlt, FaGithub 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiMysql, SiPostgresql, SiGo
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';

const TechStack = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-4xl text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-primary" /> },
        { name: "JavaScript", icon: <IoLogoJavascript className="text-4xl text-[#F7DF1E]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-[#06B6D4]" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-4xl text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-4xl text-[#1572B6]" /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Golang", icon: <SiGo className="text-4xl text-[#00ADD8]" /> },
        { name: "Laravel", icon: <FaLaravel className="text-4xl text-[#FF2D20]" /> },
        { name: "PHP", icon: <FaPhp className="text-4xl text-[#777BB4]" /> },
        { name: "Python", icon: <FaPython className="text-4xl text-[#3776AB]" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-4xl text-[#339933]" /> },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-4xl text-[#4479A1]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl text-[#4169E1]" /> },
      ]
    },
    {
      title: "Alat & Lainnya",
      skills: [
        { name: "Figma", icon: <FaFigma className="text-4xl text-[#F24E1E]" /> },
        { name: "Git", icon: <FaGitAlt className="text-4xl text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="text-4xl text-primary" /> },
      ]
    }
  ];

  return (
    <section id="stack" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 reveal-on-scroll">
          <span className="font-label-sm text-secondary uppercase tracking-widest mb-4 block">Keahlian</span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6 leading-tight">
            Alat bantu kerja.
          </h2>
          <p className="font-body-md text-secondary">
            Kumpulan teknologi, framework, dan alat yang saya gunakan secara pragmatis untuk membangun solusi web yang teruji di lingkungan produksi.
          </p>
        </div>
        
        <div className="md:w-2/3 space-y-12 reveal-on-scroll" style={{ animationDelay: '0.1s' }}>
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="font-headline-sm text-primary border-b border-outline-variant pb-3 mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-surface-container hover:bg-surface-container-highest transition-all duration-300 p-6 rounded-2xl flex flex-col items-center justify-center text-center group border border-transparent hover:border-outline-variant hover:-translate-y-1 hover:shadow-sm"
                  >
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 opacity-80 group-hover:opacity-100">
                      {skill.icon}
                    </div>
                    <span className="font-headline-sm text-sm text-primary transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
