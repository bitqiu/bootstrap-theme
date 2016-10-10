var elixir = require('laravel-elixir');

elixir.config.assetsPath = 'src';

elixir(function(mix) {

    mix.sass([
        'style.scss'
    ]);

});