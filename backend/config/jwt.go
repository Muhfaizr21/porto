package config

import "os"

func GetJWTKey() []byte {
	secret := os.Getenv("JWT_SECRET")
	if secret == "" {
		secret = "super-secret-key"
	}
	return []byte(secret)
}
