package Controllers

import (
	"net/http"

	"github.com/Muhfaizr21/portof-backend/app/Models"
	"github.com/Muhfaizr21/portof-backend/config"
	"github.com/gin-gonic/gin"
)

// GetEducations mengambil semua data pendidikan
func GetEducations(c *gin.Context) {
	var educations []Models.Education
	// Mengurutkan dari yang terbaru (EndYear DESC)
	config.DB.Order("end_year desc, start_year desc").Find(&educations)
	c.JSON(http.StatusOK, gin.H{"data": educations})
}

// CreateEducation membuat data pendidikan baru
func CreateEducation(c *gin.Context) {
	var input Models.Education
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := config.DB.Create(&input).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menyimpan pendidikan"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"data": input, "message": "Pendidikan berhasil ditambahkan"})
}

// UpdateEducation mengubah data pendidikan
func UpdateEducation(c *gin.Context) {
	id := c.Param("id")
	var education Models.Education
	if err := config.DB.First(&education, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pendidikan tidak ditemukan"})
		return
	}

	var input Models.Education
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	config.DB.Model(&education).Updates(input)
	c.JSON(http.StatusOK, gin.H{"data": education, "message": "Pendidikan berhasil diperbarui"})
}

// DeleteEducation menghapus data pendidikan
func DeleteEducation(c *gin.Context) {
	id := c.Param("id")
	var education Models.Education
	if err := config.DB.First(&education, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pendidikan tidak ditemukan"})
		return
	}

	config.DB.Delete(&education)
	c.JSON(http.StatusOK, gin.H{"message": "Pendidikan berhasil dihapus secara permanen (hard delete)"})
}
