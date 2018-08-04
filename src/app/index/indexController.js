app.controller("indexController",function ($scope,productService) {
	$scope.imgList=[
		{"imgUrl":"src/img/1478031283.JPG"},
		{"imgUrl":"src/img/1478031243.JPG"},
		{"imgUrl":"src/img/BTGR.jpg"},
		{"imgUrl":"src/img/tyu.jpeg"}
	];
	$scope.topFive=productService.ProductList.filter(function (item) {
		return item.saleNumber>6000;
	})
	$scope.toDetails=function (id) {
		localStorage.setItem("ID",id);
	}
	var loginUser=sessionStorage.getItem("user");
	if (loginUser!=null) {
		$scope.title=loginUser;
		$scope.login="personalCenter";
	}else {
		$scope.title='登录';
		$scope.login="login";
	}
})