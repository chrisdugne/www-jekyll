---
layout: page
title: Games
logo: projects/tribes-and-khans/logo.250.jpg
---

{% assign currentYear = 0 %}

<section class="archive">

{% for project in site.data.projects %}

{% if project.category != "games" %} {% continue %} {% endif %}

{% if project.year != currentYear %}
  {% assign currentYear = project.year %}
  {% assign newYear = true %}
{% else %}
  {% assign newYear = false %}
{% endif %}

{% if newYear %}
<div class="bundle row gutters fadeInDown animated">
{% else %}
<div class="bundle-content row gutters fadeInDown animated">
{% endif %}

  <div class="project col span_12">

      <h2 class="post-year col span_1">
      {% if newYear %}
        {{project.year}}
      {% endif %}
      </h2>

      <div class="col span_3">
        <div class="project-logo in-row" style="background-image: url({{site.baseurl}}/public/images/projects/{{project.id}}/logo.250.jpg);">
       </div>
      </div>

      <div class="col span_4">
          <a class="button project-details" href="/projects/{{project.id}}">{{project.title}}</a>
      </div>

  </div>
</div>


{% endfor %}
