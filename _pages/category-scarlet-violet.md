---
title: "Scarlet and Violet Blog Posts"
layout: archive
permalink: /blog/scarlet-violet/
taxonomy: scarlet-violet
author_profile: false
---

All blog posts about the Scarlet and Violet collection.

{% assign scarlet_violet_posts = site.categories.scarlet-violet %}
{% for post in scarlet_violet_posts %}
  {% include archive-single.html %}
{% endfor %}

{% if scarlet_violet_posts.size == 0 %}
*No Scarlet and Violet blog posts yet.*
{% endif %}
