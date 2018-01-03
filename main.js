(function($) {

  /*  var scaleBg = function () {
    	var h = $('header');
    	g = h.width() * 730/1600;
    	$('header').height(g).css('max-height', 750 + 'px');;

    	var a = $('.about');
    	b = a.width() * 710/1600;
    	$('.about').height(b).css('max-height', 710 + 'px');

    	var c = $('.ingredients');
    	d = c.width() * 750/1600;
    	$('ingredients').height(d).css('max-height', 758 + 'px');

    	var e = $('.menu');
    	f = e.width() * 994/1600;
    	$('menu').height(f).css('max-height', 994 + 'px');

    	var i = $('.reviews');
    	j = i.width() * 758/1600;
    	$('.reviews').height(j).css('max-height', 758 + 'px');

    	var k = $('.reservations');
    	l = k.width() * 710/1600;
    	$('.reservations').height(l).css('max-height', 710 + 'px');
    }
*/
	$(document).ready(function () {
		
         $('.swing').click(function () {
            var href = $(this).attr('href');
            $(href).addClass("animated swing");
            $('html, body').animate({
                scrollTop: $(href).offset().top 
            }, 800);
            return false;
        });

       

            var lastId,
                topMenu = $("#nav"),
                topMenuHeight = topMenu.outerHeight(),
                menuItems = topMenu.find("a"),

   
            scrollItems = menuItems.map(function(){
              var item = $($(this).attr("href"));
              if (item.length) { return item; }
            });


            menuItems.click(function(e){
              var href = $(this).attr("href"),
                  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
              $('html, body').stop().animate({ 
                  scrollTop: offsetTop
              }, 300);
              e.preventDefault();
            });

     
            $(window).scroll(function(){
   
               var fromTop = $(this).scrollTop()+topMenuHeight;
               
              
               var cur = scrollItems.map(function(){
                 if ($(this).offset().top < fromTop)
                   return this;
               });
              
               cur = cur[cur.length-1];
               var id = cur && cur.length ? cur[0].id : "";
               
               if (lastId !== id) {
                   lastId = id;
                   menuItems
                     .parent().removeClass("active")
                     .end().filter("[href='#"+id+"']").parent().addClass("active");
               }                   
            });

    
    
        $(window).scroll(function() {
            
            if ( $(window).width() > 1220 ) {
                
                if ($(document).scrollTop() > $('.navigation').outerHeight()) {
                    $('body').addClass('fixed').animate();
                } else {
                    $('body').removeClass('fixed');
                }
    
            }
            
        });

        $("#back-top").hide();
        
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
                }
            });

            $('#back-top a').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        });

        if ( $(window).width() < 1221 ) {
            $('#menu-button').click(function(){
                $(this).toggleClass('open');
            });    
        }

		$(window).resize(function() {          
			$('.right-nav').removeAttr('style');
            navHeight = $('.right-nav').height();
            $('.right-nav').css('height', 0);
            $('#menu-button').removeClass('open');
    	});

         var navHeight = $('.right-nav').height();
            $('.right-nav').height(0);

            $('#menu-button').click(function() {
                tempNavHeight = $('.right-nav').height() <= 28 ? navHeight : 0;
                console.log(tempNavHeight + ' ' + navHeight);
                $('.right-nav').height(tempNavHeight);
                return false;
        });

        //slider
        $('.comments').slick({
            //setting-name: setting-value
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            autoplaySpeed: 4000,
            focusOnSelect: true,
            adaptiveHeight: false,
            asNavFor: '.captions',
            arrows: false
        });

        $('.captions').slick({
          asNavFor: '.comments',
          fade: true,
          arrows: false,
          speed: 500
        });

	});

}) (jQuery);



