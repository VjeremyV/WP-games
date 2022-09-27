<?php

/**
 * ajoute le js et le css à la liste d'attente de l'editeur d'article/page 
 *
 * @return void
 */
function game_addAssetsEditor(){
    wp_enqueue_script('game-block-editor-js', trailingslashit(GAME_PLUD_DIR).'assets/js/game-block-editor.js',
    array('wp-blocks', 'wp-i18n', 'wp-editor'), true);
    wp_enqueue_style('game-block-editor-css', trailingslashit(GAME_PLUD_DIR).'assets/css/game-block-editor.css' , false, '1.0', 'all');
}

/**
 * ajoute le js et le css à la liste d'attente de la partie front
 *
 * @return void
 */
function game_addFront(){
    wp_enqueue_style('game-front-css', trailingslashit(GAME_PLUD_DIR).'assets/css/game-front-style.css' , false, '1.0', 'all');
    wp_enqueue_script('', trailingslashit(GAME_PLUD_DIR).'assets/js/game-front-js.js',
    []
    , true);
}