---
layout: page
title: Search
permalink: /search/
description: "Search AIGP news, official notices, events, learning resources, and official pages."
---

<section class="site-section--tight search-hero">
  <div class="section-heading search-heading">
    <span class="section-eyebrow">Find Official Content</span>
    <h1 class="section-title">Search AIGP</h1>
    <p class="section-summary">Search across news, official notices, events, learning resources, and key public pages.</p>
  </div>
</section>

<div class="official-card search-card">
  <div class="official-card__body">
    <label class="search-label" for="site-search-input">Search terms</label>
    <input id="site-search-input" class="search-input" type="search" placeholder="Try selection, KPMC, beginner, workshop, ratings" autocomplete="off">
    <p id="site-search-count" class="official-card__meta search-count" aria-live="polite">Start typing to search.</p>
  </div>
</div>

<div id="site-search-results" class="card-grid mt-8" aria-live="polite"></div>

<script src="{{ '/assets/js/search.js' | relative_url }}" defer></script>
