---
layout: default
title: Resume
logo: chris.jpg
---

{% assign currentYear = 0 %}

<section class="archive">

<div class="bundle row gutters fadeInDown animated">
<h2>Experience</h2>

<p>
Here are all the projects I've contributed to or created.
</p>
<p>
Some lasted more than one year, so I've chosen the year during which there were the most contributions.
</p>
</div>


{% for project in site.data.projects %}

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

      <div class="col span_4">
        {% for role in project.roles %}
          <div class="role">{{role}}</div>
        {% endfor %}
        <div class="project-dates">{{project.dates}}</div>
        <div class="duration">{{project.duration}}</div>

        {% if project.status == 'ongoing' %}
          <div class="contributing">Still contributing !</div>
        {% endif %}
      </div>


  </div>
</div>


{% endfor %}


</section>
