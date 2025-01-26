---

layout: default
title: Assignments

---
<div class="assignments" markdown="1">
<div class="column-1" markdown="1">

## Assignments
The semester is comprised of 9 project-based assignments.

All assignments should be submitted via [Ed]({{site.ed}}lessons/) by 11:59pm on the day they are due. Instructions for each assignment can be found here, on the class website, by clicking on the assignment link.

## Ed Lessons
In certain weeks, as part of your self-paced learning, you will need to complete [Ed Lessons]({{site.ed}}lessons/) in preparation for the week's lecture. These assignments each contain a short video lesson along with a small programming task for you to perform. They are due right before our class meeting at 12:30 pm to ensure that everyone has a baseline level of knowledge to make the most of our time together during our weekly course meetings.

For a full outline of assignment Ed lesson due dates, please refer to the Schedule + Notes tab on this website.

## Submitting Assignments

Once you have submitted an assignment you can only resubmit it up until the time it is due. Make sure that what you are submitting is the final version of your work.

You may turn in an assignment up to 10 days late, with a 5% penalty being applied for each day an assignment is late after the due date. "Grace days" (described below) can be used on assignments. After 10 day late an assignment cannot be turned in for credit and will earn a score of 0.

### Grace Days

Sometimes there are unforeseen situations that may impede your progress. As a result you are being given 10 grace days for the entire semester. These grace days cover all late submissions regardless of personal, professional, or technical related delays (e.g. a job interview, computer hardware failure, etc.) and no further exceptions will be granted (so don’t waste them simply by procrastinating). You don’t need to do anything special to use these “grace” day—the course graders will keep track of these on your behalf and will apply them to your work as necessary. <br><br> You can check how many grace days you have left by visiting Brightspace, going to Grades, and checking the grade item titled "Grace Days Remaining."


## Assignment Feedback
After an assignment has closed for late submissions, you will be able to view feedback on your work provided by our course grading team. This feedback will be visible in Ed by clicking on the "Submissions" button on the assignment in question. From there, look for the blue "envelope" icon to view any feedback that was posted by the course graders.

If you believe the grading on an assignment is unfair or if you have questions as to why you received a certain grade, please fill out this [form](https://docs.google.com/forms/d/e/1FAIpQLSeOk3iUInyDzLpPSHmxqBpoTOmzTCNksMpAb17OOucAj8I-LQ/viewform). Note that all grading inquiries must be submitted within 21 days (3 weeks) of the assignment’s original closing date.

## Policies

Assignments that you turn in should be your own work. It’s fine to talk to other students and to get assistance in how to do something, but you should not ask another person or algorithm to do the work for you. The use of AI-assisted code writing tools, such as ChatGPT, is explicitly forbidden. Any student found to be using a tool like this to produce code for assignments, in-class activities, or exams will be considered to have committed an academic integrity violation, and will result in a grade of 0 for that particular assignment.  For reference, here is the Computer Science Department’s [statement on academic integrity](https://cs.nyu.edu/home/undergrad/policy.html).


</div>



<div class="column-2">

{% assign counter = 0 %}
{% for page in site.pages %}
    {% if page.layout == "assignments" and counter < 5 %}
        {% if page.live == true %}
        <h2><a href="{{ page.url | relative_url }}"> {{ page.title }}</a></h2>
        {% else %}
        <h2>{{ page.title }}</h2>
        {% endif %}  
        <p><strong>{{ page.topic }}</strong></p>
        <p>Assignment date: {{ page.assign-date}}</p>
        <p>Due date: {{ page.due-date}}</p>
        {% assign counter = counter | plus: 1 %}
    {% endif %}      
{% endfor %}


</div>


</div>