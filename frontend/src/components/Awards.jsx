import React from 'react';

const Awards = () => {
  const awards = [
    {
      title: "Fullstack Developer",
      issuer: "PT APLIKASI DAGANG TEKNOLOGI",
      date: "Jul 2026",
      association: "PT Aplikasi Dagang Teknologi",
      description: "Diberikan oleh PT Aplikasi Dagang Teknologi sebagai apresiasi atas dedikasi dan kinerja luar biasa selama program magang intensif selama 6 bulan."
    },
    {
      title: "Speaker at TECHSOFT.V1 2026 | Shaping the Future of Software Architecture & Scalable Solutions",
      issuer: "Himpunan Mahasiswa Rekayasa Perangkat Lunak",
      date: "Mei 2026",
      association: "Politeknik Negeri Indramayu",
      description: "Sangat bersyukur atas kesempatan untuk berbagi wawasan sebagai Pemateri di TECHSOFT.V1 2026. Berdiskusi tentang perkembangan teknologi selalu memberikan perspektif baru, dan saya berharap obrolan yang saya sampaikan dapat memberikan nilai tambah bagi rekan-rekan semua."
    },
    {
      title: "TECHCOMFEST WEB APPLICATION COMPETITION 2026",
      issuer: "POLITEKNIK NEGERI SEMARANG",
      date: "Jan 2026",
      association: "Politeknik Negeri Indramayu",
      description: ""
    }
  ];

  return (
    <section id="awards" className="bg-surface py-section-gap border-t border-outline-variant">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal-on-scroll">
        <div className="max-w-4xl mx-auto">
          <span className="font-label-sm text-secondary uppercase tracking-widest mb-12 block text-center md:text-left">
            Penghargaan & Gelar Kehormatan
          </span>

          <div className="space-y-8">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="p-8 bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-outline-variant/30 group"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-headline-md text-primary group-hover:text-blue-600 transition-colors">
                      {award.title}
                    </h3>
                    <p className="font-body-md text-secondary mt-1">
                      {award.issuer} <span className="mx-2 opacity-50">•</span> {award.date}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-md border border-outline-variant/50 mb-4">
                  <span className="w-4 h-4 bg-gray-300 rounded-sm"></span>
                  <span className="font-label-sm text-secondary">
                    Berasosiasi dengan {award.association}
                  </span>
                </div>

                {award.description && (
                  <p className="font-body-md text-secondary leading-relaxed border-l-2 border-outline-variant pl-4 mt-2">
                    {award.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
