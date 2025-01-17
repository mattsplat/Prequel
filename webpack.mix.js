const mix      = require('laravel-mix');
const atImport = require('postcss-import');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setResourceRoot('packages/protoqol/prequel').
    postCss('resources/assets/css/app.css', 'public', [
      atImport(),
      require('tailwindcss'),
    ]).
    js('resources/assets/js/app.js', 'public').
    copy('public', '../../../public/vendor/prequel').
    browserSync('http://localhost').
    options({
      purifyCss: true,
    });
