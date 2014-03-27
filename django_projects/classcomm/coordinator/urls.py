"""
URLConf for student portal classcomm application.

If the default behavior of these views is acceptable to you, simply
use a line like this in your root URLconf to set up the default URLs
for registration::

    (r'^instructor/', include('coordinator.urls')),
"""

from django.conf.urls.defaults import *


# urlpatterns for classcomm.coordinator
urlpatterns = patterns('',
    # Introduction
    (r'^$', 'coordinator.views.index'),
    (r'^index.html$', 'coordinator.views.index'),
    (r'^welcome/$', 'coordinator.views.index'),
    (r'^calendar.html/$', 'coordinator.views.calendar'),
    # Announcements
    (r'^courseindex/(\d{1,5})/$',
        'coordinator.views.course_index'),
    (r'^courseindex/(\d{1,5})/announcement/add/$',
        'coordinator.views.course_announcement_add'),
    (r'^courseindex/(\d{1,5})/announcement/delete/(\d{1,5})/$',
        'coordinator.views.course_announcement_delete'),
    # Assignments
    (r'^courseindex/(\d{1,5})/assignments/$',
        'coordinator.views.course_assignments'),
    (r'^courseindex/(\d{1,5})/assignments/add/$',
        'coordinator.views.assignment_add'),
    # Information
    (r'^courseindex/(\d{1,5})/information/$',
        'coordinator.views.course_information'),    
    # Resources
    (r'^courseindex/(\d{1,5})/resources/$',
        'coordinator.views.course_resources'),
    # Checkscript
    (r'^checkscript/$', 'coordinator.views.checkscript'),
    (r'^checkscript/all/$', 'coordinator.views.checkscript_all'),
    (r'^checkscript/course/(\d{1,5})/$',
        'coordinator.views.checkscript_course'),
    # Roster Tools
    (r'^courseindex/(\d{1,5})/roster_tools/$',
        'coordinator.views.roster_tools'),
    (r'^courseindex/(\d{1,5})/roster_tools/grade_report/(\d{1,5})/$',
        'coordinator.views.grade_report'),
    (r'^roster_tools/(\d{1,5})/return/grade/(\d{1,5})/$',
        'coordinator.views.return_grade'),
    (r'^courseindex/(\d{1,5})/roster_tools/grade_report/(\d{1,5})/delete/grade/(\d{1,5})/$',
        'coordinator.views.delete_grade'),
    (r'^roster_tools/(\d{1,5})/grade_report/addDDO/(\d{1,5})/$',
        'coordinator.views.add_DDO'),
    (r'^courseindex/(\d{1,5})/roster_tools/(\d{1,5})/deleteDDO/(\d{1,5})/$',
        'coordinator.views.delete_DDO'),
)

