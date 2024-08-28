package main

import "github.com/gofiber/fiber/v2"

func main() {
	app := fiber.New()

	app.Listen("0.0.0.0:8000")
}
