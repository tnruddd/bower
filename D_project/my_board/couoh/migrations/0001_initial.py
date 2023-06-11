# Generated by Django 4.1 on 2023-01-09 08:10

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Couoh",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                (
                    "title",
                    models.CharField(
                        max_length=255,
                        validators=[
                            django.core.validators.MinLengthValidator(
                                2, "최소 세 글자 이상이어야 합니다."
                            )
                        ],
                        verbose_name="제목",
                    ),
                ),
                (
                    "content",
                    models.TextField(
                        validators=[
                            django.core.validators.MinLengthValidator(10, "최소 10글자")
                        ],
                        verbose_name="내용",
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                ("deleted_at", models.DateTimeField(null=True)),
            ],
        ),
    ]