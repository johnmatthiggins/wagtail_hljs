class CodeBlockDefinition extends window.wagtailStreamField.blocks
    .StructBlockDefinition {
    render(placeholder, prefix, initialState, initialError) {
        const block = super.render(
            placeholder,
            prefix,
            initialState,
            initialError,
        );

        function buildCDNLink(language) {
            // const version = "11.9.0";
            return `//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/${language}.min.js`;
        }

        let languageField = $(document).find('#' + prefix + '-language');
        let codeField = $(document).find('#' + prefix + '-code');
        let targetField = $(document).find('#' + prefix + '-target');

        function updateLanguage() {
            let languageCode = languageField.val();
            targetField.removeClass().addClass('language-' + languageCode);
            hljsRepaint(languageCode);
        }

        function hljsRepaint(languageCode) {
            // if it already exists don't try to add it...
            if (!document.head.querySelector(`script[src$="${languageCode}.min.js"]`)) {
                const scriptElement = document.createElement('script');
                scriptElement.setAttribute('src', buildCDNLink(languageCode));
                scriptElement.addEventListener('load', () => {
                    document
                        .querySelectorAll('code[data-highlighted="yes"]')
                        .forEach((element) => {
                            element.removeAttribute('data-highlighted');
                        });
                    hljs.highlightAll();
                });
                document.head.appendChild(scriptElement);
            } else {
                document
                    .querySelectorAll('code[data-highlighted="yes"]')
                    .forEach((element) => {
                        element.removeAttribute('data-highlighted');
                    });
                hljs.highlightAll();
            }
        }

        function populateTargetCode() {
            let codeText = codeField.val();
            let languageCode = languageField.val();
            targetField.text(codeText);
            hljsRepaint(languageCode);
        }

        updateLanguage();
        populateTargetCode();

        languageField.on('change', updateLanguage);
        codeField.on('keyup', populateTargetCode);

        return block;
    }
}

window.telepath.register('wagtail_hljs.blocks.CodeBlock', CodeBlockDefinition);
