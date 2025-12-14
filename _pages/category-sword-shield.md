---
title: "Sword and Shield Blog Posts"
layout: archive
permalink: /blog/sword-shield/
taxonomy: sword-shield
author_profile: false
---

All blog posts about the Sword and Shield collection.

{% assign sword_shield_posts = site.categories.sword-shield %}
{% for post in sword_shield_posts %}
  {% include archive-single.html %}
{% endfor %}

{% if sword_shield_posts.size == 0 %}
*No Sword and Shield blog posts yet.*
{% endif %}
