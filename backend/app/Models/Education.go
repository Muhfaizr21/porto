package Models

import "time"

type Education struct {
	ID                   uint      `gorm:"primaryKey" json:"id"`
	School               string    `gorm:"not null" json:"school"`
	Degree               string    `json:"degree"`
	FieldOfStudy         string    `json:"field_of_study"`
	StartMonth           string    `json:"start_month"`
	StartYear            string    `json:"start_year"`
	EndMonth             string    `json:"end_month"`
	EndYear              string    `json:"end_year"`
	Grade                string    `json:"grade"`
	ActivitiesSocieties  string    `json:"activities_societies"`
	Description          string    `json:"description"`
	Skills               string    `json:"skills"` // Comma-separated
	CreatedAt            time.Time `json:"created_at"`
	UpdatedAt            time.Time `json:"updated_at"`
}
