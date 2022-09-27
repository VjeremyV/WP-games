<?php

/**
    Plugin Name: Pong Game
    Description: Mini-jeu à intégrer dans vos pages web
    Author: Vaugoyeau Jérémy
    Author URI: https://github.com/VjeremyV

 */

define('GAME_PLUD_DIR', plugin_dir_url(__FILE__));
require_once plugin_dir_path(__FILE__) . 'functions/game-functions.php';

add_action( 'enqueue_block_editor_assets', 'game_addAssetsEditor'); //
add_action('wp_enqueue_scripts', 'game_addFront');
