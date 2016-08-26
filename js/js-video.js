//function move(){
//	$('.mouse img').animate({'top':16},1000,function(){
//		$('.mouse img').css({'top':20})
//		})
//	
//	}
//setInterval(move,1000);


/*与响应式无关的部分^*/
$(window).resize(function () {
    var $w = $(window).width();
    var $h = $(window).height();
    var $big_img = $('.big_img').height();
    $('.floor2').height($big_img);
    $('.floor1').css({ 'width': $w, 'height': $h })
    $(' .vedio').css({ 'width': $w, 'height': $h - 50, 'margin-left': -$w * 0.5, 'margin-top': -$h * 0.5 })
    $('.vedio .poa-f').css({ 'margin-left': -500, 'margin-top': -333 })
    $('.vedio .poa-f .carousel ul.imageslist li').css({ 'width': 1000, 'height': 667 })
    $('.vedio .poa-f .carousel').css({ 'width': 1000, 'height': 667 })
    $('.carousel ul.imageslist li img').css({ 'width': '100%', 'height': '100%' })
    /*$('.floor1 .banners').css({'width':$h,'height':$h})
    var $wrod_h=$('.floor1 .word').height();
    $('.floor1 .banners').css({'width':$w*0.6,'height':$h})
    $('.floor1 .word').css({'widht':$w*0.4,'margin-top':($h-$wrod_h)/2})
    $('.floor1 .banners img').css({'width':$w*0.6,'height':$h});
    /*$('.floor1 .banner').css('top',-$h);*/
    $('.floor1:before').css({ 'top': 0 });
    var $photo_w = $('.floor3 .photo').width();
    var $photo_h = 656 * $photo_w / 1166;
    $('.floor3 .photo').css({ 'height': $photo_h });

    function down() {
        $('.floor1 .banner').animate({ 'top': 0 }, 1500, $.easie(0.729, 0.853, 0.798, 0.678), function () {
            $('.floor1 .content').animate({ 'left': '8%', 'opacity': 1 }, 1000, $.easie(0.584, 0.692, 0.654, 0.761))
        })
    }

    var $padding_top = $('.floor3 .date').css('padding-top');
    $('.floor3 .bottom .message').css({ 'top': $padding_top });
    setTimeout(down, 1500)

    $('.floor1 .content a').click(function () {

        $('.floor1 div.vedio').slideDown(1000);
        $('.floor1 div.closed').show();

    })
    $('.floor1 div.closed').click(function () {
        $('.floor1 div.closed').hide();
        $('.floor1 div.vedio').slideUp(1000);
    })


});
/*楼上响应窗口拉动^*/
window.onload = function () {
    var $w = $(window).width();
    var $h = $(window).height();
    var $big_img = $('.big_img').height();
    $('.floor2').height($big_img);
    $('.floor1').css({ 'width': $w, 'height': $h })
    $('.vedio').css({ 'width': $w, 'height': $h - 50/*,'margin-left':-$w*0.5,'margin-top':-$h*0.5*/ })

    $('.vedio .poa-f').css({ 'margin-left': -500, 'margin-top': -333 })

    $('.floor1 .banner').css('top', -$h);
    $('.floor1:before').css({ 'top': 0 });
    var $wrod_h = $('.floor1 .word').height();
    $('.floor1 .word').css({ 'margin-top': ($h - $wrod_h) / 2 });
    /* $('.vedio .poa-f .carousel ul.imageslist').css({'height':1000})*/
    var $control_h = $('.product-item .control').height();
    $('.product-item .control').css({ 'padding-top': ($h - $control_h) / 2 })
    $('#identifier').carousel('cycle')
    $('#identifier').carousel({
        interval: 2000
    })
    $('.vedio .poa-f .carousel ul.imageslist li').css({ 'width': 1000, 'height': 667 })
    $('.vedio .poa-f .carousel').css({ 'width': 1000, 'height': 667 })
    $('.vedio .poa-f ').css({ 'width': 1000, 'height': 667 })

    $('.link_to li.img p').html('拍摄<br/>花絮');
    $('.link_to li.tex p').html('影片<br/>详细');

    /*$('.floor1 .banners').css({'width':$h,'height':$h})
    $('.floor1 .word').css({'widht':$w-$h})*/
    $('.floor1 .banners').css({ 'width': $w * 0.6, 'height': $h })
    $('.floor1 .word').css({ 'widht': $w * 0.4, 'margin-top': ($h - $wrod_h) / 2 })
    $('.floor1 .banners img').css({ 'width': $w * 0.6, 'height': $h });

    $('.carousel ul.imageslist li img').css({ 'width': '100%', 'height': '100%' })

    var $photo_w = $('.floor3 .photo').width();
    var $photo_h = 656 * $photo_w / 1166;
    $('.floor3 .photo').css({ 'height': $photo_h });
    function down() {
        $('.floor1 .banner').animate({ 'top': 0 }, 1500, $.easie(0.729, 0.853, 0.798, 0.678), function () {
            $('.floor1 .content').animate({ 'left': '8%', 'opacity': 1 }, 1000, $.easie(0.584, 0.692, 0.654, 0.761))
        })
    }
    var $padding_top = $('.floor3 .date').css('padding-top');
    $('.floor3 .bottom .message').css({ 'top': $padding_top });
    setTimeout(down, 1500)

    $('.floor1 .content a').click(function () {

        $('.floor1 div.vedio').slideDown(1000);
        $('.floor1 div.closed').show();

    })
    $('.floor1 div.closed').click(function () {
        $('.floor1 div.closed').hide();
        $('.floor1 div.vedio').slideUp(1000);
    })

    $('.link_to li').click(function () {
        $(this).parents('.control').siblings('.alert').children('div').eq($(this).index()).slideDown(1000).siblings().slideUp(1000);
    })
    $('.alert .closed').click(function () {
        $(this).parent('div').slideUp(1000);
    })


    var $fl2 = 0;
    if ($('.floor2').offset() != undefined)
        $fl2 = $('.floor2').offset().top;
    var $fl3 = 0;
    if ($('.floor3').offset() != undefined)
        $fl3 = $('.floor3 .bottom').offset().top;
    var $fl4 = 0;
    if ($('.floor4').offset() != undefined)
        $fl4 = $('.floor4 .wrap').offset().top;
    /*	$(document).mousewheel(function(event, delta) {	
    var $height = parseFloat($(document).scrollTop());
    if(delta===1){
    if($height>0){
    $('.navs').slideDown();
    }else 
    {
    $('.navs').slideUp();
			
    }}

    });*/

    $(window).scroll(function () {
        var $top = $(window).scrollTop();

        function mg_l() { $('.mg_l').animate({ 'margin-left': 0, 'opacity': 1 }, 2000, $.easie(0.633, 0, 0.967, 0.644)) };
        /*function  opacity(){$('.opacity').animate({'opacity':1},2000,'easieEaseInOut')};*/
        /*opacity();*/
        function mg_r() { $('.mg_r').animate({ 'margin-right': 0, 'opacity': 1 }, 2000, 'easieEaseInOut') };
        function mg_l2() { $('.mg_l2').animate({ 'margin-left': 0 }, 2000, 'easieEaseInOut') };
        setTimeout(mg_l, 50)
        setTimeout(mg_r, 500)
        setTimeout(mg_l2, 500)
        /*setTimeout(opacity,500)*/
        if ($top > 0) {
            $('.navs').slideDown();
            $('.floor1 .logo').hide();
        } else {
            $('.navs').slideUp();
            $('.floor1 .logo').show();
        }

        if ($top > $fl2 - ($('.floor2').height() / 2)) {
            /*if( $('.floor2').scrollTop()===0){*/
            $('.floor2 .big_img').addClass('mg_l ');
            $('.floor2 .text').addClass('mg_r  ');
        }
        if ($top > $fl3 - ($('.floor3 .bottom').height() - 200)) {
            /*$('.floor3 .bottom .message li').eq(0).find('em').animate({'margin-top':0,'opacity':1},1000,function(){
            $('.floor3 .bottom .message li').eq(0).find('p').animate({'margin-top':0,'opacity':1},800,'easieEase')
            $('.floor3 .bottom .message li').eq(0).find('span').animate({'opacity':1},1000,'easieEase' )
            })*/

            $('.floor3 .bottom .photo li ').addClass('go');

        }
        if ($top > $fl4 - ($('.floor4 .wrap').height() / 4)) {

            $('.floor4 .wrap li').addClass('mg_l2 ');
        }
    })

    $('.floor3 .bottom .message li').eq(0).find('em').css({ 'margin-top': 0, 'opacity': 1 });
    $('.floor3 .bottom .message li').eq(0).find('p').css({ 'margin-top': 0, 'opacity': 1 });
    $('.floor3 .bottom .message li').eq(0).find('span').css({ 'margin-top': 0, 'opacity': 1 });



    var $num = 0;
    var $length = $('.floor3 .bottom .photo ul li').length;

    $(' .floor3 .bottom .message .arrow .go_r span').click(right_btn)

    function li() {

        $('.floor3 .bottom .message li').eq($num).addClass('cur').siblings().removeClass('cur');
        $('.floor3 .bottom .message ul.up li').find('em').css({ 'margin-top': 50, 'opacity': 0 });
        $('.floor3 .bottom .message  ul.up li').find('p').css({ 'margin-top': 50, 'opacity': 0 });
        $('.floor3 .bottom .message li').find('span').css({ 'opacity': 0 });
        $('.floor3 .bottom .message li.cur').find('em').animate({ 'margin-top': 0, 'opacity': 1 }, 1000, function () {
            $('.floor3 .bottom .message li.cur').find('p').animate({ 'margin-top': 0, 'opacity': 1 }, 800, 'easieEase')
            $('.floor3 .bottom .message li.cur').find('span').animate({ 'opacity': 1 }, 1000, 'easieEase')
        })
    }

    function right_btn() {
        $(' .floor3 .bottom .message .arrow .go_l span').show();
        $num++;
        if ($num > $length - 1) {
            $num = $length - 1;
            $(this).hide();
        }
        li();
        index();
        img();
    }
    $(' .floor3 .bottom .message .arrow .go_l span').click(left_btn)
    function left_btn() {
        $(' .floor3 .bottom .message .arrow .go_r span').show();
        $num--;
        if ($num < 1) {
            $sum = 0;
            $(this).hide();
        }
        li();
        index();
        img();
    }


    $('.floor3 .year li').click(function () {
        $('.floor3 .bottom .message li').eq($num).removeClass();
        $num = $(this).index();
        $('.floor3 .bottom .message li').eq($num).addClass('cur');
        $('.floor3 .bottom .message li').find('em').css({ 'margin-top': 50, 'opacity': 0 });
        $('.floor3 .bottom .message li').find('p').css({ 'margin-top': 50, 'opacity': 0 });
        $('.floor3 .bottom .message li').find('span').css({ 'opacity': 0 });
        $('.floor3 .bottom .message li.cur').find('em').animate({ 'margin-top': 0, 'opacity': 1 }, 1000, function () {
            $('.floor3 .bottom .message li.cur').find('p').animate({ 'margin-top': 0, 'opacity': 1 }, 800, 'easieEase')
            $('.floor3 .bottom .message li.cur').find('span').animate({ 'opacity': 1 }, 1000, 'easieEase')
        })
        index();
        img();
    });

    function index() { $('.floor3 .year li').eq($num).addClass('cur').siblings().removeClass('cur'); };
    function img() {
        $('.floor3 .bottom .photo li').eq($num).fadeIn(500).siblings().fadeOut(500);
    };

}
	
	
	
