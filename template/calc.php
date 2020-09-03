<section id="calc" class="calc">        
        <div class="container ">                
            <h2>ПОЛУЧИТЕ СТОИМОСТЬ В 3 КЛИКА</h2>              
            <div class="row row-xl pt-5 ">
                <div class="col-12 col-lg-9">
                    <div class="profil">Выберите профиль:
                    <p><select id="profil"  onchange="Vibor(this);">
                        <option value="RehauBlitzNEW" selected="selected">Rehau Blitz NEW</option>
                        <option value="RehauSchtandartX60">Rehau Schtandart X60</option>
                        <option value="RehauThermoDesign">Rehau Thermo Design</option>
                        <option value="RehauGrazio">Rehau Grazio</option>
                        <option value="RehauDelightDesign">Rehau Delight Design</option>
                        <option value="RehauSchtandartX70">Rehau Schtandart X70</option>
                        <option value="RehauIntelioDesign">Rehau Intelio Design</option>
                        <option value="RehauBrilliantDesign">Rehau Brilliant Design</option>
                        <option value="RehauSchtandartX80">Rehau Schtandart X80</option>
                        <option value="RehauGeneo86-6">Rehau Geneo 86-6</option>
                        </select>
                    </p>
                    </div>
                    <div class="">Выберите тип оконной конструкции:
                    <div class="row row-sm"><p>
                        <div id="okno-1" data-num='1' class="col-xs-12 col-md-2 okno active"><img class="img-fluid" src="/wp-content/themes/okmirall/build/img/calc/1.png">
                            <br>Одностворчатое окно
                        </div>
                        <div id="okno-2" data-num='2' class="col-xs-12 col-md-2 okno"><img class="img-fluid" src="/wp-content/themes/okmirall/build/img/calc/2.png">
                            <br>Двухстворчатое окно
                        </div>
                        <div id="okno-3" data-num='3' class="col-xs-12 col-md-2 okno"><img class="img-fluid" src="/wp-content/themes/okmirall/build/img/calc/3.png">
                            <br>Трехстворчатое окно
                        </div>
                        <div id="okno-4" data-num='4' class="col-xs-12 col-md-2 okno"><img class="img-fluid" src="/wp-content/themes/okmirall/build/img/calc/4.png">
                            <br>Балконный одностворчатый блок
                        </div>
                        <div id="okno-5" data-num='5' class="col-xs-12 col-md-3 okno"><img class="img-fluid" src="/wp-content/themes/okmirall/build/img/calc/5.png">
                            <br>Балконный двухстворчатый блок
                        </div>
                      </div> </p>
                    </div>
                    <div class="row row-md">
                        <div class="col-12 col-lg-3 razmer">
                             <p>Ширина окна (мм):</p>
                                <input type="text" value="800" id="width"  onchange="Vibor(this);">   
                             <p>Высота окна (мм):</p>
                                <input type="text" value="1400" id="height"  onchange="Vibor(this);">
                             <div  id="h_dver" class="h_dver d-none">
                             <p>Высота двери (мм):</p>
                                <input type="text" value="2100" id="height_dv"  onchange="Vibor(this);">
                            </div>
                        </div>
                        <div class="col-12 col-lg-9 vid_img">
                            <img class="img-fluid" width="600" height="300" src="/wp-content/themes/okmirall/build/img/calc/1okno1.png">                                                 
                            <div class="row widthProkOkno1">
                                <div id="vid-0-obj" class="okno-0 d-none">
                                    <select id="vid-0" onchange="Vibor(this);">
                                        <option value="2" selected="selected">Поворотное</option>
                                        <option value="3">Поворотно-откидное</option>                                                       
                                    </select>                                  
                                </div>
                                <div id="vid-1-obj" class="okno-1">
                                    <select id="vid-1" onchange="Vibor(this);">
                                        <option value="1" selected="selected">Глухое</option>
                                        <option value="2">Поворотное</option>                       
                                        <option value="3">Поворотно-откидное</option>                       
                                    </select>                                  
                                </div>
                                <div id="vid-2-obj" class="okno-2 d-none">
                                    <select id="vid-2" onchange="Vibor(this);">
                                        <option value="1" selected="selected">Глухое</option>
                                        <option value="2">Поворотное</option>                       
                                        <option value="3">Поворотно-откидное</option>                       
                                    </select>                                   
                                </div>
                                <div id="vid-3-obj" class="okno-3 d-none">
                                    <select id="vid-3" onchange="Vibor(this);">
                                        <option value="1" selected="selected">Глухое</option>
                                        <option value="2">Поворотное</option>                       
                                        <option value="3">Поворотно-откидное</option>                       
                                    </select>                                    
                                </div>
                            </div>
                            
                        </div> 
                    </div>                    
                </div> 
                <div class="left-block">
                  <div class=" pt-0">Собери свой стеклопакет:
                        <div class="dop" data-dop='450'>Двухкамерный стеклопакет (+одно стекло)</div> 
                        <div class="dop" data-dop='70'>Энергосберегающий стеклопакет</div> 
                        <div class="dop" data-dop='70'>Стеклопакет с защитой от солнца</div> 
                        <div class="dop" data-dop='295'>Противовзломный стеклопакет</div> 
                        <div class="dop" data-dop='250'>Шумозащитный стеклопакет</div>  
                        <div class="dop" data-dop='35'>Пластиковая дистанционная рамка</div>                       
                </div> 
                <div class=" pt-2">Ламинация:
                   <select id="lamin"  onchange="Vibor(this);">
                        <option value="0" selected="selected">Нет ламинации</option>
                        <option value="1">С одной стороны</option>
                        <option value="2">С двух сторон</option>                      
                        </select>                                                      
                </div> 
                <div class=" pt-2">Москитная сетка:
                    <select id="moskit"  onchange="Vibor(this);">
                        <option value="0" selected="selected">Нет</option>
                        <option value="1">Oдна створка</option>
                        <option value="2">Две створки</option>
                        <option value="3">Три створки</option>                                            
                        </select>                                                      
                </div> 
                <div class=" pt-2">Дополнительные опции:
                        <div id='montaj' class="dop" data-pod='412'>Подоконники</div> 
                        <div id='montaj' class="dop" data-otk='475'>Откосы</div>                         
                </div> 
                <div class=" pt-2">Заказать монтаж:
                        <select id="mon"  onchange="Vibor(this);">
                        <option value="0" selected="selected">Нет</option>
                        <option value="1">Да</option>                        
                        </select>                         
                </div>   
                </div>
            </div>   
        </div>    
        <div id="plus" class="pt-2">
            <div class="img-overlay">
                <div class="container pt-3 pb-3">
                    <div class="row  row-md">
                        <div class="text_vivod">ПРЕДВАРИТЕЛЬНАЯ<br> СУММА ЗАКАЗА:</div>
                        <div class="text_vivod"><span class="vivod_cen">3571</span> руб.</div>    
                        <div>
                            <button class="button popmake-79" style=""><span class="btn-text" class=" ">Узнать точную цену</span><img class="btn-img" src="/wp-content/themes/okmirall/build/img/str.png"></button>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>     
    </section>
    <script src="/wp-content/themes/okmirall/build/js/calc.js"></script> 

  
 