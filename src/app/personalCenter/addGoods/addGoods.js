app.controller("addGoodsController",function ($scope,productService) {
	var loginUser=sessionStorage.getItem("user");
	if (loginUser!=null) {
		$scope.title=loginUser;
	}else {
		$scope.title='登录';
	}
	$scope.delete=function () {
		sessionStorage.removeItem("user");
	}
	$scope.goodsName="";
	$scope.goodsNumber="";
	$scope.goodsPrice="";
	var count=31;
	$scope.addGoods=function () {
		var obj={};
		obj.proId="p00"+count++;
		obj.proName=$scope.goodsName;
		obj.proNumber=$scope.goodsNumber;
		obj.proPrice=$scope.goodsPrice;
		productService.ProductList.push(obj);
	}
})