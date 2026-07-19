package Models

import (
	"time"
)

type Blog struct {
	ID        uint      `gorm:"primaryKey" json:"id"`
	Title     string    `gorm:"type:varchar(255);not null" json:"title"`
	Slug      string    `gorm:"type:varchar(255);unique;not null" json:"slug"`
	Content   string    `gorm:"type:text;not null" json:"content"`
	Image     string    `gorm:"type:text" json:"image"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
