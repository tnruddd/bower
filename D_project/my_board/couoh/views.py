from django.http import Http404
from django.shortcuts import render, redirect, get_object_or_404
from django.shortcuts import render, redirect

from datetime import datetime

from django.urls import reverse

# from .models import Coucou, Ohoh
# 모델 file 에 있는 보드 클래스를 참조하겠따

def index(request):
    return render(request,'couoh/product_register.html')



from .models import Product
from .form import RegisterForm
from django.views.generic.edit import FormView

class ProductRegister(FormView):
    template_name = 'product_register.html'
    form_class = RegisterForm
    success_url = '/'

    def form_valid(self, form):
        product = Product(
            name = form.data.get('name'),
            price = form.data.get('price'),
            site = form.data.get('site'),
        )
        product.save()
        return super().form_valid(form)
    
#
# def search(request):
#     keyword = request.GET['search_value']
#
# def create(request):
#     new_info = Info() #데이터 저장을 위한 객체 생성
#     new_info.product = request.POST['product']
#     new_info.customer_ID = request.POST['customer_ID']
#     new_info.review_content = request.POST['review_content']
#     new_info.star_score = request.POST['star_score']
#     new_info.help_count = request.POST['help_count']
#     # new_info.pub_date = timezone.now()
#     new_info.save() # 객체 저장
#     return redirect('detail', new_info.id)
#
#
# # 폼 생성
# def new(request):
#     form = BlogForm()
#     return render(request, 'new.html', {'form' : form})
#
# def create(request):
#     form = BlogForm(request.POST, request.FILES)
#     if form.is_valid():
#         new_blog = form.save(commit=False)
#         new_blog.pub_date = timezone.now()
#         new_blog.save()
#         return redirect('detail' , new_blog.id)
#     return redirect('home')
#
# #Read
#
# def blogList(request):
#
#     blogs = Blog.objects.all() # 1) 모든 객체
#     blogs = Blog.objects.filter(writer='CJY') # 2) writer='CJY'를 만족하는 모든 객체
#
#     return render(request, 'blogList.html', {'blogs': blogs})
#
# #객체 조건에 부합하는 필드가져오기
# def detail(request, blog_id):
#
#     details = Blog.objects.get(pk=blog_id) # 1) pk=blog_id를 만족하는 객체 하나
#     details = get_object_or_404(Blog, pk=blog_id) # 2) 잘못된 접근에 대한 예외처리
#
#     return render(request, 'detail.html', {'details': details})
#
#
# # update 데이터 수정
# def update(request, id):
#     update_blog = Blog.objects.get(id=id) # 기존 데이터 로드
#     update_blog.title = request.POST['title']
#     update_blog.writer = request.POST['writer']
#     update_blog.body = request.POST['body']
#     update_blog.pub_date = timezone.now()
#     update_blog.save() # 새로 저장
#     return redirect('detail' , update_blog.id)
#
# #Delete
#
# def delete(request, id):
#     delete_blog = Blog.objects.get(id = id)
#     delete_blog.delete()
#     return redirect('blogList')