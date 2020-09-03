

<?php
/*
Template Name: Шаблон для страницы контактов
*/


get_header(); ?>

    

    <section id="primary" class="container">
		<main id="main" class="site-main" role="main">

			<?php
			get_template_part( 'template/content-page', 'none');
			?>

		</main><!-- #main -->
	</section><!-- #primary -->    

    <section class="map">
        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acb4464b60066b7901a94673c90927f45cb10d9beb0e139c80c5fdb19c310b57e&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
    </section>
    
    
  
  

<?php
get_footer();