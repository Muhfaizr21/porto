package config

import (
	"fmt"
	"log"
	"os"

	"github.com/Muhfaizr21/portof-backend/app/Models"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	// Database credentials
	dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		dsn = "host=localhost user=muhfaiizr password=admin dbname=portof port=5432 sslmode=disable TimeZone=Asia/Jakarta"
	}

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Gagal terhubung ke database: %v", err)
	}

	fmt.Println("Berhasil terhubung ke PostgreSQL!")

	// Auto-migrate models - Skip on Vercel due to 10s timeout limits
	if os.Getenv("VERCEL") == "" {
		err = db.AutoMigrate(&Models.Contact{}, &Models.User{}, &Models.Project{}, &Models.Experience{}, &Models.Education{}, &Models.Certification{}, &Models.Award{}, &Models.About{})
		if err != nil {
			log.Fatalf("Gagal melakukan migrasi database: %v", err)
		}
		fmt.Println("Migrasi database berhasil!")

		// Seed Admin
		var count int64
		db.Model(&Models.User{}).Count(&count)
		if count == 0 {
			hashedPassword, _ := bcrypt.GenerateFromPassword([]byte("admin"), bcrypt.DefaultCost)
			admin := Models.User{
				Username: "muhfaiizr",
				Password: string(hashedPassword),
			}
			db.Create(&admin)
			fmt.Println("Superadmin user seeded!")
		}

		// Seed About Data
		var aboutCount int64
		db.Model(&Models.About{}).Count(&aboutCount)
		if aboutCount == 0 {
			defaultAbout := Models.About{
				Title:        "Arsitek Sistem yang Berorientasi pada Efisiensi.",
				Description1: "Saya adalah seorang Full-Stack Software Engineer yang berbasis di Kota Cirebon, Jawa Barat. Latar belakang saya berasal dari Politeknik Negeri Indramayu, di mana saya mengasah kemampuan analitis dan pemecahan masalah teknis.",
				Description2: "Keahlian utama saya terletak pada perancangan Sistem Pemantauan Otomatis dan Optimasi Web. Saya membangun arsitektur perangkat lunak end-to-end yang tangguh, memastikan keandalan, dan memaksimalkan kinerja untuk memberikan dampak nyata pada proses bisnis.",
				Stat1Label:   "Teknik",
				Stat1Value:   "INFORMATIKA",
				Stat2Label:   "Full-Stack",
				Stat2Value:   "SOFTWARE ENGINEERING",
				Stat3Label:   "Automated",
				Stat3Value:   "MONITORING SYSTEMS",
			}
			db.Create(&defaultAbout)
			fmt.Println("Default About data seeded!")
		}
	}

	DB = db
}
