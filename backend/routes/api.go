package routes

import (
	"github.com/Muhfaizr21/portof-backend/app/Controllers"
	"github.com/Muhfaizr21/portof-backend/app/Middleware"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	api := r.Group("/api")
	{
		// Serve static uploads via /api/uploads
		api.Static("/uploads", "./uploads")

		// Public routes
		api.GET("/health", Controllers.HealthCheck)
		api.POST("/contact", Controllers.SubmitContact)
		api.GET("/projects", Controllers.GetProjects)
		api.GET("/experiences", Controllers.GetExperiences)
		api.GET("/educations", Controllers.GetEducations)
		api.GET("/certifications", Controllers.GetCertifications)
		api.GET("/awards", Controllers.GetAwards)
		api.GET("/about", Controllers.GetAbout)
		api.GET("/testimonials", Controllers.GetTestimonials)
		api.GET("/blogs", Controllers.GetBlogs)
		api.GET("/blogs/:slug", Controllers.GetBlogBySlug)
		api.GET("/faqs", Controllers.GetFaqs)
		api.POST("/auth/login", Controllers.Login)

		// Admin protected routes
		admin := api.Group("/admin")
		admin.Use(Middleware.RequireAuth)
		{
			admin.PUT("/about", Controllers.UpdateAbout)
			admin.GET("/contacts", Controllers.GetContacts)
			admin.POST("/projects", Controllers.CreateProject)
			admin.PUT("/projects/:id", Controllers.UpdateProject)
			admin.DELETE("/projects/:id", Controllers.DeleteProject)
			admin.POST("/upload", Controllers.UploadImage)
			
			admin.POST("/experiences", Controllers.CreateExperience)
			admin.PUT("/experiences/:id", Controllers.UpdateExperience)
			admin.DELETE("/experiences/:id", Controllers.DeleteExperience)

			admin.POST("/educations", Controllers.CreateEducation)
			admin.PUT("/educations/:id", Controllers.UpdateEducation)
			admin.DELETE("/educations/:id", Controllers.DeleteEducation)

			admin.POST("/certifications", Controllers.CreateCertification)
			admin.PUT("/certifications/:id", Controllers.UpdateCertification)
			admin.DELETE("/certifications/:id", Controllers.DeleteCertification)

			admin.POST("/awards", Controllers.CreateAward)
			admin.PUT("/awards/:id", Controllers.UpdateAward)
			admin.DELETE("/awards/:id", Controllers.DeleteAward)

			admin.POST("/testimonials", Controllers.CreateTestimonial)
			admin.PUT("/testimonials/:id", Controllers.UpdateTestimonial)
			admin.DELETE("/testimonials/:id", Controllers.DeleteTestimonial)

			admin.POST("/blogs", Controllers.CreateBlog)
			admin.PUT("/blogs/:id", Controllers.UpdateBlog)
			admin.DELETE("/blogs/:id", Controllers.DeleteBlog)

			admin.POST("/faqs", Controllers.CreateFaq)
			admin.PUT("/faqs/:id", Controllers.UpdateFaq)
			admin.DELETE("/faqs/:id", Controllers.DeleteFaq)
		}
	}
}
