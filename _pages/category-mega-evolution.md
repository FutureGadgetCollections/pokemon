---
title: "Mega Evolution Blog Posts"
layout: archive
permalink: /blog/mega-evolution/
taxonomy: mega-evolution
author_profile: false
---

All blog posts about the Mega Evolution collection.

{% assign mega_evolution_posts = site.categories.mega-evolution %}
{% for post in mega_evolution_posts %}
  {% include archive-single.html %}
{% endfor %}

{% if mega_evolution_posts.size == 0 %}
*No Mega Evolution blog posts yet.*
{% endif %}
