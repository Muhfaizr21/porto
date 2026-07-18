package config

import (
	"fmt"
	"log"

	"github.com/Muhfaizr21/portof-backend/app/Models"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	// Database credentials
	dsn := "host=localhost user=muhfaiizr password=admin dbname=portof port=5432 sslmode=disable TimeZone=Asia/Jakarta"
	
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Gagal terhubung ke database: %v", err)
	}

	fmt.Println("Berhasil terhubung ke PostgreSQL!")

	// Auto-migrate models
	err = db.AutoMigrate(&Models.Contact{}, &Models.User{})
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

	DB = db
}
