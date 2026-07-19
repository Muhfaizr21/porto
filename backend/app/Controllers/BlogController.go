package Controllers

import (
	"net/http"

	"github.com/Muhfaizr21/portof-backend/app/Models"
	"github.com/Muhfaizr21/portof-backend/config"
	"github.com/gin-gonic/gin"
)

// GetBlogs mengambil semua daftar blog
func GetBlogs(c *gin.Context) {
	var blogs []Models.Blog
	if err := config.DB.Order("created_at desc").Find(&blogs).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal mengambil data blog"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": blogs})
}

// GetBlogBySlug mengambil satu blog berdasarkan slug
func GetBlogBySlug(c *gin.Context) {
	slug := c.Param("slug")
	var blog Models.Blog

	if err := config.DB.Where("slug = ?", slug).First(&blog).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Blog tidak ditemukan"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": blog})
}

// CreateBlog menambah blog baru
func CreateBlog(c *gin.Context) {
	var input Models.Blog
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := config.DB.Create(&input).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menyimpan blog"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Blog berhasil ditambahkan", "data": input})
}

// UpdateBlog memperbarui blog berdasarkan ID
func UpdateBlog(c *gin.Context) {
	id := c.Param("id")
	var blog Models.Blog

	if err := config.DB.First(&blog, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Blog tidak ditemukan"})
		return
	}

	var input Models.Blog
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Update field
	blog.Title = input.Title
	blog.Slug = input.Slug
	blog.Content = input.Content
	blog.Image = input.Image

	if err := config.DB.Save(&blog).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal memperbarui blog"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Blog berhasil diperbarui", "data": blog})
}

// DeleteBlog menghapus blog secara permanen
func DeleteBlog(c *gin.Context) {
	id := c.Param("id")
	var blog Models.Blog

	if err := config.DB.First(&blog, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Blog tidak ditemukan"})
		return
	}

	if err := config.DB.Delete(&blog).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menghapus blog"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Blog berhasil dihapus permanen"})
}
