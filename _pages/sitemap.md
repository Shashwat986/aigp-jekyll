---
layout: page
title: Sitemap
permalink: /sitemap/
description: Browse the main public pages and archives on the AIGP website.
---

{% assign recent_news = site.news | sort: "date" | reverse %}
{% assign recent_notices = site.notices | sort: "date" | reverse %}
{% assign events = site.events | sort: "event_sort_date" %}

<section class="py-12 text-[var(--text-color)]">
  <div class="w-full mx-auto">
    <div class="section-heading">
      <span class="section-eyebrow">Site Index</span>
      <h1 class="section-title">Sitemap</h1>
      <p class="section-summary">A public index of AIGP pages, archives, feeds, and recent official content.</p>
    </div>

    <div class="card-grid card-grid--3">
      <article class="official-card">
        <div class="official-card__body">
          <h2 class="official-card__title">Core Pages</h2>
          <ul class="official-list">
            <li><a href="{{ '/' | relative_url }}">Home</a></li>
            <li><a href="{{ '/notices/' | relative_url }}">Official Notices</a></li>
            <li><a href="{{ '/news/' | relative_url }}">News</a></li>
            <li><a href="{{ '/events/' | relative_url }}">Events</a></li>
            <li><a href="{{ site.data.links.leago.events }}" target="_blank" rel="noopener noreferrer">Tournaments</a></li>
            <li><a href="{{ site.data.links.leago.ratings }}" target="_blank" rel="noopener noreferrer">Players/Ratings</a></li>
            <li><a href="{{ site.data.links.leago.clubs }}" target="_blank" rel="noopener noreferrer">Clubs</a></li>
            <li><a href="{{ '/learn/' | relative_url }}">Learn</a></li>
            <li><a href="{{ '/pathways/' | relative_url }}">Your Go Path</a></li>
            <li><a href="{{ '/community/' | relative_url }}">Community</a></li>
          </ul>
        </div>
      </article>

      <article class="official-card">
        <div class="official-card__body">
          <h2 class="official-card__title">Association</h2>
          <ul class="official-list">
            <li><a href="{{ '/about/' | relative_url }}">About</a></li>
            <li><a href="{{ '/constitution/' | relative_url }}">Constitution</a></li>
            <li><a href="{{ '/team/' | relative_url }}">Team</a></li>
            <li><a href="{{ '/representation/' | relative_url }}">Representation</a></li>
            <li><a href="{{ '/representatives/' | relative_url }}">Representatives</a></li>
            <li><a href="{{ '/outreach/' | relative_url }}">Outreach</a></li>
            <li><a href="{{ '/partners/' | relative_url }}">Partners And Support</a></li>
            <li><a href="{{ '/annual-report/' | relative_url }}">Annual Reports</a></li>
          </ul>
        </div>
      </article>

      <article class="official-card">
        <div class="official-card__body">
          <h2 class="official-card__title">Utilities And Policies</h2>
          <ul class="official-list">
            <li><a href="{{ '/search/' | relative_url }}">Search</a></li>
            <li><a href="{{ '/feed/' | relative_url }}">Feeds</a></li>
            <li><a href="{{ '/feed.xml' | relative_url }}">Combined Updates Feed</a></li>
            <li><a href="{{ '/news/feed.xml' | relative_url }}">News Feed</a></li>
            <li><a href="{{ '/notices/feed.xml' | relative_url }}">Notice Feed</a></li>
            <li><a href="{{ '/news/category/' | relative_url }}">News Categories</a></li>
            <li><a href="{{ '/notices/type/' | relative_url }}">Notice Types</a></li>
            <li><a href="{{ '/contact/' | relative_url }}">Contact</a></li>
            <li><a href="{{ '/contact-escalation/' | relative_url }}">Contact Escalation</a></li>
            <li><a href="{{ '/code-of-conduct/' | relative_url }}">Code of Conduct</a></li>
            <li><a href="{{ '/privacy/' | relative_url }}">Privacy Policy</a></li>
            <li><a href="{{ '/terms/' | relative_url }}">Terms</a></li>
            <li><a href="{{ '/content-review/' | relative_url }}">Content Review</a></li>
          </ul>
        </div>
      </article>
    </div>

    <div class="site-section">
      <div class="section-heading">
        <span class="section-eyebrow">Archives</span>
        <h2 class="section-title">News Categories</h2>
      </div>
      {% include taxonomy-nav.html kind="news" show_all=false %}
    </div>

    <div class="site-section--tight">
      <div class="section-heading">
        <span class="section-eyebrow">Annual Archives</span>
        <h2 class="section-title">Yearly Public Records</h2>
      </div>
      <nav class="filter-bar" aria-label="Annual archives">
        {% assign reports = site.data.annual_reports.reports | sort: "year" | reverse %}
        {% for report in reports %}
          <a class="filter-pill" href="{{ '/annual-report/' | append: report.year | append: '/' | relative_url }}">{{ report.year }}</a>
        {% endfor %}
      </nav>
    </div>

    <div class="card-grid card-grid--3">
      <article class="official-card">
        <div class="official-card__body">
          <h2 class="official-card__title">Recent News</h2>
          <ul class="official-list">
            {% for post in recent_news limit: 8 %}
            <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
            {% endfor %}
          </ul>
        </div>
      </article>

      <article class="official-card">
        <div class="official-card__body">
          <h2 class="official-card__title">Recent Notices</h2>
          <ul class="official-list">
            {% for notice in recent_notices limit: 8 %}
            <li><a href="{{ notice.url | relative_url }}">{{ notice.title }}</a></li>
            {% endfor %}
          </ul>
        </div>
      </article>

      <article class="official-card">
        <div class="official-card__body">
          <h2 class="official-card__title">Events</h2>
          <ul class="official-list">
            {% for event in events limit: 8 %}
            <li><a href="{{ event.url | relative_url }}">{{ event.title }}</a></li>
            {% endfor %}
          </ul>
        </div>
      </article>
    </div>
  </div>
</section>
