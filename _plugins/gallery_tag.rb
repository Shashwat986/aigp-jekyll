module Jekyll
  class GalleryTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
    end

    def render(context)
      # Split the content by new lines and filter out empty lines
      images = @text.split("\n").map(&:strip).reject(&:empty?)

      # If no images found, try splitting by commas
      if images.empty?
        images = @text.split(",").map(&:strip).reject(&:empty?)
      end

      # If still no images, return empty string
      return "" if images.empty?

      # Generate the gallery HTML
      html = "<div class=\"gallery\">\n"
      images.each do |image|
        html << "  <img src=\"#{image}\" alt=\"\">\n"
      end
      html << "</div>"

      return html
    end
  end
end

Liquid::Template.register_tag('gallery', Jekyll::GalleryTag)