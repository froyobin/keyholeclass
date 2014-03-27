from classcomm.student_portal.models import *
from django import forms

class QueryForm(forms.Form):
    username = forms.CharField(widget=forms.Textarea)
#EndClass
