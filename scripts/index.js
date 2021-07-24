( function() {

	var app = {
        initHeader: function(){
            jQuery('.header__hamburger').on("click",function(){
                jQuery('.header__nav').toggleClass("header__nav--hide");
            });

            jQuery('.header__nav .nav-close').on("click",function(){
                jQuery('.header__nav').toggleClass("header__nav--hide");
            });
        },
    }

	jQuery(document).ready( function() {

		/* Initialize Header */
		app.initHeader();
	});
})();
