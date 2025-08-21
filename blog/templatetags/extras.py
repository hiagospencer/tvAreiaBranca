# blog/templatetags/extras.py
from django import template
import datetime

register = template.Library()

@register.simple_tag
def ano_atual():
    """Retorna o ano atual"""
    return datetime.date.today().year
