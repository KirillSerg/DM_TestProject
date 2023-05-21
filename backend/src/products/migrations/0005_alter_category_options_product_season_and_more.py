# Generated by Django 4.2.1 on 2023-05-20 14:08

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("products", "0004_alter_category_slug_alter_photo_image_and_more"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="category",
            options={"verbose_name_plural": "Categories"},
        ),
        migrations.AddField(
            model_name="product",
            name="season",
            field=models.CharField(
                choices=[("Осінь/Зима", "Осінь/Зима"), ("Весна/Літо", "Весна/Літо")],
                default="Весна/Літо",
                max_length=15,
            ),
        ),
        migrations.AddField(
            model_name="product",
            name="sex_and_age",
            field=models.CharField(
                choices=[
                    ("Чоловіки", "Чоловіки"),
                    ("Жінки", "Жінки"),
                    ("Хлопчики", "Хлопчики"),
                    ("Дівчатка", "Дівчатка"),
                ],
                default="Жінки",
                max_length=15,
            ),
        ),
        migrations.AddField(
            model_name="size",
            name="color",
            field=models.CharField(default="Білий", max_length=25),
        ),
    ]
