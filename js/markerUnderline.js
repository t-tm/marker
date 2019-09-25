// JavaScript Document

//マーカーを引く
$(window).on( 'load' , function(){
  //.markerの内部にspanを作成し、その部分にマーカーを引く。
  $('<span></span>').appendTo('.marker');
  $(window).scroll(function() {
    $('.marker').each(function(){
      scroll = $(window).scrollTop();
      var pos = $(this).offset().top;  
      var windowHeight = $(window).innerHeight();
      var executionTiming = 200;//該当要素が表示され始めてから何pxスクロールしたら実行するか。
      $(this).find('span').css({'width':'0'});
      if( pos + executionTiming < scroll + windowHeight ){
        var thisWidth = $(this).outerWidth(true);
        var marker
        var markerHeight = 10 + 'px';//マーカーの縦サイズ設定
        $(this).find('span').css({ 'width': thisWidth , 'height' : markerHeight });
      } else {
        $(this).find('span').css({ 'width' : '0' });
      };
    });
  });
});
