package Controllers

import (
	"fmt"
	"net/http"
	"path/filepath"
	"time"

	"github.com/gin-gonic/gin"
)

func UploadImage(c *gin.Context) {
	file, err := c.FormFile("image")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Tidak ada file yang diunggah"})
		return
	}

	// Buat nama file unik
	extension := filepath.Ext(file.Filename)
	newFileName := fmt.Sprintf("%d%s", time.Now().UnixNano(), extension)

	// Path penyimpanan
	savePath := filepath.Join("uploads", newFileName)

	if err := c.SaveUploadedFile(file, savePath); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menyimpan file"})
		return
	}

	// Kembalikan URL gambar
	imageUrl := fmt.Sprintf("http://localhost:8080/uploads/%s", newFileName)

	c.JSON(http.StatusOK, gin.H{
		"message": "Upload berhasil",
		"url":     imageUrl,
	})
}
