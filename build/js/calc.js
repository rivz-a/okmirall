$('.okno').click(
  function(){
    //СЃС‚Р°РІРёРј Р°РєС‚СѓР°Р»СЊРЅС‹Р№ С‚РёРї РѕРєРѕРЅРЅРѕР№ РєРѕРЅСЃС‚СЂСѓРєС†РёРё
    $('.okno').removeClass('active');
    $(this).addClass('active');   
    
    var num = $(this).attr("data-num")
    if (num==1) {
        $('.vid_img img').attr('src', '/wp-content/themes/okmirall/build/img/calc/1okno1.png');
        $('.okno-0').addClass('d-none');
        $('.okno-2').addClass('d-none');
        $('.okno-3').addClass('d-none');      
        $('.vid_img .row').addClass('widthProkOkno1');
        $('.vid_img .row').removeClass('widthProkOkno2');
        $('.vid_img .row').removeClass('widthProkOkno3'); 
        $('.vid_img .row').removeClass('widthProkOkno4');
        $('.vid_img .row').removeClass('widthProkOkno5');     
        $('.h_dver').addClass('d-none'); //РїСЂСЏС‡РµРј РІРІРѕРґ РІС‹СЃРѕС‚С‹ РґРІРµСЂРё
        $('#width').val('800');
        $('#height').val('1400');
        $('#vid-1').val('1');
    } 
    if (num==2) {
        $('.vid_img img').attr('src', '/wp-content/themes/okmirall/build/img/calc/2okno11.png');
        $('.okno-0').addClass('d-none');
        $('.okno-2').removeClass('d-none');        
        $('.okno-3').addClass('d-none');
        $('.vid_img .row').addClass('widthProkOkno2');
        $('.vid_img .row').removeClass('widthProkOkno1');
        $('.vid_img .row').removeClass('widthProkOkno3');  
        $('.vid_img .row').removeClass('widthProkOkno4'); 
        $('.vid_img .row').removeClass('widthProkOkno5');      
        $('.h_dver').addClass('d-none'); //РїСЂСЏС‡РµРј РІРІРѕРґ РІС‹СЃРѕС‚С‹ РґРІРµСЂРё
        $('#width').val('1300');
        $('#height').val('1400');
        $('#vid-1').val('1');
        $('#vid-2').val('1');
    }
    if (num==3) {
        $('.vid_img img').attr('src', '/wp-content/themes/okmirall/build/img/calc/3okno111.png');
        $('.okno-0').addClass('d-none');
        $('.okno-2').removeClass('d-none');
        $('.okno-3').removeClass('d-none');
        $('.vid_img .row').addClass('widthProkOkno3');
        $('.vid_img .row').removeClass('widthProkOkno1');
        $('.vid_img .row').removeClass('widthProkOkno2');  
        $('.vid_img .row').removeClass('widthProkOkno4'); 
        $('.vid_img .row').removeClass('widthProkOkno5');         
        $('.h_dver').addClass('d-none'); //РїСЂСЏС‡РµРј РІРІРѕРґ РІС‹СЃРѕС‚С‹ РґРІРµСЂРё  
        $('#width').val('2000');
        $('#height').val('1400');  
        $('#vid-1').val('1');
        $('#vid-2').val('1');
        $('#vid-3').val('1');
    }
    if (num==4) {        
        $('.vid_img img').attr('src', '/wp-content/themes/okmirall/build/img/calc/4okbo11.png');
        $('.okno-0').removeClass('d-none');
        $('.h_dver').removeClass('d-none');// РѕС‚РѕР±СЂР°Р¶Р°РµРј РІРІРѕРґ РІС‹СЃРѕС‚С‹ РґРІРµСЂРё
        $('.okno-2').addClass('d-none');
        $('.okno-3').addClass('d-none');
        $('.vid_img .row').addClass('widthProkOkno4'); 
        $('.vid_img .row').removeClass('widthProkOkno1');
        $('.vid_img .row').removeClass('widthProkOkno2'); 
        $('.vid_img .row').removeClass('widthProkOkno3');  
        $('.vid_img .row').removeClass('widthProkOkno5');    
        $('#width').val('1400');
        $('#height').val('1400');   
        $('#vid-0').val('2');
        $('#vid-1').val('1');
    }
    if (num==5) {        
        $('.vid_img img').attr('src', '/wp-content/themes/okmirall/build/img/calc/5okbo111.png');
        $('.okno-0').removeClass('d-none');
        $('.okno-2').removeClass('d-none');
        $('.okno-3').addClass('d-none');        
        $('.vid_img .row').addClass('widthProkOkno5'); 
        $('.vid_img .row').removeClass('widthProkOkno1');
        $('.vid_img .row').removeClass('widthProkOkno2'); 
        $('.vid_img .row').removeClass('widthProkOkno3');  
        $('.vid_img .row').removeClass('widthProkOkno4');       
        $('.h_dver').removeClass('d-none');// РѕС‚РѕР±СЂР°Р¶Р°РµРј РІРІРѕРґ РІС‹СЃРѕС‚С‹ РґРІРµСЂРё
        $('#width').val('2100');
        $('#height').val('1400');
        $('#vid-0').val('2');
        $('#vid-1').val('1');
        $('#vid-2').val('1');
    }
    Vibor(this);
    }
);

$('.dop').click(
    function(){
    //СѓСЃС‚Р°РЅР°РІР»РёРІР°РµРј РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РѕРїС†РёРё
   $(this).toggleClass('click'); 
   Vibor(this); 
    }
);
$('.lamin').click(
    function(){
    //СѓСЃС‚Р°РЅР°РІР»РёРІР°РµРј РѕРїС†РёСЋ Р»Р°РјРёРЅР°С†РёРё
   $(this).toggleClass('click'); 
   Vibor(this); 
    }
);

//Р¤СѓРЅРєС†РёСЏ РІС‹Р±РѕСЂР° РёР·РѕР±СЂР°Р¶РµРЅРёСЏ + РїРѕРґСЃС‡РµС‚ 
function Vibor() {
    var vid0Obj = document.getElementById("vid-0-obj");    
    var vid2Obj = document.getElementById("vid-2-obj");
    var vid3Obj = document.getElementById("vid-3-obj");
    var profilObjElements = $('#profil').val();  
    var vid0ObjElements = $('#vid-0').val();
    var vid1ObjElements = $('#vid-1').val(); 
    var vid2ObjElements = $('#vid-2').val(); 
    var vid3ObjElements = $('#vid-3').val();
    

    //РЈР·РЅР°РµРј РєР°РєСѓСЋ Р»Р°РјРёРЅР°С†РёСЋ РІС‹Р±СЂР°Р»Рё
    var laminObjElements = $('#lamin').val();  
    
    //Р•СЃР»Рё РІС‹Р±СЂР°РЅРѕ 1 РѕРєРЅРѕ
    if (vid0Obj.classList.contains('d-none')&&vid2Obj.classList.contains('d-none')&&vid3Obj.classList.contains('d-none')) {
        var vid0ObjElements = 0;        
        var vid2ObjElements = 0;        
        var vid3ObjElements = 0;
        var vid1ObjElements = $('#vid-1').val();        
        checkimage(vid1ObjElements);        
        profilObjElements = profilObjElements + '_' + vid1ObjElements; 
                 
        //РџСЂРѕРІРµСЂСЏРµРј РІС‹Р±РѕСЂ Р»Р°РјРёРЅР°С†РёРё
        if (laminObjElements!=0){
        laminObjElements = profilObjElements + '_' + laminObjElements;                   
        } 
        else { var laminObjElements = 0;}
       
        calcProfil(profilObjElements,0,0,calcLamin(laminObjElements),0,0);        

    }
    //Р•СЃР»Рё РІС‹Р±СЂР°РЅРѕ 2 РѕРєРЅР°
    if (vid0Obj.classList.contains('d-none')&&!vid2Obj.classList.contains('d-none')&&vid3Obj.classList.contains('d-none')) {
        var vid0ObjElements = 0;
        var vid3ObjElements = 0;
        var vid1ObjElements = $('#vid-1').val();
        var vid2ObjElements = $('#vid-2').val();        
        checkimage(vid1ObjElements+vid2ObjElements);               
        var profilObjElements1 = profilObjElements + '_' + vid1ObjElements; 
        var profilObjElements2 = profilObjElements + '_' + vid2ObjElements; 

        //РџСЂРѕРІРµСЂСЏРµРј РІС‹Р±РѕСЂ Р»Р°РјРёРЅР°С†РёРё
        if (laminObjElements!=0){
          laminObjElements1 = profilObjElements1 + '_' + laminObjElements; 
          laminObjElements2 = profilObjElements2 + '_' + laminObjElements;                   
        } 
        else {
            var laminObjElements1 = 0;
            var laminObjElements2 = 0;
        }
        
        calcProfil(profilObjElements1,profilObjElements2,0,calcLamin(laminObjElements1),calcLamin(laminObjElements2),0);        
    }
    //Р•СЃР»Рё РІС‹Р±СЂР°РЅРѕ 3 РѕРєРЅР°
    if (vid0Obj.classList.contains('d-none')&&!vid2Obj.classList.contains('d-none')&&!vid3Obj.classList.contains('d-none')) {
        var vid0ObjElements = 0;
        var vid1ObjElements = $('#vid-1').val();
        var vid2ObjElements = $('#vid-2').val();
        var vid3ObjElements = $('#vid-3').val(); 
               
        checkimage(vid1ObjElements+vid2ObjElements+vid3ObjElements);
        var profilObjElements1 = profilObjElements + '_' + vid1ObjElements; 
        var profilObjElements2 = profilObjElements + '_' + vid2ObjElements; 
        var profilObjElements3 = profilObjElements + '_' + vid3ObjElements;

        //РџСЂРѕРІРµСЂСЏРµРј РІС‹Р±РѕСЂ Р»Р°РјРёРЅР°С†РёРё
        if (laminObjElements!=0){
          laminObjElements1 = profilObjElements1 + '_' + laminObjElements; 
          laminObjElements2 = profilObjElements2 + '_' + laminObjElements;                   
          laminObjElements3 = profilObjElements3 + '_' + laminObjElements;                   
        } 
        else {
            var laminObjElements1 = 0;
            var laminObjElements2 = 0;
            var laminObjElements3 = 0;
        }

        calcProfil(profilObjElements1,profilObjElements2,profilObjElements3,calcLamin(laminObjElements1),calcLamin(laminObjElements2),calcLamin(laminObjElements3));
    }    
    //Р•СЃР»Рё РІС‹Р±СЂР°РЅ Р±Р°Р»РєРѕРЅРЅС‹Р№ РѕРґРЅРѕСЃС‚РІРѕСЂС‡Р°С‚С‹Р№ Р±Р»РѕРє
    if (!vid0Obj.classList.contains('d-none')&&vid2Obj.classList.contains('d-none')&&vid3Obj.classList.contains('d-none')) {
      var vid0ObjElements = $('#vid-0').val();
      var vid1ObjElements = $('#vid-1').val();
      var vid2ObjElements = 0;
      var vid3ObjElements = 0;        
      checkimage('b'+vid0ObjElements+vid1ObjElements);                       
      var profilObjElements1 = profilObjElements + '_' + vid0ObjElements; 
      var profilObjElements2 = profilObjElements + '_' + vid1ObjElements; 
      
      //РџСЂРѕРІРµСЂСЏРµРј РІС‹Р±РѕСЂ Р»Р°РјРёРЅР°С†РёРё
      if (laminObjElements!=0){
        laminObjElements1 = profilObjElements1 + '_' + laminObjElements; 
        laminObjElements2 = profilObjElements2 + '_' + laminObjElements;                   
      } 
      else {
          var laminObjElements1 = 0;
          var laminObjElements2 = 0;
      }
      
      calcProfil(profilObjElements1,profilObjElements2,0,calcLamin(laminObjElements1),calcLamin(laminObjElements2),0);        
  }
  //Р•СЃР»Рё РІС‹Р±СЂР°РЅ Р±Р°Р»РєРѕРЅРЅС‹Р№ РґРІСѓС…СЃС‚РІРѕСЂС‡Р°С‚С‹Р№ Р±Р»РѕРє
  if (!vid0Obj.classList.contains('d-none')&&!vid2Obj.classList.contains('d-none')&&vid3Obj.classList.contains('d-none')) {
      var vid0ObjElements = $('#vid-0').val();
      var vid1ObjElements = $('#vid-1').val();
      var vid2ObjElements = $('#vid-2').val();
      var vid3ObjElements = 0;        
      checkimage('b'+vid0ObjElements+vid1ObjElements+vid2ObjElements);               
      var profilObjElements1 = profilObjElements + '_' + vid0ObjElements; 
      var profilObjElements2 = profilObjElements + '_' + vid1ObjElements; 
      var profilObjElements3 = profilObjElements + '_' + vid2ObjElements; 

  //РџСЂРѕРІРµСЂСЏРµРј РІС‹Р±РѕСЂ Р»Р°РјРёРЅР°С†РёРё
  if (laminObjElements!=0){
      laminObjElements1 = profilObjElements1 + '_' + laminObjElements; 
      laminObjElements2 = profilObjElements2 + '_' + laminObjElements;                   
      laminObjElements3 = profilObjElements3 + '_' + laminObjElements;                   
  } 
  else {
    var laminObjElements1 = 0;
    var laminObjElements2 = 0;
    var laminObjElements3 = 0;
  }
      
      calcProfil(profilObjElements1,profilObjElements2,profilObjElements3,calcLamin(laminObjElements1),calcLamin(laminObjElements2),calcLamin(laminObjElements3));        
  }
  
   
}

function calcLamin(val1){
    var arrlamin = {
    'RehauBlitzNEW_1_1': 4308, 
    'RehauSchtandartX60_1_1': 4649, 
    'RehauThermoDesign_1_1': 4526, 
    'RehauGrazio_1_1': 4829, 
    'RehauDelightDesign_1_1': 5238, 
    'RehauSchtandartX70_1_1': 5176, 
    'RehauIntelioDesign_1_1': 6086, 
    'RehauBrilliantDesign_1_1': 5695, 
    'RehauSchtandartX80_1_1': 6338, 
    'RehauGeneo86-6_1_1': 13798,   
    'RehauBlitzNEW_1_2': 4898, 
    'RehauSchtandartX60_1_2': 5547, 
    'RehauThermoDesign_1_2': 4966, 
    'RehauGrazio_1_2': 5672, 
    'RehauDelightDesign_1_2': 6078, 
    'RehauSchtandartX70_1_2': 5904, 
    'RehauIntelioDesign_1_2': 6907, 
    'RehauBrilliantDesign_1_2': 6623, 
    'RehauSchtandartX80_1_2': 7436, 
    'RehauGeneo86-6_1_2': 14889, 

    'RehauBlitzNEW_2_1': 7989, 
    'RehauSchtandartX60_2_1': 8465,  
    'RehauThermoDesign_2_1': 8400, 
    'RehauGrazio_2_1': 8500, 
    'RehauDelightDesign_2_1': 9824, 
    'RehauSchtandartX70_2_1': 9403, 
    'RehauIntelioDesign_2_1': 10078, 
    'RehauBrilliantDesign_2_1': 10559, 
    'RehauSchtandartX80_2_1': 10443, 
    'RehauGeneo86-6_2_1': 22778,   
    'RehauBlitzNEW_2_2': 9292, 
    'RehauSchtandartX60_2_2' : 10025, 
    'RehauThermoDesign_2_2': 9642, 
    'RehauGrazio_2_2': 9758, 
    'RehauDelightDesign_2_2': 11091, 
    'RehauSchtandartX70_2_2': 10851, 
    'RehauIntelioDesign_2_2': 11449, 
    'RehauBrilliantDesign_2_2': 11964, 
    'RehauSchtandartX80_2_2': 12053, 
    'RehauGeneo86-6_2_2': 24061,   

    'RehauBlitzNEW_3_1': 7989, 
    'RehauSchtandartX60_3_1': 8465, 
    'RehauThermoDesign_3_1': 8400, 
    'RehauGrazio_3_1': 8500, 
    'RehauDelightDesign_3_1': 9824, 
    'RehauSchtandartX70_3_1': 9403, 
    'RehauIntelioDesign_3_1': 10078, 
    'RehauBrilliantDesign_3_1': 10559, 
    'RehauSchtandartX80_3_1': 10443, 
    'RehauGeneo86-6_3_1': 22778,   
    'RehauBlitzNEW_3_2': 9292, 
    'RehauSchtandartX60_3_2': 10025, 
    'RehauThermoDesign_3_2': 9642, 
    'RehauGrazio_3_2': 9758, 
    'RehauDelightDesign_3_2': 11091, 
    'RehauSchtandartX70_3_2': 10851, 
    'RehauIntelioDesign_3_2': 11449, 
    'RehauBrilliantDesign_3_2': 11964, 
    'RehauSchtandartX80_3_2': 12053, 
    'RehauGeneo86-6_3_2': 24061,   
  };
  if (val1!=0){return (arrlamin[val1]); }
  else {return 0;}  
}

function calcProfil(val1,val2,val3,lamin1,lamin2,lamin3) {
  var arr = {
    'RehauBlitzNEW_1': 3126, 
    'RehauSchtandartX60_1': 3310, 
    'RehauThermoDesign_1': 3444, 
    'RehauGrazio_1': 3634, 
    'RehauDelightDesign_1': 3840, 
    'RehauSchtandartX70_1': 3939, 
    'RehauIntelioDesign_1': 4501, 
    'RehauBrilliantDesign_1': 4734, 
    'RehauSchtandartX80_1': 4979, 
    'RehauGeneo86-6_1': 11232,   
    'RehauBlitzNEW_2': 5777, 
    'RehauSchtandartX60_2': 6541, 
    'RehauThermoDesign_2': 6258, 
    'RehauGrazio_2': 6534, 
    'RehauDelightDesign_2': 7386, 
    'RehauSchtandartX70_2': 7310, 
    'RehauIntelioDesign_2': 8323, 
    'RehauBrilliantDesign_2': 8344, 
    'RehauSchtandartX80_2': 6903, 
    'RehauGeneo86-6_2': 16601, 
    'RehauBlitzNEW_3': 6229, 
    'RehauSchtandartX60_3': 6949, 
    'RehauThermoDesign_3': 6719, 
    'RehauGrazio_3': 6991, 
    'RehauDelightDesign_3': 7850, 
    'RehauSchtandartX70_3': 7726, 
    'RehauIntelioDesign_3': 8835, 
    'RehauBrilliantDesign_3': 8848, 
    'RehauSchtandartX80_3': 7399, 
    'RehauGeneo86-6_3': 17100    
  };  
      var widthOkno = 0;
      var heightDver = 0;
      var heightOkno = 0;
    //РџРѕР»СѓС‡Р°РµРј РґР°РЅРЅС‹Рµ С€РёСЂРёРЅС‹ РѕРєРЅР°
    var widthOkno = $('#width').val();
    //Р•СЃР»Рё С€РёСЂРёРЅСѓ Р·Р°РґР°Р»Рё >4000 С‚Рѕ РїСЂРёСЃРІР°РёРІР°РµРј 4000
    if (widthOkno>=4000) {$('#width').val("4000");}
    //РџРѕР»СѓС‡Р°РµРј РґР°РЅРЅС‹Рµ РІС‹СЃРѕС‚С‹ РѕРєРЅР°
    var heightOkno = $('#height').val(); 
    //Р•СЃР»Рё РІС‹СЃРѕС‚Сѓ Р·Р°РґР°Р»Рё 3600 С‚Рѕ РїСЂРёСЃРІР°РёРІР°РµРј 3600
    if (heightOkno>=3600) {$('#height').val("3600");}
    var s = 0;
    var dopik = 0;
    var montaj = 0;
    var podok = 0;
    var otkos = 0;
    var moskit = 0;
    var moskitObjElements = $('#moskit').val();
    var skidos = 0;
    var skidos1 = 0;
    var skidos2 = 0;
    var skidos3 = 0;
    var mon=0;
    var montajObjElements = $('#mon').val();

    //РїСЂРѕРІРµСЂСЏРµРј РІС‹Р±СЂР°РЅРЅРѕСЃС‚СЊ РјРѕРЅС‚Р°Р¶Р° Рё РµРіРѕ РїРѕРґСЃС‡РµС‚
    if (montajObjElements!=0) {mon = 1500*(widthOkno/1000)*(heightOkno/1000);}


    //РџСЂРѕРІРµСЂСЏРµРј РІС‹РґРµР»РµРЅРёРµ СЃРєРёРґРєРё
    if ($('#s20').prop("checked")) {
      var skidos1 = 0.2;
    }
    if ($('#s8').prop("checked")) {
      var skidos2 = 0.08;
    }
    if ($('#s10').prop("checked")) {
      var skidos2 = 0.1;
    }
    if ($('#s3').prop("checked")) {
      var skidos3 = 0.03;
    }
    skidos = skidos1 + skidos2 + skidos3;
     
    //РџРѕР»СѓС‡Р°РµРј РјР°СЃСЃРёРІ РґРѕРї РѕРїС†РёР№
    $('[data-dop]').each( function(e)    {
        var $el = $(this);
        if($el.hasClass('click')){
            console.log($el.attr('data-dop'));           
            dopik = dopik + $el.attr('data-dop')*(widthOkno/1000)*(heightOkno/1000);            
                                 }
                                        }
            );
      
    //РџРѕР»СѓС‡Р°РµРј РјР°СЃСЃРёРІ РјРѕРЅС‚Р°Р¶Р°  РїРѕРґРѕРєРѕРЅРЅРёРєРѕРІ      
    $('[data-pod]').each( function(e)    {
      var $el = $(this);
      if($el.hasClass('click')){                        
         podok = $el.attr('data-pod')*(widthOkno/1000);            
                               }
                                      }
          );
       
    
  //1 РџРѕРґСЃС‡РёС‚С‹РІР°РµРј СЃСѓРјРјСѓ РґР»СЏ РѕРґРЅРѕСЃС‚РІРѕСЂС‡Р°С‚РѕРіРѕ РѕРєРЅР° 
  if ((val2==0)&&(val3==0)) {
    
    //РїРѕРґРєР»СЋС‡Р°РµРј Р»Р°РјРёРЅР°С†РёСЋ  
    if (lamin1!=0){ arr[val1] = lamin1;}

    //РџСЂРѕРІРµСЂСЏРµРј РјРѕСЃРєРёС‚РЅСѓСЋ СЃРµС‚РєСѓ  
    if (moskitObjElements!=0) {    
          moskit = moskitObjElements * 700;         
          moskit = moskit*(widthOkno/1000)*(heightOkno/1000);         
      }
      
     //РџРѕР»СѓС‡Р°РµРј РјР°СЃСЃРёРІ РјРѕРЅС‚Р°Р¶Р° РѕС‚РєРѕСЃРѕРІ      
    $('[data-otk]').each( function(e)    {
      var $el = $(this);
      if($el.hasClass('click')){                        
          otkos = $el.attr('data-otk')*(widthOkno/1000+heightOkno/1000+heightOkno/1000);            
                               }
                                      }
          );          
  
    var s = (arr[val1]*(widthOkno/1000)*(heightOkno/1000))+dopik+moskit;
    var result = ((s+0.3*s)-(s*skidos))+mon+podok+otkos;

        $('.vivod_cen').text((result).toFixed());          
    };
  
  //2 РџРѕРґСЃС‡РёС‚С‹РІР°РµРј СЃСѓРјРјСѓ РґР»СЏ РґРІСѓСЃС‚РІРѕСЂС‡Р°С‚РѕРіРѕ РѕРєРЅР°
  if ((val2!=0)&&(val3==0)&&document.getElementById("h_dver").classList.contains('d-none')) {

      //РїРѕРґРєР»СЋС‡Р°РµРј Р»Р°РјРёРЅР°С†РёСЋ
      if ((lamin1!=0)&&(lamin2!=0)) { 
          arr[val1] = lamin1;           
          arr[val2] = lamin2;
      }
      //РћР±С‰СѓСЋ РґР»РёРЅСѓ РґРµР»РёРј РЅР° РєРѕР»РёС‡РµСЃС‚РІРѕ СЃС‚РІРѕСЂРѕРє РЅР° 2      
      widthOkno = widthOkno/2;

      //РџСЂРѕРІРµСЂСЏРµРј РјРѕСЃРєРёС‚РЅСѓСЋ СЃРµС‚РєСѓ  
    if (moskitObjElements!=0) {    
      moskit = moskitObjElements * 700;         
      moskit = moskit*(widthOkno/1000)*(heightOkno/1000);       
        }     
    //РџРѕР»СѓС‡Р°РµРј РјР°СЃСЃРёРІ РјРѕРЅС‚Р°Р¶Р° РѕС‚РєРѕСЃРѕРІ      
    $('[data-otk]').each( function(e)    {
      var $el = $(this);
      if($el.hasClass('click')){                        
          otkos = $el.attr('data-otk')*(widthOkno/1000+heightOkno/1000+heightOkno/1000);            
                               }
                                      }
          );          
 
    var s1 = (arr[val1]*(widthOkno/1000)*(heightOkno/1000));    
    var s2 = (arr[val2]*(widthOkno/1000)*(heightOkno/1000));    
    var s = s1+s2+dopik+moskit;
    var result = ((s+0.3*s)-(s*skidos))+mon+podok+otkos;

    $('.vivod_cen').text((result).toFixed());               
    };     
  
   //3 РџРѕРґСЃС‡РёС‚С‹РІР°РµРј СЃСѓРјРјСѓ РґР»СЏ С‚СЂРµС…СЃС‚РІРѕСЂС‡Р°С‚РѕРіРѕ РѕРєРЅР°
   if ((val2!=0)&&(val3!=0)&&document.getElementById("h_dver").classList.contains('d-none')) {
    
      //РїРѕРґРєР»СЋС‡Р°РµРј Р»Р°РјРёРЅР°С†РёСЋ
      if ((lamin1!=0)&&(lamin2!=0)&&(lamin3!=0)) { 
          arr[val1] = lamin1;
          arr[val2] = lamin2;
          arr[val3] = lamin3;
      }      
      //РћР±С‰СѓСЋ РґР»РёРЅСѓ РґРµР»РёРј РЅР° РєРѕР»РёС‡РµСЃС‚РІРѕ СЃС‚РІРѕСЂРѕРє РЅР° 3
    widthOkno = widthOkno/3;

    //РџСЂРѕРІРµСЂСЏРµРј РјРѕСЃРєРёС‚РЅСѓСЋ СЃРµС‚РєСѓ  
    if (moskitObjElements!=0) {    
      moskit = moskitObjElements * 700;         
      moskit = moskit*(widthOkno/1000)*(heightOkno/1000);       
        }     
    //РџРѕР»СѓС‡Р°РµРј РјР°СЃСЃРёРІ РјРѕРЅС‚Р°Р¶Р° РѕС‚РєРѕСЃРѕРІ      
    $('[data-otk]').each( function(e)    {
      var $el = $(this);
      if($el.hasClass('click')){                        
      otkos = $el.attr('data-otk')*(widthOkno/1000+heightOkno/1000+heightOkno/1000);            
                         }
                                }
    );          

    var s1 = (arr[val1]*(widthOkno/1000)*(heightOkno/1000));    
    var s2 = (arr[val2]*(widthOkno/1000)*(heightOkno/1000));    
    var s3 = (arr[val3]*(widthOkno/1000)*(heightOkno/1000));    
    var s = s1+s2+s3+dopik+moskit;
    var result = ((s+0.3*s)-(s*skidos))+mon+podok+otkos;

    $('.vivod_cen').text((result).toFixed());           
    };     
  

    //4 РџРѕРґСЃС‡РёС‚С‹РІР°РµРј СЃСѓРјРјСѓ РґР»СЏ Р±Р°Р»РєРѕРЅРЅРѕРіРѕ РѕРґРЅРѕСЃС‚РІРѕСЂС‡Р°С‚РѕРіРѕ Р±Р»РѕРєР° Рё //РџСЂРѕРІРµСЂСЏРµРј С‡С‚Рѕ input РІС‹СЃРѕС‚С‹ РґРІРµСЂРё РѕС‚РѕР±СЂР°Р¶Р°РµС‚СЃСЏ
    if ((val2!=0)&&(val3==0)&&!document.getElementById("h_dver").classList.contains('d-none')) {        
      var heightDver =  $('#height_dv').val(); 
      //РїРѕРґРєР»СЋС‡Р°РµРј Р»Р°РјРёРЅР°С†РёСЋ
      if ((lamin1!=0)&&(lamin2!=0)) { 
          arr[val1] = lamin1;            
          arr[val2] = lamin2;            
      }     
      
      //РџСЂРѕРІРµСЂСЏРµРј РјРѕСЃРєРёС‚РЅСѓСЋ СЃРµС‚РєСѓ  
    if (moskitObjElements!=0) {    
      moskit = moskitObjElements * 700;         
      moskit = moskit*(widthOkno/1000)*(heightOkno/1000);       
        }
      
      //РџРѕР»СѓС‡Р°РµРј РјР°СЃСЃРёРІ РјРѕРЅС‚Р°Р¶Р° РѕС‚РєРѕСЃРѕРІ      
      $('[data-otk]').each( function(e)    {
        var $el = $(this);
        if($el.hasClass('click')){                        
        otkos = $el.attr('data-otk')*(widthOkno/1000+heightOkno/1000+heightDver/1000+(heightDver/1000-heightOkno/1000));            
                         }
                                }
    );          
                            
      //РћР±С‰СѓСЋ РґР»РёРЅСѓ РґРµР»РёРј РЅР° РєРѕР»РёС‡РµСЃС‚РІРѕ СЃС‚РІРѕСЂРѕРє РЅР° 2
      widthOkno = widthOkno/2;
      var s1 = (arr[val1]*(widthOkno/1000)*(heightDver/1000)); 
      var s2 = (arr[val2]*(widthOkno/1000)*(heightOkno/1000));  
      var s = s1+s2+dopik+moskit;
      var result = ((s+0.3*s)-(s*skidos))+mon+podok+otkos;

      $('.vivod_cen').text((result).toFixed());           
      };     


    //5 РџРѕРґСЃС‡РёС‚С‹РІР°РµРј СЃСѓРјРјСѓ РґР»СЏ Р±Р°Р»РєРѕРЅРЅРѕРіРѕ РґРІСѓС…СЃС‚РІРѕСЂС‡Р°С‚РѕРіРѕ Р±Р»РѕРєР° Рё //РџСЂРѕРІРµСЂСЏРµРј С‡С‚Рѕ input РІС‹СЃРѕС‚С‹ РґРІРµСЂРё РѕС‚РѕР±СЂР°Р¶Р°РµС‚СЃСЏ
    if ((val2!=0)&&(val3!=0)&&!document.getElementById("h_dver").classList.contains('d-none')) {        
      var heightDver =  $('#height_dv').val(); 
      //РїРѕРґРєР»СЋС‡Р°РµРј Р»Р°РјРёРЅР°С†РёСЋ
      if ((lamin1!=0)&&(lamin2!=0)&&(lamin3!=0)) { 
          arr[val1] = lamin1;            
          arr[val2] = lamin2;
          arr[val3] = lamin3;
      }    

      //РџСЂРѕРІРµСЂСЏРµРј РјРѕСЃРєРёС‚РЅСѓСЋ СЃРµС‚РєСѓ  
    if (moskitObjElements!=0) {    
      moskit = moskitObjElements * 700;         
      moskit = moskit*(widthOkno/1000/2)*(heightOkno/1000/2);       
        }
      //РџРѕР»СѓС‡Р°РµРј РјР°СЃСЃРёРІ РјРѕРЅС‚Р°Р¶Р° РѕС‚РєРѕСЃРѕРІ      
      $('[data-otk]').each( function(e)    {
        var $el = $(this);
        if($el.hasClass('click')){                        
        otkos = $el.attr('data-otk')*(widthOkno/1000+heightOkno/1000+heightDver/1000+(heightDver/1000-heightOkno/1000));            
                         }
                                }
    );          
      //alert(otkos);
              //РћР±С‰СѓСЋ РґР»РёРЅСѓ РґРµР»РёРј РЅР° РєРѕР»РёС‡РµСЃС‚РІРѕ СЃС‚РІРѕСЂРѕРє РЅР° 3      
      widthOkno = widthOkno/3;
      var s1 = (arr[val1]*(widthOkno/1000)*(heightDver/1000)); 
      var s2 = (arr[val2]*(widthOkno/1000)*(heightOkno/1000));      
      var s3 = (arr[val3]*(widthOkno/1000)*(heightOkno/1000));    
      
      var s = s1+s2+s3+dopik+moskit;
      var result = ((s+0.3*s)-(s*skidos))+mon+podok+otkos;

      $('.vivod_cen').text((result).toFixed());       
      }; 

}

function checkimage(val) {

  var arr = {
    '1': '/wp-content/themes/okmirall/build/img/calc/1okno1.png', 
    '2': '/wp-content/themes/okmirall/build/img/calc/1okno2.png', 
    '3': '/wp-content/themes/okmirall/build/img/calc/1okno3.png', 
    '11': '/wp-content/themes/okmirall/build/img/calc/2okno11.png', 
    '12': '/wp-content/themes/okmirall/build/img/calc/2okno12.png', 
    '13': '/wp-content/themes/okmirall/build/img/calc/2okno13.png', 
    '21': '/wp-content/themes/okmirall/build/img/calc/2okno21.png', 
    '22': '/wp-content/themes/okmirall/build/img/calc/2okno22.png', 
    '23': '/wp-content/themes/okmirall/build/img/calc/2okno23.png', 
    '31': '/wp-content/themes/okmirall/build/img/calc/2okno31.png', 
    '32': '/wp-content/themes/okmirall/build/img/calc/2okno32.png', 
    '33': '/wp-content/themes/okmirall/build/img/calc/2okno33.png', 
    '111': '/wp-content/themes/okmirall/build/img/calc/3okno111.png', 
    '112': '/wp-content/themes/okmirall/build/img/calc/3okno112.png', 
    '113': '/wp-content/themes/okmirall/build/img/calc/3okno113.png', 
    '121': '/wp-content/themes/okmirall/build/img/calc/3okno121.png', 
    '122': '/wp-content/themes/okmirall/build/img/calc/3okno122.png', 
    '123': '/wp-content/themes/okmirall/build/img/calc/3okno123.png', 
    '131': '/wp-content/themes/okmirall/build/img/calc/3okno131.png', 
    '132': '/wp-content/themes/okmirall/build/img/calc/3okno132.png', 
    '133': '/wp-content/themes/okmirall/build/img/calc/3okno133.png', 
    '211': '/wp-content/themes/okmirall/build/img/calc/3okno211.png', 
    '212': '/wp-content/themes/okmirall/build/img/calc/3okno212.png', 
    '213': '/wp-content/themes/okmirall/build/img/calc/3okno213.png', 
    '221': '/wp-content/themes/okmirall/build/img/calc/3okno221.png', 
    '222': '/wp-content/themes/okmirall/build/img/calc/3okno222.png', 
    '223': '/wp-content/themes/okmirall/build/img/calc/3okno223.png', 
    '231': '/wp-content/themes/okmirall/build/img/calc/3okno231.png', 
    '232': '/wp-content/themes/okmirall/build/img/calc/3okno232.png', 
    '233': '/wp-content/themes/okmirall/build/img/calc/3okno233.png', 
    '311': '/wp-content/themes/okmirall/build/img/calc/3okno311.png', 
    '312': '/wp-content/themes/okmirall/build/img/calc/3okno312.png', 
    '313': '/wp-content/themes/okmirall/build/img/calc/3okno313.png', 
    '321': '/wp-content/themes/okmirall/build/img/calc/3okno321.png', 
    '322': '/wp-content/themes/okmirall/build/img/calc/3okno322.png', 
    '323': '/wp-content/themes/okmirall/build/img/calc/3okno323.png', 
    '331': '/wp-content/themes/okmirall/build/img/calc/3okno331.png', 
    '332': '/wp-content/themes/okmirall/build/img/calc/3okno332.png', 
    '333': '/wp-content/themes/okmirall/build/img/calc/3okno333.png', 
    'b11': '/wp-content/themes/okmirall/build/img/calc/4okbo11.png', 
    'b12': '/wp-content/themes/okmirall/build/img/calc/4okbo12.png', 
    'b13': '/wp-content/themes/okmirall/build/img/calc/4okbo13.png', 
    'b21': '/wp-content/themes/okmirall/build/img/calc/4okbo21.png', 
    'b22': '/wp-content/themes/okmirall/build/img/calc/4okbo22.png', 
    'b23': '/wp-content/themes/okmirall/build/img/calc/4okbo23.png', 
    'b31': '/wp-content/themes/okmirall/build/img/calc/4okbo31.png', 
    'b32': '/wp-content/themes/okmirall/build/img/calc/4okbo32.png', 
    'b33': '/wp-content/themes/okmirall/build/img/calc/4okbo33.png',
    'b211': '/wp-content/themes/okmirall/build/img/calc/5okbo211.png', 
    'b212': '/wp-content/themes/okmirall/build/img/calc/5okbo212.png', 
    'b213': '/wp-content/themes/okmirall/build/img/calc/5okbo213.png', 
    'b221': '/wp-content/themes/okmirall/build/img/calc/5okbo221.png', 
    'b222': '/wp-content/themes/okmirall/build/img/calc/5okbo222.png', 
    'b223': '/wp-content/themes/okmirall/build/img/calc/5okbo223.png', 
    'b231': '/wp-content/themes/okmirall/build/img/calc/5okbo231.png', 
    'b232': '/wp-content/themes/okmirall/build/img/calc/5okbo232.png', 
    'b233': '/wp-content/themes/okmirall/build/img/calc/5okbo233.png', 
    'b311': '/wp-content/themes/okmirall/build/img/calc/5okbo311.png', 
    'b312': '/wp-content/themes/okmirall/build/img/calc/5okbo312.png', 
    'b313': '/wp-content/themes/okmirall/build/img/calc/5okbo313.png', 
    'b321': '/wp-content/themes/okmirall/build/img/calc/5okbo321.png', 
    'b322': '/wp-content/themes/okmirall/build/img/calc/5okbo322.png', 
    'b323': '/wp-content/themes/okmirall/build/img/calc/5okbo323.png', 
    'b331': '/wp-content/themes/okmirall/build/img/calc/5okbo331.png', 
    'b332': '/wp-content/themes/okmirall/build/img/calc/5okbo332.png', 
    'b333': '/wp-content/themes/okmirall/build/img/calc/5okbo333.png'
    
  };

  if(arr[val] != undefined){
    $('.vid_img img').attr('src', arr[val]);
  };
}
