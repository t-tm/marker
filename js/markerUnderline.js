// JavaScript Document

//sShow
$(window).on( 'load' , function(){
  $(window).scroll(function() {
    $('.bgYellow,.bgCyan').each(function(){
      scroll = $(window).scrollTop();
      var pos = $(this).offset().top;  
      var windowHeight = $(window).innerHeight();
      var executionTiming = 200;//該当要素が表示され始めてから何pxスクロールしたら実行するか。
      $(this).find('span').css({'width':'0'});
      if( pos + executionTiming < scroll + windowHeight ){
        var thisWidth = $(this).outerWidth(true);
        var markerHeight = 10 + 'px';
        $(this).find('span').css({ 'width': thisWidth , 'height' : markerHeight });
      } else {
        $(this).find('span').css({ 'width' : '0' });
      };
    });
  });
});
