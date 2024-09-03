---

layout: default
title: Schedule + Class Notes

---

{% assign class_num = 0 %} 
{% for week in site.data.schedule.schedule %}


## Week {{ week.week_number }}

{% for class in week.classes %}
{{ site.data.class-dates[class_num].day }}, {{ site.data.class-dates[class_num].date }}
{% assign class_num = class_num | plus: 1 %}
<div class="week" markdown="1">

<!-- TOPICS -->
<div class="week-column topics" markdown="1">

### Topics
{% for topic in class.topics %}
{{ topic }}
{% endfor%}

</div>

<!-- DUE -->
{% if class.due[0].size > 0 %}
<div class="week-column assigned" markdown="1">

### Due
{% for hw in class.due %}
- {{ hw }}
{% endfor%}

</div>
{% endif %}

<!-- MATERIALS -->
{% if class.files[0].name.size > 1 %} 
<div class="week-column materials" markdown="1">

### Materials

{% for file in class.files %}
{% if file.type == "code" %}
  <a href="{{ site.url }}{{ site.baseurl }}{{ file.path }}" >`{{ file.name }}`</a>
{% elsif file.type == "external code" %}
  <a href="{{ file.path }}" >`{{ file.name }}`</a>
{% elsif file.type == "download" %}
  <a href="{{ site.url }}{{ site.baseurl }}{{ file.path }}" download>*{{ file.name }}*</a>
{% else %}
  <a href="{{ site.url }}{{ site.baseurl }}{{ file.path }}" >{{ file.name }}</a>
{% endif %}
{% endfor %}

</div>
{% endif %}
</div>
<br>

{% endfor %}
{% endfor %}
