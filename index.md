---
title: Association Of Indian Go Players
layout: home
bodyClass: page-home
description: The official website of the Association Of Indian Go Players (AIGP), promoting Go, Baduk, and Weiqi across India.
intro_image: "assets/images/home-hero-688.webp"
intro_image_srcset: "/assets/images/home-hero-520.webp 520w, /assets/images/home-hero-688.webp 688w, /assets/images/home-hero-1032.webp 1032w, /assets/images/home-hero-1376.webp 1376w"
intro_image_alt: "AIGP players meeting for games and community play"
show_call_box: false
use_lightbox: true
---

{% assign homepage_events = site.events %}
{% assign upcoming_events = homepage_events | where: "status", "upcoming" | sort: "event_sort_date" %}
{% assign ongoing_events = homepage_events | where: "status", "ongoing" | sort: "event_sort_date" %}
{% assign completed_events = homepage_events | where: "status", "completed" | sort: "event_sort_date" | reverse %}
{% assign completed_news_events = site.news | where_exp: "post", "post.categories contains 'Tournament' or post.categories contains 'Meetup' or post.categories contains 'Workshop' or post.categories contains 'Results'" | sort: "date" | reverse %}
{% assign notices_sorted = site.notices | sort: "date" | reverse %}
{% assign latest_notice = notices_sorted | first %}

<section class="home-priority-grid" aria-label="AIGP priority actions and official updates">
  <article class="home-priority-card">
    <span class="section-eyebrow">Start Here</span>
    <h2>Play, learn, and stay connected with Indian Go Community.</h2>
    <p>
      AIGP brings together players, parents, schools, clubs, organizers, and volunteers through learning sessions, tournaments, meetups, and workshops.
    </p>
    <div class="home-pathway-list" aria-label="Recommended paths">
      <div>
        <strong>New to Go?</strong>
        <span>Learn the rules at your own pace, join a beginner-friendly session, and start with small-board games so your first steps feel simple.</span>
      </div>
      <div>
        <strong>Already playing?</strong>
        <span>Find current ratings, register for events, follow results, and watch official notices for selection or representation opportunities.</span>
      </div>
      <div>
        <strong>Running a club or school activity?</strong>
        <span>Tell us what you are planning. AIGP can help with workshops, demos, local meetups, teaching support, and volunteer coordination.</span>
      </div>
    </div>
    <div class="home-link-grid">
      <a href="{{ site.data.links.leago.events }}" target="_blank" rel="noopener noreferrer">
        <svg class="home-link-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M7 4h10v3h3v2a5 5 0 0 1-4.2 4.9A5 5 0 0 1 13 16.9V19h3v2H8v-2h3v-2.1a5 5 0 0 1-2.8-3A5 5 0 0 1 4 9V7h3V4Zm10 5v2.7A3 3 0 0 0 18 9h-1ZM6 9a3 3 0 0 0 1 2.7V9H6Z"/></svg>
        <span>
          <strong>Tournaments</strong>
          <small>Registration and event links</small>
        </span>
      </a>
      <a href="{{ site.data.links.leago.ratings }}" target="_blank" rel="noopener noreferrer">
        <svg class="home-link-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M4 19h16v2H2V3h2v16Zm3.3-3.4-1.4-1.4 4.3-4.3 3 3 5.4-6.2 1.5 1.3-6.8 7.8-3.1-3.1-2.9 2.9Z"/></svg>
        <span>
          <strong>Players/Ratings</strong>
          <small>Official ratings and records</small>
        </span>
      </a>
      <a href="{{ '/learn/' | relative_url }}">
        <svg class="home-link-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M5 4.5A3.5 3.5 0 0 1 8.5 1H20v18H8.5A3.5 3.5 0 0 0 5 22.5v-18Zm3.5-1A1.5 1.5 0 0 0 7 5v13.3a5.4 5.4 0 0 1 1.5-.3H18V3.5H8.5Z"/></svg>
        <span>
          <strong>Learn Go</strong>
          <small>Beginner resources and lessons</small>
        </span>
      </a>
      <a href="{{ '/community/' | relative_url }}">
        <svg class="home-link-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M8 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm8.5 1a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7ZM2 20a6 6 0 0 1 12 0v1H2v-1Zm12.5-1.7a7.5 7.5 0 0 0-2.1-4.2A5.5 5.5 0 0 1 22 18v1h-7.5v-.7Z"/></svg>
        <span>
          <strong>Community</strong>
          <small>Join like-minded people</small>
        </span>
      </a>
    </div>
  </article>

  <aside class="home-update-stack" aria-label="AIGP official updates">
    <article class="official-card home-update-card">
      <div class="official-card__body">
        <span class="section-eyebrow">Recent Events</span>
        <div class="home-event-scroll" tabindex="0">
          {% if upcoming_events.size > 0 %}
          <section class="home-event-group" aria-label="Upcoming events">
            {% for event in upcoming_events %}
            {% include event-card.html event=event mode="home" status="Upcoming" button_class="button-primary" %}
            {% endfor %}
          </section>
          {% endif %}

          {% if ongoing_events.size > 0 %}
          <section class="home-event-group" aria-label="Ongoing events">
            {% for event in ongoing_events %}
            {% include event-card.html event=event mode="home" status="Ongoing" button_class="button-primary" %}
            {% endfor %}
          </section>
          {% endif %}

          <section class="home-event-group" aria-label="Latest completed event">
            {% if completed_events.size > 0 %}
              {% for event in completed_events limit: 1 %}
              {% include event-card.html event=event mode="home" status="Completed" button_class="button-secondary" %}
              {% endfor %}
            {% else %}
              {% assign latest_completed_news = completed_news_events | first %}
              {% if latest_completed_news %}
              <article class="home-event-item">
                <span class="home-event-status">Completed</span>
                <strong>{{ latest_completed_news.title }}</strong>
                <p>{{ latest_completed_news.description | default: latest_completed_news.excerpt | strip_html | truncate: 150 }}</p>
                <dl class="home-meta-list">
                  <div>
                    <dt>When</dt>
                    <dd>{{ latest_completed_news.date | date: "%b %-d, %Y" }}</dd>
                  </div>
                  <div>
                    <dt>Type</dt>
                    <dd>{{ latest_completed_news.categories | join: " · " }}</dd>
                  </div>
                </dl>
                <a class="button button-secondary" href="{{ latest_completed_news.url | relative_url }}">Read Report</a>
              </article>
              {% else %}
              <p class="official-card__text">Completed event reports will appear here.</p>
              {% endif %}
            {% endif %}
          </section>
        </div>
      </div>
    </article>

    <article class="official-card home-update-card">
      <div class="official-card__body">
        <span class="section-eyebrow">Latest Notice</span>
        {% if latest_notice %}
        <time class="official-card__meta" datetime="{{ latest_notice.date | date_to_xmlschema }}">{{ latest_notice.date | date: "%b %-d, %Y" }}</time>
        <h2 class="official-card__title"><a href="{{ latest_notice.url | relative_url }}">{{ latest_notice.title }}</a></h2>
        <p class="official-card__text">{{ latest_notice.description | default: latest_notice.excerpt | strip_html | truncate: 150 }}</p>
        <div class="home-button-row">
          <a class="button button-primary" href="{{ latest_notice.url | relative_url }}">Read Notice</a>
          <a class="button button-secondary" href="{{ '/notices/' | relative_url }}">All Notices</a>
        </div>
        {% else %}
        <h2 class="official-card__title">Official Notices</h2>
        <p class="official-card__text">Official AIGP notices will appear here.</p>
        {% endif %}
      </div>
    </article>
  </aside>
</section>

<section id="aigp-maintains" class="home-proof-section" aria-label="AIGP community and credibility">
  <div class="home-proof-board" aria-label="AIGP community proof and maintained records">
    {% assign home_gallery_images = site.static_files | where_exp: "file", "file.path contains '/assets/images/home/' and file.path contains '.webp'" | sort: "path" %}
    {% assign home_gallery_columns = home_gallery_images.size | plus: 1 | divided_by: 2 %}
    <div class="home-proof-photos" aria-label="AIGP community photos" style="--home-photo-columns: {{ home_gallery_columns }};">
      {% for image in home_gallery_images %}
      <a href="{{ image.path | relative_url }}" class="home-proof-photo glightbox" data-gallery="home-gallery">
        <img src="{{ image.path | relative_url }}" alt="AIGP community event photo {{ forloop.index }}" loading="lazy">
      </a>
      {% endfor %}
    </div>
  </div>
</section>
<div id="home-membership-band"></div>
{% include membership-form.html id_prefix="home" %}
