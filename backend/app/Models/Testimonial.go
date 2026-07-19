package Models

import (
	"gorm.io/gorm"
)

type Testimonial struct {
	gorm.Model
	Quote   string `json:"quote" gorm:"type:text"`
	Name    string `json:"name"`
	Role    string `json:"role"`
	Company string `json:"company"`
}
