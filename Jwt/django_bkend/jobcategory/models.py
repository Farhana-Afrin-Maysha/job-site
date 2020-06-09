from django.db import models


# Create your models here.
class Designation(models.Model):
    job = models.CharField(max_length=30)
    vacancy = models.IntegerField()

    def __str__(self):
        return self.job
