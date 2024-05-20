package main

import (
	"fmt"
	"log"
	"os"

	"github.com/PuerkitoBio/goquery"
	"github.com/russross/blackfriday/v2"
	"github.com/yosssi/gohtml"
)

func main() {
	// Read the Markdown file
	mdContent, err := os.ReadFile("../README.md") 
	if err != nil {
		log.Fatal(err)
	}

	// Convert Markdown to HTML
	htmlContent := blackfriday.Run(mdContent)

	// Load the index.html file
	htmlFile, err := os.Open("../index.html")
	if err != nil {
		log.Fatal(err)
	}

	// Parse the HTML src file
	doc, err := goquery.NewDocumentFromReader(htmlFile)
	if err != nil {
		log.Fatal(err)
	}

	// Replace the content inside <article> tag with the new README.md content
	doc.Find("article").Each(func(i int, s *goquery.Selection) {
		s.SetHtml(string(htmlContent))
	})
	fullHtml, err := doc.Html()
	if err != nil {
		log.Fatal(err)
	}

	// format the HTML
	formattedHtml := gohtml.Format(fullHtml)
	// TODO: Error cant be handled due to the lib, should that be a concern?
	
	// Create a new file or overwrite the existing file
	newHtmlFile, err := os.Create("../index.html")
	if err != nil {
		log.Fatal(err)
	}
	defer newHtmlFile.Close()
	newHtmlFile.WriteString(formattedHtml)
	fmt.Println("Updated index.html successfully!")
}
