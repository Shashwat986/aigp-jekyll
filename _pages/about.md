---
layout: page
title: About AIGP
permalink: /about/
---

# About AIGP

The Association of Indian Go Players (AIGP) is a non-profit organization dedicated to promoting the ancient board game of Go (also known as Weiqi, Baduk) throughout India. We aim to foster a vibrant community of Go players, from beginners to professionals, by organizing tournaments, workshops, online events, and give the national players' a chance to participate and/or represent our country in International tournaments.

Our mission is to:
- Promote the game of Go in educational institutions and communities across India.
- Provide resources and support for players to improve their skills.
- Represent Indian Go players in international forums and competitions.
- Build a welcoming and inclusive environment for all enthusiasts.

## Core Team

Our core team consists of dedicated individuals who volunteer their time and expertise to run the organization.

<div class="row g-4">
  {% for member in site.data.team %}
  <div class="col-md-4">
    <div class="card h-100 shadow-sm">
      {% if member.image %}
      <img src="{{ member.image | relative_url }}" class="card-img-top" alt="{{ member.name }}" style="object-fit: contain; height: 180px;">
      {% endif %}
      <div class="card-body d-flex flex-column">
        <h5 class="card-title"><a href="{{ member.link | relative_url }}">{{ member.name }}</a></h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ member.role }}</h6>
        <p class="card-text flex-grow-1">{{ member.bio }}</p>
      </div>
    </div>
  </div>
  {% endfor %}
</div>

---