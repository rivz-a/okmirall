<?php
/**
 * WP Bootstrap Starter functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WP_Okmirall
 */

/**
 * Add Welcome message to dashboard
 */

/**
 * Enqueue scripts and styles.
 */
function wp_okmirall_scripts() {
	// load bootstrap css
	wp_enqueue_style( 'wp-okmirall-css', get_template_directory_uri() . '/build/css/main.min.css' );
    // fontawesome cdn
	wp_enqueue_style( 'wp-okmirall-pro-fontawesome-cdn', 'https://use.fontawesome.com/releases/v5.1.0/css/all.css' );
	wp_enqueue_script('wp-okmirall-js1', 'https://use.fontawesome.com/releases/v5.1.0/js/all.js' );
	// load bootstrap css
	// load AItheme styles
	// load WP Bootstrap Starter styles 
    wp_enqueue_style( 'wp-okmirall-font', 'https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,600,800' );
  
	 
    // Internet Explorer HTML5 support
    wp_enqueue_script( 'html5hiv',get_template_directory_uri().'/inc/assets/js/html5.js', array(), '3.7.0', false );
	wp_script_add_data( 'html5hiv', 'conditional', 'lt IE 9' );   


	// load  js	
	wp_enqueue_script( 'navigation', get_template_directory_uri() . '/build/js/navigation.js', array('jquery') );	
	wp_enqueue_script('wp-okmirall-js', get_template_directory_uri() . '/build/js/main.min.js' );
	
}

add_action( 'wp_enqueue_scripts', 'wp_okmirall_scripts' );

 

register_nav_menus(array(
	'top'    => 'Верхнее меню',    //Название месторасположения меню в шаблоне
	'bottom' => 'Нижнее меню'      //Название другого месторасположения меню в шаблоне
));

function breadcrumbs($separator = ' » ', $home = 'Главная') {

	$path = array_filter(explode('/', parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)));
	$base_url = ($_SERVER['HTTPS'] ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . '/';
	$breadcrumbs = array("<a href=\"$base_url\">$home</a>");

	$last = end( array_keys($path) );
	$url = "https://okmirall.dev/";

	foreach( $path as $x => $crumb ){
		$title = ucwords(str_replace(array('.php', '_'), Array('', ' '), $crumb));
		
		$url = $url.$title."/";
		
		$post_ID = url_to_postid($url);
		
		$title = get_the_title($post_ID);

		if( $x != $last ){
			$breadcrumbs[] = '<a href="'.$base_url.$crumb.'">'.$title.'</a>';
		}
		else {
			$breadcrumbs[] = $title;
		}
	}

	return implode( $separator, $breadcrumbs );
}


  

// Добавление стандартной функции меню по умолчанию
function courage_default_menu() {
	echo '<ul id="mainnav-menu" class="menu">'. wp_list_pages('title_li=&echo=0') .'</ul>';
}
