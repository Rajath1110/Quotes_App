from django.db import models

# Create your models here.

class Quote(models.Model):
    text = models.TextField()
    author = models.CharField(max_length=100)
    likes = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.text} - {self.author}"