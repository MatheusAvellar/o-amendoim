---
layout: page
title: Extras
header: yes
permalink: /extras/
---

## Extras

Páginas listadas aqui são artigos complementares, normalmente expandindo
conceitos ou detalhes mencionados breviamente nas postagens aos quais eles
complementam.

--- 

<ul>
  {% for page in site.pages %}
    {% if page.title and page.layout == "extra"%}
      <li>
        <h3><a href="{{ page.url }}">{{ page.title }}</a></h3>
        <p class="post-excerpt">{{ page.excerpt }}</p>
      </li>
    {% endif %}
  {% endfor %}
</ul>

<style>
h3 {
  margin-bottom: 0;
}
li+li {
  margin-top: 2rem;
}
</style>

--- 