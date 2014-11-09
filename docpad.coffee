# DocPad Configuration File
# http://docpad.org/docs/config

docpadConfig = {
  templateData:
    site:
      # The default title of our website.
      title: "Google Direct"

      # The production url of our website.
      url: "http://asdofindia.github.io/googledirect/"

      # The website description (for SEO).
      description: """
        Use Google to download books, videos, songs
        """

      # The website keywords (for SEO) separated by commas.
      keywords: """
        download, ebooks, songs, videos
        """

      # The cascading stylesheets for the site.
      styles: [
        "main.css"
      ]

      # The JavaScript files for the site.
      scripts: [
        "main.js"
      ]



}

# Export the DocPad Configuration
module.exports = docpadConfig
