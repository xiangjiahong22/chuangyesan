 if(document.body.clientWidth>1226){
	 $('body').css('overflow-x','hidden')}else{
		  $('body').css('overflow','visible') }

	//全局变量
	var nowimg = 0;		//信号量，当前显示的图片序号
    var intervalTime=3000;
	var speed=600;
	var width=245;
	//得到图片的总数量
	var imageAmount = $(".imageslist_1 li").length;

	//克隆第一张图片，然后追加到最后一张去
	//clone()就是克隆，但是光克隆没有用，一定要把克隆的元素追加到原有的HTML中。
	//《锋利的jQuery》第62页~72页。稍微看看。
	$(".imageslist_1 li").clone().appendTo(".imageslist_1");

	//得到所有元素，给变量名之前加$，是个约定。一眼就能知道，这个变量存放着jQuery元素。
	var $imagesList = $(".imageslist_1");
	var $circles = $(".num_1 span");

	//右按钮的事件
	$(".rightBtn_1").click(rightBtnFunc);	//有名函数，不要加圆括号！！

	//我们把右按钮要做的事情，单独提炼出一个函数。起名字。
	//这么做的原因，是为了定时器的调用。
	function rightBtnFunc(){
		if(!$imagesList.is(":animated")){
			//分类讨论，现在到底到没到最后一张
			if(nowimg < imageAmount - 1){
				nowimg ++;
				//普通运动，拉到第nowimg这张图片上
				normalAnimate();	//调用函数，普通运动
			}else{
				nowimg = 0;
				//往第5张（假0）身上拉，然后瞬间切换到0。
				$imagesList.animate({"left" : imageAmount * -width} , speed, function(){
					//回调函数
					$(this).css("left" , 0);	//css是瞬间的
				});
			}
			changeCircle();	//调用函数，小圆点
		}
	}

	//左按钮
	$(".leftBtn_1").click(function(){
		if(!$imagesList.is(":animated")){
			//分类，判断现在是不是到头了
			if(nowimg > 0){
				nowimg --;
				normalAnimate();	//调用函数，普通运动
			}else{
				nowimg = imageAmount - 1;
				//到头了，让假0替换真0
				$imagesList.css("left" , imageAmount * -width);
				normalAnimate();	//调用函数，普通运动
			}
			changeCircle();	//调用函数，小圆点
		}
	});

	//小圆点的点击
	$(".num_1 span").click(function(){
		if(!$imagesList.is(":animated")){
			nowimg = $(this).index();
			normalAnimate();//调用函数，普通运动
			changeCircle();	//调用函数，小圆点
		}
	});


	//普通运动，让火车往信号上拉
	function normalAnimate(){
		$imagesList.animate({"left" : nowimg * -width} , speed);
	}

	//小圆点函数，让信号量那个小圆点有cur，其余没有cur
	function changeCircle(){
		$circles.eq(nowimg).addClass("cur_1").siblings().removeClass("cur_1");
	}


	//定时器的业务
	var timer = setInterval(rightBtnFunc,intervalTime);

	//鼠标进入，停止
	$(".carousel_1").mouseenter(function(){
		clearInterval(timer);
	});

	//鼠标离开，继续
	$(".carousel_1").mouseleave(function(){
		clearInterval(timer);
		timer = setInterval(rightBtnFunc,intervalTime);
	});


/*第三个轮播*/


	//全局变量
	var nowimg3 = 0;		//信号量，当前显示的图片序号
    var intervalTime3=3000;
	var speed3=600;
	var width3=$(".imageslist3 li").width();
	//得到图片的总数量
	var imageAmount3 = $(".imageslist3 li").length;

	//克隆第一张图片，然后追加到最后一张去
	//clone()就是克隆，但是光克隆没有用，一定要把克隆的元素追加到原有的HTML中。
	//《锋利的jQuery》第62页~72页。稍微看看。
	$(".imageslist3 li").clone().appendTo(".imageslist3");

	//得到所有元素，给变量名之前加$，是个约定。一眼就能知道，这个变量存放着jQuery元素。
	var $imagesList3 = $(".imageslist3");
	var $circles3 = $(".num3 span");

	//右按钮的事件
	$(".rightBtn3").click(rightBtnFunc3);	//有名函数，不要加圆括号！！

	//我们把右按钮要做的事情，单独提炼出一个函数。起名字。
	//这么做的原因，是为了定时器的调用。
	function rightBtnFunc3(){
		if(!$imagesList3.is(":animated")){
			//分类讨论，现在到底到没到最后一张
			if(nowimg3 < imageAmount3 - 1){
				nowimg3 ++;
				//普通运动，拉到第nowimg这张图片上
				normalAnimate3();	//调用函数，普通运动
			}else{
				nowimg3 = 0;
				//往第5张（假0）身上拉，然后瞬间切换到0。
				$imagesList3.animate({"left" : imageAmount3 * -width3} , speed3, function(){
					//回调函数
					$(this).css("left" , 0);	//css是瞬间的
				});
			}
			changeCircle3();	//调用函数，小圆点
		}
	}

	//左按钮
	$(".leftBtn3").click(function(){
		if(!$imagesList3.is(":animated")){
			//分类，判断现在是不是到头了
			if(nowimg3 > 0){
				nowimg3 --;
				normalAnimate3();	//调用函数，普通运动
			}else{
				nowimg3 = imageAmount3 - 1;
				//到头了，让假0替换真0
				$imagesList3.css("left" , imageAmount3 * -width3);
				normalAnimate3();	//调用函数，普通运动
			}
			changeCircle3();	//调用函数，小圆点
		}
	});

	//小圆点的点击
	$(".num3 span").click(function(){
		if(!$imagesList3.is(":animated")){
			nowimg3 = $(this).index();
			normalAnimate3();//调用函数，普通运动
			changeCircle3();	//调用函数，小圆点
		}
	});


	//普通运动，让火车往信号上拉
	function normalAnimate3(){
		$imagesList3.animate({"left" : nowimg3 * -width3} , speed3);
	}

	//小圆点函数，让信号量那个小圆点有cur，其余没有cur
	function changeCircle3(){
		$circles3.eq(nowimg).addClass("cur3").siblings().removeClass("cur3");
	}


	//定时器的业务
	var timer3 = setInterval(rightBtnFunc3,intervalTime3);

	//鼠标进入，停止
	$(".carousel3").mouseenter(function(){
		clearInterval(timer3);
	});

	//鼠标离开，继续
	$(".carousel3").mouseleave(function(){
		clearInterval(timer3);
		timer3 = setInterval(rightBtnFunc3,intervalTime3);
	});

/*第四个轮播*/


	//全局变量
	var nowimg4 = 0;		//信号量，当前显示的图片序号
    var intervalTime4=3000;
	var speed4=600;
	var width4=$(".customer ul li").width()+90;
	//得到图片的总数量
	var imageAmount4 = $(".customer ul li").length;

	//克隆第一张图片，然后追加到最后一张去
	//clone()就是克隆，但是光克隆没有用，一定要把克隆的元素追加到原有的HTML中。
	//《锋利的jQuery》第62页~72页。稍微看看。
	$(".imageslist4 li").clone().appendTo(".imageslist4");

	//得到所有元素，给变量名之前加$，是个约定。一眼就能知道，这个变量存放着jQuery元素。
	var $imagesList4 = $(".imageslist4");
	var $circles4 = $(".num3 span");

	//右按钮的事件
	$(".rightBtn4").click(rightBtnFunc4);	//有名函数，不要加圆括号！！

	//我们把右按钮要做的事情，单独提炼出一个函数。起名字。
	//这么做的原因，是为了定时器的调用。
	function rightBtnFunc4(){
		if(!$imagesList4.is(":animated")){
			//分类讨论，现在到底到没到最后一张
			if(nowimg4 < imageAmount4 - 1){
				nowimg4 ++;
				//普通运动，拉到第nowimg这张图片上
				normalAnimate4();	//调用函数，普通运动
			}else{
				nowimg4 = 0;
				//往第5张（假0）身上拉，然后瞬间切换到0。
				$imagesList4.animate({"left" : imageAmount4 * -width4} , speed4, function(){
					//回调函数
					$(this).css("left" , 0);	//css是瞬间的
				});
			}
			changeCircle4();	//调用函数，小圆点
		}
	}

	//左按钮
	$(".leftBtn4").click(function(){
		if(!$imagesList4.is(":animated")){
			//分类，判断现在是不是到头了
			if(nowimg4 > 0){
				nowimg4 --;
				normalAnimate4();	//调用函数，普通运动
			}else{
				nowimg4 = imageAmount4 - 1;
				//到头了，让假0替换真0
				$imagesList4.css("left" , imageAmount4 * -width4);
				normalAnimate4();	//调用函数，普通运动
			}
			changeCircle4();	//调用函数，小圆点
		}
	});

	//小圆点的点击
	$(".num4 span").click(function(){
		if(!$imagesList4.is(":animated")){
			nowimg4 = $(this).index();
			normalAnimate4();//调用函数，普通运动
			changeCircle4();	//调用函数，小圆点
		}
	});


	//普通运动，让火车往信号上拉
	function normalAnimate4(){
		$imagesList4.animate({"left" : nowimg4 * -width4} , speed4);
	}

	//小圆点函数，让信号量那个小圆点有cur，其余没有cur
	function changeCircle4(){
		$circles4.eq(nowimg).addClass("cur4").siblings().removeClass("cur4");
	}


	//定时器的业务
	var timer4 = setInterval(rightBtnFunc4,intervalTime4);

	//鼠标进入，停止
	$(".carousel4").mouseenter(function(){
		clearInterval(timer4);
	});

	//鼠标离开，继续
	$(".carousel4").mouseleave(function(){
		clearInterval(timer4);
		timer4 = setInterval(rightBtnFunc4,intervalTime4);
	});

