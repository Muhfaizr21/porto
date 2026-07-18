package routes

import (
	"github.com/Muhfaizr21/portof-backend/app/Controllers"
	"github.com/Muhfaizr21/portof-backend/app/Middleware"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	api := r.Group("/api")
	{
		api.GET("/health", Controllers.HealthCheck)
		api.POST("/contact", Controllers.SubmitContact)

		// Auth
		auth := api.Group("/auth")
		{
			auth.POST("/login", Controllers.Login)
		}

		// Admin Protected Routes
		admin := api.Group("/admin")
		admin.Use(Middleware.RequireAuth)
		{
			admin.GET("/contacts", Controllers.GetContacts)
		}
	}
}
