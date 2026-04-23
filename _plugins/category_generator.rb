module Jekyll
  class CategoryPage < Page
    def initialize(site, base, dir, category_name)
      @site = site
      @base = base
      @dir = dir
      @name = "index.html"

      process(@name)
      read_yaml(File.join(base, "_layouts"), "category.html")
      data["title"] = category_name
      data["category"] = category_name
    end
  end

  class CategoryGenerator < Generator
    safe false
    priority :low

    def generate(site)
      categories = collect_categories(site)
      categories.each do |category|
        slug = Utils.slugify(category)
        dir = File.join("categories", slug)
        site.pages << CategoryPage.new(site, site.source, dir, category)
      end
    end

    private

    def collect_categories(site)
      names = []
      site.collections["news"].docs.each do |doc|
        Array(doc.data["categories"]).each do |cat|
          next if cat.nil? || cat.to_s.strip.empty?
          names << cat.to_s
        end
      end
      names.uniq.sort
    end
  end
end
