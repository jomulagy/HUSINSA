from django.shortcuts import redirect

def redirection(request):
    return redirect("item:clothe_list","all")
