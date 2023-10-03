from django.shortcuts import render
from django.views.generic import TemplateView



class AboutView(TemplateView):
    template_name = 'about.html'


class ContactView(TemplateView):
    template_name= 'contact.html'

class EventsView(TemplateView):
    template_name='enevts.html'


class IndexView(TemplateView):
    template_name= 'index.html'

class Newsview(TemplateView):
    template_name= 'news.html'

class SermonsView(TemplateView):
    template_name='sermons.html'