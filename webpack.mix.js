const mix = require('laravel-mix');

mix.js('client/main.js', 'public/js/')
    .setPublicPath('public');

mix.browserSync({
    proxy: 'localhost:5000',
    port: '3000'
});