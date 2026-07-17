---
layout: page
title: About AIGP
permalink: /about/
---

<section class="site-section--tight">
  <div class="section-heading">
    <span class="section-eyebrow">Official Association</span>
    <h1 class="section-title">About AIGP</h1>
    <p class="section-summary">The Association of Indian Go Players (AIGP) promotes Go, Baduk, and Weiqi in India through learning, events, public records, community building, and international representation pathways.</p>
  </div>
</section>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-5 my-8">
  <section class="official-card lg:col-span-2">
    <div class="official-card__body">
      <span class="official-card__meta">What We Maintain</span>
      <h2 class="official-card__title">A public home for Indian Go</h2>
      <p class="official-card__text">AIGP brings together players, parents, teachers, clubs, tournament organizers, schools, and supporters. The website is used for official notices, news, learning resources, event records, representative announcements, and links to current ratings, clubs, and tournaments.</p>
    </div>
  </section>
  <aside class="official-card official-card--flat">
    <div class="official-card__body">
      <span class="official-card__meta">Start Here</span>
      <h2 class="official-card__title">Find the right path</h2>
      <p class="official-card__text">New players can begin with Learn Go and Community. Active players should follow News, Official Notices, and Leago links for events and ratings.</p>
      <p class="mt-5 flex flex-wrap gap-2"><a class="button button-primary" href="/learn/">Learn Go</a><a class="button button-secondary" href="/community/">Community</a></p>
    </div>
  </aside>
</div>

<section class="site-section--tight">
  <div class="section-heading">
    <span class="section-eyebrow">Mission</span>
    <h2 class="section-title">AIGP's Public Role</h2>
  </div>
  <div class="card-grid card-grid--3">
    <div class="official-card"><div class="official-card__body"><h3 class="official-card__title">Grow The Game</h3><p class="official-card__text">Support schools, colleges, clubs, meetups, workshops, beginner sessions, and public demonstrations across India.</p></div></div>
    <div class="official-card"><div class="official-card__body"><h3 class="official-card__title">Keep Records</h3><p class="official-card__text">Publish official notices, representative selections, public reports, event summaries, and links to current ratings and tournament systems.</p></div></div>
    <div class="official-card"><div class="official-card__body"><h3 class="official-card__title">Represent India</h3><p class="official-card__text">Maintain transparent pathways for eligible Indian players to participate in international Go events when invitations and opportunities arise.</p></div></div>
  </div>
</section>

<section class="site-section--tight">
  <div class="section-heading">
    <span class="section-eyebrow">Official Information</span>
    <h2 class="section-title">Where To Look</h2>
    <p class="section-summary">Formal association announcements are published as Official Notices. Governance, conduct, privacy, and contact expectations are kept on dedicated pages.</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    <div class="official-card"><div class="official-card__body"><h3 class="official-card__title">Players And Events</h3><p class="official-card__text">Use Leago for current AIGP events, ratings, and club listings. Use News for reports and Official Notices for formal decisions.</p><p class="mt-5 flex flex-wrap gap-2"><a class="button button-secondary" href="{{ site.data.links.leago.events }}" target="_blank" rel="noopener noreferrer">Events</a><a class="button button-secondary" href="{{ site.data.links.leago.ratings }}" target="_blank" rel="noopener noreferrer">Ratings</a><a class="button button-secondary" href="{{ site.data.links.leago.clubs }}" target="_blank" rel="noopener noreferrer">Clubs</a></p></div></div>
    <div class="official-card"><div class="official-card__body"><h3 class="official-card__title">Governance And Safety</h3><p class="official-card__text">Read the Code of Conduct, Contact Escalation Policy, Content Review Rules, Privacy Policy, and Terms before raising formal concerns.</p><p class="mt-5 flex flex-wrap gap-2"><a class="button button-secondary" href="/code-of-conduct/">Conduct</a><a class="button button-secondary" href="/contact-escalation/">Escalation</a><a class="button button-secondary" href="/content-review/">Review</a></p></div></div>
  </div>
</section>

<section class="site-section--tight">
  <div class="section-heading">
    <span class="section-eyebrow">People</span>
    <h2 class="section-title">Core Team</h2>
    <p class="section-summary">AIGP is volunteer-run. The wider contributor list is maintained on the Team and Contributors page.</p>
  </div>
  <div class="card-grid media-card-list">
    {% for member in site.data.team.team %}
      {% include person-card.html person=member %}
    {% endfor %}
  </div>
  <p class="mt-6"><a class="button button-primary" href="/team/">View Team And Contributors</a></p>
</section>
