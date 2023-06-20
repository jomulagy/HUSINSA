from django.shortcuts import render, redirect
from .models import Clothe, Cart,Category
import json
from django.http import JsonResponse

def clothe_list(request,category):
    if category == "all":
        context = {
            "clothe_list" : Clothe.objects.all()
        }
    else:
        category = Category.objects.get(name = category)
        context = {
            "clothe_list" : Clothe.objects.filter(category=category)
        }

    return render(request,"item/index.html",context)

def clothe_detail(request,id):
    context = {
        "clothe" : Clothe.objects.get(id= id)
    }

    return render(request,"item/itemDetail.html",context)

def clothe_like(request):
    if request.method == "POST":
        data = json.loads(request.body)
        clothe = Clothe.objects.get(id = data['id'])
        request.user.likes.add(clothe)

        return JsonResponse({},status = 200)
    else:
        context = {
            "clothe_list" : request.user.likes.all()
        }

        return render(request,"item/myLike.html",context)

def cart_list(request):
    context = {
        "cart_list" : Cart.objects.filter(user = request.user,ordered = False).order_by("-created_at")
    }
    return render(request,"item/cart.html",context)

def cart_create(request):
    data = json.loads(request.body)
    cart = Cart.objects.create(
        user = request.user,
        clothe = Clothe.objects.get(id = data['id']),
    )
    return JsonResponse({},status = 200)

def order_list(request):
    context = {
        "order_list" : Cart.objects.filter(user = request.user,ordered = True).order_by("-created_at")
    }
    print(context)

    return render(request,"item/buyComplete.html",context)

def order_create(request):
    data = json.loads(request.body)
    cart = Cart.objects.create(
        user = request.user,
        clothe = Clothe.objects.get(id = data['id']),
        ordered = True
    )
    return JsonResponse({},status = 200)

def order_all(request):
    carts = Cart.objects.filter(user = request.user, ordered = False)
    for cart in carts:
        cart.ordered=True
        cart.save()
    return redirect("item:clothe_list","all")
