package Models

import "time"

type Experience struct {
	ID             uint      `gorm:"primaryKey" json:"id"`
	Title          string    `gorm:"not null" json:"title"`
	EmploymentType string    `json:"employment_type"`
	Company        string    `gorm:"not null" json:"company"`
	IsCurrentRole  bool      `json:"is_current_role"`
	StartMonth     string    `json:"start_month"`
	StartYear      string    `json:"start_year"`
	EndMonth       string    `json:"end_month"`
	EndYear        string    `json:"end_year"`
	Location       string    `json:"location"`
	LocationType   string    `json:"location_type"`
	Description    string    `gorm:"type:text" json:"description"`
	Skills         string    `json:"skills"`
	CreatedAt      time.Time `json:"created_at"`
	UpdatedAt      time.Time `json:"updated_at"`
}
