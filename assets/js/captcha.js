document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const membershipForm = document.getElementById('membership-form');

    function handleForm(form, actionName) {
        if (!form) return;
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            grecaptcha.ready(function() {
                grecaptcha.execute(window.RECAPTCHA_SITE_KEY, {action: actionName}).then(function(token) {
                    let input = form.querySelector('input[name="g-recaptcha-response"]');
                    if (!input) {
                        input = document.createElement('input');
                        input.type = 'hidden';
                        input.name = 'g-recaptcha-response';
                        form.appendChild(input);
                    }
                    input.value = token;
                    form.submit();
                });
            });
        });
    }

    handleForm(contactForm, 'contact');
    handleForm(membershipForm, 'membership');
});
