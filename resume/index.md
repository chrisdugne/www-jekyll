---
layout: default
title: Resume
logo: chris.jpg
---

<div class="highlight resume-tools">
     <ul class="tabs">
        <li>
            <input type="radio" class="radio"  name="info" id="tab1" value="1" checked />
            <label for="tab1" title="Roles/dates"><img src="{{site.baseurl}}/public/images/common/me.png" style="height:30px"></label>
        </li>

        <li>
            <input type="radio" class="radio"  name="info" id="tab2" value="2" />
            <label for="tab2" title="Technologies"><img src="{{site.baseurl}}/public/images/common/settings.png" style="height:30px"></label>
        </li>

        <li>
            <input type="radio" class="radio"  name="info" id="tab3" value="3" />
            <label for="tab3" title="Team"><img class="tab-logo" src="{{site.baseurl}}/public/images/common/team.png"></label>
        </li>
    </ul>
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

{% for project in site.data.projects %}
{% assign overview = project.overview %}

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

      {% include project-role-for-resume.html %}

  </div>
</div>


{% endfor %}


</section>
