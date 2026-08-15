$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });

    function copyText(text) {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text);
        }

        return new Promise(function(resolve, reject) {
            var textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy') ? resolve() : reject(new Error('Copy failed'));
            } catch (error) {
                reject(error);
            }
            document.body.removeChild(textarea);
        });
    }

    $(document).on('click', '.copy-publication', function() {
        var button = this;
        var label = button.dataset.copyLabel;
        copyText(button.dataset.copy).then(function() {
            button.textContent = 'Copied';
            button.classList.add('copied');
            window.setTimeout(function() {
                button.textContent = label;
                button.classList.remove('copied');
            }, 1400);
        }).catch(function() {
            button.textContent = 'Try again';
            window.setTimeout(function() {
                button.textContent = label;
            }, 1400);
        });
    });

    $('a').removeClass('waves-effect waves-light');
});
