var height=$('.left').height();
$(window).scroll(function()
{if($(this).scrolltop()>height){
    $('.nav').addclass('fixed');  
}else{
    $('.nav').removeclass('fixed');
}

}
);