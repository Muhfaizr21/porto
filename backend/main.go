package main

import (
	"log"
	"os"
	"strings"

	"github.com/Muhfaizr21/portof-backend/config"
	"github.com/Muhfaizr21/portof-backend/routes"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Koneksi ke Database PostgreSQL
	config.ConnectDB()

	// Inisialisasi router Gin
	r := gin.Default()

	// Konfigurasi CORS
	corsConfig := cors.DefaultConfig()
	allowedOrigins := os.Getenv("CORS_ORIGINS")
	if allowedOrigins == "" {
		corsConfig.AllowAllOrigins = true
	} else {
		corsConfig.AllowOrigins = strings.Split(allowedOrigins, ",")
	}
	corsConfig.AllowMethods = []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"}
	corsConfig.AllowHeaders = []string{"Origin", "Content-Type", "Accept", "Authorization"}
	r.Use(cors.New(corsConfig))

	// Pendaftaran Routes (seperti routes/api.php di Laravel)
	routes.SetupRoutes(r)

	// Menyajikan folder uploads sebagai static files
	r.Static("/uploads", "./uploads")

	// Menentukan port
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server berjalan di port %s", port)
	
	// Jalankan server
	if err := r.Run(":" + port); err != nil {
		log.Fatalf("Gagal menjalankan server: %v", err)
	}
}
