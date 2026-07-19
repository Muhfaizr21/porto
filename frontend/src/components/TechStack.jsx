import React from 'react';
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiVuedotjs, SiAngular,
  SiNodedotjs, SiExpress, SiNestjs, SiLaravel, SiPhp, SiPython, SiGo,
  SiMysql, SiPostgresql, SiMongodb, SiRedis, SiFirebase, SiSupabase,
  SiDocker, SiKubernetes, SiGooglecloud, SiVercel, SiNginx,
  SiGit, SiGithub, SiFigma, SiVite, SiTypescript, SiJavascript, SiHtml5, SiCss
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const TechStack = () => {
  const categories = [
    {
      title: "Frontend & UI",
      skills: [
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '' },
        { name: 'Vue.js', icon: <SiVuedotjs />, color: '#4FC08D' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <SiCss />, color: '#1572B6' },
        { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
        { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
        { name: 'Express', icon: <SiExpress />, color: '' },
        { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20' },
        { name: 'PHP', icon: <SiPhp />, color: '#777BB4' },
        { name: 'Python', icon: <SiPython />, color: '#3776AB' },
        { name: 'Golang', icon: <SiGo />, color: '#00ADD8' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
        { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
        { name: 'AWS', icon: <FaAws />, color: '' },
        { name: 'GCP', icon: <SiGooglecloud />, color: '#4285F4' },
        { name: 'Vercel', icon: <SiVercel />, color: '' },
        { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
        { name: 'Supabase', icon: <SiSupabase />, color: '#3ECF8E' },
        { name: 'Nginx', icon: <SiNginx />, color: '#009639' },
        { name: 'Git', icon: <SiGit />, color: '#F05032' },
        { name: 'GitHub', icon: <SiGithub />, color: '' },
      ]
    }
  ];

  return (
    <section id="stack" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-brand-500/5 dark:bg-brand-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-wider mb-4 border border-brand-100 dark:border-brand-500/20">TECH STACK</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Teknologi & Tools</h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Bahasa pemrograman, framework, dan alat pendukung yang saya gunakan untuk membangun aplikasi yang modern dan berkualitas.</p>
        </div>

        <div className="space-y-12">
          {categories.map((category, catIdx) => (
            <div key={catIdx} className="reveal" style={{ transitionDelay: `${catIdx * 0.1}s` }}>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-6 text-center md:text-left flex items-center gap-4">
                <span className="hidden md:block h-px bg-slate-200 dark:bg-slate-700 flex-1"></span>
                {category.title}
                <span className="hidden md:block h-px bg-slate-200 dark:bg-slate-700 flex-1"></span>
              </h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-3 md:gap-4">
                {category.skills.map((s, i) => (
                  <div 
                    key={i} 
                    className="group flex flex-col items-center justify-center gap-3 py-5 px-2 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 dark:hover:border-brand-500/30 backdrop-blur-sm"
                  >
                    <div 
                      className={`text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110 drop-shadow-sm ${!s.color ? 'text-slate-900 dark:text-white' : ''}`}
                      style={s.color ? { color: s.color } : {}}
                    >
                      {s.icon}
                    </div>
                    <span className="text-[10px] md:text-xs font-medium text-slate-500 dark:text-slate-400 text-center group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">{s.name}</span>
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
