# Wagtail Highlight.js

Wagtail Highlight.js is a syntax highlighter block for source code for the Wagtail CMS.
It features real-time highlighting in the Wagtail editor, the front end, and support for
[Highlight.js themes](https://highlightjs.org/demo).

It uses the [Highlight.js](https://highlightjs.org/) library both in Wagtail Admin and the website.

## Example Usage

First, add `wagtail_hljs` to your `INSTALLED_APPS` in Django's settings. Here's a bare bones example:

```python
from wagtail.blocks import TextBlock
from wagtail.fields import StreamField
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel

from wagtail_hljs.blocks import CodeBlock


class HomePage(Page):
    body = StreamField([
        ("heading", TextBlock()),
        ("code", CodeBlock(label='Code')),
    ])

    content_panels = Page.content_panels + [
        FieldPanel("body"),
    ]
```

You can also force it to use a single language or set a default language by providing a language code which must be included in your `WAGTAIL_HLJS_LANGUAGES` setting:

```python
bash_code = CodeBlock(label='Bash Code', language='bash')
any_code = CodeBlock(label='Any code', default_language='python')
```

## Screenshot of the CMS Editor Interface

![Admin in Action](https://raw.githubusercontent.com/johnmatthiggins/wagtail_hljs/main/docs/img/screenshot.png)

## Installation & Setup

To install Wagtail Highlight.js run:

```bash
# Wagtail 4.0 and greater
pip install wagtail-hljs
```

And add `wagtail_hljs` to your `INSTALLED_APPS` setting:

```python
INSTALLED_APPS = [
    ...
    'wagtail_hljs',
    ...
]
```

## Django Settings

### Themes

Wagtail Highlight.js supports all themes that Highlight.js supports. Here are a few of them:

* **None**: <a href="https://highlightjs.org/demo#lang=&v=1&theme=base16-darcula&code=ZGVmIG1haW4oKToKCXByaW50KCdoZWxsbyB3b3JsZCcpCgppZiBfX25hbWVfXyA9PSAnX1%2FEMV9fJzoKCcY7" target="_blank">Default</a>
* **'atom-one-dark'**: <a href="https://highlightjs.org/demo#lang=&v=1&theme=atom-one-dark&code=ZGVmIG1haW4oKToKCXByaW50KCdoZWxsbyB3b3JsZCcpCgppZiBfX25hbWVfXyA9PSAnX1%2FEMV9fJzoKCcY7" target="_blank">Atom One Dark</a>
* **'base16/darcula'**: <a href="https://highlightjs.org/demo#lang=&v=1&theme=base16-darcula&code=ZGVmIG1haW4oKToKCXByaW50KCdoZWxsbyB3b3JsZCcpCgppZiBfX25hbWVfXyA9PSAnX1%2FEMV9fJzoKCcY7" target="_blank">Base 16 Darcula</a>
* **'nord'**: <a href="https://highlightjs.org/demo#lang=&v=1&theme=nord&code=ZGVmIG1haW4oKToKCXByaW50KCdoZWxsbyB3b3JsZCcpCgppZiBfX25hbWVfXyA9PSAnX1%2FEMV9fJzoKCcY7" target="_blank">Nord</a>
* **'srcery'**: <a href="https://highlightjs.org/demo#lang=&v=1&theme=srcery&code=ZGVmIG1haW4oKToKCXByaW50KCdoZWxsbyB3b3JsZCcpCgppZiBfX25hbWVfXyA9PSAnX1%2FEMV9fJzoKCcY7" target="_blank">Srcery</a>
* **'xt256'**: <a href="https://highlightjs.org/demo#lang=&v=1&theme=xt256&code=ZGVmIG1haW4oKToKCXByaW50KCdoZWxsbyB3b3JsZCcpCgppZiBfX25hbWVfXyA9PSAnX1%2FEMV9fJzoKCcY7" target="_blank">XT256</a>
* **'night-owl'**: <a href="https://highlightjs.org/demo#lang=&v=1&theme=night-owl&code=ZGVmIG1haW4oKToKCXByaW50KCdoZWxsbyB3b3JsZCcpCgppZiBfX25hbWVfXyA9PSAnX1%2FEMV9fJzoKCcY7" target="_blank">Night Owl</a>

For example, if you want to use the Night Owl theme: `WAGTAIL_HLJS_THEME = 'night-owl'`.
However, if you want the default theme then do this: `WAGTAIL_HLJS_THEME=None`.

### Languages Available

You can customize the languages available by configuring `WAGTAIL_HLJS_LANGUAGES` in your Django settings.
By default, it will be set with these languages, since most users are in the Python web development community:

```python
WAGTAIL_HLJS_LANGUAGES = (
    ('bash', 'Bash/Shell'),
    ('css', 'CSS'),
    ('diff', 'diff'),
    ('html', 'HTML'),
    ('javascript', 'Javascript'),
    ('json', 'JSON'),
    ('python', 'Python'),
    ('scss', 'SCSS'),
    ('yaml', 'YAML'),
)
```

Each language in this setting is a tuple of the Highlight.js code and a descriptive label.
If you want use all available languages, here is a list:

```python
WAGTAIL_CODE_BLOCK_LANGUAGES = (
    ('abap', 'ABAP'),
    ('abnf', 'Augmented Backus–Naur form'),
    ('actionscript', 'ActionScript'),
    ('ada', 'Ada'),
    ('antlr4', 'ANTLR4'),
    ('apacheconf', 'Apache Configuration'),
    ('apl', 'APL'),
    ('applescript', 'AppleScript'),
    ('aql', 'AQL'),
    ('arduino', 'Arduino'),
    ('arff', 'ARFF'),
    ('asciidoc', 'AsciiDoc'),
    ('asm6502', '6502 Assembly'),
    ('aspnet', 'ASP.NET (C#)'),
    ('autohotkey', 'AutoHotkey'),
    ('autoit', 'AutoIt'),
    ('bash', 'Bash + Shell'),
    ('basic', 'BASIC'),
    ('batch', 'Batch'),
    ('bison', 'Bison'),
    ('bnf', 'Backus–Naur form + Routing Backus–Naur form'),
    ('brainfuck', 'Brainfuck'),
    ('bro', 'Bro'),
    ('c', 'C'),
    ('clike', 'C-like'),
    ('cmake', 'CMake'),
    ('csharp', 'C#'),
    ('cpp', 'C++'),
    ('cil', 'CIL'),
    ('coffeescript', 'CoffeeScript'),
    ('clojure', 'Clojure'),
    ('crystal', 'Crystal'),
    ('csp', 'Content-Security-Policy'),
    ('css', 'CSS'),
    ('css-extras', 'CSS Extras'),
    ('d', 'D'),
    ('dart', 'Dart'),
    ('diff', 'Diff'),
    ('django', 'Django/Jinja2'),
    ('dns-zone-file', 'DNS Zone File'),
    ('docker', 'Docker'),
    ('ebnf', 'Extended Backus–Naur form'),
    ('eiffel', 'Eiffel'),
    ('ejs', 'EJS'),
    ('elixir', 'Elixir'),
    ('elm', 'Elm'),
    ('erb', 'ERB'),
    ('erlang', 'Erlang'),
    ('etlua', 'Embedded LUA Templating'),
    ('fsharp', 'F#'),
    ('flow', 'Flow'),
    ('fortran', 'Fortran'),
    ('ftl', 'Freemarker Template Language'),
    ('gcode', 'G-code'),
    ('gdscript', 'GDScript'),
    ('gedcom', 'GEDCOM'),
    ('gherkin', 'Gherkin'),
    ('git', 'Git'),
    ('glsl', 'GLSL'),
    ('gml', 'GameMaker Language'),
    ('go', 'Go'),
    ('graphql', 'GraphQL'),
    ('groovy', 'Groovy'),
    ('haml', 'Haml'),
    ('handlebars', 'Handlebars'),
    ('haskell', 'Haskell'),
    ('haxe', 'Haxe'),
    ('hcl', 'HCL'),
    ('http', 'HTTP'),
    ('hpkp', 'HTTP Public-Key-Pins'),
    ('hsts', 'HTTP Strict-Transport-Security'),
    ('ichigojam', 'IchigoJam'),
    ('icon', 'Icon'),
    ('inform7', 'Inform 7'),
    ('ini', 'Ini'),
    ('io', 'Io'),
    ('j', 'J'),
    ('java', 'Java'),
    ('javadoc', 'JavaDoc'),
    ('javadoclike', 'JavaDoc-like'),
    ('javascript', 'JavaScript'),
    ('javastacktrace', 'Java stack trace'),
    ('jolie', 'Jolie'),
    ('jq', 'JQ'),
    ('jsdoc', 'JSDoc'),
    ('js-extras', 'JS Extras'),
    ('js-templates', 'JS Templates'),
    ('json', 'JSON'),
    ('jsonp', 'JSONP'),
    ('json5', 'JSON5'),
    ('julia', 'Julia'),
    ('keyman', 'Keyman'),
    ('kotlin', 'Kotlin'),
    ('latex', 'LaTeX'),
    ('less', 'Less'),
    ('lilypond', 'Lilypond'),
    ('liquid', 'Liquid'),
    ('lisp', 'Lisp'),
    ('livescript', 'LiveScript'),
    ('lolcode', 'LOLCODE'),
    ('lua', 'Lua'),
    ('makefile', 'Makefile'),
    ('markdown', 'Markdown'),
    ('markup', 'Markup + HTML + XML + SVG + MathML'),
    ('markup-templating', 'Markup templating'),
    ('matlab', 'MATLAB'),
    ('mel', 'MEL'),
    ('mizar', 'Mizar'),
    ('monkey', 'Monkey'),
    ('n1ql', 'N1QL'),
    ('n4js', 'N4JS'),
    ('nand2tetris-hdl', 'Nand To Tetris HDL'),
    ('nasm', 'NASM'),
    ('nginx', 'nginx'),
    ('nim', 'Nim'),
    ('nix', 'Nix'),
    ('nsis', 'NSIS'),
    ('objectivec', 'Objective-C'),
    ('ocaml', 'OCaml'),
    ('opencl', 'OpenCL'),
    ('oz', 'Oz'),
    ('parigp', 'PARI/GP'),
    ('parser', 'Parser'),
    ('pascal', 'Pascal + Object Pascal'),
    ('pascaligo', 'Pascaligo'),
    ('pcaxis', 'PC Axis'),
    ('perl', 'Perl'),
    ('php', 'PHP'),
    ('phpdoc', 'PHPDoc'),
    ('php-extras', 'PHP Extras'),
    ('plsql', 'PL/SQL'),
    ('powershell', 'PowerShell'),
    ('processing', 'Processing'),
    ('prolog', 'Prolog'),
    ('properties', '.properties'),
    ('protobuf', 'Protocol Buffers'),
    ('pug', 'Pug'),
    ('puppet', 'Puppet'),
    ('pure', 'Pure'),
    ('python', 'Python'),
    ('q', 'Q (kdb+ database)'),
    ('qore', 'Qore'),
    ('r', 'R'),
    ('jsx', 'React JSX'),
    ('tsx', 'React TSX'),
    ('renpy', 'Ren\'py'),
    ('reason', 'Reason'),
    ('regex', 'Regex'),
    ('rest', 'reST (reStructuredText)'),
    ('rip', 'Rip'),
    ('roboconf', 'Roboconf'),
    ('robot-framework', 'Robot Framework'),
    ('ruby', 'Ruby'),
    ('rust', 'Rust'),
    ('sas', 'SAS'),
    ('sass', 'Sass (Sass)'),
    ('scss', 'Sass (Scss)'),
    ('scala', 'Scala'),
    ('scheme', 'Scheme'),
    ('shell-session', 'Shell Session'),
    ('smalltalk', 'Smalltalk'),
    ('smarty', 'Smarty'),
    ('solidity', 'Solidity (Ethereum)'),
    ('sparql', 'SPARQL'),
    ('splunk-spl', 'Splunk SPL'),
    ('sqf', 'SQF: Status Quo Function (Arma 3)'),
    ('sql', 'SQL'),
    ('soy', 'Soy (Closure Template)'),
    ('stylus', 'Stylus'),
    ('swift', 'Swift'),
    ('tap', 'TAP'),
    ('tcl', 'Tcl'),
    ('textile', 'Textile'),
    ('toml', 'TOML'),
    ('tt2', 'Template Toolkit 2'),
    ('twig', 'Twig'),
    ('typescript', 'TypeScript'),
    ('t4-cs', 'T4 Text Templates (C#)'),
    ('t4-vb', 'T4 Text Templates (VB)'),
    ('t4-templating', 'T4 templating'),
    ('vala', 'Vala'),
    ('vbnet', 'VB.Net'),
    ('velocity', 'Velocity'),
    ('verilog', 'Verilog'),
    ('vhdl', 'VHDL'),
    ('vim', 'vim'),
    ('visual-basic', 'Visual Basic'),
    ('wasm', 'WebAssembly'),
    ('wiki', 'Wiki markup'),
    ('xeora', 'Xeora + XeoraCube'),
    ('xojo', 'Xojo (REALbasic)'),
    ('xquery', 'XQuery'),
    ('yaml', 'YAML'),
    ('zig', 'Zig'),
)
```

# Running the Test Suite

Clone the repository, create a `venv`, `pip install -e .[dev]` and run `pytest`.

# Release Notes & Contributors

* This is fork of [wagtailcodeblock](https://github.com/FlipperPA/wagtailcodeblock/).

# Project Maintainers

* John Higgins (https://github.com/johnmatthiggins)
