from django.urls import path
from . import views

app_name = "couoh"

urlpatterns = [
    # /couoh/1
    path('', views., name="index"),
    
    # path('coucou', views.createc, name="coucou"),
    # path('ohoh', views.createo, name="ohoh")
]

