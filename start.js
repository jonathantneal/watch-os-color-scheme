const watchColorScheme = require('.');

watchColorScheme(prefersColorScheme => {
	console.log({ prefersColorScheme });
});

