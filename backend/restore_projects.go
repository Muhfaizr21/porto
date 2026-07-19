package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/Muhfaizr21/portof-backend/app/Models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type JSONProject struct {
	Title       string   `json:"title"`
	Year        string   `json:"year"`
	Description string   `json:"description"`
	Tags        []string `json:"tags"`
	Color       string   `json:"color"`
	Image       string   `json:"image"`
	RepoURL     string   `json:"repo_url"`
	DemoURL     string   `json:"demo_url"`
}

func main() {
	dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		dsn = "host=localhost user=muhfaiizr password=admin dbname=portof port=5432 sslmode=disable TimeZone=Asia/Jakarta"
	}

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Gagal terhubung ke database: %v", err)
	}

	data, err := os.ReadFile("projects.json")
	if err != nil {
		log.Fatalf("Gagal membaca projects.json: %v", err)
	}

	var jsonProjects []JSONProject
	if err := json.Unmarshal(data, &jsonProjects); err != nil {
		log.Fatalf("Gagal unmarshal json: %v", err)
	}

	var added int
	for _, p := range jsonProjects {
		var count int64
		db.Model(&Models.Project{}).Where("title = ?", p.Title).Count(&count)
		if count == 0 {
			tagsBytes, _ := json.Marshal(p.Tags)
			newProj := Models.Project{
				Title:       p.Title,
				Year:        p.Year,
				Description: p.Description,
				Tags:        tagsBytes,
				Color:       p.Color,
				Image:       p.Image,
				RepoURL:     p.RepoURL,
				DemoURL:     p.DemoURL,
			}
			db.Create(&newProj)
			added++
		}
	}
	fmt.Printf("Berhasil restore %d project dari github yang terhapus!\n", added)
}
