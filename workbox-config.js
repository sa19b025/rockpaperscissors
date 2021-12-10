module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{html,webmanifest,css}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};