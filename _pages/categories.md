---
layout: default
title: News
description: News about the Association of Indian Go Players. The AIGP conducts various tournaments and events. We have weekly meetups.
permalink: /categories/
body-class: page-archive
---
<section class="container pt-6 pb-6">
  <div class="row justify-content-start">
    <div class="col-12 col-md-7 col-lg-6">
      <h2 class="title is-4">Categories</h2>
      <p class="subtitle is-6">
        Browse news by category.
      </p>
      {% assign category_names = "" %}
      {% for post in site.news %}
        {% for cat in post.categories %}
          {% assign category_token = "|" | append: cat | append: "|" %}
          {% unless category_names contains category_token %}
            {% assign category_names = category_names | append: "|" | append: cat | append: "|" %}
          {% endunless %}
        {% endfor %}
      {% endfor %}
      {% assign category_array = category_names | split: "|" | sort %}
      <ul>
        {% for cat in category_array %}
          {% if cat != "" %}
            {% assign cat_slug = cat | slugify %}
            <li><a href="{{ '/categories/' | append: cat_slug | append: '/' | relative_url }}">{{ cat }}</a></li>
          {% endif %}
        {% endfor %}
      </ul>
    </div>
  </div>
</section>
