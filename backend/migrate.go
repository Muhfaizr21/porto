package main

import (
	"fmt"
	"log"
	"os"

	"github.com/Muhfaizr21/portof-backend/app/Models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main() {

	dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		log.Fatal("DATABASE_URL is required")
	}

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Gagal terhubung ke database: %v", err)
	}

	fmt.Println("Migrating Testimonial...")
	err = db.AutoMigrate(&Models.Testimonial{})
	if err != nil {
		log.Fatalf("Gagal migrate: %v", err)
	}

	fmt.Println("Migrasi sukses!")
}
