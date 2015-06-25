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
    print request.body
    dataDictionary = json.loads(request.body)
    id = dataDictionary['id']
    # id = 50
    category = Category.objects.get(id=id)
    quiz_objects = Quiz.objects.filter(category=category)
    que_ans_list = []
    direction_text_id_list = []
    [direction_text_id_list.append(i.directionText.id) for i in quiz_objects if i.directionText != None if i.directionText.id not in direction_text_id_list]
    print 'direction_text_id_list-->', direction_text_id_list
    if len(direction_text_id_list) != 0:
        for dir_text_id in direction_text_id_list:
            questions_obj = {'direction_text': Direction_Text.objects.get(id=dir_text_id).directionText}
            questions_obj_list = []
            for obj in quiz_objects.filter(directionText__id=dir_text_id):
                quiz_obj = {'question': obj.question, 'answer': obj.answer}
                options = obj.options.all()
                option_list = []
            for option in options:
                option_list.append(option.option)

            quiz_obj.update({'options': option_list})
            questions_obj_list.append(quiz_obj)
            questions_obj.update({'questions': questions_obj_list})
            que_ans_list.append(questions_obj)
    else:
        questions_obj = {'direction_text': None}
        questions_obj_list = []
        for obj in quiz_objects:
            quiz_obj = {'question': obj.question, 'answer': obj.answer}
            options = obj.options.all()
            option_list = []
            for option in options:
                option_list.append(option.option)

            quiz_obj.update({'options': option_list})
            questions_obj_list.append(quiz_obj)
            questions_obj.update({'questions': questions_obj_list})
            que_ans_list.append(questions_obj)

    return HttpResponse(json.dumps(que_ans_list), content_type="application/json")
