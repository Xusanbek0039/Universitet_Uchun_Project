from django.urls import path
from .views import *

urlpatterns = [
    path('',IndexView.as_view(),name='index'),
    path('about/',AboutView.as_view(),name='about'),
    path('contact/',ContactView.as_view(),name='contact'),
    path('events/',EventsView.as_view(),name='events'),
    path('news/',Newsview.as_view(),name='news'),
    path('sermons/',SermonsView.as_view(),name='sermons'),
    
    
    ]