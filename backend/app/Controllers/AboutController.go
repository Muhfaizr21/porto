package Controllers

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"github.com/Muhfaizr21/portof-backend/app/Models"
	"github.com/Muhfaizr21/portof-backend/config"
	"github.com/gin-gonic/gin"
)

// GetAbout retrieves the "About Me" data
func GetAbout(c *gin.Context) {
	var about Models.About
	result := config.DB.First(&about)
	if result.Error != nil {
		// If not found, just return an empty data structure rather than error,
		// or create a default one. We'll return an empty one.
		c.JSON(http.StatusOK, gin.H{"data": Models.About{}})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": about})
}

// UpdateAbout updates the "About Me" data
func UpdateAbout(c *gin.Context) {
	var about Models.About
	config.DB.First(&about) // Fetch existing or leave empty

	about.Title = c.PostForm("title")
	about.Description1 = c.PostForm("description_1")
	about.Description2 = c.PostForm("description_2")
	about.Stat1Label = c.PostForm("stat_1_label")
	about.Stat1Value = c.PostForm("stat_1_value")
	about.Stat2Label = c.PostForm("stat_2_label")
	about.Stat2Value = c.PostForm("stat_2_value")
	about.Stat3Label = c.PostForm("stat_3_label")
	about.Stat3Value = c.PostForm("stat_3_value")

	// Ensure uploads directory exists
	uploadDir := "./uploads"
	if _, err := os.Stat(uploadDir); os.IsNotExist(err) {
		os.Mkdir(uploadDir, os.ModePerm)
	}

	// Handle Image Upload
	imageFile, header, err := c.Request.FormFile("image")
	if err == nil {
		filename := strings.ReplaceAll(header.Filename, " ", "_")
		filePath := filepath.Join(uploadDir, filename)
		out, err := os.Create(filePath)
		if err == nil {
			defer out.Close()
			io.Copy(out, imageFile)
			about.ImagePath = filename // Store filename only
		} else {
			fmt.Println("Error saving image:", err)
		}
	}

	// Handle CV Upload
	cvFile, cvHeader, err := c.Request.FormFile("cv")
	if err == nil {
		filename := strings.ReplaceAll(cvHeader.Filename, " ", "_")
		filePath := filepath.Join(uploadDir, filename)
		out, err := os.Create(filePath)
		if err == nil {
			defer out.Close()
			io.Copy(out, cvFile)
			about.CvPath = filename // Store filename only
		} else {
			fmt.Println("Error saving cv:", err)
		}
	}

	// Save to DB
	if about.ID == 0 {
		if err := config.DB.Create(&about).Error; err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create about data"})
			return
		}
	} else {
		if err := config.DB.Save(&about).Error; err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update about data"})
			return
		}
	}

	c.JSON(http.StatusOK, gin.H{"message": "About data updated successfully", "data": about})
}
