from django.shortcuts import render
from models import Quiz, Category, Option, Category_Mapping, Direction_Text
from django.shortcuts import HttpResponse, HttpResponseRedirect, render_to_response
import json


# Create your views here.

def send_categories(request):
    models_data = Category.objects.filter()
    list_data = []
    for i in models_data:
        category = {'name':i.name}
        try:
            category.update({'parent':i.child.values()[0]['parent_id']})
        except:
            category.update({'parent':None})
        childList = []
        [childList.append(x['child_id']) for x in i.parent.values()]
        if childList != []:
            category.update({'child':childList})
        else:
            category.update({'child':None})
        category.update({'id':i.id})
        list_data.append(category)

    return HttpResponse(json.dumps(list_data), content_type="application/json")

def send_question_on_category(request):
	# dataDictionary = json.loads(request.body)
	# id = dataDictionary['id']
	id = 2
	category = Category.objects.get(id=id)
	quiz_objects = Quiz.objects.filter(category=category)
	que_ans_list = []
	for obj in quiz_objects:
		quiz_obj = {'question': obj.question, 'answer': obj.answer, 'direction_text': obj.directionText}
		options = obj.options.all()
		option_list = []
		for option in options:
			option_list.append(option.option)

		quiz_obj.update({'options': option_list})
		que_ans_list.append(quiz_obj)

	return HttpResponse(json.dumps(que_ans_list), content_type="application/json")
