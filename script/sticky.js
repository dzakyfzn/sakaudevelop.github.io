$(window).scroll(function(){
    if($(window).scrollTop()){
        $(".navbar-main").addClass("sticky");
    }
    else{
        $(".navbar-main").removeClass("sticky");
    }
});