package main
import (
	"log"
	"github.com/Muhfaizr21/portof-backend/config"
	"github.com/Muhfaizr21/portof-backend/app/Models"
)

func main() {
	config.ConnectDB()
	var count int64
	config.DB.Model(&Models.Project{}).Count(&count)
	log.Println("Projects:", count)
	if count < 53 {
		config.DB.Exec("DELETE FROM projects")
	}
}
