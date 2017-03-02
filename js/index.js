$( document ).ready(function() {
	console.log('ready')

	$(function(){  
		var wrapper = $("#wrapper"),
    $menu = $("#menu"),
    $window = $(window);

    $menu.on("click","a", function(){
    var $this = $(this),
        href = $this.attr("href"),
        topY = $(href).offset().top;
   
    TweenMax.to($window, 1, {
        scrollTo:{
            y: topY, 
            autoKill: true
        }, 
        ease:Power3.easeOut 
     });

    return false;
	});  
});