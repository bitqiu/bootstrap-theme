var elixir = require('laravel-elixir');

//elixir.config.sourcemaps = false;
elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'public/assets';

elixir(function(mix) {

    // less
    mix.less([
        'bootstrap.less',
        'style.less'
    ]);

    // scripts
    mix.scripts([
        'index.js'
    ],'public/assets/js/app.js');

    // fonts copy
    mix.copy([
        'bower_components/bootstrap/fonts',
        'bower_components/font-awesome/fonts'
    ],'public/assets/fonts');

    // lib copy
    mix.copy([
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/html5shiv/dist/html5shiv.min.js',
        'bower_components/respond/dest/respond.min.js'
    ],'public/assets/lib');

});