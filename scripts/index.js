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
        initLottie(){
            $('.banner-wave').each(function(){
                var waveFileName = $(this).attr("data-wave-filename");
                lottie.loadAnimation({
                    container: this, // the dom element that will contain the animation
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    path: `scripts/${waveFileName}` // the path to the animation json
                });
                $(this).removeAttr("data-wave-filename");
            });
        }
    }

	jQuery(document).ready( function() {

        /* Load All Independent Components first */

        /* Initialize Lottie */
        app.initLottie();



        /* Load per section function after */

		/* Initialize Header */
		app.initHeader();
	});
})();
