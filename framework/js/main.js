// Esto es del menu5
$(document).ready(function() {
    $('ul.form li a').click(
        function(e) {
            e.preventDefault();
            e.stopPropagation;
            $(this).closest('ul').find('.selected').removeClass('selected');
            $(this).parent().addClass('selected');
        });
});

// Esto es del form2
$(".name").focus(function(){
  $(".name-help").slideDown(500);
}).blur(function(){
  $(".name-help").slideUp(500);
});

$(".email").focus(function(){
  $(".email-help").slideDown(500);
}).blur(function(){
  $(".email-help").slideUp(500);
});

// Esto es del form3
$(document).ready(function(){
   setInterval(function() {
$("input[type=text]").each(function() {
   var element = $(this);
   if (element.val() !== "") {
     $(this).css({
       boxShadow: 'inset 8px 0px 0  #2ecc71',
       paddingLeft: '12px'})
   }
   var element = $(this);
   if (element.val() == "") {
       $(this).css('border-left', '1px solid #ccc')
   }
});
}, 200);
});

// Esto es del form3
$(document).ready(function(){
   setInterval(function() {
$("input[type=text]").each(function() {
   var element = $(this);
   if (element.val() !== "") {
     $(this).css({
       boxShadow: 'inset 8px 0px 0  #2ecc71',
       paddingLeft: '12px'})
   }
   var element = $(this);
   if (element.val() == "") {
       $(this).css('border-left', '1px solid #ccc')
   }
});
}, 200);
});


	//animacion menu

jQuery(document).ready(function($){
	var isLateralNavAnimating = false;

	//Abrir /barra de navegacion principal
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		//cerrar barra de navegacion principal
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true;

			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//la animacion termina
				isLateralNavAnimating = false;
			});
		}
	});

});


! function(a) {
    "use strict";
    a(document).ready(function() {
        function b() {
            window.location = i
        }
        var e = a(".site-title"),
            f = a("body");
        setTimeout(function() {
            f.addClass("loaded")
        }, 150);
        var g = a(".project-assets").children("div");
        a.each(g, function(b, c) {
            var d = a(this);
            d.imagesLoaded(function() {
                setTimeout(function() {
                    d.addClass("loaded")
                }, 50 + 150 * b)
            })
        });
        var h = a(".projects-feed .project");
        a.each(h, function(b, c) {
            var d = a(this);
            d.imagesLoaded(function() {
                setTimeout(function() {
                    d.addClass("loaded")
                }, 50 + 50 * b)
            })
        });
        var i;
        a("a").on("click", function(a) {
            return "" == this.href || null == this.href ? void a.preventDefault() : void(-1 == this.href.indexOf("#") && -1 == this.href.indexOf("mailto:") && -1 == this.href.indexOf("javascript:") && "_blank" != this.target && (a.preventDefault(), i = this.href, f.removeClass("loaded"), setTimeout(b, 250)))
        })
    })
}(window.jQuery);
