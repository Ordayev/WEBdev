# Generated by Django 3.0.4 on 2020-04-02 06:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='vacancy',
            old_name='company_id',
            new_name='company',
        ),
    ]
