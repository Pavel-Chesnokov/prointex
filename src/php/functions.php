<?php

add_action( 'wp_enqueue_scripts', 'theme_name_scripts' );

function theme_name_scripts() {
	wp_enqueue_style( 'style-name', get_template_directory_uri() . '/style.css');
	// wp_enqueue_style( 'style-name', get_stylesheet_uri() );
	wp_deregister_script( 'jquery' );
	wp_register_script( 'jquery', '//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', false, null, true );
	wp_enqueue_script( 'jquery' );
	wp_enqueue_script( 'TweenMax-name', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js', array(), 'null', true );
	wp_enqueue_script( 'TimelineMax-name', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js', array(), 'null', true );
	wp_enqueue_script( 'vendor-name', get_template_directory_uri() . '/js/vendor.js', array(), 'null', true );
	wp_enqueue_script( 'main-name', get_template_directory_uri() . '/js/main.js', array(), 'null', true );
	wp_enqueue_script( 'map-name', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAzepC77rzIAjEVqeiCpjm__5fP0MeF6-4&callback=initMap', array(), 'null', true );


}



