
$('.fix .form_top li').click(function(){
	$(this).addClass('cur').siblings().removeClass();
	$('.form_bottom li').eq($(this).index()).show().siblings().hide();
	});
	
			/*  $(window).scroll(function(){
			var $nav_x=parseInt($('.navs .container').offset().left);
			  var $nav_y=parseInt($('.navs .container').offset().top);
			 var $height = $(document).scrollTop();
          			 if($height>=126){ $('.navs .container').css({'position':'fixed',
					  		'top':0,
							'left':$nav_x
					    });
						$('.navs .control').hide();
						
						$('http://www.chuangyesan.com/js/.navs .left').mouseenter(function(){
							$('.navs .control').stop(true).slideDown();
							})
						$('http://www.chuangyesan.com/js/.navs .left').mouseleave(function(){
							$('.navs .control').stop(true).slideUp();
							})
						
						}else if($height<126){$('.navs .container').css({'position':'static'});
						};
 });*/
 


 //修改版               
$('.navs .container').css({'width':'1226px','margin':'auto'})
$('.navs').css({'width':'100%','z-index':'1000','background-color':'#fff'});
 
 $('.navs .control').hide();
 
 
/*			
 $(window).scroll(function(){
 			  var $nav_x=parseInt($('.navs ').offset().left);
			  var $nav_y=parseInt($('.navs ').offset().top);
				 var $height = $(document).scrollTop();
		 
           				    if($height>126){ $('.navs ').css({'position':'fixed',
					  		'top':0,
							'left':$nav_x,
							'margin-top':0
					    });
						$('.navs .control').hide();
						
						$('http://www.chuangyesan.com/js/.navs .left').mouseenter(function(){
							$('.navs .control').stop(true,true).slideDown();
							})
						$('http://www.chuangyesan.com/js/.navs .left').mouseleave(function(){
							$('.navs .control').stop(true,true).slideUp();
							})
						
						} else if($height<126){$('.navs ').css({'position':'static','margin-top':'50px'});
						$('.navs .control').hide();
						$('http://www.chuangyesan.com/js/.navs .left').mouseleave(function(){
							$('.navs .control').stop(true,true).hide();
							})
						$('http://www.chuangyesan.com/js/.navs .left').mouseover(function(){
							$('.navs .control').stop(true,true).hide();
							})
						};

 });
 
 */
/*2015.11.10*/
$('.searchs form a').click(function(){
	$('.fix').slideDown(200);
	});
	
	$('.inner >p >span').click(function(){
	$('.fix').hide();
		})
		
		$('.form-group .content a ').click(function(){
			$(this).addClass('cur').siblings().removeClass('cur');
			
			})
			
$('.message li ').click(function(){
		if($(this).hasClass('cur')){
		$(this).removeClass('cur').find('span').removeClass('glyphicon-ok');
		}else{$(this).addClass('cur').find('span').addClass('glyphicon-ok');}
	})
	$('.choice em ').click(function(){
		if($(this).hasClass('cur')){
		$(this).removeClass('cur');
		}else{$(this).addClass('cur');}
	})