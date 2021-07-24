( function() {

	var app = {
        initHeader: function(){
			var scrollval = jQuery(window).scrollTop();
			if(scrollval > 100){
			    jQuery('.header').addClass('header--shrink');
			}else{
			    jQuery('.header').removeClass('header--shrink');
			}

			jQuery(document).on("scroll",function(){
			    var scrollval = jQuery(window).scrollTop();
                if(scrollval > 100){
                    jQuery('.header').addClass('header--shrink');
                }else{
                    jQuery('.header').removeClass('header--shrink');
                }
			});

            jQuery('.header__hamburger').on("click",function(){
                jQuery('.header__nav').toggleClass("header__nav--hide");
            });

            jQuery('.header__nav .nav-close').on("click",function(){
                jQuery('.header__nav').toggleClass("header__nav--hide");
            });
            
        },

        initBanner: function(){
            lottie.loadAnimation({
                container: document.getElementById('banner-wave'), // the dom element that will contain the animation
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'scripts/data-color-1.json' // the path to the animation json
            });
        }
    }

	jQuery(document).ready( function() {

		/* Initialize Header */
		app.initHeader();

        /* Initialize Banner */
        app.initBanner();
	});
})();
