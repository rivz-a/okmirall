

<?php
/*
Template Name: Шаблон для страницы каталога
*/


get_header(); ?>


    <?php
    get_template_part( 'template/prod' );    
    ?>  
    <br>
   
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