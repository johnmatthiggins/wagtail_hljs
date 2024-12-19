from django.templatetags.static import static
from django.utils.html import format_html_join

from wagtail import hooks

from .settings import get_theme, HLJS_VERSION, HLJS_PREFIX


@hooks.register("insert_global_admin_css")
def global_admin_css():
    THEME = get_theme()

    if THEME:
        hljs_theme = f"{THEME}"
    else:
        hljs_theme = ""

    extra_css = [
        f"https:{HLJS_PREFIX}/{HLJS_VERSION}/styles/{hljs_theme}.min.css",
        static("wagtail_hljs/css/wagtail-hljs-block.min.css"),
    ]

    return format_html_join(
        "\n",
        '<link rel="stylesheet" style="text/css" href="{}">',
        ((f,) for f in extra_css),
    )


@hooks.register("insert_global_admin_js")
def global_admin_js():
    js_files = [
        f"{HLJS_PREFIX}/{HLJS_VERSION}/highlight.min.js",
    ]

    js_includes = format_html_join(
        "\n",
        """<script type="text/javascript" src="{}"></script>""",
        ((f,) for f in js_files),
    )

    return js_includes
