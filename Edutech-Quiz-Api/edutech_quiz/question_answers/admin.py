from django.contrib import admin
from models import Quiz, Category, Option, Category_Mapping, Direction_Text

# Register your models here.
admin.site.register(Quiz)
admin.site.register(Category)
admin.site.register(Option)
admin.site.register(Category_Mapping)
admin.site.register(Direction_Text)
