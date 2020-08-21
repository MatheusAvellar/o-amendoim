---
layout: page
title: Tags
header: yes
permalink: /tags/
---
{% capture tags %}
  {% for tag in site.categories %}
    {{ tag[0] }}
  {% endfor %}
{% endcapture %}
{% assign sortedtags = tags | split:' ' | sort %}

{% for tag in sortedtags %}
  <h2 id="{{ tag }}" class="tag-name">{{ tag }}</h2>
  <ul class="tag-list">
  {% for post in site.categories[tag] %}
    <li class="tag-item">
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      <p class="post-meta">
        <span class="dt-tagged-wrapper">
          <time class="dt-published" datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">
            {% assign m = post.date | date: "%-m" %}
            {{ post.date | date: "%-d" }}
            {% case m %}
              {% when '1' %}jan
              {% when '2' %}fev
              {% when '3' %}mar
              {% when '4' %}abr
              {% when '5' %}mai
              {% when '6' %}jun
              {% when '7' %}jul
              {% when '8' %}ago
              {% when '9' %}set
              {% when '10' %}out
              {% when '11' %}nov
              {% when '12' %}dez
            {% endcase %}
            {{ post.date | date: "%Y" }}
          </time>
        </span>
        <span class="info-tagged-wrapper">
          <a href="{{ post.url }}">{{ post.title }}</a>
        </span>
      </p>
    </li>
  {% endfor %}
  </ul>
{% endfor %}