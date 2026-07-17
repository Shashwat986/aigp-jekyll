module Jekyll
  class GeneratedArchivePage < Page
    def initialize(site, base, dir, layout, data)
      @site = site
      @base = base
      @dir = dir
      @name = "index.html"

      process(@name)
      read_yaml(File.join(base, "_layouts"), layout)
      data.each { |key, value| self.data[key] = value }
    end
  end

  class NewsCategoryPage < GeneratedArchivePage
    def initialize(site, base, dir, category_name)
      super(site, base, dir, "news_category.html", {
        "title" => category_name,
        "category" => category_name
      })
    end
  end

  class ArchivePageGenerator < Generator
    safe false
    priority :low

    def generate(site)
      normalize_event_sort_dates(site)

      categories = collect_categories(site)
      categories.each do |category|
        slug = Utils.slugify(category)
        dir = File.join("news", "category", slug)
        site.pages << NewsCategoryPage.new(site, site.source, dir, category)
      end

      notice_types = collect_notice_types(site)
      notice_types.each do |notice_type|
        slug = Utils.slugify(notice_type)
        dir = File.join("notices", "type", slug)
        site.pages << NoticeTypePage.new(site, site.source, dir, notice_type)
      end

      years = collect_years(site)
      years.each do |year|
        dir = File.join("annual-report", year)
        site.pages << YearArchivePage.new(site, site.source, dir, year)
      end
    end

    private

    def normalize_event_sort_dates(site)
      events = site.collections["events"]
      return unless events

      events.docs.each do |doc|
        doc.data["event_sort_date"] = doc.data["sort_date"] || doc.data["date"]
      end
    end

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

    def collect_notice_types(site)
      names = []
      notices = site.collections["notices"]
      return names unless notices

      notices.docs.each do |doc|
        values = doc.data["notice_types"] || doc.data["notice_type"]
        Array(values).each do |notice_type|
          next if notice_type.nil? || notice_type.to_s.strip.empty?
          names << notice_type.to_s
        end
      end
      names.uniq.sort
    end

    def collect_years(site)
      years = []

      %w[news notices].each do |collection_name|
        collection = site.collections[collection_name]
        next unless collection

        collection.docs.each do |doc|
          date = doc.data["date"]
          next unless date
          years << date.to_s[0, 4]
        end
      end

      reports = site.data.dig("annual_reports", "reports") || []
      reports.each do |report|
        year = report["year"]
        years << year.to_s if year
      end

      years.reject(&:empty?).uniq.sort.reverse
    end
  end

  class NoticeTypePage < GeneratedArchivePage
    def initialize(site, base, dir, notice_type)
      super(site, base, dir, "notices_list.html", {
        "title" => notice_type,
        "description" => "Official notices marked as #{notice_type}.",
        "notice_type" => notice_type
      })
    end
  end

  class YearArchivePage < GeneratedArchivePage
    def initialize(site, base, dir, year)
      super(site, base, dir, "year_archive.html", {
        "title" => "#{year} Public Archive",
        "description" => "AIGP news and official notices published in #{year}.",
        "archive_year" => year
      })
    end
  end
end
