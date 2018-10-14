const { execSync } = require('child_process');
const defaultPreferredColorScheme = 'light';
const preferredColorSchemeIntervalDelay = 1000;
let lastPreferredColorScheme = null, preferredColorSchemeInterval;

const watchColorScheme = module.exports = callback => {
	let preferredColorScheme = defaultPreferredColorScheme

	try {
		preferredColorScheme = execSync('defaults read -g AppleInterfaceStyle', { encoding: 'utf8', stdio: [null, null, null] }).trim().toLowerCase();
	} catch (error) {
		// do nothing and continue
	}

	if (preferredColorScheme !== lastPreferredColorScheme) {
		lastPreferredColorScheme = preferredColorScheme;

		callback(preferredColorScheme); // eslint-disable-line callback-return
	}

	preferredColorSchemeInterval = setTimeout(watchColorScheme, preferredColorSchemeIntervalDelay, callback);

	return stopWatchColorScheme;
};

const stopWatchColorScheme = () => {
	clearTimeout(preferredColorSchemeInterval);
};
