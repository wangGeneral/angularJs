app.directive("flexTest",function () {
	return {
		restrict:"A",
		templateUrl:"/angularJs03/src/app/public/flex.html",
		link:function (scope,ele) {
			$('.box>.left>ul>li>span').click(function () {
				$(this).siblings("ul").slideToggle();
				$(this).parent().siblings().children("ul").slideUp();
			})
		}
	}
})