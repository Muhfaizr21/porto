package Controllers

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

func HealthCheck(c *gin.Context) {
	dbUrl := os.Getenv("DATABASE_URL")
	hasDB := false
	if dbUrl != "" {
		hasDB = true
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  "ok",
		"message": "Server is running smoothly",
		"has_db":  hasDB,
		"db_len":  len(dbUrl),
		"db_val":  dbUrl,
	})
}
