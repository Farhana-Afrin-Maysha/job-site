# Generated by Django 3.0.4 on 2020-05-14 07:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobcategory', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Designation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('job', models.CharField(max_length=30)),
                ('vacancy', models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='Pupil',
        ),
    ]
