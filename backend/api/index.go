package api

import (
	"net/http"
	"os"
	"strings"

	"github.com/Muhfaizr21/portof-backend/app/Models"
	"github.com/Muhfaizr21/portof-backend/config"
	"github.com/Muhfaizr21/portof-backend/routes"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

var app *gin.Engine

func init() {
	// Koneksi ke Database PostgreSQL
	config.ConnectDB()

	// Auto migrate saat inisialisasi di Vercel
	if config.DB != nil {
		config.DB.AutoMigrate(
			&Models.Testimonial{},
			&Models.Project{},
			&Models.Blog{},
			&Models.Faq{},
		)

		// Seed data otomatis jika tabel kosong di production
		seedDataIfEmpty()
	}

	// Inisialisasi router Gin
	app = gin.Default()

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
	app.Use(cors.New(corsConfig))

	// Pendaftaran Routes
	routes.SetupRoutes(app)
}

func Handler(w http.ResponseWriter, r *http.Request) {
	app.ServeHTTP(w, r)
}
