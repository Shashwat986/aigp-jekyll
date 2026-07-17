---
layout: page
title: Annual Reports
permalink: /annual-report/
description: "AIGP annual report archive for official activity, public records, events, notices, outreach, and representation."
---

<section class="site-section--tight">
  <div class="section-heading">
    <span class="section-eyebrow">Public Record</span>
    <h1 class="section-title">Annual Reports</h1>
    <p class="section-summary">AIGP annual reports collect public activity into year-by-year records: notices, news, events, outreach, representation, community work, and website improvements. This page can start as a living archive and later link to downloadable PDFs.</p>
  </div>
</section>

<section class="site-section--tight">
  <div class="section-heading">
    <span class="section-eyebrow">Report Scope</span>
    <h2 class="section-title">What Each Year Should Capture</h2>
  </div>
  <div class="card-grid card-grid--3">
    <div class="official-card"><div class="official-card__body"><h3 class="official-card__title">Play</h3><p class="official-card__text">Tournaments, ratings links, meetups, online sessions, clubs, and regular community play.</p></div></div>
    <div class="official-card"><div class="official-card__body"><h3 class="official-card__title">Learn</h3><p class="official-card__text">Workshops, school sessions, teaching resources, beginner programs, and volunteer-led lessons.</p></div></div>
    <div class="official-card"><div class="official-card__body"><h3 class="official-card__title">Represent</h3><p class="official-card__text">Association Update notices, representative announcements, international participation, Policy notices, and public records.</p></div></div>
  </div>
</section>

<div class="card-grid">
  {% assign reports = site.data.annual_reports.reports | sort: "year" | reverse %}
  {% for report in reports %}
  <article class="official-card official-card--flat">
    <div class="official-card__body">
      <span class="official-card__meta">{{ report.status }}</span>
      <h2 class="official-card__title">{{ report.year }} Annual Report</h2>
      <p class="official-card__text">{{ report.summary }}</p>
      <ul class="mt-5 space-y-2 text-sm text-[var(--secondary-text-color)]">
        {% for item in report.highlights %}
        <li>{{ item }}</li>
        {% endfor %}
      </ul>
      <div class="mt-5 flex flex-wrap gap-2">
        <a class="button button-primary" href="{{ '/annual-report/' | append: report.year | append: '/' | relative_url }}">Open {{ report.year }} Archive</a>
        {% if report.links %}
        {% for link in report.links %}
        <a class="button button-secondary" href="{{ link.url | relative_url }}">{{ link.label }}</a>
        {% endfor %}
        {% endif %}
      </div>
    </div>
  </article>
  {% endfor %}
</div>
