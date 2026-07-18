package Controllers

import (
	"net/http"

	"github.com/Muhfaizr21/portof-backend/app/Models"
	"github.com/Muhfaizr21/portof-backend/config"
	"github.com/gin-gonic/gin"
)

func GetContacts(c *gin.Context) {
	var contacts []Models.Contact
	if err := config.DB.Order("created_at desc").Find(&contacts).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal mengambil data kontak"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": contacts,
	})
}
