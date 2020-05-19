jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 1) {
        jQuery('.header').addClass("sticky");
    } else {
        jQuery('.header').removeClass("sticky");
    }
});


$(document).ready(function () {
    $('.nav-icon').click(function () {
        $('body').toggleClass('open');
        $('.nav-icon').toggleClass('open');
    });

    $('.checkbox input').after('<span class="checkmarks"></span>');
    
    $("ul.topmenu > li.menu-item-has-children").addClass("arrows");
    $('ul.topmenu li.menu-item-has-children').append('<span class="click_menu"></span>');

    $('ul.topmenu li .click_menu').on('click', function (event) {
        $(this).parent().siblings().removeClass('open2');
        $(this).parent().toggleClass('open2');
    });



    $(".scroll, nav > ul > li > a").click(function (event) {
        event.preventDefault();
        $('html,body').stop().animate({
            scrollTop: ($(this.hash).offset().top)
        }, 2000, 'easeOutCirc');
    });

    $('.backbg').each(function () {
        var backbgPath = $(this).attr('src');
        $(this).parent('.backbgbox').css('background-image', 'url(' + backbgPath + ')');
    });

   
  


    function figPadding() {
        var windowWidth = $(window).outerWidth();
        var containerWidth = $('.container').outerWidth();
        var totalWidth = (windowWidth - containerWidth) / 2;
        $('.product_sec_left').css('padding-left', totalWidth);
        $('.creative_sec_right').css('padding-right', totalWidth);
    }
    figPadding();


});



$(window).on('load', function (e) {

    
    function figPadding() {
        var windowWidth = $(window).outerWidth();
        var containerWidth = $('.container').outerWidth();
        var totalWidth = (windowWidth - containerWidth) / 2;
        $('.product_sec_left').css('padding-left', totalWidth);
        $('.creative_sec_right').css('padding-right', totalWidth);
    }
    figPadding();
    
 

});

$(window).on('resize', function (e) {

    
    function figPadding() {
        var windowWidth = $(window).outerWidth();
        var containerWidth = $('.container').outerWidth();
        var totalWidth = (windowWidth - containerWidth) / 2;
        $('.product_sec_left').css('padding-left', totalWidth);
        $('.creative_sec_right').css('padding-right', totalWidth);
    }
    figPadding();
    
   
}); 