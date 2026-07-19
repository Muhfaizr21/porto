package Controllers

import (
	"net/http"

	"github.com/Muhfaizr21/portof-backend/app/Models"
	"github.com/Muhfaizr21/portof-backend/config"
	"github.com/gin-gonic/gin"
)

// GetProjects mengambil semua daftar proyek (Public)
func GetProjects(c *gin.Context) {
	var projects []Models.Project
	// Mengambil project dan diurutkan berdasarkan ID terbaru (atau urutan sesuai json)
	// Kita urutkan berdasarkan ID ASC karena itu urutan asli dari array
	if err := config.DB.Order("id asc").Find(&projects).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal mengambil data proyek"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": projects})
}

// CreateProject menambah proyek baru (Protected)
func CreateProject(c *gin.Context) {
	var input Models.Project
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := config.DB.Create(&input).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menyimpan proyek"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Proyek berhasil ditambahkan", "data": input})
}

// UpdateProject memperbarui proyek berdasarkan ID (Protected)
func UpdateProject(c *gin.Context) {
	id := c.Param("id")
	var project Models.Project

	if err := config.DB.First(&project, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Proyek tidak ditemukan"})
		return
	}

	var input Models.Project
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Update field
	project.Title = input.Title
	project.RepoURL = input.RepoURL
	project.DemoURL = input.DemoURL
	project.Year = input.Year
	project.Description = input.Description
	project.Tags = input.Tags
	project.Color = input.Color
	project.Image = input.Image

	if err := config.DB.Save(&project).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal memperbarui proyek"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Proyek berhasil diperbarui", "data": project})
}

// DeleteProject menghapus proyek secara permanen (Hard Delete) (Protected)
func DeleteProject(c *gin.Context) {
	id := c.Param("id")
	var project Models.Project

	if err := config.DB.First(&project, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Proyek tidak ditemukan"})
		return
	}

	// Hard delete (Unscoped) karena DeletedAt di struct Project dihilangkan, maka Delete akan langsung hapus dari DB.
	if err := config.DB.Delete(&project).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menghapus proyek"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Proyek berhasil dihapus permanen"})
}
