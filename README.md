# math-tex [![Dependency status](https://gemnasium.com/mathiasbynens/math-tex.svg)](https://gemnasium.com/mathiasbynens/math-tex)

_math-tex_ is a web component for [mathematical typesetting using TeX notation](https://en.wikibooks.org/wiki/LaTeX/Mathematics).

It is written for browsers that fully support the web components stack, and falls back to a `<code>` element that displays the TeX source code for the formula in older browsers.

The typesetting itself is handled by [the excellent KaTeX library](https://khan.github.io/KaTeX/).

[Check out the demo.](https://mathiasbynens.github.io/math-tex/dist/example.html)

## Installation

Via [npm](http://npmjs.org/):

```bash
npm install math-tex
```

Via [Bower](http://bower.io/):

```bash
bower install math-tex
```

## Usage

In your HTML document, import the web component in the `<head>`:

```html
<link rel="import" href="math-tex.html"></script>
```

In the `<body>` of that document you can now use `<code is=math-tex>`:

```html
<p>
  The equation for sample standard deviation is
  <code is="math-tex">
    s = \sqrt{\frac{1}{N-1} \sum_{i=1}^N (x_i - \overline{x})^2}
  </code>.
</p>
```

Creating such elements dynamically or updating their `innerHTML` / `textContent` properties programmatically also works the way you’d expect it to:

```html
<script>
  var element = document.createElement('code', 'math-tex');
  element.textContent = 'k_{n+1} = n^2 + k_n^2 - k_{n-1}';
  document.body.appendChild(element);
</script>
```

## Browser support

_math-tex_ is written for browsers that fully support the web components stack. In older browsers, it falls back to a `<code>` element that displays the TeX source code for the formula.

| ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
|---|---|---|---|---|
| Latest ✔ | Latest ✔ | Latest ✗ | Latest ✗ | Latest ✗ |

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_math-tex_ is available under the [MIT](https://mths.be/mit) license.
