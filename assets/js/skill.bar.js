(function ($) {
    "use strict";

    /*==========================
        About Area
    ============================*/

    let offsetTop = $('#skills').offset().top;
    $(window).on('scroll', function () {
        let height = $(window).height();
        if ($(window).scrollTop() + height > offsetTop) {
            jQuery('.skillbar').each(function () {
                jQuery(this).find('.skillbar-bar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 1000);
            });
        }
    });

}(jQuery));
