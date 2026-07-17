---
layout: page
title: Events
permalink: /events/
description: "AIGP tournaments, workshops, weekly sessions, camps, and meetups."
---

<div class="w-full mx-auto">
<section class="site-section--tight">
  <div class="section-heading">
    <span class="section-eyebrow">AIGP Calendar</span>
    <h1 class="section-title">Events</h1>
    <p class="section-summary">Tournaments, workshops, weekly sessions, camps, and meetups are modeled here so they can be maintained separately from general news.</p>
  </div>
</section>

{% assign events_sorted = site.events | sort: "event_sort_date" | reverse %}
{% assign ongoing_events = site.events | where: "status", "ongoing" | sort: "event_sort_date" %}
{% assign upcoming_events = site.events | where: "status", "upcoming" | sort: "event_sort_date" %}
{% assign active_events = ongoing_events | concat: upcoming_events %}
{% assign completed_events = site.events | where: "status", "completed" | sort: "event_sort_date" | reverse %}
{% assign event_types = site.events | map: "event_type" | compact | uniq | sort %}
{% assign event_formats = site.events | map: "format" | compact | uniq | sort %}

{% if events_sorted.size > 0 %}
<form class="event-filters official-card official-card--flat mb-8" data-event-filters aria-label="Filter events">
  <div class="official-card__body">
    <div class="event-filter-controls">
      <div class="event-filter-control">
        <label for="event-type-filter">Event type</label>
        <select id="event-type-filter" data-event-type-filter>
          <option value="">All event types</option>
          {% for event_type in event_types %}
          <option value="{{ event_type | escape }}">{{ event_type }}</option>
          {% endfor %}
        </select>
      </div>
      <div class="event-filter-control">
        <label for="event-format-filter">Format</label>
        <select id="event-format-filter" data-event-format-filter>
          <option value="">All formats</option>
          {% for event_format in event_formats %}
          <option value="{{ event_format | escape }}">{{ event_format }}</option>
          {% endfor %}
        </select>
      </div>
    </div>
    <p class="event-filter-empty mt-5" data-event-filter-empty hidden aria-live="polite">No events match these filters.</p>
  </div>
</form>

<section class="site-section--tight" data-event-section>
  <div class="section-heading">
    <span class="section-eyebrow">Current Activity</span>
    <h2 class="section-title">Ongoing And Upcoming</h2>
  </div>
  {% if active_events.size > 0 %}
  <div class="card-grid media-card-list">
    {% for event in active_events %}
    <div data-event-card data-event-type="{{ event.event_type | default: '' | escape }}" data-event-format="{{ event.format | default: '' | escape }}">
      {% include event-card.html event=event %}
    </div>
    {% endfor %}
  </div>
  {% else %}
  <p>No ongoing or upcoming events have been published yet.</p>
  {% endif %}
</section>

<section class="site-section--tight" data-event-section>
  <div class="section-heading">
    <span class="section-eyebrow">Past Activity</span>
    <h2 class="section-title">Completed Events</h2>
  </div>
  {% if completed_events.size > 0 %}
  <div class="card-grid media-card-list">
    {% for event in completed_events %}
    <div data-event-card data-event-type="{{ event.event_type | default: '' | escape }}" data-event-format="{{ event.format | default: '' | escape }}">
      {% include event-card.html event=event %}
    </div>
    {% endfor %}
  </div>
  {% else %}
  <p>No completed events have been published yet.</p>
  {% endif %}
</section>

{% else %}
<p>No events have been published yet.</p>
{% endif %}
</div>
