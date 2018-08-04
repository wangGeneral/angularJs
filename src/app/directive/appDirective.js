app.directive("carouselTest",function () {
	return {
		restrict:"A",
		replace:true,
		templateUrl:"/angularJs03/src/app/public/carousel.html",
		link:function (scope,ele) {
			ele.on("click",'span',function () {
				if ($(this).text()=='<') {
					index--;
					if (index==-1) {
						index=3;
					}
				}else{
					index++;
					if (index==4) {
						index=0;
					}
				}
				$('#indexController>.carousel>ul>li').eq(index).fadeIn().siblings().fadeOut();
			})
			var index=0;
			setInterval(function () {
				index++;
				if (index==4) {
					index=0;
				}
				$('#indexController>.carousel>ul>li').eq(index).fadeIn().siblings().fadeOut();
			},1000)
		}
	}
})