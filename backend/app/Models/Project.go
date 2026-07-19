package Models

import (
	"encoding/json"
	"time"
)

// Gunakan custom type atau json.RawMessage agar dapat disimpan ke database PostgreSQL (yang mendukung JSON/JSONB) atau SQLite (sebagai text)
type Project struct {
	ID          uint            `gorm:"primaryKey" json:"id"`
	Title       string          `gorm:"type:varchar(255);not null" json:"title"`
	RepoURL     string          `gorm:"type:text" json:"repo_url"`
	DemoURL     string          `gorm:"type:text" json:"demo_url"`
	Year        string          `gorm:"type:varchar(50)" json:"year"`
	Description string          `gorm:"type:text" json:"description"`
	Problem     string          `gorm:"type:text" json:"problem"`
	Solution    string          `gorm:"type:text" json:"solution"`
	Impact      string          `gorm:"type:text" json:"impact"`
	Tags        json.RawMessage `gorm:"type:jsonb" json:"tags"`
	Color       string          `gorm:"type:varchar(100)" json:"color"`
	Image       string          `gorm:"type:text" json:"image"`
	CreatedAt   time.Time       `json:"created_at"`
	UpdatedAt   time.Time       `json:"updated_at"`
}
