# Generated by Django 3.1.5 on 2021-07-18 01:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_auto_20210716_0435'),
    ]

    operations = [
        migrations.RenameField(
            model_name='movie',
            old_name='average_rating',
            new_name='total_rating_points',
        ),
    ]