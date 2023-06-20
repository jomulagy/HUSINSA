from django.urls import path
from .views import *

app_name = "item"

urlpatterns = [
    path('clothe/list/<str:category>', clothe_list, name='clothe_list'),
    path('clothe/<int:id>/', clothe_detail, name='clothe_detail'),
    path('clothe/like/', clothe_like, name='clothe_like'),
    path('cart/list/', cart_list, name='cart_list'),
    path('cart/create/', cart_create, name='cart_create'),
    path('order/list/', order_list, name='order_list'),
    path('order/create/', order_create, name='order_create'),
    path('order/all/', order_all, name='order_all'),
]
