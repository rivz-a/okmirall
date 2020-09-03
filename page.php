<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WP_Bootstrap_Starter
 */

get_header(); ?>
	
	

	<section id="primary" class="container">
		<main id="main" class="site-main" role="main">

			<?php
			get_template_part( 'template/content-page', 'none');
			?>

		</main><!-- #main -->
	</section><!-- #primary -->

	<?php
    get_template_part( 'template/unikalnost' );    
    ?>

	<?php
    get_template_part( 'template/otziv' );    
	?>
	
	<?php
    get_template_part( 'template/gallery' );    
	?>
	
	<?php
    get_template_part( 'template/newseller' );    
    ?>


<?php
get_footer();
