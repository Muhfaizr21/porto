import React from 'react';
import { FaReact, FaLaravel, FaPhp, FaPython, FaNodeJs, FaHtml5, FaCss3Alt, FaFigma, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMysql, SiPostgresql, SiGo } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';

const TechStack = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#000' },
    { name: 'JavaScript', icon: <IoLogoJavascript />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <IoLogoJavascript />, color: '#3178C6' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Golang', icon: <SiGo />, color: '#00ADD8' },
    { name: 'Laravel', icon: <FaLaravel />, color: '#FF2D20' },
    { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
    { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  ];

  return (
    <section id="stack" className="py-section-gap border-t border-outline-variant">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <p className="label-sm text-brand-600 mb-12">Tech stack</p>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8">
          {skills.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2 group reveal" style={{ transitionDelay: `${i * 0.03}s` }}>
              <div className="text-2xl group-hover:scale-110 transition-transform duration-300" style={{ color: s.color }}>
                {s.icon}
              </div>
              <span className="text-xs text-secondary text-center">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
