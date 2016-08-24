$('.fix .form_top li').click(function () {
    $(this).addClass('cur').siblings().removeClass();
    $('.form_bottom li').eq($(this).index()).show().siblings().hide();
});
$('.nav li').click(function () {
    $(this).addClass('cur').siblings().removeClass('cur');
})
$('.fix .form_top li').click(function () {
    $(this).addClass('cur').siblings().removeClass();
    $('.form_bottom li').eq($(this).index()).show().siblings().hide();
});
$('http://www.chuangyesan.com/js/.navs .left').mouseenter(function () {
    $('.navs .control').stop(true, true).slideDown();
})
$('http://www.chuangyesan.com/js/.navs .left').mouseleave(function () {
    $('.navs .control').stop(true, true).slideUp();
})

$(window).scroll(function () {
    var $nav_x = 0;
    if ($('.nav ').offset() != undefined) { $nav_x = parseInt($('.nav ').offset().left); }
    var $nav_y = 0;
    if ($('.nav ').offset() != undefined) { $nav_y = parseInt($('.nav ').offset().top); }
    var $height = $(document).scrollTop();
    var $column1 = 0;
    if ($('#content').offset() != undefined) { $column1 = parseInt($('#content').offset().top - 10); }
    var $column2 = 0;
    if ($('#why').offset() != undefined) {
        $column2 = parseInt($('#why').offset().top - 10);
    }
    var $column3 = 0;
    if ($('#charge').offset() != undefined) { $column3 = parseInt($('#charge').offset().top - 10); }
    var $column4 = 0;
    if ($('#problem').offset() != undefined) { $column4 = parseInt($('#problem').offset().top - 10); }
    if ($height >= 660) {
        $('.nav ').css({ 'position': 'fixed',
            'top': 0,
            'left': $nav_x,
            'margin-top': 0,
            'z-index': '1000'
        });
    } else if ($height < 660) {
        $('.nav').css({ 'position': 'static', 'margin-top': '28px' });
    };
    if ($height > $column1 && $height < $column2) {
        $('.nav .container ul li:eq(0)').addClass('cur').siblings().removeClass();
    } else
        if ($height > $column2) {
            $('.nav .container ul li:eq(1)').addClass('cur').siblings().removeClass();
        };
    if ($height > $column3) {
        $('.nav .container ul li:eq(2)').addClass('cur').siblings().removeClass();
    };
    if ($height > $column4) {
        $('.nav .container ul li:eq(3)').addClass('cur').siblings().removeClass();
    };


});     /*
$('.service form dd').click(function () {
    $(this).addClass('cur').siblings().removeClass('cur')
})
*/
$('.nav li').click(function () {
    $(this).addClass('cur').siblings().removeClass('cur');
})

$('.translation .container .lefts p').click(function () {
    $('.translation .container .middle ul:eq(0) li').eq($(this).index() - 1).show().siblings().hide();
    $(this).addClass('cur').siblings().removeClass('cur');
    $('.translation .container .right p').removeClass('cur');
    $('.translation .container .middle ul:eq(1) li').hide();
})
$('.translation .container .right p').click(function () {
    $('.translation .container .middle ul:eq(1) li').eq($(this).index()).show().siblings().hide();
    $(this).addClass('cur').siblings().removeClass('cur');
    $('.translation .container .lefts p').removeClass('cur');
    $('.translation .container .middle ul:eq(0) li').hide();
})