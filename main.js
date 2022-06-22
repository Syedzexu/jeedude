var height=$('.left').height();
$(window).scroll(function()
{if($(this).scrolltop()>height){
    $('.nav').addclass('fixed');  
}else{
    $('.nav').removeclass('fixed');
}

}
);

burger=document.querySelector('.burger')
nav=document.querySelector('.nav')
 burger.addeventlistener('click',() =>{
     nav.classlist.toggle('visi');

 }
)
