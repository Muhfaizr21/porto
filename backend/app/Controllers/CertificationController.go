package Controllers

import (
	"net/http"

	"github.com/Muhfaizr21/portof-backend/app/Models"
	"github.com/Muhfaizr21/portof-backend/config"
	"github.com/gin-gonic/gin"
)

// GetCertifications mengambil semua data sertifikasi
func GetCertifications(c *gin.Context) {
	var certifications []Models.Certification
	// Mengurutkan dari yang terbaru (IssueYear DESC)
	config.DB.Order("issue_year desc, issue_month desc").Find(&certifications)
	c.JSON(http.StatusOK, gin.H{"data": certifications})
}

// CreateCertification membuat data sertifikasi baru
func CreateCertification(c *gin.Context) {
	var input Models.Certification
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := config.DB.Create(&input).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menyimpan sertifikasi"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"data": input, "message": "Sertifikasi berhasil ditambahkan"})
}

// UpdateCertification mengubah data sertifikasi
func UpdateCertification(c *gin.Context) {
	id := c.Param("id")
	var certification Models.Certification
	if err := config.DB.First(&certification, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Sertifikasi tidak ditemukan"})
		return
	}

	var input Models.Certification
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	config.DB.Model(&certification).Updates(input)
	c.JSON(http.StatusOK, gin.H{"data": certification, "message": "Sertifikasi berhasil diperbarui"})
}

// DeleteCertification menghapus data sertifikasi
func DeleteCertification(c *gin.Context) {
	id := c.Param("id")
	var certification Models.Certification
	if err := config.DB.First(&certification, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Sertifikasi tidak ditemukan"})
		return
	}

	config.DB.Delete(&certification)
	c.JSON(http.StatusOK, gin.H{"message": "Sertifikasi berhasil dihapus secara permanen (hard delete)"})
}
