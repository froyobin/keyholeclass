from classcomm.student_portal.models import *
from django import forms


class SubmissionForm(forms.ModelForm):
    """
    Form for submitting work/creating Submission
    
    """
    class Meta:
        # Base the form off the model Submission
        model = Submission
        # We will fill these in automatically
        exclude = ('enrollment','assignment','on_time')   
# End Def

DAYS= (('1', 'Monday'),
        ('2', 'Tuesday'),
        ('3', 'Wednesday'),
        ('4', 'Thursday'),
        ('5', 'Friday'),
        ('6', 'Saturday'),
        ('7', 'Sunday'),
                    )

class CourseAdminForm(forms.ModelForm):
    dayOfweek = forms.MultipleChoiceField(choices = DAYS,widget=forms.CheckboxSelectMultiple)
    class Meta:
        model = Course
    def clean_dayOfweek(self):
        dayOfweek = self.cleaned_data['dayOfweek']
        if not dayOfweek:
            raise forms.ValidationError("...")

        if len(dayOfweek) > 7:
            raise forms.ValidationError("...")
        dayOfweek = ''.join(dayOfweek)
        return dayOfweek
