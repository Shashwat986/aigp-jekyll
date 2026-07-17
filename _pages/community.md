---
title: Community
permalink: /community/
layout: page
description: Association of Indian Go Players. Play with us! We're looking for Indians who are interested in the game of Go, and willing to play this wonderful strategy game.
bodyClass: page-community
---

<div class="text-center mb-8">
  <h1 class="text-3xl font-bold font-serif text-[var(--heading-color)] mb-3">Play Online with AIGP</h1>
  <p class="text-sm text-[var(--secondary-text-color)] max-w-3xl mx-auto leading-relaxed">
    AIGP maintains official community routes for weekly sessions, online play, teaching, announcements, moderation, and local club discovery.
  </p>
</div>

<div class="py-4">
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
    <div class="lg:col-span-7 space-y-6">
      <section class="official-card">
        <div class="official-card__body text-center">
          <h2 class="official-card__title">Latest AIGP Video</h2>
          {% include responsive-iframe.html src="https://www.youtube.com/embed/videoseries?list=UUQoNwAOZcUOnyGIQy_eI4qQ" title="Weekly AIGP Session recordings" allow="autoplay; encrypted-media" fallback_url=site.data.links.social.youtube fallback_label="Open AIGP YouTube channel" %}
        </div>
      </section>

      <section class="official-card">
        <div class="official-card__body text-center">
          <h2 class="official-card__title">Selected Lessons</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {% include responsive-iframe.html src="https://www.youtube.com/embed/C6pYkc0n3mg" title="Selected Lesson 1" %}
            {% include responsive-iframe.html src="https://www.youtube.com/embed/gXnPPuZS360" title="Selected Lesson 2" %}
          </div>
          <p class="embed-fallback mt-3 text-xs"><a href="https://www.youtube.com/playlist?list=PLgH-HcJIa69jJP8u8YQ3OrZRY0ClX5B1H" target="_blank" rel="noopener noreferrer">Open lessons on YouTube</a></p>
        </div>
      </section>

      <section class="official-card">
        <div class="official-card__body text-center">
          <h2 class="official-card__title">Latest Events</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {% for video in site.data.links.latest_events.videos limit: 2 %}
              {% include responsive-iframe.html src=video.embed_url title=video.title %}
            {% endfor %}
          </div>
          <p class="embed-fallback mt-3 text-xs">
            {% for video in site.data.links.latest_events.videos limit: 2 %}
              <a href="{{ video.watch_url }}" target="_blank" rel="noopener noreferrer">{{ video.title }}</a>{% unless forloop.last %} · {% endunless %}
            {% endfor %}
          </p>
        </div>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {% for server in site.data.community_servers.servers %}
          {% include community-server-card.html server=server %}
        {% endfor %}
      </div>
    </div>

    <aside class="lg:col-span-5 space-y-6">

      {% include membership-form.html id_prefix="community" compact=true hide_title=true %}

      <section class="official-card">
        <div class="official-card__body">
          <h2 class="official-card__title"><a href="{{ site.data.links.leago.home }}" target="_blank" rel="noopener noreferrer">Our Players & Tournaments</a></h2>
          <p class="official-card__text">Explore official AIGP player ratings, tournaments, clubs, schedules, and results.</p>
          <p class="mt-5 flex flex-wrap gap-2">
            <a class="button button-primary" href="{{ site.data.links.leago.ratings }}" target="_blank" rel="noopener noreferrer">Players And Ratings</a>
            <a class="button button-secondary" href="{{ site.data.links.leago.events }}" target="_blank" rel="noopener noreferrer">Tournaments</a>
            <a class="button button-secondary" href="{{ site.data.links.leago.clubs }}" target="_blank" rel="noopener noreferrer">Clubs</a>
          </p>
        </div>
      </section>

      <div class="shadow-xl rounded-2xl overflow-hidden border border-[var(--border-color)] mx-auto w-full bg-[var(--card-bg)] facebook-page-embed" data-facebook-page-embed>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Findiabaduk%2F&tabs=timeline&width=340&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false" data-facebook-page-url="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Findiabaduk%2F&tabs=timeline&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false" title="AIGP Facebook page timeline" class="facebook-page-embed__iframe" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" loading="lazy"></iframe>
      </div>
      <p class="embed-fallback mt-3 text-xs text-center"><a href="{{ site.data.links.social.facebook }}" target="_blank" rel="noopener noreferrer">Open AIGP on Facebook</a></p>
    </aside>
  </div>
</div>

<script>
  (function () {
    var embed = document.querySelector("[data-facebook-page-embed]");
    if (!embed) return;

    var iframe = embed.querySelector("[data-facebook-page-url]");
    if (!iframe) return;

    var baseUrl = iframe.getAttribute("data-facebook-page-url");
    var lastWidth = 0;

    function clampWidth(width) {
      return Math.max(180, Math.min(500, Math.floor(width)));
    }

    function resizeFacebookEmbed() {
      var nextWidth = clampWidth(embed.clientWidth);
      if (Math.abs(nextWidth - lastWidth) < 8) return;

      lastWidth = nextWidth;
      iframe.style.width = nextWidth + "px";
      iframe.setAttribute("width", nextWidth);
      iframe.src = baseUrl + "&width=" + nextWidth;
    }

    resizeFacebookEmbed();

    if ("ResizeObserver" in window) {
      var observer = new ResizeObserver(resizeFacebookEmbed);
      observer.observe(embed);
    } else {
      window.addEventListener("resize", resizeFacebookEmbed);
    }
  }());
</script>
