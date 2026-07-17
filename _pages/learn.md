---
title: Learn Go
permalink: /learn/
layout: page
bodyClass: page-learn
description: We at the Association of Indian Go Players (AIGP) will be happy to teach players of all levels the wonderful game of Go. Please join our community, and we will be glad to have you in our weekly sessions.
---

<div class="text-center mb-8">
  <h1 class="text-3xl font-bold font-serif text-[var(--heading-color)] mb-3">Learn Go with AIGP</h1>
  <p class="text-sm text-[var(--secondary-text-color)] max-w-2xl mx-auto leading-relaxed">
    We conduct regular teaching sessions for players new to the game of Go. Details of the sessions can be found in the Telegram group.
  </p>
</div>

{% assign resources = site.data.resources.resources %}

<section class="site-section--tight">
  <div class="section-heading">
    <span class="section-eyebrow">Start Learning</span>
    <h2 class="section-title">Go Learning Resources</h2>
    <p class="section-summary">A maintained set of beginner lessons, videos, guides, and resource indexes for Indian Go players.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 learn-resource-grid">
    {% for resource in resources %}
      {% include resource-card.html resource=resource mode="compact" hide_button=true %}
    {% endfor %}
  </div>
</section>
