app.directive("navBar",function () {
	return{
		restrct:"A",
		templateUrl:"/angularJs03/src/app/public/navBar.html",
		link:function (scope,ele) {
			ele.on("mouseover","li",function () {
				$(this).addClass("activeBg").siblings().removeClass("activeBg");
			})
		}
	}
})