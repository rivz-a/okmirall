

<?php
/*
Template Name: Шаблон для страницы окна
*/


get_header(); ?>

    

    <section class="banner" style="background: url('/wp-content/themes/okmirall/build/img/banner-fon2.jpg') top no-repeat;margin-bottom: 0px;">        
        <div class="container">
            <div class="row  row-lgr pt-5"> 
                <div class="zamer">
                    <div class="ramka" data-animated="fadeInLeft">
                        <h3><span>Бесплатный</span><br> выезд замерщика</h3>
                        <p class="text">и предварительный расчет стоимости Вашего заказа после заполнения заявки:</p>
                        <?php echo do_shortcode( '[contact-form-7 id="68" title="Контактная форма 1"]' ); ?>
                    </div>
                </div>
                <div class="banner-text" data-animated="fadeInRight">
                    <div class="title">При заказе окна<br><span>ВТОРОЕ ОКНО ВЫ ПОЛУЧАЕТЕ В <span>ПОДАРОК</span></span></div>
                    <p class="text" data-animated="fadeInUp">Описание акции описание акции описание акции описание акции описание акции описание акции описание акции описание акции описание акции описание акции </p>
                    <div class="row b-text row-sm">
                        <div data-animated="fadeInUp"><img src="/wp-content/themes/okmirall/build/img/b-g1.png"><br>Гарантия на оконные системы 5 лет</div>
                        <div data-animated="fadeInUp"><img src="/wp-content/themes/okmirall/build/img/b-g2.png"><br>Производство от 7 дней</div>
                        <div data-animated="fadeInUp"><img src="/wp-content/themes/okmirall/build/img/b-g3.png"><br>Подарим тепло и тишину в Ваш дом!</div>
                    </div>
                </div>
            </div>
        </div>
    </section>  
    
   
    <section id="primary" class="container">
		<main id="main" class="site-main" role="main">

			<?php
			get_template_part( 'template/content-page', 'none');
			?>

		</main><!-- #main -->
	</section><!-- #primary -->
   

    <?php
    get_template_part( 'template/calc' );    
    ?>
    <script src="/wp-content/themes/okmirall/build/js/calc.js"></script> 


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