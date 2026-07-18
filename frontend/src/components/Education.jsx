import React from 'react';

const Education = () => {
  return (
    <section id="education" className="bg-surface py-section-gap border-t border-outline-variant">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal-on-scroll">
        <div className="max-w-4xl mx-auto">
          
          {/* Education Section */}
          <div className="mb-16">
            <span className="font-label-sm text-secondary uppercase tracking-widest mb-12 block text-center md:text-left">Latar Belakang Akademik</span>
            
            <div className="space-y-8">
              {/* Edu 1 */}
              <div className="p-8 bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-outline-variant/30">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-headline-md text-primary">Politeknik Negeri Indramayu</h3>
                    <p className="font-body-md text-secondary mt-1">Bachelor of Applied Science (BASc) - Software Engineering</p>
                  </div>
                  <span className="font-label-sm text-primary uppercase bg-blue-50 px-4 py-2 rounded-full border border-blue-100 text-blue-700 whitespace-nowrap h-fit">Jul 2023 — Jul 2027</span>
                </div>
                
                <div className="pl-4 border-l-2 border-outline-variant space-y-6 mt-6">
                  <div>
                    <h4 className="font-headline-sm text-primary text-sm">Himpunan Mahasiswa Rekayasa Perangkat Lunak (HIMA-RPL)</h4>
                    <p className="font-body-sm text-secondary font-medium">Kepala Divisi Hubungan Masyarakat (Jun 2024 - Jun 2025)</p>
                    <p className="font-body-sm text-secondary mt-1">Mengelola komunikasi internal dan eksternal, membangun kemitraan strategis dengan organisasi kampus lainnya, serta memimpin tim untuk meningkatkan kesadaran merek himpunan.</p>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-primary text-sm">Permikomnas Jawa Barat</h4>
                    <p className="font-body-sm text-secondary font-medium">Kajian Strategis dan Advokasi (Jan 2025 - Jan 2026)</p>
                    <p className="font-body-sm text-secondary mt-1">Menganalisis isu-isu regional di bidang Informatika dan Komputer, melakukan riset untuk rekomendasi kebijakan, dan mengadvokasi kepentingan mahasiswa di tingkat provinsi.</p>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-primary text-sm">Badan Eksekutif Mahasiswa (BEM)</h4>
                    <p className="font-body-sm text-secondary font-medium">Staff Muda Kominfo (Okt 2023 - Jun 2024)</p>
                    <p className="font-body-sm text-secondary mt-1">Bertanggung jawab atas strategi konten digital, mengelola platform media sosial resmi, dan memastikan alur informasi yang efektif ke seluruh mahasiswa.</p>
                  </div>
                </div>
              </div>
              
              {/* Edu 2 */}
              <div className="p-8 bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-outline-variant/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-headline-md text-primary">SMKN 1 Kota Cirebon</h3>
                    <p className="font-body-md text-secondary mt-1">Vocational High School Diploma - Software Engineering (Nilai: 83.00)</p>
                  </div>
                  <span className="font-label-sm text-primary uppercase bg-blue-50 px-4 py-2 rounded-full border border-blue-100 text-blue-700 whitespace-nowrap">Jun 2020 — Jun 2023</span>
                </div>
              </div>
            </div>
          </div>

          {/* Licenses & Certifications Section */}
          <div>
            <span className="font-label-sm text-secondary uppercase tracking-widest mb-8 block text-center md:text-left">Lisensi & Sertifikasi</span>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Cert 1 */}
              <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 hover:border-blue-300 transition-colors">
                <h4 className="font-headline-sm text-primary mb-1">Belajar Dasar AI</h4>
                <p className="font-body-sm text-secondary font-medium mb-3">Dicoding Indonesia</p>
                <div className="font-label-sm text-secondary text-xs flex flex-col gap-1">
                  <span>Diterbitkan: Sep 2025 · Berlaku s/d: Sep 2028</span>
                  <span>ID Kredensial: L4PQ28E32ZO1</span>
                </div>
              </div>

              {/* Cert 2 */}
              <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 hover:border-blue-300 transition-colors">
                <h4 className="font-headline-sm text-primary mb-1">Memulai Pemrograman dengan Python</h4>
                <p className="font-body-sm text-secondary font-medium mb-3">Dicoding Indonesia</p>
                <div className="font-label-sm text-secondary text-xs flex flex-col gap-1">
                  <span>Diterbitkan: Okt 2025 · Berlaku s/d: Okt 2028</span>
                  <span>ID Kredensial: N9ZQ22QQRPG5</span>
                </div>
              </div>

              {/* Cert 3 */}
              <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 hover:border-blue-300 transition-colors md:col-span-2">
                <h4 className="font-headline-sm text-primary mb-1">INDONESIA NATIONAL QUALIFICATION FRAMEWORK LEVEL II ON SKILLS COMPETENCE SOFTWARE ENGINEERING</h4>
                <p className="font-body-sm text-secondary font-medium mb-3">Badan Nasional Sertifikasi Profesi (BNSP)</p>
                <div className="font-label-sm text-secondary text-xs flex flex-col md:flex-row md:justify-between gap-1">
                  <span>Diterbitkan: Mar 2023 · Kedaluwarsa: Mar 2026</span>
                  <span>ID Kredensial: 62019 2512 2 0000134 2023</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
