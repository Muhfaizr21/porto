--
-- PostgreSQL database dump
--

\restrict 42ZabSqjbQdtBQYxuD2Rl6t2N2pe5mPFJ2fQ7dvnQgRxy95xwF2HWu6M4g4bmAd

-- Dumped from database version 18.4 (Homebrew)
-- Dumped by pg_dump version 18.4 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: abouts; Type: TABLE DATA; Schema: public; Owner: muhfaiizr
--

INSERT INTO public.abouts VALUES (1, '2026-07-19 05:55:23.180921+07', '2026-07-19 05:55:23.180921+07', NULL, 'Arsitek Sistem yang Berorientasi pada Efisiensi.', 'Saya adalah seorang Full-Stack Software Engineer yang berbasis di Kota Cirebon, Jawa Barat. Latar belakang saya berasal dari Politeknik Negeri Indramayu, di mana saya mengasah kemampuan analitis dan pemecahan masalah teknis.', 'Keahlian utama saya terletak pada perancangan Sistem Pemantauan Otomatis dan Optimasi Web. Saya membangun arsitektur perangkat lunak end-to-end yang tangguh, memastikan keandalan, dan memaksimalkan kinerja untuk memberikan dampak nyata pada proses bisnis.', 'Teknik', 'INFORMATIKA', 'Full-Stack', 'SOFTWARE ENGINEERING', 'Automated', 'MONITORING SYSTEMS', '', '');


--
-- Data for Name: awards; Type: TABLE DATA; Schema: public; Owner: muhfaiizr
--

INSERT INTO public.awards VALUES (1, 'Fullstack Developer', 'PT APLIKASI DAGANG TEKNOLOGI', 'Jul 2026', 'Diberikan oleh PT Aplikasi Dagang Teknologi sebagai apresiasi atas dedikasi dan kinerja luar biasa selama program magang intensif selama 6 bulan.', '', '2026-07-19 05:42:21.307552+07', '2026-07-19 05:42:21.307552+07', NULL);
INSERT INTO public.awards VALUES (2, 'Speaker at TECHSOFT.V1 2026 | Shaping the Future of Software Architecture & Scalable Solutions', 'Himpunan Mahasiswa Rekayasa Perangkat Lunak', 'Mei 2026', 'Sangat bersyukur atas kesempatan untuk berbagi wawasan sebagai Pemateri di TECHSOFT.V1 2026. Berdiskusi tentang perkembangan teknologi selalu memberikan perspektif baru, dan saya berharap obrolan yang saya sampaikan dapat memberikan nilai tambah bagi rekan-rekan semua.', '', '2026-07-19 05:42:21.309454+07', '2026-07-19 05:42:21.309454+07', NULL);
INSERT INTO public.awards VALUES (3, 'TECHCOMFEST WEB APPLICATION COMPETITION 2026', 'POLITEKNIK NEGERI SEMARANG', 'Jan 2026', '', '', '2026-07-19 05:42:21.310363+07', '2026-07-19 05:42:21.310363+07', NULL);


--
-- Data for Name: certifications; Type: TABLE DATA; Schema: public; Owner: muhfaiizr
--

INSERT INTO public.certifications VALUES (1, 'Belajar Dasar AI', 'Dicoding Indonesia', 'Sep', '2025', 'Sep', '2028', 'L4PQ28E32ZO1', 'https://www.dicoding.com/certificates/L4PQ28E32ZO1', 'Artificial Intelligence', '2026-07-19 05:20:13.438807+07', '2026-07-19 05:20:13.438807+07');
INSERT INTO public.certifications VALUES (2, 'Memulai Pemrograman dengan Python', 'Dicoding Indonesia', 'Okt', '2025', 'Okt', '2028', 'N9ZQ22QQRPG5', 'https://www.dicoding.com/certificates/N9ZQ22QQRPG5', 'Python', '2026-07-19 05:20:13.44072+07', '2026-07-19 05:20:13.44072+07');
INSERT INTO public.certifications VALUES (3, 'INDONESIA NATIONAL QUALIFICATION FRAMEWORK LEVEL II ON SKILLS COMPETENCE SOFTWARE ENGINEERING', 'Badan Nasional Sertifikasi Profesi (BNSP)', 'Mar', '2023', 'Mar', '2026', '62019 2512 2 0000134 2023', '', 'Software Engineering', '2026-07-19 05:20:13.441921+07', '2026-07-19 05:20:13.441921+07');


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: muhfaiizr
--



--
-- Data for Name: educations; Type: TABLE DATA; Schema: public; Owner: muhfaiizr
--

INSERT INTO public.educations VALUES (1, 'Politeknik Negeri Indramayu', 'Bachelor of Applied Science (BASc)', 'Software Engineering', 'Jul', '2023', 'Jul', '2027', '', '', '<ul><li><strong>Himpunan Mahasiswa Rekayasa Perangkat Lunak (HIMA-RPL)</strong> - Kepala Divisi Hubungan Masyarakat (Jun 2024 - Jun 2025)<br/>Mengelola komunikasi internal dan eksternal, membangun kemitraan strategis dengan organisasi kampus lainnya, serta memimpin tim untuk meningkatkan kesadaran merek himpunan.</li><li><strong>Permikomnas Jawa Barat</strong> - Kajian Strategis dan Advokasi (Jan 2025 - Jan 2026)<br/>Menganalisis isu-isu regional di bidang Informatika dan Komputer, melakukan riset untuk rekomendasi kebijakan, dan mengadvokasi kepentingan mahasiswa di tingkat provinsi.</li><li><strong>Badan Eksekutif Mahasiswa (BEM)</strong> - Staff Muda Kominfo (Okt 2023 - Jun 2024)<br/>Bertanggung jawab atas strategi konten digital, mengelola platform media sosial resmi, dan memastikan alur informasi yang efektif ke seluruh mahasiswa.</li></ul>', '', '2026-07-19 05:20:13.432764+07', '2026-07-19 05:20:13.432764+07');
INSERT INTO public.educations VALUES (2, 'SMKN 1 Kota Cirebon', 'Vocational High School Diploma', 'Software Engineering', 'Jun', '2020', 'Jun', '2023', '83.00', '', '', '', '2026-07-19 05:20:13.435339+07', '2026-07-19 05:20:13.435339+07');


--
-- Data for Name: experiences; Type: TABLE DATA; Schema: public; Owner: muhfaiizr
--

INSERT INTO public.experiences VALUES (1, 'Founder', 'Purna waktu', 'triplevibe.tech', true, 'Juni', '2025', '', '', 'Kota Cirebon, Jawa Barat, Indonesia', 'Di lokasi', 'Bertanggung jawab memimpin tim pengembangan perangkat lunak dalam menciptakan solusi website yang berkualitas untuk klien dari berbagai latar belakang—mulai dari UMKM, Individu, hingga startup. Fokus utama saya adalah memastikan setiap produk tidak hanya memenuhi kebutuhan teknis, tetapi juga mencerminkan identitas brand klien melalui desain yang modern, fungsional, dan responsif.', '', '2026-07-19 05:20:13.421256+07', '2026-07-19 05:20:13.421256+07');
INSERT INTO public.experiences VALUES (2, 'Full-Stack Developer', 'Pekerja lepas', 'RentGo Indonesia', true, 'Januari', '2024', '', '', 'Kota Cirebon, Jawa Barat, Indonesia', 'Jarak jauh', 'Sebagai satu-satunya Web Developer di RentGo Indonesia yang memegang peran kunci dalam membangun, mengelola, dan mengembangkan seluruh platform web perusahaan dan bertanggung jawab penuh atas sisi teknis pengembangan web, mulai dari perencanaan hingga implementasi.', '', '2026-07-19 05:20:13.421256+07', '2026-07-19 05:20:13.421256+07');
INSERT INTO public.experiences VALUES (3, 'Lead Software Engineer', 'Magang', 'PT Aplikasi Dagang Teknologi', true, 'April', '2026', '', '', 'Bandung, Jawa Barat, Indonesia', 'Di lokasi', '<p>Berperan sebagai Lead Software Engineer yang berfokus pada pengembangan solusi perangkat lunak yang scalable, efisien, dan berdampak langsung terhadap pertumbuhan bisnis serta kualitas produk digital.</p><ul><li><strong>Arsitektur Sistem:</strong> Merancang dan mengembangkan arsitektur aplikasi yang robust, scalable, dan maintainable.</li><li><strong>Technical Leadership:</strong> Memimpin tim developer, memberikan arahan teknis, dan memastikan penerapan best practice.</li><li><strong>Product Delivery:</strong> Mengelola siklus pengembangan perangkat lunak end-to-end dengan standar kualitas tinggi.</li></ul>', '', '2026-07-19 05:20:13.421256+07', '2026-07-19 05:20:13.421256+07');
INSERT INTO public.experiences VALUES (4, 'Senior Software Engineer R&D', 'Magang', 'PT Aplikasi Dagang Teknologi', false, 'Februari', '2026', 'Maret', '2026', 'Bandung, Jawa Barat, Indonesia', 'Di lokasi', '<p>Berfokus pada eksplorasi teknologi mutakhir untuk menciptakan solusi perangkat lunak yang inovatif dan skalabel.</p><ul><li><strong>Riset & Eksplorasi Teknologi:</strong> Melakukan investigasi mendalam terhadap tren teknologi baru.</li><li><strong>Rapid Prototyping:</strong> Membangun Proof of Concept (PoC) untuk fitur-fitur kompleks.</li><li><strong>Optimasi & Performa:</strong> Menganalisis dan meningkatkan performa sistem yang sudah ada.</li></ul>', '', '2026-07-19 05:20:13.421256+07', '2026-07-19 05:20:13.421256+07');
INSERT INTO public.experiences VALUES (5, 'Full-Stack Developer', 'Magang', 'PT Aplikasi Dagang Teknologi', false, 'Januari', '2026', 'Februari', '2026', 'Bandung, Jawa Barat, Indonesia', 'Di lokasi', '', '', '2026-07-19 05:20:13.421256+07', '2026-07-19 05:20:13.421256+07');
INSERT INTO public.experiences VALUES (6, 'Content Creator Editor', 'Pekerja lepas', 'Fikri Theme Park', false, 'Januari', '2023', 'Agustus', '2023', 'Jakarta Raya, Indonesia', 'Jarak jauh', '<ul><li>Mengoperasikan Sony Vegas Pro dan Adobe Photoshop untuk memproduksi konten video berkualitas tinggi dengan standar industri.</li><li>Melakukan riset tren visual terkini untuk memastikan konten tetap relevan dengan selera pasar yang cepat berubah.</li></ul>', '', '2026-07-19 05:20:13.421256+07', '2026-07-19 05:20:13.421256+07');
INSERT INTO public.experiences VALUES (7, 'Junior Software Engineer', 'Magang', 'CV. Mandiri Putra Nusa', false, 'Maret', '2022', 'Juli', '2022', 'Kota Cirebon, Jawa Barat, Indonesia', 'Di lokasi', '<ul><li><strong>Automated Monitoring Solutions:</strong> Berhasil merancang dan mengimplementasikan sistem monitoring real-time yang mengotomatisasi pengumpulan data operasional, sehingga meningkatkan akurasi data.</li><li><strong>Backend Logic Optimization:</strong> Membangun fungsionalitas sisi server menggunakan PHP dengan fokus pada efisiensi kode, keamanan validasi input, dan skalabilitas sistem.</li><li><strong>Data-Driven Dashboards:</strong> Mengembangkan dashboard visualisasi data yang intuitif untuk membantu pemangku kepentingan dalam pengambilan keputusan berbasis data.</li></ul>', '', '2026-07-19 05:20:13.421256+07', '2026-07-19 05:20:13.421256+07');
INSERT INTO public.experiences VALUES (8, 'Internet of Things Developer', 'Magang', 'PT. Nusabot Inovasi Teknologi', false, 'Maret', '2022', 'Mei', '2022', 'Kota Cirebon, Jawa Barat, Indonesia', 'Gabungan', '', '', '2026-07-19 05:20:13.421256+07', '2026-07-19 05:20:13.421256+07');


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: muhfaiizr
--

INSERT INTO public.projects VALUES (3, 'Simade', 'https://github.com/Muhfaizr21/Simade', '', '2026', 'Proyek pengembangan perangkat lunak.', '["JavaScript"]', 'bg-teal-50 text-teal-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/Simade', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (6, 'Filmreact', 'https://github.com/Muhfaizr21/filmreact', '', '2026', 'Proyek pengembangan perangkat lunak.', '["JavaScript"]', 'bg-rose-50 text-rose-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/filmreact', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (11, 'Siakad', 'https://github.com/Muhfaizr21/Siakad', '', '2026', 'Proyek pengembangan perangkat lunak.', '["JavaScript"]', 'bg-fuchsia-50 text-fuchsia-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/Siakad', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (12, 'Linkswear', 'https://github.com/Muhfaizr21/Linkswear', '', '2026', 'Proyek pengembangan perangkat lunak.', '["JavaScript"]', 'bg-pink-50 text-pink-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/Linkswear', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (13, 'Point Of Sale', 'https://github.com/Muhfaizr21/point-of-sale', '', '2026', 'Proyek pengembangan perangkat lunak.', '["JavaScript"]', 'bg-blue-50 text-blue-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/point-of-sale', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (15, 'Sistem Informasi Tingkat Kesegaran Buah Mangga', 'https://github.com/Muhfaizr21/Sistem-Informasi-Tingkat-Kesegaran-buah-Mangga', '', '2026', 'Proyek pengembangan perangkat lunak.', '["Blade"]', 'bg-green-50 text-green-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/Sistem-Informasi-Tingkat-Kesegaran-buah-Mangga', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (16, 'Dagangcoomerce', 'https://github.com/Muhfaizr21/DagangCoomerce', '', '2026', 'Proyek pengembangan perangkat lunak.', '["JavaScript"]', 'bg-indigo-50 text-indigo-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/DagangCoomerce', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (17, 'Dagangmaker', 'https://github.com/Muhfaizr21/dagangmaker', '', '2026', 'Proyek pengembangan perangkat lunak.', '["JavaScript"]', 'bg-teal-50 text-teal-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/dagangmaker', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (18, 'Safemind', 'https://github.com/Muhfaizr21/safemind', '', '2026', 'Proyek pengembangan perangkat lunak.', '["Dart"]', 'bg-red-50 text-red-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/safemind', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (19, 'Jasa Printing', 'https://github.com/Muhfaizr21/Jasa-Printing', '', '2026', 'Proyek pengembangan perangkat lunak.', '["HTML"]', 'bg-amber-50 text-amber-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/Jasa-Printing', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (20, 'Triplevibe', 'https://github.com/Muhfaizr21/triplevibe', '', '2026', 'Proyek pengembangan perangkat lunak.', '["JavaScript"]', 'bg-rose-50 text-rose-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/triplevibe', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (21, 'Dagangplay', 'https://github.com/Muhfaizr21/DagangPlay', '', '2026', 'Proyek pengembangan perangkat lunak.', '["TypeScript"]', 'bg-purple-50 text-purple-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/DagangPlay', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (24, 'Simade Fix', 'https://github.com/Muhfaizr21/simade-fix', '', '2025', 'Proyek pengembangan perangkat lunak.', '["JavaScript"]', 'bg-emerald-50 text-emerald-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/simade-fix', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (25, 'Muscletrack Sistem Informasi Pengembangan Otot Nutrisi Tubuh', 'https://github.com/Muhfaizr21/MuscleTrack-Sistem-Informasi-Pengembangan-Otot-Nutrisi-Tubuh', '', '2025', 'Proyek pengembangan perangkat lunak.', '["Blade"]', 'bg-fuchsia-50 text-fuchsia-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/MuscleTrack-Sistem-Informasi-Pengembangan-Otot-Nutrisi-Tubuh', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (26, 'Rental Mobil', 'https://github.com/Muhfaizr21/rental-mobil', '', '2025', 'Aplikasi Rental Mobil', '["Blade"]', 'bg-pink-50 text-pink-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/rental-mobil', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (28, 'Properties.', 'https://github.com/Muhfaizr21/properties.', '', '2025', 'Proyek pengembangan perangkat lunak.', '["TypeScript"]', 'bg-slate-50 text-slate-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/properties.', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (29, 'Sistem E Voting', 'https://github.com/Muhfaizr21/sistem-e-voting', '', '2025', 'Proyek pengembangan perangkat lunak.', '["Blade"]', 'bg-green-50 text-green-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/sistem-e-voting', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (30, 'Landing Page Rent Car', 'https://github.com/Muhfaizr21/landing-page-rent-car', '', '2025', 'Sebuah landing page untuk perusahaan berbasis rental mobil', '["JavaScript"]', 'bg-indigo-50 text-indigo-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/landing-page-rent-car', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (5, 'Hotel', 'https://github.com/Muhfaizr21/hotel6', '', '2026', 'Proyek pengembangan perangkat lunak.', '["JavaScript"]', 'bg-amber-50 text-amber-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/hotel6', '2026-07-19 04:56:01.049724+07', '2026-07-19 05:05:24.216647+07');
INSERT INTO public.projects VALUES (7, 'Hotel 2', 'https://github.com/Muhfaizr21/hotel5', '', '2026', 'Proyek pengembangan perangkat lunak.', '["JavaScript"]', 'bg-purple-50 text-purple-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/hotel5', '2026-07-19 04:56:01.049724+07', '2026-07-19 05:05:46.610784+07');
INSERT INTO public.projects VALUES (8, 'Akuglow', 'https://github.com/Muhfaizr21/SahabatMart', '', '2026', 'Proyek pengembangan perangkat lunak.', '["JavaScript"]', 'bg-cyan-50 text-cyan-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/SahabatMart', '2026-07-19 04:56:01.049724+07', '2026-07-19 05:05:55.043715+07');
INSERT INTO public.projects VALUES (9, 'Sistem PPOB + Affiliate', 'https://github.com/Muhfaizr21/digiflazz', '', '2026', 'Proyek pengembangan perangkat lunak.', '["TypeScript"]', 'bg-orange-50 text-orange-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/digiflazz', '2026-07-19 04:56:01.049724+07', '2026-07-19 05:06:10.206446+07');
INSERT INTO public.projects VALUES (23, 'Warung forza', 'https://github.com/Muhfaizr21/warungforzaSaas', '', '2026', 'Proyek pengembangan perangkat lunak.', '["JavaScript"]', 'bg-orange-50 text-orange-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/warungforzaSaas', '2026-07-19 04:56:01.049724+07', '2026-07-19 05:06:39.861856+07');
INSERT INTO public.projects VALUES (32, 'Ide Smart Inventory System Crud Edition ', 'https://github.com/Muhfaizr21/IDE-Smart-Inventory-System-CRUD-Edition-', '', '2025', 'Proyek pengembangan perangkat lunak.', '["Blade"]', 'bg-red-50 text-red-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/IDE-Smart-Inventory-System-CRUD-Edition-', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (34, 'Ai Powered Content Planner', 'https://github.com/Muhfaizr21/AI-Powered-Content-Planner', '', '2025', 'Proyek pengembangan perangkat lunak.', '["JavaScript"]', 'bg-rose-50 text-rose-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/AI-Powered-Content-Planner', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (35, 'Crypto Landing', 'https://github.com/Muhfaizr21/crypto-landing', '', '2025', 'Proyek pengembangan perangkat lunak.', '["JavaScript"]', 'bg-purple-50 text-purple-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/crypto-landing', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (36, 'Sehat Keuangan Landing Page ', 'https://github.com/Muhfaizr21/sehat-keuangan-landing-page-', '', '2025', 'Proyek pengembangan perangkat lunak.', '["JavaScript"]', 'bg-cyan-50 text-cyan-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/sehat-keuangan-landing-page-', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (37, 'Traveler', 'https://github.com/Muhfaizr21/traveler', '', '2025', 'Proyek pengembangan perangkat lunak.', '["SCSS"]', 'bg-orange-50 text-orange-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/traveler', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (38, 'Blog Dashboard React', 'https://github.com/Muhfaizr21/blog-dashboard-react', '', '2025', 'membuat dashboard blog sederhana (belajar)', '["JavaScript"]', 'bg-emerald-50 text-emerald-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/blog-dashboard-react', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (41, 'Rentgo', 'https://github.com/Muhfaizr21/rentgo', '', '2025', 'Proyek pengembangan perangkat lunak.', '["Blade"]', 'bg-blue-50 text-blue-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/rentgo', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (42, 'Simade_Mobile', 'https://github.com/Muhfaizr21/simade_mobile', '', '2025', 'Proyek pengembangan perangkat lunak.', '["Dart"]', 'bg-slate-50 text-slate-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/simade_mobile', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (43, 'Warung Madura', 'https://github.com/Muhfaizr21/warung-madura', '', '2025', 'Proyek pengembangan perangkat lunak.', '["Blade"]', 'bg-green-50 text-green-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/warung-madura', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (44, 'E Lapor Desa', 'https://github.com/Muhfaizr21/E-Lapor-desa', '', '2025', 'Proyek pengembangan perangkat lunak.', '["PHP"]', 'bg-indigo-50 text-indigo-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/E-Lapor-desa', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (45, 'Ticket Adt', 'https://github.com/Muhfaizr21/ticket-adt', '', '2025', 'Persyaratan Untuk Memenuhi Seleksi Magang', '["Blade"]', 'bg-teal-50 text-teal-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/ticket-adt', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (46, 'E Commerce', 'https://github.com/Muhfaizr21/e-commerce', '', '2025', 'Proyek pengembangan perangkat lunak.', '["TypeScript"]', 'bg-red-50 text-red-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/e-commerce', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (47, 'Dashboardreact', 'https://github.com/Muhfaizr21/dashboardreact', '', '2025', 'ini adalah tampilan sederhana menggunakan react.js yang sangat sederhana', '["CSS"]', 'bg-amber-50 text-amber-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/dashboardreact', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (48, 'Lms Mini', 'https://github.com/Muhfaizr21/lms-mini', '', '2025', 'Proyek pengembangan perangkat lunak.', '["Blade"]', 'bg-rose-50 text-rose-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/lms-mini', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (50, 'Quran Online', 'https://github.com/Muhfaizr21/Quran-online', '', '2025', 'Proyek pengembangan perangkat lunak.', '["PHP"]', 'bg-cyan-50 text-cyan-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/Quran-online', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (51, 'Kantorabsen', 'https://github.com/Muhfaizr21/KantorAbsen', '', '2025', 'Proyek pengembangan perangkat lunak.', '["JavaScript"]', 'bg-orange-50 text-orange-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/KantorAbsen', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (52, 'Sekolah_Landingpage', 'https://github.com/Muhfaizr21/sekolah_landingpage', '', '2025', 'Proyek pengembangan perangkat lunak.', '["SCSS"]', 'bg-emerald-50 text-emerald-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/sekolah_landingpage', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (53, 'Company_Profile', 'https://github.com/Muhfaizr21/company_profile', '', '2025', 'Proyek pengembangan perangkat lunak.', '["CSS"]', 'bg-fuchsia-50 text-fuchsia-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/company_profile', '2026-07-19 04:56:01.049724+07', '2026-07-19 04:56:01.049724+07');
INSERT INTO public.projects VALUES (1, 'Personal Portfolios', 'https://itsfaiz.com/', '', '2026', 'Situs yang sedang Anda baca. Dibangun sebagai tata letak editorial satu halaman dengan animasi halus dan sistem tipografi yang ketat.', '["React", "Tailwind CSS", "Vite"]', 'bg-slate-50 text-slate-200', 'https://opengraph.githubassets.com/1/Muhfaizr21/porto', '2026-07-19 04:56:01.049724+07', '2026-07-19 05:02:59.965789+07');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: muhfaiizr
--

INSERT INTO public.users VALUES (1, 'muhfaiizr', '$2a$10$FwZdgxeuetsFWtOB/PT/e.foA3ICOR/9k/5rtHudvU1yQT9u2sgNm', '2026-07-19 04:49:25.836219+07');


--
-- Name: abouts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muhfaiizr
--

SELECT pg_catalog.setval('public.abouts_id_seq', 1, true);


--
-- Name: awards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muhfaiizr
--

SELECT pg_catalog.setval('public.awards_id_seq', 3, true);


--
-- Name: certifications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muhfaiizr
--

SELECT pg_catalog.setval('public.certifications_id_seq', 3, true);


--
-- Name: contacts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muhfaiizr
--

SELECT pg_catalog.setval('public.contacts_id_seq', 1, false);


--
-- Name: educations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muhfaiizr
--

SELECT pg_catalog.setval('public.educations_id_seq', 2, true);


--
-- Name: experiences_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muhfaiizr
--

SELECT pg_catalog.setval('public.experiences_id_seq', 8, true);


--
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muhfaiizr
--

SELECT pg_catalog.setval('public.projects_id_seq', 53, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muhfaiizr
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- PostgreSQL database dump complete
--

\unrestrict 42ZabSqjbQdtBQYxuD2Rl6t2N2pe5mPFJ2fQ7dvnQgRxy95xwF2HWu6M4g4bmAd

