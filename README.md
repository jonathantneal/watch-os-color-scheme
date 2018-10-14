# Watch OS Color Scheme [<img src="https://jonathantneal.github.io/node-logo.svg" alt="stylelint" width="90" height="90" align="right">][Watch OS Color Scheme]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[Watch OS Color Scheme] lets you watch your OS color scheme, following the
[Media Queries] specification.

## Usage

Add [Watch OS Color Scheme] to your project:

```bash
npm install watch-os-color-scheme
```

Watch the OS for color scheme changes:

```js
const watchColorScheme = require('watch-os-color-scheme');

const stop = watchColorScheme(prefersColorScheme => {
  console.log({ prefersColorScheme });
});

stop();
```

[cli-img]: https://img.shields.io/travis/jonathantneal/watch-os-color-scheme.svg
[cli-url]: https://travis-ci.org/jonathantneal/watch-os-color-scheme
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/stylelint/stylelint
[npm-img]: https://img.shields.io/npm/v/watch-os-color-scheme.svg
[npm-url]: https://www.npmjs.com/package/watch-os-color-scheme

[Media Queries]: https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme
[Watch OS Color Scheme]: https://github.com/jonathantneal/watch-os-color-scheme
