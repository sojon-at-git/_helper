/*==============================================================================
 * Template Name: Timeframe - Personal Blog Template
 * Author: Themefisher
 * Version: 1.0
 * Copyright 2020 Themefisher
==============================================================================*/

(function ($) {
    "use strict";

    $(window).on('load', function () {
        preLoader();
        isotopeInit();
    });

    $(document).ready(function () {
        searchToggle();
        selectricSelect();
    });

    // PreLoader Init
    function preLoader() {
        $('body').addClass('loaded');
        $('.preloader-wrapper').addClass('loaded');
    };

    // searchToggle Init
    function searchToggle() {
        $('.search-btn').on('click', function() {
            $('.search-wrapper').addClass('showSearch');
        });
        $('.search-close-wrap, .search-close-btn').on('click', function() {
            $('.search-wrapper').removeClass('showSearch');
        });
    };

    // selectricSelect Init
    function selectricSelect() {
        $('select').selectric();
    };

    // isotope init
    function isotopeInit() {
        $('.mesonary-init').isotope();
    };

})(jQuery);