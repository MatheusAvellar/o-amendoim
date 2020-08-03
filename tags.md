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
            {{ post.date | date: date_format }}
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