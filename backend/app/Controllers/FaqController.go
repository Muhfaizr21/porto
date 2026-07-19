package Controllers

import (
	"net/http"

	"github.com/Muhfaizr21/portof-backend/app/Models"
	"github.com/Muhfaizr21/portof-backend/config"
	"github.com/gin-gonic/gin"
)

// GetFaqs mengambil semua daftar FAQ
func GetFaqs(c *gin.Context) {
	var faqs []Models.Faq
	if err := config.DB.Order("id asc").Find(&faqs).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal mengambil data FAQ"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": faqs})
}

// CreateFaq menambah FAQ baru
func CreateFaq(c *gin.Context) {
	var input Models.Faq
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := config.DB.Create(&input).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menyimpan FAQ"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "FAQ berhasil ditambahkan", "data": input})
}

// UpdateFaq memperbarui FAQ berdasarkan ID
func UpdateFaq(c *gin.Context) {
	id := c.Param("id")
	var faq Models.Faq

	if err := config.DB.First(&faq, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "FAQ tidak ditemukan"})
		return
	}

	var input Models.Faq
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Update field
	faq.Question = input.Question
	faq.Answer = input.Answer

	if err := config.DB.Save(&faq).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal memperbarui FAQ"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "FAQ berhasil diperbarui", "data": faq})
}

// DeleteFaq menghapus FAQ secara permanen
func DeleteFaq(c *gin.Context) {
	id := c.Param("id")
	var faq Models.Faq

	if err := config.DB.First(&faq, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "FAQ tidak ditemukan"})
		return
	}

	if err := config.DB.Delete(&faq).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menghapus FAQ"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "FAQ berhasil dihapus permanen"})
}
