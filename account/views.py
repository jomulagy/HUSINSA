from django.shortcuts import render, redirect
from django.contrib import auth
from .models import User

# Create your views here.
def signup(request):
    if request.method == 'POST':
        if User.objects.filter(username = request.POST.get("username")).exists():
            return render(request,"signup.html",{"message":"이미 존재하는 회원입니다."})
        else:
            user = User.objects.create_user(
                username=request.POST['username'],
                password=request.POST['password'],
                first_name=request.POST['name'][0],
                last_name=request.POST['name'][1:],
            )
            auth.login(request, user)
            return redirect('item:clothe_list','all')

    else:
        return render(request, 'account/signup.html')

def userDetail(request):
    return render(request,"account/mypage.html")

def userImageUpdate(request):
    request.user.image = request.FILES.get("image")
    request.user.save()
    return redirect('account:userDetail')

