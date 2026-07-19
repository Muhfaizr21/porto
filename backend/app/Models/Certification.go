package Models

import "time"

type Certification struct {
	ID                   uint      `gorm:"primaryKey" json:"id"`
	Name                 string    `gorm:"not null" json:"name"`
	IssuingOrganization  string    `gorm:"not null" json:"issuing_organization"`
	IssueMonth           string    `json:"issue_month"`
	IssueYear            string    `json:"issue_year"`
	ExpirationMonth      string    `json:"expiration_month"`
	ExpirationYear       string    `json:"expiration_year"`
	CredentialID         string    `json:"credential_id"`
	CredentialURL        string    `json:"credential_url"`
	Skills               string    `json:"skills"` // Comma-separated
	CreatedAt            time.Time `json:"created_at"`
	UpdatedAt            time.Time `json:"updated_at"`
}
