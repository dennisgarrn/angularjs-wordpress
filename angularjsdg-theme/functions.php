<?php
  show_admin_bar( false );

  function load_scripts() {

    wp_enqueue_style( 'bootstrap', get_stylesheet_directory_uri() . '/src/css/bootstrap.min.css' );

    wp_enqueue_style( 'clean_blog', get_stylesheet_directory_uri() . '/src/css/clean-blog.min.css' );

    wp_enqueue_script(
      'load_scripts',
      get_template_directory_uri() . '/bundle.js'
    );

    wp_localize_script(
      'load_scripts',
      'myLocalized',
      array(
        'partials' => trailingslashit( get_template_directory_uri() ) . 'partials/'
      )
  );
  }

  add_action('wp_enqueue_scripts', 'load_scripts' );

?>
