<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_Bootstrap_Starter
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">    
    

<?php wp_head(); ?>


<body>
<div id="page" class="site">    
	<header id="masthead" class="site-header" role="banner">
        <div class="container">
            <div class="row sm lb">
                  <div><img src="/wp-content/themes/okmirall/build/img/logo.png"></div> 
                  <div class="block">г. Стерлитамак <br>ул. Харьковская д. 8</div>
                  <div class="block">
                    <a href="tel:83473301305" class="a-black" title="Позвонить">8 (3473) 301-305</a><br>
                    <a href="" class="link popmake-598">Нужен обратный звонок?</a>
                  </div>
            </div>
            <div class="row lb">                          
                

                <div id="navi-wrap">
                    <nav id="mainnav" class="clearfix" role="navigation">
                        <?php
                            // Display Main Navigation
                            wp_nav_menu( array(
                                'theme_location' => 'top',
                                'container' => false,
                                'menu_id' => 'mainnav-menu',
                                'menu_class' => 'main-navigation-menu',
                                'echo' => true,
                                'fallback_cb' => 'courage_default_menu',
                            ) );
                        ?>
                    </nav>
                </div>

                
            </div>
        </div>
	</header><!-- #masthead --> 
   