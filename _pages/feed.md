---
layout: page
title: Feeds
permalink: /feed/
description: Subscribe to AIGP news feeds.
---

<section class="py-12 text-[var(--text-color)]">
  <div class="w-full mx-auto">
    <div class="section-heading">
      <span class="section-eyebrow">Subscribe</span>
      <h1 class="section-title">Feeds</h1>
      <p class="section-summary">Use these feeds in an RSS reader to follow AIGP news, official notices, and category-specific updates.</p>
    </div>

    <div class="card-grid card-grid--3 mb-8">
      <article class="official-card">
        <div class="official-card__body">
          <span class="section-eyebrow">All Updates</span>
          <h2 class="official-card__title">News And Notices</h2>
          <p class="official-card__text">A combined feed of AIGP news posts and official notices.</p>
          <p class="mt-6"><a class="button button-primary" href="{{ '/feed.xml' | relative_url }}">Open Feed</a></p>
        </div>
      </article>
      <article class="official-card">
        <div class="official-card__body">
          <span class="section-eyebrow">News</span>
          <h2 class="official-card__title">News Feed</h2>
          <p class="official-card__text">Public news, reports, tournament updates, and community posts.</p>
          <p class="mt-6"><a class="button button-primary" href="{{ '/news/feed.xml' | relative_url }}">Open Feed</a></p>
        </div>
      </article>
      <article class="official-card">
        <div class="official-card__body">
          <span class="section-eyebrow">Official Notices</span>
          <h2 class="official-card__title">Notice Feed</h2>
          <p class="official-card__text">Official notices, including Association Update announcements for selection and representation.</p>
          <p class="mt-6"><a class="button button-primary" href="{{ '/notices/feed.xml' | relative_url }}">Open Feed</a></p>
        </div>
      </article>
    </div>

  </div>
</section>
