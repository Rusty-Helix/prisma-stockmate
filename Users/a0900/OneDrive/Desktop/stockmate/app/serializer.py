# rendered into JSON
from rest_framework import serilizers
from .models import *

class ReactSerilizer(serializer.ModelSerializer):
    class Meta:
        model = React
        fields = ['employee', 'department']
        