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
	if blogCount == 0 {
		log.Println("Seeding Blogs to production...")
		blogs := []Models.Blog{
			{Title: "Membangun Arsitektur Microservices dengan Go", Slug: "membangun-arsitektur-microservices-go", Content: "Di era modern, microservices menjadi standar dalam pengembangan aplikasi skala besar. Bahasa pemrograman Go, dengan performanya yang cepat dan dukungan konkurensi (goroutines) yang luar biasa, merupakan pilihan yang sangat ideal untuk membangun microservices. Pada studi kasus proyek terbaru saya, penggunaan Go mengurangi konsumsi memori hingga 40% dibandingkan menggunakan bahasa interpretatif."},
			{Title: "Optimasi Performa React untuk Aplikasi Skala Besar", Slug: "optimasi-performa-react", Content: "Aplikasi yang cepat adalah kunci retensi pengguna. Dalam React, rendering yang berlebihan (unnecessary re-renders) sering menjadi masalah utama. Dengan mengimplementasikan teknik memoization (useMemo, useCallback), serta strategi lazy loading untuk komponen yang besar, kita bisa mengurangi waktu Load to Interactive secara signifikan. Studi kasus ini membahas optimasi pada sebuah dashboard analitik."},
			{Title: "Mengenal Tailwind CSS v4: Apa yang Baru?", Slug: "mengenal-tailwind-css-v4", Content: "Tailwind CSS terus berevolusi. Versi 4 membawa perubahan besar dalam hal kecepatan kompilasi dengan engine berbasis Rust. Selain itu, cara konfigurasi menjadi jauh lebih bersih tanpa perlu file konfigurasi JavaScript yang panjang. Artikel ini membahas migrasi dari v3 ke v4 beserta tantangan yang mungkin dihadapi."},
			{Title: "Studi Kasus: Meningkatkan Kecepatan Load Website 50%", Slug: "studi-kasus-meningkatkan-kecepatan", Content: "Kecepatan load berdampak langsung pada konversi. Dalam studi kasus klien E-commerce, kami berhasil menurunkan Largest Contentful Paint (LCP) dari 3.2 detik menjadi 1.5 detik. Pendekatannya meliputi optimasi format gambar (WebP), penggunaan CDN, serta meminimalisir bundle JavaScript yang dikirim ke client."},
			{Title: "Pentingnya Menulis Clean Code dalam Tim", Slug: "pentingnya-clean-code-tim", Content: "Kode dibaca lebih sering daripada ditulis. Ketika bekerja dalam tim yang terdiri dari 5 developer atau lebih, kode yang berantakan akan memperlambat iterasi fitur. Penerapan prinsip SOLID, penamaan variabel yang deskriptif, dan pengujian otomatis (unit testing) bukan sekadar 'nice to have', melainkan kewajiban mutlak."},
			{Title: "Mengapa Saya Memilih PostgreSQL Dibanding NoSQL", Slug: "mengapa-memilih-postgresql", Content: "Dalam membangun sistem transaksional yang kompleks seperti manajemen keuangan, konsistensi data (ACID) tidak bisa ditawar. PostgreSQL menawarkan fitur relasional yang sangat matang, ditambah dukungan tipe data JSONB yang membuatnya bisa menangani data semi-terstruktur sebaik MongoDB, menjadikannya 'best of both worlds'."},
			{Title: "Panduan Praktis Deployment Aplikasi ke Vercel", Slug: "panduan-deployment-vercel", Content: "Vercel telah menyederhanakan proses deployment frontend secara drastis. Integrasi langsung dengan repositori GitHub memungkinkan Continuous Deployment tanpa pusing mengatur CI/CD pipeline manual. Artikel ini menjelaskan langkah-langkah praktis beserta cara mengatur environment variables yang aman."},
			{Title: "Animasi UI/UX Modern dengan Framer Motion", Slug: "animasi-ui-ux-framer-motion", Content: "Animasi bukan sekadar hiasan; ia membantu memberikan konteks spasial bagi pengguna. Dengan Framer Motion di React, membuat animasi yang kompleks seperti layout transition, scroll reveal, dan efek 'spring' yang natural menjadi sangat mudah tanpa perlu menulis ratusan baris CSS keyframes."},
			{Title: "Menangani Autentikasi JWT dengan Aman di Go", Slug: "autentikasi-jwt-aman-go", Content: "Keamanan adalah aspek paling krusial dalam backend. JSON Web Token (JWT) sering digunakan untuk stateless authentication. Namun, menyimpannya di local storage bisa rentan terhadap serangan XSS. Praktik terbaik adalah menyimpannya di HttpOnly Cookies, serta menerapkan strategi rotasi Refresh Token. Berikut implementasinya di Go."},
			{Title: "Membangun RESTful API yang Standar dan Mudah Digunakan", Slug: "membangun-restful-api-standar", Content: "API adalah jembatan komunikasi antar layanan. Desain API yang buruk akan menyulitkan tim frontend. Menggunakan konvensi penamaan URL yang konsisten, HTTP status code yang tepat, dan format respons standar (seperti memisahkan 'data' dan 'error') akan sangat mempercepat proses integrasi sistem."},
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
