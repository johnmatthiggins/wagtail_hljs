from django.template import Library
from django.utils.safestring import mark_safe

from ..settings import get_theme, HLJS_VERSION, HLJS_PREFIX

register = Library()


@register.simple_tag
def hljs_prefix():
    return HLJS_PREFIX


@register.simple_tag
def hljs_version():
    """Returns the version of Highlight.js."""

    return HLJS_VERSION


@register.simple_tag
def load_hljs_theme():
    """Loads the Highlight.js theme."""
    theme = get_theme()

    if theme:
        css_link = f"""<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/{HLJS_VERSION}/styles/{theme}.min.css">"""
    else:
        css_link = f"""<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/{HLJS_VERSION}/styles/default.min.css">"""

    return mark_safe(css_link)
