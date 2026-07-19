package Models

import (
	"time"
)

type Faq struct {
	ID        uint      `gorm:"primaryKey" json:"id"`
	Question  string    `gorm:"type:varchar(255);not null" json:"question"`
	Answer    string    `gorm:"type:text;not null" json:"answer"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
