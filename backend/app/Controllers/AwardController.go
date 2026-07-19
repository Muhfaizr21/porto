package Controllers

import (
	"net/http"

	"github.com/Muhfaizr21/portof-backend/app/Models"
	"github.com/Muhfaizr21/portof-backend/config"
	"github.com/gin-gonic/gin"
)

// Get all awards
func GetAwards(c *gin.Context) {
	var awards []Models.Award
	if err := config.DB.Order("created_at desc").Find(&awards).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal mengambil data penghargaan"})
		return
	}
	c.JSON(http.StatusOK, awards)
}

// Create new award
func CreateAward(c *gin.Context) {
	var award Models.Award
	if err := c.ShouldBindJSON(&award); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := config.DB.Create(&award).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menambahkan penghargaan"})
		return
	}

	c.JSON(http.StatusCreated, award)
}

// Update award
func UpdateAward(c *gin.Context) {
	id := c.Param("id")
	var award Models.Award

	if err := config.DB.First(&award, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Penghargaan tidak ditemukan"})
		return
	}

	if err := c.ShouldBindJSON(&award); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := config.DB.Save(&award).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal mengupdate penghargaan"})
		return
	}

	c.JSON(http.StatusOK, award)
}

// Delete award (Hard Delete)
func DeleteAward(c *gin.Context) {
	id := c.Param("id")
	if err := config.DB.Unscoped().Delete(&Models.Award{}, id).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menghapus penghargaan"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Penghargaan berhasil dihapus permanen"})
}
