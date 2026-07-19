package Models

import (
	"time"

	"gorm.io/gorm"
)

type Award struct {
	ID          uint           `gorm:"primaryKey" json:"id"`
	Title       string         `gorm:"type:varchar(255);not null" json:"title"`
	Issuer      string         `gorm:"type:varchar(255);not null" json:"issuer"`
	Date        string         `gorm:"type:varchar(100)" json:"date"`
	Description string         `gorm:"type:text" json:"description"`
	URL         string         `gorm:"type:varchar(255)" json:"url"`
	CreatedAt   time.Time      `json:"created_at"`
	UpdatedAt   time.Time      `json:"updated_at"`
	DeletedAt   gorm.DeletedAt `gorm:"index" json:"-"`
}
