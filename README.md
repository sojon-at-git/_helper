# jQuery Shortcodes

## Set Height of an Element
```javascript
// set-element-height
function setElementHeight() {
	var headerHeight = $('.element').innerHeight();
	$('.element').before('<div style="height:'+headerHeight+'px"></div>');
}
setElementHeight();
```
***
## Header PinUnpin
```javascript
// headerPinUnpin init
function headerPinUnpin() {
    var lastScroll = 0;
    window.onscroll = function() {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        //scroll amount 50
        if (currentScroll > 50 && lastScroll <= currentScroll){
            lastScroll = currentScroll;
            $("header_selector").addClass("header_unpinned_class");
        }else{
            lastScroll = currentScroll;
            $("header_selector").removeClass("header_unpinned_class");
        }
    }
};
headerPinUnpin();
```
***
## Header Fixed on scroll
```javascript
// Header Fixed on scroll Init
function headerFixed() {
    // scroll amount 100
    if ($(window).scrollTop() >= 100) {
        $("header_selector").addClass("header_fixed_class");
    } else {
        $("header_selector").removeClass("header_fixed_class");
    }
};
headerFixed();
```
***
## Inline Background Image
```javascript
// Inline BackgroundImage Init
function backgroundImage() {
    $('[data-bgi]').each(function () {
        $(this).addClass('data-bgi-init');
        var src = $(this).attr('data-bgi');
        $(this).css({
            'background-image': 'url(' + src + ')'
        });
    });
};
backgroundImage();
```
***
## Inline Background Color
```javascript
// Inline BackgroundColor Init
function backgroundColor() {
    $('[data-bgc]').each(function () {
        var colorCode = $(this).attr('data-bgc');
        $(this).css({
            'background-color': colorCode
        });
    });
};
backgroundColor();
```
***

## isotope filter and button active
```html
<!-- isotope filter-buttons -->
<div class="filter-buttons">
    <button class="active" data-filter="*">All</button>
    <button data-filter=".one">One</button>
    <button data-filter=".two">Two</button>
    <button data-filter=".three">Three</button>
</div>
<!-- filter-wrap -->
<div class="filter-wrap">
    <div class="one">Filter Item One</div>
    <div class="two">Filter Item Two</div>
    <div class="three">Filter Item Three</div>
</div>

```
```javascript
// Isotope filter init
function filterWrapInit() {
    var $gridt = $(".filter-wrap");
    $gridt.isotope();
    $(".filter-buttons").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $gridt.isotope({
            filter: filterValue
        });
        $(this).addClass("active").siblings().removeClass("active");
    });
};
filterWrapInit();
```