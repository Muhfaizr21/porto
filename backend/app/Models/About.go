package Models

import (
	"gorm.io/gorm"
)

type About struct {
	gorm.Model
	Title        string `json:"title"`
	Description1 string `json:"description_1" gorm:"type:text"`
	Description2 string `json:"description_2" gorm:"type:text"`
	Stat1Label   string `json:"stat_1_label"`
	Stat1Value   string `json:"stat_1_value"`
	Stat2Label   string `json:"stat_2_label"`
	Stat2Value   string `json:"stat_2_value"`
	Stat3Label   string `json:"stat_3_label"`
	Stat3Value   string `json:"stat_3_value"`
	ImagePath    string `json:"image_path"`
	CvPath       string `json:"cv_path"`
}
