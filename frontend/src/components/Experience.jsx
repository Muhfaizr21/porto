import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
        
        <div className="lg:w-1/3 reveal-on-scroll lg:sticky lg:top-32">
          <span className="font-label-sm text-secondary uppercase tracking-widest mb-4 block">Perjalanan Karier</span>
          <h2 className="font-headline-lg text-headline-lg text-primary leading-tight">Pengalaman Profesional.</h2>
          <p className="font-body-md text-secondary mt-6 max-w-sm">
            Membangun arsitektur perangkat lunak dan mengoptimalkan sistem web untuk kinerja yang maksimal, dari kepemimpinan tim teknis hingga solusi pemantauan otomatis.
          </p>
        </div>
        
        <div className="lg:w-2/3 reveal-on-scroll space-y-12">
          
          {/* Exp 1: Founder triplevibe */}
          <div className="border-b border-outline-variant pb-12 group hover:border-primary transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
              <h4 className="font-headline-md text-primary group-hover:text-blue-600 transition-colors">Founder</h4>
              <span className="font-label-sm text-secondary uppercase bg-surface-container px-3 py-1 rounded-full w-fit whitespace-nowrap">Jun 2025 — Saat ini</span>
            </div>
            <p className="font-body-md text-primary font-medium mb-1">triplevibe.tech</p>
            <p className="font-label-sm text-secondary mb-4">Kota Cirebon, Jawa Barat, Indonesia (Di lokasi)</p>
            <p className="font-body-md text-secondary leading-relaxed">
              Bertanggung jawab memimpin tim pengembangan perangkat lunak dalam menciptakan solusi website yang berkualitas untuk klien dari berbagai latar belakang—mulai dari UMKM, Individu, hingga startup. Fokus utama saya adalah memastikan setiap produk tidak hanya memenuhi kebutuhan teknis, tetapi juga mencerminkan identitas brand klien melalui desain yang modern, fungsional, dan responsif.
            </p>
          </div>

          {/* Exp 2: Full-stack Developer RentGo */}
          <div className="border-b border-outline-variant pb-12 group hover:border-primary transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
              <h4 className="font-headline-md text-primary group-hover:text-blue-600 transition-colors">Full-Stack Developer</h4>
              <span className="font-label-sm text-secondary uppercase bg-surface-container px-3 py-1 rounded-full w-fit whitespace-nowrap">Jan 2024 — Saat ini</span>
            </div>
            <p className="font-body-md text-primary font-medium mb-1">RentGo Indonesia (Pekerja Lepas)</p>
            <p className="font-label-sm text-secondary mb-4">Kota Cirebon, Jawa Barat, Indonesia</p>
            <p className="font-body-md text-secondary leading-relaxed">
              Sebagai satu-satunya Web Developer di RentGo Indonesia yang memegang peran kunci dalam membangun, mengelola, dan mengembangkan seluruh platform web perusahaan dan bertanggung jawab penuh atas sisi teknis pengembangan web, mulai dari perencanaan hingga implementasi.
            </p>
          </div>

          {/* Exp 3: PT Aplikasi Dagang Teknologi */}
          <div className="border-b border-outline-variant pb-12 group hover:border-primary transition-colors duration-300">
            <div className="mb-8">
              <h4 className="font-headline-md text-primary">PT Aplikasi Dagang Teknologi (Magang)</h4>
              <p className="font-label-sm text-secondary mt-1">Bandung, Jawa Barat, Indonesia (Di lokasi)</p>
            </div>

            <div className="pl-6 border-l-2 border-outline-variant space-y-10">
              {/* Role A */}
              <div className="relative">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[1.65rem] top-2"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                  <h5 className="font-headline-sm text-primary group-hover:text-blue-600 transition-colors">Lead Software Engineer</h5>
                  <span className="font-label-sm text-secondary uppercase whitespace-nowrap">Apr 2026 — Saat ini</span>
                </div>
                <p className="font-body-md text-secondary mb-4 leading-relaxed">
                  Berperan sebagai Lead Software Engineer yang berfokus pada pengembangan solusi perangkat lunak yang scalable, efisien, dan berdampak langsung terhadap pertumbuhan bisnis serta kualitas produk digital.
                </p>
                <ul className="font-body-md text-secondary space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Arsitektur Sistem:</strong> Merancang dan mengembangkan arsitektur aplikasi yang robust, scalable, dan maintainable.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Technical Leadership:</strong> Memimpin tim developer, memberikan arahan teknis, dan memastikan penerapan best practice.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Product Delivery:</strong> Mengelola siklus pengembangan perangkat lunak end-to-end dengan standar kualitas tinggi.</span>
                  </li>
                </ul>
              </div>

              {/* Role B */}
              <div className="relative">
                <div className="absolute w-3 h-3 bg-outline-variant rounded-full -left-[1.65rem] top-2"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                  <h5 className="font-headline-sm text-primary group-hover:text-blue-600 transition-colors">Senior Software Engineer R&D</h5>
                  <span className="font-label-sm text-secondary uppercase whitespace-nowrap">Feb 2026 — Mar 2026</span>
                </div>
                <p className="font-body-md text-secondary mb-4 leading-relaxed">
                  Berfokus pada eksplorasi teknologi mutakhir untuk menciptakan solusi perangkat lunak yang inovatif dan skalabel.
                </p>
                <ul className="font-body-md text-secondary space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Riset & Eksplorasi Teknologi:</strong> Melakukan investigasi mendalam terhadap tren teknologi baru.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Rapid Prototyping:</strong> Membangun Proof of Concept (PoC) untuk fitur-fitur kompleks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Optimasi & Performa:</strong> Menganalisis dan meningkatkan performa sistem yang sudah ada.</span>
                  </li>
                </ul>
              </div>
              
              {/* Role C */}
              <div className="relative">
                <div className="absolute w-3 h-3 bg-outline-variant rounded-full -left-[1.65rem] top-2"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                  <h5 className="font-headline-sm text-primary group-hover:text-blue-600 transition-colors">Full-Stack Developer</h5>
                  <span className="font-label-sm text-secondary uppercase whitespace-nowrap">Jan 2026 — Feb 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Exp 4: Fikri Theme Park */}
          <div className="border-b border-outline-variant pb-12 group hover:border-primary transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
              <h4 className="font-headline-md text-primary group-hover:text-blue-600 transition-colors">Content Creator Editor</h4>
              <span className="font-label-sm text-secondary uppercase bg-surface-container px-3 py-1 rounded-full w-fit whitespace-nowrap">Jan 2023 — Agu 2023</span>
            </div>
            <p className="font-body-md text-primary font-medium mb-1">Fikri Theme Park (Pekerja Lepas)</p>
            <p className="font-label-sm text-secondary mb-4">Jakarta Raya, Indonesia (Jarak jauh)</p>
            <ul className="font-body-md text-secondary space-y-2 list-none">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Mengoperasikan Sony Vegas Pro dan Adobe Photoshop untuk memproduksi konten video berkualitas tinggi dengan standar industri.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                Melakukan riset tren visual terkini untuk memastikan konten tetap relevan dengan selera pasar yang cepat berubah.
              </li>
            </ul>
          </div>

          {/* Exp 5: Junior Software Engineer CV. Mandiri Putra Nusa */}
          <div className="border-b border-outline-variant pb-12 group hover:border-primary transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
              <h4 className="font-headline-md text-primary group-hover:text-blue-600 transition-colors">Junior Software Engineer</h4>
              <span className="font-label-sm text-secondary uppercase bg-surface-container px-3 py-1 rounded-full w-fit whitespace-nowrap">Mar 2022 — Jul 2022</span>
            </div>
            <p className="font-body-md text-primary font-medium mb-1">CV. Mandiri Putra Nusa (Magang)</p>
            <p className="font-label-sm text-secondary mb-4">Kota Cirebon, Jawa Barat, Indonesia (Di lokasi)</p>
            <ul className="font-body-md text-secondary space-y-4 list-none">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  <strong>Automated Monitoring Solutions:</strong> Berhasil merancang dan mengimplementasikan sistem monitoring real-time yang mengotomatisasi pengumpulan data operasional, sehingga meningkatkan akurasi data.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  <strong>Backend Logic Optimization:</strong> Membangun fungsionalitas sisi server menggunakan PHP dengan fokus pada efisiensi kode, keamanan validasi input, dan skalabilitas sistem.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  <strong>Data-Driven Dashboards:</strong> Mengembangkan dashboard visualisasi data yang intuitif untuk membantu pemangku kepentingan dalam pengambilan keputusan berbasis data.
                </div>
              </li>
            </ul>
          </div>

          {/* Exp 6: IoT Developer PT. Nusabot */}
          <div className="group hover:border-primary transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
              <h4 className="font-headline-md text-primary group-hover:text-blue-600 transition-colors">Internet of Things Developer</h4>
              <span className="font-label-sm text-secondary uppercase bg-surface-container px-3 py-1 rounded-full w-fit whitespace-nowrap">Mar 2022 — Mei 2022</span>
            </div>
            <p className="font-body-md text-primary font-medium mb-1">PT. Nusabot Inovasi Teknologi (Magang)</p>
            <p className="font-label-sm text-secondary">Kota Cirebon, Jawa Barat, Indonesia (Gabungan)</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
