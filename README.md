# Watch OS Color Scheme [<img src="https://jonathantneal.github.io/node-logo.svg" alt="stylelint" width="90" height="90" align="right">][Watch OS Color Scheme]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[Watch OS Color Scheme] lets you watch your OS color scheme, similar to the
[Media Queries] `@media (prefers-color-scheme)` specification.

## Usage

Add [Watch OS Color Scheme] to your project:

```bash
npm install watch-os-color-scheme
```

Watch the OS for color scheme changes:

```js
const watchOsColorScheme = require('watch-os-color-scheme');

const stop = watchOsColorScheme(prefersColorScheme => {
  console.log({ prefersColorScheme }); // no-preference | light | dark
});

stop();
```

[Watch OS Color Scheme] takes 2 arguments; a `callback` and an `interval`; and
it returns a `stop` function.

### callback

The `callback` listener is called as the color scheme is initially detected and
then each time the color scheme subsequently changes. It returns a single
argument; a `colorScheme` string representing the preferred color scheme of the
OS, which is either `no-preference`, `light`, or `dark`.

### interval

The `interval` number indicates how often the color scheme should be polled in
milliseconds.

### stop

The `stop` function stops watching for color scheme changes.

[cli-img]: https://img.shields.io/travis/jonathantneal/watch-os-color-scheme.svg
[cli-url]: https://travis-ci.org/jonathantneal/watch-os-color-scheme
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/stylelint/stylelint
[npm-img]: https://img.shields.io/npm/v/watch-os-color-scheme.svg
[npm-url]: https://www.npmjs.com/package/watch-os-color-scheme

[Media Queries]: https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme
[Watch OS Color Scheme]: https://github.com/jonathantneal/watch-os-color-scheme
