package Controllers

import (
	"net/http"

	"github.com/Muhfaizr21/portof-backend/app/Models"
	"github.com/Muhfaizr21/portof-backend/config"
	"github.com/gin-gonic/gin"
)

// Get all testimonials
func GetTestimonials(c *gin.Context) {
	var testimonials []Models.Testimonial
	if err := config.DB.Find(&testimonials).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal mengambil data testimonial"})
		return
	}
	c.JSON(http.StatusOK, testimonials)
}

// Create a new testimonial
func CreateTestimonial(c *gin.Context) {
	var input struct {
		Quote   string `json:"quote" binding:"required"`
		Name    string `json:"name" binding:"required"`
		Role    string `json:"role" binding:"required"`
		Company string `json:"company"`
	}

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	testimonial := Models.Testimonial{
		Quote:   input.Quote,
		Name:    input.Name,
		Role:    input.Role,
		Company: input.Company,
	}

	if err := config.DB.Create(&testimonial).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menambahkan testimonial"})
		return
	}

	c.JSON(http.StatusCreated, testimonial)
}

// Update a testimonial
func UpdateTestimonial(c *gin.Context) {
	id := c.Param("id")
	var testimonial Models.Testimonial

	if err := config.DB.First(&testimonial, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Testimonial tidak ditemukan"})
		return
	}

	var input struct {
		Quote   string `json:"quote" binding:"required"`
		Name    string `json:"name" binding:"required"`
		Role    string `json:"role" binding:"required"`
		Company string `json:"company"`
	}

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	testimonial.Quote = input.Quote
	testimonial.Name = input.Name
	testimonial.Role = input.Role
	testimonial.Company = input.Company

	if err := config.DB.Save(&testimonial).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal memperbarui testimonial"})
		return
	}

	c.JSON(http.StatusOK, testimonial)
}

// Delete a testimonial
func DeleteTestimonial(c *gin.Context) {
	id := c.Param("id")
	var testimonial Models.Testimonial

	if err := config.DB.First(&testimonial, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Testimonial tidak ditemukan"})
		return
	}

	if err := config.DB.Delete(&testimonial).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menghapus testimonial"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Testimonial berhasil dihapus"})
}
