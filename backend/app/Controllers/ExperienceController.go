package Controllers

import (
	"net/http"

	"github.com/Muhfaizr21/portof-backend/app/Models"
	"github.com/Muhfaizr21/portof-backend/config"
	"github.com/gin-gonic/gin"
)

func GetExperiences(c *gin.Context) {
	var experiences []Models.Experience
	// Order by id asc for simplicity, or we could add order column
	config.DB.Order("id asc").Find(&experiences)

	c.JSON(http.StatusOK, gin.H{"data": experiences})
}

func CreateExperience(c *gin.Context) {
	var input Models.Experience
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := config.DB.Create(&input).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menyimpan data"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": input})
}

func UpdateExperience(c *gin.Context) {
	var experience Models.Experience
	if err := config.DB.First(&experience, c.Param("id")).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pengalaman tidak ditemukan"})
		return
	}

	var input Models.Experience
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	config.DB.Model(&experience).Updates(input)

	c.JSON(http.StatusOK, gin.H{"data": experience})
}

func DeleteExperience(c *gin.Context) {
	var experience Models.Experience
	if err := config.DB.First(&experience, c.Param("id")).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pengalaman tidak ditemukan"})
		return
	}

	// Hard delete
	config.DB.Unscoped().Delete(&experience)

	c.JSON(http.StatusOK, gin.H{"message": "Pengalaman berhasil dihapus"})
}
