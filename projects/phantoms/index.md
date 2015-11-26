---
layout: project
logo: projects/phantoms/logo.250.jpg
title: Phantoms
id: phantoms
google-play-url: "https://play.google.com/store/apps/details?id=com.uralys.phantoms"
app-store-url: "https://itunes.apple.com/us/app/id1037707233"
---

{% assign press = site.data.press %}

{% include game-description.html num=0 %}

{% include store-buttons.html %}

<div class="highlight row gutters span_12">
    <iframe width="860"
            height="512"
            src="http://www.youtube.com/embed/yRW5d_Fzyfo"
            frameborder="0">
    </iframe>
</div>

<div class="highlight row gutters fadeInDown animated">
  <div class="row span_12">
  {% include screenshot.html num=1 %}
  {% include screenshot.html num=2 %}
  {% include screenshot.html num=3 %}
  {% include screenshot.html num=4 %}
  </div>

  <div class="row span_12">
  {% include screenshot.html num=5 %}
  {% include screenshot.html num=6 %}
  {% include screenshot.html num=7 %}
  {% include screenshot.html num=8 %}
  </div>

  <div class="row span_12">
  {% include screenshot.html num=9 %}
  {% include screenshot.html num=10 %}
  {% include screenshot.html num=11 %}
  {% include screenshot.html num=12 %}
  </div>
</div>

<div class="highlight gutters fadeInDown animated">
  <p>{{ press.phantoms }}</p>
  <p>{{ press.gameplay }}</p>
  <ul>
    {% for highlight in press.highlights %}
      <li>{{ highlight }}</li>
    {% endfor %}
  </ul>
</div>


{% include game-credits.html %}
