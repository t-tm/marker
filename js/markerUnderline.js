// JavaScript Document

//sShow
$(window).on( 'load' , function(){
  $(window).scroll(function() {
    $('.bgYellow,.bgCyan').each(function(){
      scroll = $(window).scrollTop();
      var pos = $(this).offset().top;  
      var windowHeight = $(window).height();
      $(this).find('span').css({'width':'0'});
      if( pos + 200 < scroll + windowHeight ){// 100 = 足したい任意のpx
        var thisWidth = $(this).outerWidth(true);
        var markerHeight = 10 + 'px';
        $(this).find('span').css({ 'width': thisWidth , 'height' : markerHeight });
      } else {
        $(this).find('span').css({ 'width' : '0' });
      };
    });
  });
});
