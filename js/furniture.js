	function move(){
	$('.mouse img').animate({'top':16},1000,function(){
		$('.mouse img').css({'top':20})
		})
	
	}
setInterval(move,1000);
window.onload=function(){
    	$(window).scroll(function(){
	var $top=$(window).scrollTop();
	
		 	if($top>0){
		$('.navs').slideDown();
		$('.dis_none').hide();
		}else 
		{
		$('.navs').slideUp();
		$('.dis_none').show();
			}
		});

var $h=$(window).height();
var $w=$(window).width();
$('#myCarousel img').css({'width':'100%','height':$h})
$('.banner2').css({'height':$h})
$('#myCarouse2 img').css({'width':1200,'height':410})
$('#myCarouse2 .carousel-inner').css({'overflow':'hidden','height':410})


     var speed=500;
	 var intervalTime=5000;
	 var width=724;
	 var $imagesList=$('.banner2 .photo ul');
	var nowimg = 0;		
	var imageAmount =$('.banner2 .photo ul li').length;
	$(".banner2 .photo li:first").clone().appendTo(".banner2 .photo ul");
	var $circles = $(".banner2 .text li");
	
	$(".banner2 .photo .go_r").click(rightBtnFunc);	
	function rightBtnFunc(){
		if(!$imagesList.is(":animated")){
			if(nowimg < imageAmount - 1){
				nowimg ++;
				normalAnimate();	
			}else{
				nowimg = 0;
				$imagesList.animate({"left" : imageAmount * -width} , speed, function(){
					$(this).css("left" , 0);	
				});
			}
			changeCircle();	
		}
	}
	$(".banner2 .photo .go_l").click(function(){
		if(!$imagesList.is(":animated")){
			if(nowimg > 0){
				nowimg --;
				normalAnimate();	
			}else{
				nowimg = imageAmount - 1;
				$imagesList.css("left" , imageAmount * -width);
				normalAnimate();	
			}
			changeCircle();	
		}
	});
	function normalAnimate(){
		$imagesList.animate({"left" : nowimg * -width} , speed);
	}
	function changeCircle(){
		$circles.eq(nowimg).addClass("cur").animate({'margin-top':0,'opacity':1},speed).siblings().removeClass("cur").css({'margin-top':100,'opacity':0});
	}
	var timer = setInterval(rightBtnFunc,intervalTime);
	$(".carousel").mouseenter(function(){
		clearInterval(timer);
	});
	$(".carousel").mouseleave(function(){
		clearInterval(timer);
		timer = setInterval(rightBtnFunc,intervalTime);
	});


$('.overview form dd').click(function(){
$(this).addClass('cur').siblings().removeClass();	
	});
}


/*2016.2.20*/
			// $('.overview form p em').html(''+$('.overview form dd ').eq(0).find('a').attr('alt')+'')
     var  $sum=0;
	 var $val=1;
	 var $x = parseInt($(".time>dd.cur>a>span").data("price"));
  
  $('.overview form dd').click( add );
  
	function add(){
	    //$sum=parseInt($('.overview form dd ').eq($(this).index()-1).find('a').attr('alt'));
	    $sum = parseInt($(".time>dd.cur>a>span").data("price"));
		$x=$sum;
		$('.amount').attr('value','1')
		$val=1;
	  $(this).addClass('cur').siblings().removeClass();
	  $('.overview form p em').html("￥" + $x);
	 }
 $('.reduce').click(function(){
	 $val--;
   if($val<1){$val=1};
   $('.amount').attr('value', '' + $val + '');
   $x = parseInt($(".time>dd.cur>a>span").data("price"));
   $('.overview form p em').html("￥" + $x * $val);
	 })
 $('.add').click(function(){
     if ($val > 0) { $val++ };
     $x = parseInt($(".time>dd.cur>a>span").data("price"));	 
	 $('.amount').attr('value',''+$val+'');
	 $('.overview form p em').html("￥" + $x * $val);
	 })

$('div.card a').append('<u></u>');
$('div.card a').click(function(){
	$(this).addClass('cur').siblings().removeClass('cur');
	});
