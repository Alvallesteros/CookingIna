# Generated by Django 5.0.2 on 2024-03-26 07:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0004_alter_userprofile_profile_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='profile_picture',
            field=models.ImageField(default='default_profile_picture.jpg', upload_to='profile_pictures/'),
        ),
    ]
