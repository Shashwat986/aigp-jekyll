---
layout: page
title: Team And Contributors
permalink: /team/
description: "AIGP core team, organizers, teachers, tournament staff, and project contributors."
bodyClass: page-team
---

<section class="site-section--tight team-lead-section">
  <div class="section-heading">
    <span class="section-eyebrow">People Behind AIGP</span>
    <h1 class="section-title">Team And Contributors</h1>
    <p class="section-summary">AIGP is volunteer-run. This page recognizes core team members and the wider set of people who help with tournaments, teaching, outreach, ratings records, design, development, translation, and city-level community work.</p>
  </div>
</section>

<section class="site-section--tight">
  <div class="section-heading">
    <span class="section-eyebrow">Core Team</span>
    <h2 class="section-title">Association Leads</h2>
  </div>
  <div class="grid grid-cols-1 gap-5 team-core-grid">
    {% for member in site.data.team.team %}
      {% include person-card.html person=member %}
    {% endfor %}
  </div>
</section>

<section class="site-section--tight">
  <div class="section-heading">
    <span class="section-eyebrow">Executive Members</span>
    <h2 class="section-title">Association Support Team</h2>
  </div>
  <div class="card-grid team-people-grid">
    {% for member in site.data.team_structure.executive_members %}
      {% include person-card.html person=member role="Executive Member" %}
    {% endfor %}
  </div>
</section>

<section class="site-section--tight">
  <div class="section-heading">
    <span class="section-eyebrow">Grassroot Organisations</span>
    <h2 class="section-title">Zonal Heads And Activity</h2>
    <p class="section-summary">Regional and online leads help create recurring play, school outreach, university activity, classes, and tournaments.</p>
  </div>
  <div class="card-grid team-people-grid">
    {% for zone in site.data.team_structure.zonal_heads %}
      {% include person-card.html person=zone role="Zonal Head" group=zone.zone %}
    {% endfor %}
  </div>
</section>

<section class="site-section--tight">
  <div class="section-heading">
    <span class="section-eyebrow">Wider Contributor List</span>
    <h2 class="section-title">Helpers And Roles</h2>
    <p class="section-summary">Official Go organizations rely on many kinds of volunteer labor. This list can grow as more organizers, teachers, club hosts, arbiters, photographers, translators, and technical contributors are documented.</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5 team-people-grid">
    {% for person in site.data.contributors.contributors %}
      {% include person-card.html person=person %}
    {% endfor %}
  </div>
</section>

<section class="site-section--tight">
  <div class="official-card">
    <div class="official-card__body">
      <span class="official-card__meta">Recognition Updates</span>
      <h2 class="official-card__title">Add Or Correct A Contributor</h2>
      <p class="official-card__text">If someone has helped AIGP and should be listed here, send their name, role, city if public, contribution summary, and an optional photo through the contact page. For corrections, include the exact wording that should change.</p>
      <p class="mt-5"><a class="button button-primary" href="/contact/">Contact AIGP</a></p>
    </div>
  </div>
</section>
