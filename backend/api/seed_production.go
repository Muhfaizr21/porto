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


	// Cek Projects
	var projectCount int64
	config.DB.Model(&Models.Project{}).Count(&projectCount)

	if projectCount > 0 && projectCount < 53 {
		config.DB.Exec("DELETE FROM projects")
		projectCount = 0
	}

	if projectCount == 0 {
		log.Println("Seeding Projects to production...")
		projects := []Models.Project{
			{
				Title: "Personal Portfolio", Year: "2026",
				Description: "Situs yang sedang Anda baca. Dibangun sebagai tata letak editorial satu halaman dengan animasi halus dan sistem tipografi yang ketat.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"React\",\"Tailwind CSS\",\"Vite\"]"`), Color: "bg-slate-50 text-slate-200", RepoURL: "https://itsfaiz.com/", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/porto",
			},
			{
				Title: "Deacourse", Year: "2026",
				Description: "Platform kursus online (E-Learning) interaktif yang menyediakan manajemen kelas, pelacakan progres siswa, dan sistem sertifikasi digital.",
				Problem: "Banyak platform e-learning memiliki antarmuka yang membingungkan dan waktu muat lambat, sehingga menurunkan motivasi belajar siswa. Klien membutuhkan platform yang cepat, responsif, dan mudah dinavigasi.",
				Solution: "Mengembangkan antarmuka pengguna yang terpusat pada kemudahan akses. Sistem ini dilengkapi dengan manajemen modul pembelajaran interaktif, progress tracking, dan sistem penerbitan sertifikat otomatis.",
				Impact: "Platform berhasil mempertahankan tingkat penyelesaian kursus (completion rate) sebesar 78%, dengan waktu muat rata-rata di bawah 2 detik yang meminimalisir bounce rate.",
				Tags: []byte(`"[\"HTML\",\"CSS\",\"JavaScript\"]"`), Color: "#6366f1", RepoURL: "https://github.com/Muhfaizr21/deacourse", DemoURL: "",
				Image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
			},
			{
				Title: "Simade", Year: "2026",
				Description: "Sistem Informasi Manajemen Desa (Simade) untuk mengotomatiskan administrasi kependudukan dan pelayanan publik di tingkat desa.",
				Problem: "Administrasi desa seringkali masih mengandalkan pencatatan manual berbasis kertas, yang rentan terhadap kehilangan data, redundansi, dan proses pelayanan birokrasi warga yang sangat lambat.",
				Solution: "Membangun sistem informasi terpusat yang mendigitalisasi alur administrasi kependudukan. Sistem ini mengotomatiskan pembuatan surat-menyurat warga dan pencatatan arsip kependudukan secara real-time.",
				Impact: "Memangkas waktu pelayanan surat pengantar dari rata-rata 30 menit menjadi hanya 5 menit per warga, serta mendigitalkan 100% arsip fisik menjadi database terpusat yang aman dan mudah dicari.",
				Tags: []byte(`"[\"JavaScript\",\"PHP\"]"`), Color: "#14b8a6", RepoURL: "https://github.com/Muhfaizr21/Simade", DemoURL: "",
				Image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
			},
			{
				Title: "Ci Cd", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"Project\"]"`), Color: "bg-red-50 text-red-200", RepoURL: "https://github.com/Muhfaizr21/ci-cd", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/ci-cd",
			},
			{
				Title: "Hotel6", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-amber-50 text-amber-200", RepoURL: "https://github.com/Muhfaizr21/hotel6", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/hotel6",
			},
			{
				Title: "Filmreact", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-rose-50 text-rose-200", RepoURL: "https://github.com/Muhfaizr21/filmreact", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/filmreact",
			},
			{
				Title: "Hotel5", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-purple-50 text-purple-200", RepoURL: "https://github.com/Muhfaizr21/hotel5", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/hotel5",
			},
			{
				Title: "Sahabatmart", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-cyan-50 text-cyan-200", RepoURL: "https://github.com/Muhfaizr21/SahabatMart", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/SahabatMart",
			},
			{
				Title: "Digiflazz", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"TypeScript\"]"`), Color: "bg-orange-50 text-orange-200", RepoURL: "https://github.com/Muhfaizr21/digiflazz", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/digiflazz",
			},
			{
				Title: "Skill Saaya", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"Project\"]"`), Color: "bg-emerald-50 text-emerald-200", RepoURL: "https://github.com/Muhfaizr21/Skill-Saaya", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/Skill-Saaya",
			},
			{
				Title: "Siakad", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-fuchsia-50 text-fuchsia-200", RepoURL: "https://github.com/Muhfaizr21/Siakad", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/Siakad",
			},
			{
				Title: "Linkswear", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-pink-50 text-pink-200", RepoURL: "https://github.com/Muhfaizr21/Linkswear", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/Linkswear",
			},
			{
				Title: "Point Of Sale", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-blue-50 text-blue-200", RepoURL: "https://github.com/Muhfaizr21/point-of-sale", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/point-of-sale",
			},
			{
				Title: "Muhfaizr21", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"Project\"]"`), Color: "bg-slate-50 text-slate-200", RepoURL: "https://github.com/Muhfaizr21/Muhfaizr21", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/Muhfaizr21",
			},
			{
				Title: "Sistem Informasi Tingkat Kesegaran Buah Mangga", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"Blade\"]"`), Color: "bg-green-50 text-green-200", RepoURL: "https://github.com/Muhfaizr21/Sistem-Informasi-Tingkat-Kesegaran-buah-Mangga", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/Sistem-Informasi-Tingkat-Kesegaran-buah-Mangga",
			},
			{
				Title: "Dagangcoomerce", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-indigo-50 text-indigo-200", RepoURL: "https://github.com/Muhfaizr21/DagangCoomerce", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/DagangCoomerce",
			},
			{
				Title: "Dagangmaker", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-teal-50 text-teal-200", RepoURL: "https://github.com/Muhfaizr21/dagangmaker", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/dagangmaker",
			},
			{
				Title: "Safemind", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"Dart\"]"`), Color: "bg-red-50 text-red-200", RepoURL: "https://github.com/Muhfaizr21/safemind", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/safemind",
			},
			{
				Title: "Jasa Printing", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"HTML\"]"`), Color: "bg-amber-50 text-amber-200", RepoURL: "https://github.com/Muhfaizr21/Jasa-Printing", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/Jasa-Printing",
			},
			{
				Title: "Triplevibe", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-rose-50 text-rose-200", RepoURL: "https://github.com/Muhfaizr21/triplevibe", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/triplevibe",
			},
			{
				Title: "Dagangplay", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"TypeScript\"]"`), Color: "bg-purple-50 text-purple-200", RepoURL: "https://github.com/Muhfaizr21/DagangPlay", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/DagangPlay",
			},
			{
				Title: "Gamessaas", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"TypeScript\"]"`), Color: "bg-cyan-50 text-cyan-200", RepoURL: "https://github.com/Muhfaizr21/gamesSaas", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/gamesSaas",
			},
			{
				Title: "Warungforzasaas", Year: "2026",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-orange-50 text-orange-200", RepoURL: "https://github.com/Muhfaizr21/warungforzaSaas", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/warungforzaSaas",
			},
			{
				Title: "Simade Fix", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-emerald-50 text-emerald-200", RepoURL: "https://github.com/Muhfaizr21/simade-fix", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/simade-fix",
			},
			{
				Title: "Muscletrack Sistem Informasi Pengembangan Otot Nutrisi Tubuh", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"Blade\"]"`), Color: "bg-fuchsia-50 text-fuchsia-200", RepoURL: "https://github.com/Muhfaizr21/MuscleTrack-Sistem-Informasi-Pengembangan-Otot-Nutrisi-Tubuh", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/MuscleTrack-Sistem-Informasi-Pengembangan-Otot-Nutrisi-Tubuh",
			},
			{
				Title: "Rental Mobil", Year: "2025",
				Description: "Aplikasi Rental Mobil",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"Blade\"]"`), Color: "bg-pink-50 text-pink-200", RepoURL: "https://github.com/Muhfaizr21/rental-mobil", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/rental-mobil",
			},
			{
				Title: "Crud React", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-blue-50 text-blue-200", RepoURL: "https://github.com/Muhfaizr21/crud-react", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/crud-react",
			},
			{
				Title: "Properties.", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"TypeScript\"]"`), Color: "bg-slate-50 text-slate-200", RepoURL: "https://github.com/Muhfaizr21/properties.", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/properties.",
			},
			{
				Title: "Sistem E Voting", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"Blade\"]"`), Color: "bg-green-50 text-green-200", RepoURL: "https://github.com/Muhfaizr21/sistem-e-voting", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/sistem-e-voting",
			},
			{
				Title: "Landing Page Rent Car", Year: "2025",
				Description: "Sebuah landing page untuk perusahaan berbasis rental mobil",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-indigo-50 text-indigo-200", RepoURL: "https://github.com/Muhfaizr21/landing-page-rent-car", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/landing-page-rent-car",
			},
			{
				Title: "Api Nodexreact Latian ", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-teal-50 text-teal-200", RepoURL: "https://github.com/Muhfaizr21/api-nodeXreact-latian-", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/api-nodeXreact-latian-",
			},
			{
				Title: "Ide Smart Inventory System Crud Edition ", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"Blade\"]"`), Color: "bg-red-50 text-red-200", RepoURL: "https://github.com/Muhfaizr21/IDE-Smart-Inventory-System-CRUD-Edition-", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/IDE-Smart-Inventory-System-CRUD-Edition-",
			},
			{
				Title: "Secure Login Latihan", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"Blade\"]"`), Color: "bg-amber-50 text-amber-200", RepoURL: "https://github.com/Muhfaizr21/Secure-login-latihan", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/Secure-login-latihan",
			},
			{
				Title: "Ai Powered Content Planner", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-rose-50 text-rose-200", RepoURL: "https://github.com/Muhfaizr21/AI-Powered-Content-Planner", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/AI-Powered-Content-Planner",
			},
			{
				Title: "Crypto Landing", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-purple-50 text-purple-200", RepoURL: "https://github.com/Muhfaizr21/crypto-landing", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/crypto-landing",
			},
			{
				Title: "Sehat Keuangan Landing Page ", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-cyan-50 text-cyan-200", RepoURL: "https://github.com/Muhfaizr21/sehat-keuangan-landing-page-", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/sehat-keuangan-landing-page-",
			},
			{
				Title: "Traveler", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"SCSS\"]"`), Color: "bg-orange-50 text-orange-200", RepoURL: "https://github.com/Muhfaizr21/traveler", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/traveler",
			},
			{
				Title: "Blog Dashboard React", Year: "2025",
				Description: "membuat dashboard blog sederhana (belajar)",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-emerald-50 text-emerald-200", RepoURL: "https://github.com/Muhfaizr21/blog-dashboard-react", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/blog-dashboard-react",
			},
			{
				Title: "React Belajar Pzn", Year: "2025",
				Description: "belajar react programmer zaman now",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-fuchsia-50 text-fuchsia-200", RepoURL: "https://github.com/Muhfaizr21/react-belajar-pzn", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/react-belajar-pzn",
			},
			{
				Title: "Belajar Blockchain", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"Blade\"]"`), Color: "bg-pink-50 text-pink-200", RepoURL: "https://github.com/Muhfaizr21/belajar-blockchain", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/belajar-blockchain",
			},
			{
				Title: "Rentgo", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"Blade\"]"`), Color: "bg-blue-50 text-blue-200", RepoURL: "https://github.com/Muhfaizr21/rentgo", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/rentgo",
			},
			{
				Title: "Simade_Mobile", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"Dart\"]"`), Color: "bg-slate-50 text-slate-200", RepoURL: "https://github.com/Muhfaizr21/simade_mobile", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/simade_mobile",
			},
			{
				Title: "Warung Madura", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"Blade\"]"`), Color: "bg-green-50 text-green-200", RepoURL: "https://github.com/Muhfaizr21/warung-madura", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/warung-madura",
			},
			{
				Title: "E Lapor Desa", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"PHP\"]"`), Color: "bg-indigo-50 text-indigo-200", RepoURL: "https://github.com/Muhfaizr21/E-Lapor-desa", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/E-Lapor-desa",
			},
			{
				Title: "Ticket Adt", Year: "2025",
				Description: "Persyaratan Untuk Memenuhi Seleksi Magang",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"Blade\"]"`), Color: "bg-teal-50 text-teal-200", RepoURL: "https://github.com/Muhfaizr21/ticket-adt", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/ticket-adt",
			},
			{
				Title: "E Commerce", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"TypeScript\"]"`), Color: "bg-red-50 text-red-200", RepoURL: "https://github.com/Muhfaizr21/e-commerce", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/e-commerce",
			},
			{
				Title: "Dashboardreact", Year: "2025",
				Description: "ini adalah tampilan sederhana menggunakan react.js yang sangat sederhana",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"CSS\"]"`), Color: "bg-amber-50 text-amber-200", RepoURL: "https://github.com/Muhfaizr21/dashboardreact", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/dashboardreact",
			},
			{
				Title: "Lms Mini", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"Blade\"]"`), Color: "bg-rose-50 text-rose-200", RepoURL: "https://github.com/Muhfaizr21/lms-mini", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/lms-mini",
			},
			{
				Title: "Faiz Portofolio", Year: "2025",
				Description: "Ini adalah Portofolio milik saya pribadi ",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"PHP\"]"`), Color: "bg-purple-50 text-purple-200", RepoURL: "https://github.com/Muhfaizr21/faiz-portofolio", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/faiz-portofolio",
			},
			{
				Title: "Quran Online", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"PHP\"]"`), Color: "bg-cyan-50 text-cyan-200", RepoURL: "https://github.com/Muhfaizr21/Quran-online", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/Quran-online",
			},
			{
				Title: "Kantorabsen", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"JavaScript\"]"`), Color: "bg-orange-50 text-orange-200", RepoURL: "https://github.com/Muhfaizr21/KantorAbsen", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/KantorAbsen",
			},
			{
				Title: "Sekolah_Landingpage", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"SCSS\"]"`), Color: "bg-emerald-50 text-emerald-200", RepoURL: "https://github.com/Muhfaizr21/sekolah_landingpage", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/sekolah_landingpage",
			},
			{
				Title: "Company_Profile", Year: "2025",
				Description: "Proyek pengembangan perangkat lunak.",
				Problem: "",
				Solution: "",
				Impact: "",
				Tags: []byte(`"[\"CSS\"]"`), Color: "bg-fuchsia-50 text-fuchsia-200", RepoURL: "https://github.com/Muhfaizr21/company_profile", DemoURL: "",
				Image: "https://opengraph.githubassets.com/1/Muhfaizr21/company_profile",
			},
		}
		config.DB.Create(&projects)
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
