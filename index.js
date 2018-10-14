const { execSync } = require('child_process');
const defaultColorScheme = 'no-preference';
const defaultDelay = 1000;
const lightColorSchemeErrorRegExp = /does not exist/;
let lastColorScheme, timeoutID;

const watch = module.exports = (callback, delay) => {
	let colorScheme = defaultColorScheme

	try {
		if (process.platform === 'darwin') {
			colorScheme = execSync('defaults read -g AppleInterfaceStyle', { encoding: 'utf8', stdio: [null, null, null] }).trim().toLowerCase();
		}
	} catch (error) {
		if (lightColorSchemeErrorRegExp.test(error.stderr)) {
			colorScheme = 'light'
		}
	}

	if (colorScheme !== lastColorScheme) {
		lastColorScheme = colorScheme;

		if (callback instanceof Function) {
			callback(colorScheme); // eslint-disable-line callback-return
		}
	}

	timeoutID = setTimeout(watch, delay || defaultDelay, callback);

	return stop;
};

const stop = () => {
	clearTimeout(timeoutID);
};
