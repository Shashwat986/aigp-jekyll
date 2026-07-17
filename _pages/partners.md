---
layout: page
title: Partners And Support
permalink: /partners/
description: "AIGP partner, supporter, sponsor, host, and collaborator information."
---

<section class="site-section--tight">
  <div class="section-heading">
    <span class="section-eyebrow">Support Indian Go</span>
    <h1 class="section-title">Partners And Support</h1>
    <p class="section-summary">AIGP works with event hosts, schools, venues, platforms, media partners, equipment supporters, learning collaborators, and community organizers to make Go more visible and easier to play across India.</p>
  </div>
</section>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-5 my-8">
  <section class="official-card lg:col-span-2">
    <div class="official-card__body">
      <span class="official-card__meta">What AIGP Does</span>
      <h2 class="official-card__title">Public Go Infrastructure</h2>
      <p class="official-card__text">AIGP maintains official notices, representation pathways, beginner teaching, tournament information, player records, community sessions, school outreach, club discovery, and public reports for Indian Go.</p>
    </div>
  </section>
  <aside class="official-card official-card--flat">
    <div class="official-card__body">
      <span class="official-card__meta">Contact</span>
      <h2 class="official-card__title">Partner Or Support AIGP</h2>
      <p class="official-card__text">Use the contact page for sponsorship, venue hosting, school programs, equipment support, media coverage, platform collaboration, or public event support.</p>
      <p class="mt-5"><a class="button button-primary" href="/contact/">Start A Conversation</a></p>
    </div>
  </aside>
</div>

<section class="official-card official-card--flat mb-8">
  <div class="official-card__body">
    <span class="official-card__meta">Donation Policy</span>
    <h2 class="official-card__title">Start With A Conversation</h2>
    <p class="official-card__text">{{ site.data.support.policy.message }}</p>
    <p class="mt-5"><a class="button button-primary" href="{{ '/contact/' | relative_url }}">Contact AIGP</a></p>
  </div>
</section>

<section class="site-section--tight">
  <div class="section-heading">
    <span class="section-eyebrow">What Helps Most</span>
    <h2 class="section-title">Support That Creates Lasting Value</h2>
    <p class="section-summary">The most useful support leaves something behind for players: a recurring club, a completed tournament, a school program, better records, or reusable learning material.</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    <div class="official-card"><div class="official-card__body"><h3 class="official-card__title">Local Continuity</h3><p class="official-card__text">Venue access, regular meetups, boards, clocks, and volunteer hosts help new learners keep playing after an intro session.</p></div></div>
    <div class="official-card"><div class="official-card__body"><h3 class="official-card__title">Public Records</h3><p class="official-card__text">Photography, reports, rating links, result tables, and supporter acknowledgements make events easier to verify and repeat.</p></div></div>
  </div>
</section>

<section class="site-section--tight">
  <div class="section-heading">
    <span class="section-eyebrow">Support Routes</span>
    <h2 class="section-title">Useful Ways To Help</h2>
  </div>
  <div class="card-grid card-grid--3">
    {% for option in site.data.support.support_options %}
    <article class="official-card">
      <div class="official-card__body">
        <h3 class="official-card__title">{{ option.title }}</h3>
        <p class="official-card__text">{{ option.summary }}</p>
        <p class="mt-5"><a class="button button-secondary" href="{{ option.contact_url | relative_url }}">{{ option.contact_label }}</a></p>
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<section class="site-section--tight">
  <div class="section-heading">
    <span class="section-eyebrow">Partnership Principles</span>
    <h2 class="section-title">How AIGP Should Work With Supporters</h2>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    <div class="official-card"><div class="official-card__body"><h3 class="official-card__title">Public Purpose</h3><p class="official-card__text">Support should help players learn, compete, meet locally, represent India, or preserve reliable public records.</p></div></div>
    <div class="official-card"><div class="official-card__body"><h3 class="official-card__title">Clear Acknowledgement</h3><p class="official-card__text">AIGP should agree how a supporter is named, what they are supporting, and whether the relationship is sponsorship, venue support, media support, or collaboration.</p></div></div>
  </div>
</section>

<section class="site-section--tight">
  <div class="section-heading">
    <span class="section-eyebrow">Existing Collaborators</span>
    <h2 class="section-title">Past And Current Supporters</h2>
    <p class="section-summary">This list includes public collaborators visible in AIGP pages and event reports. Formal sponsor status can be clarified in future updates.</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    {% for collaborator in site.data.partners.collaborators %}
    <div class="official-card"><div class="official-card__body"><h3 class="official-card__title">{{ collaborator.name }}</h3><p class="official-card__text">{{ collaborator.description }}</p>{% if collaborator.url %}<p class="mt-5"><a class="button button-secondary" href="{{ collaborator.url }}" target="_blank" rel="noopener noreferrer">{{ collaborator.link_label | default: "Open Website" }}</a></p>{% endif %}</div></div>
    {% endfor %}
  </div>
</section>
