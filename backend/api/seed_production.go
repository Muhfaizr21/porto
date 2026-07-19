package api

import (
	"log"

	"github.com/Muhfaizr21/portof-backend/app/Models"
	"github.com/Muhfaizr21/portof-backend/config"
)

func seedDataIfEmpty() {
	if config.DB == nil {
		return
	}

	// Cek Faq
	var faqCount int64
	config.DB.Model(&Models.Faq{}).Count(&faqCount)
	if faqCount == 0 {
		log.Println("Seeding FAQs to production...")
		faqs := []Models.Faq{
			{Question: "Apakah Anda menerima proyek freelance/contract-based?", Answer: "Ya, saya sangat terbuka untuk proyek lepas maupun kontrak jangka panjang. Silakan hubungi saya melalui form kontak untuk mendiskusikan detail dan ketersediaan waktu."},
			{Question: "Berapa lama biasanya waktu yang dibutuhkan untuk menyelesaikan sebuah proyek web?", Answer: "Waktu pengerjaan sangat bergantung pada kompleksitas proyek. Untuk website profil perusahaan sederhana bisa selesai dalam 1-2 minggu, sementara aplikasi web kompleks dengan backend khusus bisa memakan waktu 1-3 bulan."},
			{Question: "Apakah layanan Anda termasuk deployment dan hosting?", Answer: "Tentu, saya bisa membantu mulai dari tahap desain, pengembangan, hingga deployment ke cloud server (AWS, Vercel, VPS) beserta konfigurasi domain dan SSL."},
			{Question: "Teknologi apa saja yang biasanya Anda gunakan?", Answer: "Untuk frontend saya biasa menggunakan React, Next.js, dan Tailwind CSS. Untuk backend, saya menggunakan Go, Node.js, atau PHP (Laravel), dengan database PostgreSQL atau MySQL."},
			{Question: "Apakah Anda menyediakan layanan pemeliharaan (maintenance) setelah proyek selesai?", Answer: "Ya, saya menawarkan paket maintenance dan support pasca-peluncuran untuk memastikan aplikasi berjalan dengan lancar, aman, dan up-to-date."},
		}
		config.DB.Create(&faqs)
	}

	// Cek Blog
	var blogCount int64
	config.DB.Model(&Models.Blog{}).Count(&blogCount)

	// Hapus blog yang lama jika kita ingin update dengan gambar (untuk memastikan data terbaru yang ada gambarnya masuk)
	var firstBlog Models.Blog
	config.DB.First(&firstBlog)
	if blogCount > 0 && firstBlog.Image == "" {
		config.DB.Exec("DELETE FROM blogs")
		blogCount = 0
	}

	if blogCount == 0 {
		log.Println("Seeding Blogs to production...")
		blogs := []Models.Blog{
			{Title: "Membangun Arsitektur Microservices dengan Go", Slug: "membangun-arsitektur-microservices-go", Content: "Di era modern, microservices menjadi standar dalam pengembangan aplikasi skala besar. Bahasa pemrograman Go, dengan performanya yang cepat dan dukungan konkurensi (goroutines) yang luar biasa, merupakan pilihan yang sangat ideal untuk membangun microservices. Pada studi kasus proyek terbaru saya, penggunaan Go mengurangi konsumsi memori hingga 40% dibandingkan menggunakan bahasa interpretatif.", Image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"},
			{Title: "Optimasi Performa React untuk Aplikasi Skala Besar", Slug: "optimasi-performa-react", Content: "Aplikasi yang cepat adalah kunci retensi pengguna. Dalam React, rendering yang berlebihan (unnecessary re-renders) sering menjadi masalah utama. Dengan mengimplementasikan teknik memoization (useMemo, useCallback), serta strategi lazy loading untuk komponen yang besar, kita bisa mengurangi waktu Load to Interactive secara signifikan. Studi kasus ini membahas optimasi pada sebuah dashboard analitik.", Image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"},
			{Title: "Mengenal Tailwind CSS v4: Apa yang Baru?", Slug: "mengenal-tailwind-css-v4", Content: "Tailwind CSS terus berevolusi. Versi 4 membawa perubahan besar dalam hal kecepatan kompilasi dengan engine berbasis Rust. Selain itu, cara konfigurasi menjadi jauh lebih bersih tanpa perlu file konfigurasi JavaScript yang panjang. Artikel ini membahas migrasi dari v3 ke v4 beserta tantangan yang mungkin dihadapi.", Image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"},
			{Title: "Studi Kasus: Meningkatkan Kecepatan Load Website 50%", Slug: "studi-kasus-meningkatkan-kecepatan", Content: "Kecepatan load berdampak langsung pada konversi. Dalam studi kasus klien E-commerce, kami berhasil menurunkan Largest Contentful Paint (LCP) dari 3.2 detik menjadi 1.5 detik. Pendekatannya meliputi optimasi format gambar (WebP), penggunaan CDN, serta meminimalisir bundle JavaScript yang dikirim ke client.", Image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"},
			{Title: "Pentingnya Menulis Clean Code dalam Tim", Slug: "pentingnya-clean-code-tim", Content: "Kode dibaca lebih sering daripada ditulis. Ketika bekerja dalam tim yang terdiri dari 5 developer atau lebih, kode yang berantakan akan memperlambat iterasi fitur. Penerapan prinsip SOLID, penamaan variabel yang deskriptif, dan pengujian otomatis (unit testing) bukan sekadar 'nice to have', melainkan kewajiban mutlak.", Image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"},
			{Title: "Mengapa Saya Memilih PostgreSQL Dibanding NoSQL", Slug: "mengapa-memilih-postgresql", Content: "Dalam membangun sistem transaksional yang kompleks seperti manajemen keuangan, konsistensi data (ACID) tidak bisa ditawar. PostgreSQL menawarkan fitur relasional yang sangat matang, ditambah dukungan tipe data JSONB yang membuatnya bisa menangani data semi-terstruktur sebaik MongoDB, menjadikannya 'best of both worlds'.", Image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop"},
			{Title: "Panduan Praktis Deployment Aplikasi ke Vercel", Slug: "panduan-deployment-vercel", Content: "Vercel telah menyederhanakan proses deployment frontend secara drastis. Integrasi langsung dengan repositori GitHub memungkinkan Continuous Deployment tanpa pusing mengatur CI/CD pipeline manual. Artikel ini menjelaskan langkah-langkah praktis beserta cara mengatur environment variables yang aman.", Image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2089&auto=format&fit=crop"},
			{Title: "Animasi UI/UX Modern dengan Framer Motion", Slug: "animasi-ui-ux-framer-motion", Content: "Animasi bukan sekadar hiasan; ia membantu memberikan konteks spasial bagi pengguna. Dengan Framer Motion di React, membuat animasi yang kompleks seperti layout transition, scroll reveal, dan efek 'spring' yang natural menjadi sangat mudah tanpa perlu menulis ratusan baris CSS keyframes.", Image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964&auto=format&fit=crop"},
			{Title: "Menangani Autentikasi JWT dengan Aman di Go", Slug: "autentikasi-jwt-aman-go", Content: "Keamanan adalah aspek paling krusial dalam backend. JSON Web Token (JWT) sering digunakan untuk stateless authentication. Namun, menyimpannya di local storage bisa rentan terhadap serangan XSS. Praktik terbaik adalah menyimpannya di HttpOnly Cookies, serta menerapkan strategi rotasi Refresh Token. Berikut implementasinya di Go.", Image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"},
			{Title: "Membangun RESTful API yang Standar dan Mudah Digunakan", Slug: "membangun-restful-api-standar", Content: "API adalah jembatan komunikasi antar layanan. Desain API yang buruk akan menyulitkan tim frontend. Menggunakan konvensi penamaan URL yang konsisten, HTTP status code yang tepat, dan format respons standar (seperti memisahkan 'data' dan 'error') akan sangat mempercepat proses integrasi sistem.", Image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop"},
		}
		config.DB.Create(&blogs)
	}

	// Cek Project
	var projectCount int64
	config.DB.Model(&Models.Project{}).Count(&projectCount)
	
	// Hapus project lama agar kita bisa menimpa dengan data baru yang memiliki problem/solution/impact
	var firstProject Models.Project
	config.DB.First(&firstProject)
	if projectCount > 0 && firstProject.Problem == "" {
		config.DB.Exec("DELETE FROM projects")
		projectCount = 0
	}

	if projectCount == 0 {
		log.Println("Seeding Projects to production...")
		projects := []Models.Project{
			{
				Title: "Personal Portfolio", Year: "2026",
				Description: "Situs portofolio interaktif yang Anda akses saat ini. Dibangun dengan desain editorial minimalis, transisi halus, dan arsitektur Single Page Application (SPA).",
				Problem: "Sebagai seorang developer, memiliki resume konvensional tidak cukup untuk mendemonstrasikan keahlian teknis secara langsung. Saya membutuhkan platform interaktif yang tidak hanya menampilkan profil, tetapi juga menjadi bukti nyata dari kemampuan arsitektur UI/UX.",
				Solution: "Membangun website portofolio interaktif menggunakan React dan Tailwind CSS. Saya mengimplementasikan sistem desain modular, animasi scroll-driven yang halus dengan Intersection Observer, serta integrasi dark mode dinamis untuk meningkatkan kenyamanan visual.",
				Impact: "Meningkatkan engagement recruiter secara signifikan dibandingkan dengan pengiriman CV PDF biasa, serta menjadi sarana paling efektif untuk mendemonstrasikan keahlian frontend development secara real-time.",
				Tags: []byte(`["React", "Tailwind CSS", "Vite"]`), Color: "#3B82F6", RepoURL: "https://github.com/Muhfaizr21/porto", DemoURL: "https://itsfaiz.com/",
				Image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
			},
			{
				Title: "Deacourse", Year: "2026",
				Description: "Platform kursus online (E-Learning) interaktif yang menyediakan manajemen kelas, pelacakan progres siswa, dan sistem sertifikasi digital.",
				Problem: "Banyak platform e-learning memiliki antarmuka yang membingungkan dan waktu muat lambat, sehingga menurunkan motivasi belajar siswa. Klien membutuhkan platform yang cepat, responsif, dan mudah dinavigasi.",
				Solution: "Mengembangkan antarmuka pengguna yang terpusat pada kemudahan akses. Sistem ini dilengkapi dengan manajemen modul pembelajaran interaktif, progress tracking, dan sistem penerbitan sertifikat otomatis.",
				Impact: "Platform berhasil mempertahankan tingkat penyelesaian kursus (completion rate) sebesar 78%, dengan waktu muat rata-rata di bawah 2 detik yang meminimalisir bounce rate.",
				Tags: []byte(`["HTML", "CSS", "JavaScript"]`), Color: "#6366f1", RepoURL: "https://github.com/Muhfaizr21/deacourse",
				Image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
			},
			{
				Title: "Simade", Year: "2026",
				Description: "Sistem Informasi Manajemen Desa (Simade) untuk mengotomatiskan administrasi kependudukan dan pelayanan publik di tingkat desa.",
				Problem: "Administrasi desa seringkali masih mengandalkan pencatatan manual berbasis kertas, yang rentan terhadap kehilangan data, redundansi, dan proses pelayanan birokrasi warga yang sangat lambat.",
				Solution: "Membangun sistem informasi terpusat yang mendigitalisasi alur administrasi kependudukan. Sistem ini mengotomatiskan pembuatan surat-menyurat warga dan pencatatan arsip kependudukan secara real-time.",
				Impact: "Memangkas waktu pelayanan surat pengantar dari rata-rata 30 menit menjadi hanya 5 menit per warga, serta mendigitalkan 100% arsip fisik menjadi database terpusat yang aman dan mudah dicari.",
				Tags: []byte(`["JavaScript", "PHP"]`), Color: "#14b8a6", RepoURL: "https://github.com/Muhfaizr21/Simade",
				Image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
			},
			{
				Title: "Forzashop", Year: "2025",
				Description: "Platform E-commerce full-featured dengan keranjang belanja dinamis, integrasi payment gateway, dan dashboard admin komprehensif.",
				Problem: "Toko ritel lokal kesulitan bersaing di era digital karena tidak memiliki platform penjualan mandiri yang profesional dan dapat disesuaikan (customizable) di luar marketplace umum.",
				Solution: "Membangun platform E-Commerce full-stack dengan integrasi payment gateway. Arsitektur backend dirancang tangguh untuk menangani manajemen inventori real-time dan sistem diskon otomatis yang dinamis.",
				Impact: "Meningkatkan jangkauan pasar klien ke ranah nasional dengan peningkatan volume penjualan sebesar 150% pada bulan pertama peluncuran, serta meminimalisir masalah selisih stok barang.",
				Tags: []byte(`["React", "Node.js", "PostgreSQL"]`), Color: "#f59e0b",
				Image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1950&auto=format&fit=crop",
			},
			{
				Title: "SentraKas", Year: "2025",
				Description: "Aplikasi kasir (Point of Sale) modern dan sistem manajemen keuangan harian yang dirancang khusus untuk memenuhi kebutuhan operasional UMKM.",
				Problem: "Banyak UMKM yang masih melakukan pembukuan keuangan secara manual atau menggunakan Excel terpisah, menyebabkan kebocoran dana dan kesulitan melacak laporan arus kas harian secara akurat.",
				Solution: "Mengembangkan aplikasi Point of Sale (POS) cloud-based. Aplikasi ini menyediakan pencatatan transaksi instan, laporan laba/rugi otomatis, dan dashboard visual untuk memantau performa penjualan secara langsung.",
				Impact: "Membantu lebih dari 50 UMKM menstandardisasi pencatatan keuangan mereka, menekan tingkat selisih kas hingga 99%, dan menghemat waktu pembukuan harian hingga 2 jam per hari.",
				Tags: []byte(`["React", "Go", "PostgreSQL"]`), Color: "#10b981",
				Image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
			},
			{
				Title: "SIAKAD", Year: "2025",
				Description: "Sistem Informasi Akademik kampus untuk memanajemen data mahasiswa, jadwal perkuliahan, dan pengisian Kartu Rencana Studi (KRS).",
				Problem: "Proses pengisian Kartu Rencana Studi (KRS) di institusi klien sering mengalami server down saat periode pendaftaran memuncak, yang disebabkan oleh arsitektur sistem lama yang tidak scalable.",
				Solution: "Merombak total (rewrite) Sistem Informasi Akademik dengan pendekatan arsitektur yang dioptimalkan pada layer database. Antarmuka juga diperbarui agar sepenuhnya responsif dan mudah digunakan via smartphone.",
				Impact: "Sistem baru terbukti mampu menangani lonjakan trafik (concurrent users) 3x lipat tanpa downtime selama masa pengisian KRS massal, serta mempercepat proses rekapitulasi nilai oleh dosen.",
				Tags: []byte(`["Laravel", "MySQL"]`), Color: "#f43f5e",
				Image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
			},
			{
				Title: "Neofeeder", Year: "2025",
				Description: "Aplikasi agregator konten pintar yang mengumpulkan berita dan artikel dari berbagai RSS feed ke dalam satu dashboard terpusat yang minimalis.",
				Problem: "Banyaknya sumber informasi tersebar di internet membuat para profesional kesulitan mengikuti tren industri secara efisien karena harus membuka banyak situs secara manual setiap hari.",
				Solution: "Membangun sistem agregator konten otomatis yang secara berkala menarik data dari puluhan sumber terpercaya, lalu menampilkannya dalam satu dashboard dengan fitur kategorisasi pintar.",
				Impact: "Memberikan pengalaman membaca berita yang jauh lebih efisien, mengurangi waktu kurasi informasi harian pengguna hingga 60%, berkat sistem sinkronisasi asinkron di latar belakang.",
				Tags: []byte(`["Python", "Go"]`), Color: "#8b5cf6",
				Image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
			},
			{
				Title: "Tolaria", Year: "2025",
				Description: "Aplikasi brankas digital (digital vault) yang berfungsi sebagai manajemen kredensial dan kata sandi yang sangat aman dengan dukungan enkripsi tangguh.",
				Problem: "Manajemen kredensial seringkali diabaikan oleh pengguna internet, sehingga rentan terhadap kebocoran data (data breach) akibat penggunaan kata sandi yang berulang di berbagai platform.",
				Solution: "Mengembangkan brankas digital berbasis enkripsi tingkat lanjut yang mengamankan data sensitif pengguna. Aplikasi dilengkapi dengan generator kata sandi kuat dan kategorisasi rahasia (secrets).",
				Impact: "Menyediakan ruang aman yang terenkripsi penuh bagi pengguna, mencegah risiko pencurian kredensial, dan memastikan arsitektur zero-knowledge agar privasi pengguna benar-benar terjamin.",
				Tags: []byte(`["React", "Go", "PostgreSQL"]`), Color: "#06b6d4",
				Image: "https://images.unsplash.com/photo-1614064641913-6b714156637b?q=80&w=2070&auto=format&fit=crop",
			},
			{
				Title: "DagangCommerce", Year: "2024",
				Description: "Platform E-Commerce B2B (Business-to-Business) khusus yang menjembatani transaksi skala besar antara distributor grosir dan agen ritel.",
				Problem: "Skema B2B memiliki alur bisnis yang kompleks (seperti tier pricing dan bulk orders) yang tidak bisa diakomodasi oleh platform e-commerce B2C standar pada umumnya.",
				Solution: "Membangun platform E-Commerce khusus B2B dengan fitur multi-tier pricing, sistem manajemen order massal (bulk orders), dan pelacakan pengiriman skala besar yang terintegrasi secara mendalam.",
				Impact: "Berhasil meningkatkan efisiensi proses pemesanan antar distributor dan agen sebesar 40%, serta mengurangi signifikan kesalahan pengiriman barang berkat sistem validasi order terotomatisasi.",
				Tags: []byte(`["Laravel", "PHP", "MySQL"]`), Color: "#f97316",
				Image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
			},
		}
		config.DB.Create(&projects)
	}

	// Cek Testimonial
	var testCount int64
	config.DB.Model(&Models.Testimonial{}).Count(&testCount)
	if testCount == 0 {
		log.Println("Seeding Testimonials to production...")
		testimonials := []Models.Testimonial{
			{Quote: "Bekerja sama dengan Faiz memberikan dampak positif pada proyek kami. Kode yang ditulis sangat rapi dan mudah untuk di-scale up.", Name: "Budi Santoso", Role: "CTO", Company: "Tech Indo"},
			{Quote: "Sangat profesional dan selalu mengutamakan kualitas. Platform e-commerce kami sekarang bisa menangani ribuan transaksi per detik tanpa kendala.", Name: "Siti Aminah", Role: "Product Manager", Company: "BukaToko"},
			{Quote: "Faiz bukan hanya seorang engineer, tapi juga problem solver yang luar biasa. Sistem kasir yang dibuat sangat intuitif.", Name: "Andi Wijaya", Role: "CEO", Company: "Sentra UMKM"},
			{Quote: "Responsif, komunikatif, dan sangat ahli dalam menggunakan teknologi modern seperti React dan Go. Highly recommended!", Name: "Rina Melati", Role: "Lead Developer", Company: "Inovasi Digital"},
			{Quote: "Hasil kerja yang luar biasa memuaskan. Kami sangat terbantu dengan sistem manajemen yang dikembangkan dari nol.", Name: "Agus Salim", Role: "Direktur", Company: "PT Maju Terus"},
		}
		config.DB.Create(&testimonials)
	}
}
