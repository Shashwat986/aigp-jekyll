var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

document.querySelectorAll('.main-menu__toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(event) {
        event.preventDefault();
        var item = toggle.closest('.main-menu__item');
        var isOpen = item.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
});

document.addEventListener('click', function(event) {
    document.querySelectorAll('.main-menu__item.is-open').forEach(function(item) {
        if (!item.contains(event.target)) {
            item.classList.remove('is-open');
            var toggle = item.querySelector('.main-menu__toggle');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
    });
});

document.addEventListener('submit', function(event) {
    var form = event.target;
    if (!form || !form.querySelectorAll) return;

    var honeypotFields = form.querySelectorAll('[data-honeypot-field]');
    if (!honeypotFields.length) return;

    var isBotSubmission = Array.prototype.some.call(honeypotFields, function(field) {
        return field.value && field.value.trim().length > 0;
    });

    if (isBotSubmission) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }
}, true);

document.querySelectorAll('[data-event-filters]').forEach(function(filters) {
    var typeFilter = filters.querySelector('[data-event-type-filter]');
    var formatFilter = filters.querySelector('[data-event-format-filter]');
    var emptyMessage = filters.querySelector('[data-event-filter-empty]');
    var cards = Array.prototype.slice.call(document.querySelectorAll('[data-event-card]'));
    var sections = Array.prototype.slice.call(document.querySelectorAll('[data-event-section]'));

    filters.addEventListener('submit', function(event) {
        event.preventDefault();
    });

    function normalise(value) {
        return (value || '').trim().toLowerCase();
    }

    function applyFilters() {
        var selectedType = normalise(typeFilter.value);
        var selectedFormat = normalise(formatFilter.value);
        var visibleCards = 0;

        cards.forEach(function(card) {
            var typeMatches = !selectedType || normalise(card.dataset.eventType) === selectedType;
            var formatMatches = !selectedFormat || normalise(card.dataset.eventFormat) === selectedFormat;
            var matches = typeMatches && formatMatches;
            card.hidden = !matches;
            if (matches) visibleCards += 1;
        });

        sections.forEach(function(section) {
            section.hidden = !section.querySelector('[data-event-card]:not([hidden])');
        });

        emptyMessage.hidden = visibleCards > 0;
    }

    typeFilter.addEventListener('change', applyFilters);
    formatFilter.addEventListener('change', applyFilters);
});
