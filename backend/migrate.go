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
		dsn = "host=localhost user=muhfaiizr password=admin dbname=portof port=5432 sslmode=disable TimeZone=Asia/Jakarta"
	}

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Gagal terhubung ke database: %v", err)
	}

	fmt.Println("Migrating Database...")
	err = db.AutoMigrate(
		&Models.Testimonial{},
		&Models.Project{},
		&Models.Blog{},
		&Models.Faq{},
	)
	if err != nil {
		log.Fatalf("Gagal migrate: %v", err)
	}

	fmt.Println("Migrasi sukses!")
}
