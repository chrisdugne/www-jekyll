---
layout: page
title: Press Kit
description: Phantoms press kit
logo: projects/phantoms/logo.250.jpg
google-play-url: "https://play.google.com/store/apps/details?id=com.uralys.phantoms"
app-store-url: "https://itunes.apple.com/us/app/id1037707233"
---

{% assign press = site.data.press %}

<div class="gutters fadeInDown animated">
  <img src= "/public/images/projects/phantoms/title.png"
  style="padding: 0px 30%;"/>
  <h1>Description</h1>
  <h4 class="bundle">Developer:</h4>
  <p>{{ press.developer }}</p>
  <h4 class="bundle">Phantoms:</h4>
  <p>{{ press.phantoms }}</p>
  <h4 class="bundle">Game Mechanics:</h4>
  <p>{{ press.gameplay }}</p>
  <h4 class="bundle">Highlights of Phantoms:</h4>
    <ul>
    {% for highlight in press.highlights %}
      <li>{{ highlight }}</li>
    {% endfor %}
    </ul>
</div>

<div class="row gutters fadeInDown animated">
  <h1 class="bundle">Release</h1>
  <p>November 25, 2015 on iOS & Android</p>

  {% include store-buttons.html hideHighlight=true%}
</div>

<div class="row gutters fadeInDown animated">
  <h1 class="bundle">Trailer</h1>
  <div class="row gutters span_12">
      <iframe width="860"
              height="512"
              src="http://www.youtube.com/embed/yRW5d_Fzyfo"
              frameborder="0">
      </iframe>
  </div>
</div>

<div class="row gutters fadeInDown animated">
  <h1 class="bundle">Images</h1>
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

<div class="row gutters fadeInDown animated">
  <h1 class="bundle">Social</h1>
  <p>
    <a href="https://www.facebook.com/uralys">Facebook</a>
  </p>
</div>

<div class="row gutters fadeInDown animated">
  <h1 class="bundle">Icon</h1>
  <div class="press-icon"
     title="Phantoms"
     style="background-image: url({{site.baseurl}}/public/images/projects/phantoms/logo.250.jpg);">
   </div>
</div>

<div class="gutters fadeInDown animated">
  <h1 class="bundle">Selected Articles </h1>
  <ul>
    {% for article in press.articles %}
      <li><i>{{ article }}</i></li>
    {% endfor %}
  </ul>
</div>

<div class="gutters fadeInDown animated">
  <h1 class="bundle">Behind the scene</h1>
  <ul>
    {% for group in press.team %}
      <li>{{ group }}</li>
    {% endfor %}
  </ul>
</div>
