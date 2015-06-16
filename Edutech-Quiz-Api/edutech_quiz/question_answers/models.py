from django.db import models

# Create your models here.
class Category(models.Model):
	name = models.TextField()
	def __unicode__(self):
		return "category Name: " + self.name

class Category_Mapping(models.Model):
	parent = models.ForeignKey(Category, related_name='parent')
	child = models.ForeignKey(Category, related_name='child')
	def __unicode__(self):
		return "parent-> "+ self.parent.name +' Child-> '+self.child.name

class Option(models.Model):
	option = models.TextField()
	def __unicode__(self):
		return "option: " + self.option

class Direction_Text(models.Model):
	directionText = models.TextField()
	def __unicode__(self):
		return "Direction Text: " + self.directionText[:50]+'....'

class Quiz(models.Model):
	category = models.ManyToManyField('Category')
	question = models.TextField()
	answer = models.IntegerField()
	options = models.ManyToManyField('Option')
	explanation = models.TextField(blank=True, null=True)
	directionText = models.ForeignKey('Direction_Text', null=True, blank=True)
	def __unicode__(self):
		return "question: " + self.question
