from django import forms
from .models import Product



class RegisterForm(forms.ModelForm):
    name = forms.CharField(
        error_messages ={'required':"상품명을 입력하세요."},
        max_length= 32 , label = "상품명"
    ) 

    price = forms.IntegerField(
        error_messages={'required':"가격을 입력하세요"},
        label = "가격"
    )

    site =forms.CharField(
        error_messages={'required':"사이트를 입력하세요."},
        label = "사이트"
    )

    def clean(self):
        cleaned_data = super().clean()
        name = cleaned_data.get('name')
        price = cleaned_data.get('price')
        site = cleaned_data.get('site')
        
        if not (name and price and site):
            self.add_error('name', "값이 없습니다.")
            self.add_error('price',"값이 없습니다.")
            self.add_error('site',"값이 없습니다.")

