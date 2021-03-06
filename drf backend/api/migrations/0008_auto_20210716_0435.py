# Generated by Django 3.1.5 on 2021-07-16 09:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_review_rating'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='average_rating',
            field=models.FloatField(default=5),
        ),
        migrations.AddField(
            model_name='movie',
            name='total_reviews',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='review',
            name='downvotes',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='review',
            name='upvotes',
            field=models.IntegerField(default=0),
        ),
    ]
