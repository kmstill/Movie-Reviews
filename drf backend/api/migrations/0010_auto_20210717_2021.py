# Generated by Django 3.1.5 on 2021-07-18 01:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20210717_2021'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='total_rating_points',
            field=models.IntegerField(default=5),
        ),
    ]
