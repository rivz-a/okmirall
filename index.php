<?php
/**
  *
 * @package WP_OKMIRALL
 */

get_header(); ?>
 
	<section id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php
			the_content();

			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'wp-bootstrap-starter' ),
				'after'  => '</div>',
			) );
		?> 

		</main><!-- #main -->
	</section><!-- #primary -->
	

<?php
get_sidebar();
get_footer();
