from django.urls import path
from django.contrib.auth import views as auth_views
from .views import *

app_name = "account"

urlpatterns = [
    path('login/', auth_views.LoginView.as_view(template_name='account/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path("signup/", signup,name = "signup"),
    path("user/detail/", userDetail,name = "userDetail"),
    path("user/image/update", userImageUpdate,name = "image_update"),

]
