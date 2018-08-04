app.directive("detailTest",function () {
	return{
		restrict:"A",
		templateUrl:"/angularJs03/src/app/public/details.html",
		link:function (scope,ele) {
			$(".small").mouseenter(function () {
				$(".shadow").css('visibility','visible');
				$(".big").css('visibility','visible');
			})
			$(".small").mouseleave(function () {
				$(".shadow").css('visibility','hidden');
				$(".big").css('visibility','hidden');
			})
			$('.shadow').mousemove(function (e) {
				var obj=e || window.event;
				var shadowLeft=obj.pageX-$(this).width()/2-$(".mid").offset().left;
				var shadowTop=obj.pageY-$(this).height()/2-$(".mid").offset().top;
				if (shadowLeft<0) {
					shadowLeft=0;
				}
				if (shadowTop<0) {
					shadowTop=0;
				}
				if (shadowLeft+$(this).width()>=$(".small").width()) {
					shadowLeft=$(".small").width()-$(this).width();
				}
				if (shadowTop+$(this).height()>=$(".small").height()) {
					shadowTop=$(".small").height()-$(this).height();
				}
				var bigLeft=shadowLeft*3;
				var bigTop=shadowTop*3;
				$(this).css('left',shadowLeft).css('top',shadowTop);
				$('#big').css('left',-bigLeft).css('top',-bigTop);
			})
		}
	}
})