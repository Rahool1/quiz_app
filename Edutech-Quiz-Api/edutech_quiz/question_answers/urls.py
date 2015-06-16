from django.conf.urls import patterns, include, url
from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
    ## upload advertisement image
    url(r'^send/category/$', 'question_answers.views.send_categories'),
    url(r'^send/question/$', 'question_answers.views.send_question_on_category'),

)