/*==============================================================================
 * Template Name: templateNameHere
 * Author: authorName
 * Version: 1.0
 * Copyright 2020 authorName
==============================================================================*/
(function ($) {
    "use strict";

    $(window).on('load', function () {
        preLoader();
    });

    $(document).ready(function () {
        
    });

    // PreLoader Init
    function preLoader() {
        $('body').addClass('loaded');
        $('.preloader-wrapper').addClass('loaded');
    };

})(jQuery);