---
title: "Scarlet and Violet Collection"
layout: archive
permalink: /collections/scarlet-violet/
taxonomy: scarlet-violet
author_profile: false
---

All posts about the Scarlet and Violet collection.

{% assign scarlet_violet_posts = site.categories.scarlet-violet %}
{% for post in scarlet_violet_posts %}
  {% include archive-single.html %}
{% endfor %}

{% if scarlet_violet_posts.size == 0 %}
*No Scarlet and Violet posts yet.*
{% endif %}
