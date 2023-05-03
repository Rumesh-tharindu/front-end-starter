let mix = require('laravel-mix');

mix.js('./client/src/js/app.js', './dist/js/app.min.js')

	.copy('./client/src/img', './dist/img')
	.sass('./client/src/scss/app.scss', './dist/css/app.css')

	// Options
	.sourceMaps()
	.options({
		processCssUrls: false,
		postCss: [
			require('autoprefixer'), // auto prefix
			require('postcss-pxtorem')({
				// convert all pixel values to rem
				rootValue: 16,
				propList: ['*'],
			}),
		],
		clearConsole: true,
		publicPath: '',
	});
