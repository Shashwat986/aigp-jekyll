---
layout: page
title: India At International Events
permalink: /representatives/
description: "AIGP hall of representatives and public record of Indian Go players at international events."
---

<section class="site-section--tight">
  <div class="section-heading">
    <span class="section-eyebrow">Representation Record</span>
    <h1 class="section-title">India At International Events</h1>
    <p class="section-summary">A public hall of representatives recorded from AIGP News reports and Event entries. This page preserves who represented India, at which event, and where the source announcement can be checked. For selection rules and active pathways, see the <a href="/representation/">National Representation</a> page.</p>
  </div>
</section>

<section class="site-section--tight">
  <div class="official-card official-card--flat">
    <div class="official-card__body">
      <span class="official-card__meta">Record Keeping</span>
      <h2 class="official-card__title">How this register should be used</h2>
      <p class="official-card__text">Entries should be backed by News reports, Event pages, or verified historical records. If an older representative is missing, send the event name, year, player name, and source link through the contact page.</p>
    </div>
  </div>
</section>

<div class="card-grid">
  {% assign representatives = site.data.representatives.representatives | sort: "year" | reverse %}
  {% for item in representatives %}
  <article class="official-card official-card--flat">
    <div class="official-card__body">
      <span class="official-card__meta">{{ item.year }}</span>
      <h2 class="official-card__title">{{ item.event }}</h2>
      <p class="official-card__text"><strong>{{ item.representative }}</strong></p>
      <p class="official-card__text">{{ item.notes }}</p>
      <p class="mt-5"><a class="button button-secondary" href="{{ item.source_url | relative_url }}">View Source</a></p>
    </div>
  </article>
  {% endfor %}
</div>
