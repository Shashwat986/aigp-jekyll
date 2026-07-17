(function () {
  var input = document.getElementById('site-search-input');
  var results = document.getElementById('site-search-results');
  var count = document.getElementById('site-search-count');
  if (!input || !results || !count) return;

  var index = [];

  function text(value) {
    return (value || '').toString().toLowerCase();
  }

  function render(items, query) {
    results.innerHTML = '';
    if (!query) {
      count.textContent = 'Start typing to search.';
      return;
    }

    count.textContent = items.length + (items.length === 1 ? ' result' : ' results');
    items.slice(0, 30).forEach(function (item) {
      var article = document.createElement('article');
      article.className = 'official-card official-card--flat';
      article.innerHTML = [
        '<div class="official-card__body">',
        '<span class="official-card__meta"></span>',
        '<h2 class="official-card__title"><a></a></h2>',
        '<p class="official-card__text"></p>',
        '</div>'
      ].join('');
      article.querySelector('.official-card__meta').textContent = [item.type, item.date].filter(Boolean).join(' · ');
      var link = article.querySelector('a');
      link.href = item.url;
      link.textContent = item.title;
      article.querySelector('.official-card__text').textContent = item.description || '';
      results.appendChild(article);
    });
  }

  function search(query) {
    var terms = text(query).split(/\s+/).filter(Boolean);
    if (!terms.length) return [];

    return index
      .map(function (item) {
        var haystack = text([item.title, item.description, item.type, item.tags].join(' '));
        var score = terms.reduce(function (total, term) {
          if (text(item.title).indexOf(term) !== -1) total += 4;
          if (haystack.indexOf(term) !== -1) total += 1;
          return total;
        }, 0);
        return { item: item, score: score };
      })
      .filter(function (entry) { return entry.score > 0; })
      .sort(function (a, b) { return b.score - a.score; })
      .map(function (entry) { return entry.item; });
  }

  fetch('/search-index.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
      index = data;
      input.disabled = false;
    })
    .catch(function () {
      count.textContent = 'Search index could not be loaded.';
      input.disabled = true;
    });

  input.addEventListener('input', function () {
    var query = input.value.trim();
    render(search(query), query);
  });
}());
