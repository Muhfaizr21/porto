import React, { useState, useEffect } from 'react';

const fallback = [
  { id: 1, title: 'Senior Interface Designer', company: 'Luxe Digital Lab', employment_type: 'Full-time', start_month: 'Jan', start_year: '2022', end_month: '', end_year: '', is_current_role: true, location: 'New York', location_type: 'Remote', description: '<p>Led design for flagship e-commerce platforms. Established design systems adopted across 5 teams.</p>', skills: 'React, Design Systems, Figma' },
  { id: 2, title: 'UI/UX Designer', company: 'Minimalist Studio', employment_type: 'Full-time', start_month: 'Mar', start_year: '2019', end_month: 'Dec', end_year: '2021', is_current_role: false, location: 'London', location_type: 'On-site', description: '<p>Developed visual identities for 15+ agencies. Improved user retention by 35% through redesigns.</p>', skills: 'UI/UX, Branding, Prototyping' },
  { id: 3, title: 'Junior Web Designer', company: 'Creative Core Agency', employment_type: 'Full-time', start_month: 'Jun', start_year: '2017', end_month: 'Feb', end_year: '2019', is_current_role: false, location: 'Jakarta', location_type: 'On-site', description: '<p>Delivered pixel-perfect responsive layouts. Maintained brand consistency across digital touchpoints.</p>', skills: 'HTML, CSS, JavaScript, WordPress' },
];

const companyColors = ['#f29a47', '#6b6a68', '#ed7a2b', '#b34716', '#8f3917', '#d95f1a'];

const Experience = () => {
  const [exps, setExps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/experiences')
      .then(r => r.json())
      .then(d => { if (d.data) setExps(d.data); else setError('No data'); })
      .catch(() => setExps(fallback))
      .finally(() => setLoading(false));
  }, []);

  const grouped = exps.reduce((acc, exp) => {
    const key = exp.company || 'Other';
    if (!acc[key]) acc[key] = [];
    acc[key].push(exp);
    return acc;
  }, {});

  return (
    <section id="experience" className="py-section-gap border-t border-outline-variant bg-surface-container-low">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-16">
          <p className="label-sm text-brand-600 mb-4">Experience</p>
          <h2 className="heading-lg text-primary">Where I&apos;ve worked</h2>
        </div>

        {loading ? (
          <p className="text-secondary py-12 text-center">Loading...</p>
        ) : error ? (
          <p className="text-red-500 py-12 text-center">{error}</p>
        ) : (
          <div className="max-w-3xl mx-auto space-y-10">
            {Object.entries(grouped).map(([company, roles], gi) => (
              <div key={company}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: companyColors[gi % companyColors.length] }}
                  >
                    {company.charAt(0)}
                  </div>
                  <p className="font-semibold text-primary">{company}</p>
                </div>

                <div className="space-y-3">
                  {roles.map((exp, i) => (
                    <div key={exp.id || i} className="bg-surface rounded-xl p-5 md:p-6 reveal ml-[3.25rem]" style={{ transitionDelay: `${i * 0.05}s` }}>
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
                        <h4 className="font-medium text-primary text-sm">{exp.title}{exp.employment_type ? <span className="text-secondary font-normal"> · {exp.employment_type}</span> : ''}</h4>
                        <span className="text-xs text-secondary/60 whitespace-nowrap">
                          {exp.start_month} {exp.start_year} — {exp.is_current_role ? 'Present' : `${exp.end_month} ${exp.end_year}`}
                        </span>
                      </div>

                      {exp.description && (
                        <div className="text-sm text-secondary leading-relaxed [&>p]:mb-2 [&>ul]:list-disc [&>ul]:ml-4 [&>ul>li]:mb-1"
                          dangerouslySetInnerHTML={{ __html: exp.description }} />
                      )}

                      {exp.skills && (
                        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-outline-variant/20">
                          {exp.skills.split(',').map((s, si) => (
                            <span key={si} className="text-xs bg-surface-container-low px-2 py-0.5 rounded text-secondary">{s.trim()}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
