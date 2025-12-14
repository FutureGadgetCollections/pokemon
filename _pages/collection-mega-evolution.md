---
title: "Mega Evolution Collection"
layout: archive
permalink: /collections/mega-evolution/
taxonomy: mega-evolution
author_profile: false
---

All posts about the Mega Evolution collection.

{% assign mega_evolution_posts = site.categories.mega-evolution %}
{% for post in mega_evolution_posts %}
  {% include archive-single.html %}
{% endfor %}

{% if mega_evolution_posts.size == 0 %}
*No Mega Evolution posts yet.*
{% endif %}
