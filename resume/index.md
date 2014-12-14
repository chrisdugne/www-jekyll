---
layout: default
title: Resume
logo: chris.jpg
---

<div class="resume-tools highlight">
  <div>
    <input type="radio" class="radio" name="info" value="part1" checked/>
    Roles + Dates
  </div>
  <div>
    <input type="radio" class="radio" name="info" value="part2" />
    Technology
  </div>
  <div>
    <input type="radio" class="radio" name="info" value="part3" />
    Team
  </div>
</div>

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

{% for project_hash in site.data.projects reversed %}
{% assign overview = project_hash[1].overview %}

{% if overview.year != currentYear %}
  {% assign currentYear = overview.year %}
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
        {{overview.year}}
      {% endif %}
      </h2>

      <div class="col span_3">
        <div class="project-logo in-row" style="background-image: url({{site.baseurl}}/public/images/projects/{{overview.id}}/logo.250.jpg);">
       </div>
      </div>

      <div class="col span_4">
          <a class="button project-details" href="/projects/{{overview.id}}">{{overview.title}}</a>
      </div>

      {% include project-role.html %}

  </div>
</div>


{% endfor %}


</section>
