<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_Bootstrap_Starter
 */

?>
  <footer>
        <div class="footer1">
            <div class="container pt-5">
                <div class="row row-md">
                    <div class="col pb-5">
                        <div class="title">Перейти на главную</div>
                        <div class="menu-button">
                            <?php 
                                wp_nav_menu( array(
                                    'menu_class'=>'primary',
                                    'theme_location'=>'top',
                                    'menu_class'=>'down', 
                                    'depth'=> 1,
                                    //'after'=>''
                                ) );               
                            ?> 
                        </div>
                    </div>
                    <div class="col">
                        <div class="title pb-5">График работы:</div>
                        <div class="text pb-5">пн - пт: 08:00 - 20:00<br><br>
                        сб - вс: 10:00 - 20:00</div>
                        <div class="title pt-5 pb-3">ОБРАТНАЯ СВЯЗЬ:</div>
                        <ul class="down"><li><a href="">Заказать обратный звонок</a></li>
                            <li><a href="">Написать письмо</a></li>
                            <li><a href="">Оставить отзыв</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <div class="pb-5"><img src="/wp-content/themes/okmirall/build/img/logo.png"></div> 
                        <div class="title pb-5">Контакты:</div>
                        <div class="text pb-5">г. Стерлитамак<br><br>
                        ул. Харьковская, д. 8<br><br>                      
                        <span><a href="tel:83473301305" class="a-black" title="Позвонить">8 (3473) 301-305</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer2">
            <div class="container">
                <div class="left">
                    Все права защищены. 2020.<br>
                    Политика конфиденциальности
                </div>
                <div class="right">
                    <a href="mailto:info@okmirall.ru" class="link">info@okmirall.ru</a><br>
                    ОГРН: 1160280067254
                </div>
            </div>            
        </div>
    </footer>
   
</head>
<?php wp_footer(); ?>

<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>

 

</body>
</html>