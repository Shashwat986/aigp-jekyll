---
layout: page
title: Content Review Rules
permalink: /content-review/
description: "Editorial review rules for AIGP official notices, policies, events, and news."
---

<section class="site-section--tight">
  <div class="section-heading">
    <span class="section-eyebrow">Publishing Governance</span>
    <h1 class="section-title">Content Review Rules</h1>
    <p class="section-summary">These rules keep official content reliable, especially for national representation, policy updates, public event information, ratings records, and school or youth-facing content.</p>
  </div>
</section>

<section class="site-section--tight">
  <div class="official-card official-card--flat">
    <div class="official-card__body">
      <span class="official-card__meta">Editorial Standard</span>
      <h2 class="official-card__title">Publish facts, sources, and corrections clearly</h2>
      <p class="official-card__text">Official pages should identify the responsible organizer or approver, avoid ambiguous deadlines, preserve source links, and update public mistakes with visible corrections when the change affects players.</p>
    </div>
  </div>
</section>

<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
  {% for rule in site.data.content_review.rules %}
  <article class="official-card official-card--flat">
    <div class="official-card__body">
      <span class="official-card__meta">{{ rule.required_review }}</span>
      <h2 class="official-card__title">{{ rule.content_type }}</h2>
      <p class="official-card__text">{{ rule.applies_to }}</p>
      <p class="font-semibold mt-4 mb-2">Approver: {{ rule.approver }}</p>
      <ul>
        {% for item in rule.checklist %}
        <li>{{ item }}</li>
        {% endfor %}
      </ul>
    </div>
  </article>
  {% endfor %}
</div>
