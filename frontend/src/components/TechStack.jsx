import React from 'react';
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiVuedotjs, SiAngular,
  SiNodedotjs, SiExpress, SiNestjs, SiLaravel, SiPhp, SiPython, SiGo,
  SiMysql, SiPostgresql, SiMongodb, SiRedis, SiFirebase, SiSupabase,
  SiDocker, SiKubernetes, SiGooglecloud, SiVercel, SiNginx,
  SiGit, SiGithub, SiFigma, SiVite, SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiSvelte, SiRedux, SiGraphql, SiApollographql, SiDjango, SiSpring, SiLinux, SiUbuntu, SiTerraform
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const TechStack = () => {
  const categories = [
    {
      title: "Frontend & UI",
      direction: 'normal',
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
        { name: 'Svelte', icon: <SiSvelte />, color: '#FF3E00' },
        { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
      ]
    },
    {
      title: "Backend & Database",
      direction: 'reverse',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
        { name: 'Express', icon: <SiExpress />, color: '' },
        { name: 'NestJS', icon: <SiNestjs />, color: '#E0234E' },
        { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20' },
        { name: 'PHP', icon: <SiPhp />, color: '#777BB4' },
        { name: 'Python', icon: <SiPython />, color: '#3776AB' },
        { name: 'Golang', icon: <SiGo />, color: '#00ADD8' },
        { name: 'Django', icon: <SiDjango />, color: '#092E20' },
        { name: 'Spring', icon: <SiSpring />, color: '#6DB33F' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
        { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
      ]
    },
    {
      title: "DevOps & Tools",
      direction: 'normal',
      skills: [
        { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
        { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
        { name: 'AWS', icon: <FaAws />, color: '' },
        { name: 'GCP', icon: <SiGooglecloud />, color: '#4285F4' },
        { name: 'Vercel', icon: <SiVercel />, color: '' },
        { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
        { name: 'Supabase', icon: <SiSupabase />, color: '#3ECF8E' },
        { name: 'Nginx', icon: <SiNginx />, color: '#009639' },
        { name: 'Linux', icon: <SiLinux />, color: '#FCC624' },
        { name: 'Ubuntu', icon: <SiUbuntu />, color: '#E95420' },
        { name: 'Git', icon: <SiGit />, color: '#F05032' },
        { name: 'GitHub', icon: <SiGithub />, color: '' },
        { name: 'Terraform', icon: <SiTerraform />, color: '#844FBA' },
      ]
    }
  ];

  return (
    <section id="stack" className="py-24 border-t border-outline-variant relative overflow-hidden bg-surface">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-brand-500/10 dark:bg-brand-500/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="text-center mb-16 px-margin-mobile md:px-margin-desktop">
          <span className="inline-block py-1 px-3 rounded-full bg-surface-container text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-wider mb-4 border border-outline-variant">TECH STACK</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Teknologi & Tools</h2>
          <p className="mt-4 text-secondary max-w-2xl mx-auto">Bahasa pemrograman, framework, dan alat pendukung yang saya gunakan untuk membangun aplikasi modern berskala besar.</p>
        </div>

        <div className="space-y-12">
          {categories.map((category, catIdx) => (
            <div key={catIdx} className="w-full overflow-hidden">
              <div className="px-margin-mobile md:px-margin-desktop mb-6 max-w-container-max mx-auto">
                <h3 className="text-lg font-semibold text-primary text-center md:text-left flex items-center gap-4">
                  <span className="hidden md:block h-px bg-outline-variant flex-1 opacity-50"></span>
                  {category.title}
                  <span className="hidden md:block h-px bg-outline-variant flex-1 opacity-50"></span>
                </h3>
              </div>
              
              {/* Marquee Container */}
              <div className="relative flex overflow-hidden group w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[50px] md:before:w-[150px] before:bg-gradient-to-r before:from-surface before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[50px] md:after:w-[150px] after:bg-gradient-to-l after:from-surface after:to-transparent">
                
                <div className={`flex w-max animate-marquee group-hover:[animation-play-state:paused] ${category.direction === 'reverse' ? '[animation-direction:reverse]' : ''}`}>
                  {/* First Set */}
                  {category.skills.map((s, i) => (
                    <div 
                      key={`first-${i}`} 
                      className="flex flex-col items-center justify-center gap-3 w-32 md:w-40 py-6 px-4 mx-3 bg-surface-container-low hover:bg-surface-container rounded-2xl border border-outline-variant shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-brand-500 backdrop-blur-sm cursor-default"
                    >
                      <div 
                        className={`text-4xl md:text-5xl transition-transform duration-300 drop-shadow-sm ${!s.color ? 'text-primary' : ''}`}
                        style={s.color ? { color: s.color } : {}}
                      >
                        {s.icon}
                      </div>
                      <span className="text-xs md:text-sm font-medium text-secondary">{s.name}</span>
                    </div>
                  ))}
                  
                  {/* Second Set (Duplicate for seamless scroll) */}
                  {category.skills.map((s, i) => (
                    <div 
                      key={`second-${i}`} 
                      className="flex flex-col items-center justify-center gap-3 w-32 md:w-40 py-6 px-4 mx-3 bg-surface-container-low hover:bg-surface-container rounded-2xl border border-outline-variant shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-brand-500 backdrop-blur-sm cursor-default"
                    >
                      <div 
                        className={`text-4xl md:text-5xl transition-transform duration-300 drop-shadow-sm ${!s.color ? 'text-primary' : ''}`}
                        style={s.color ? { color: s.color } : {}}
                      >
                        {s.icon}
                      </div>
                      <span className="text-xs md:text-sm font-medium text-secondary">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
