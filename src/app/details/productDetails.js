app.controller("productDetailsController",function ($scope,productService,orderService) {
	id = localStorage.getItem("ID"); //获取导图拍的Id
	$scope.imgObj = productService.ProductList.filter(function(item) {
		return item.proId == id;
	})[0];
	var loginUser=sessionStorage.getItem("user");
	if (loginUser!=null) {
		$scope.title=loginUser;
		$scope.login="personalCenter";
	}else {
		$scope.title='登录';
		$scope.login="login";
	}
	$scope.addCar=function () {
		if (loginUser!=null) {
			productService.ProductList.forEach(function (item) {
				if (item.proId==id) {
					item.isBuy=1;
				}
			})
			alert('添加购物车成功');
		}else{
			alert('请先登录');
		}
	}
	$scope.addCollection=function () {
		if (loginUser!=null) {
			productService.ProductList.forEach(function (item) {
				if (item.proId==id) {
					item.isCollection=1;
				}
			})
			alert('收藏成功');
		}else{
			alert('请先登录');
		}
	}
	$scope.addBuy=function () {
		var orderList=[];
		if (loginUser!=null) {
			
			var orderNumber="order"+parseInt(Math.random()*100000);
			if (orderList.indexOf(orderNumber)==-1) {
				orderList.push(orderNumber);
			}
			var order={};
			order.orderId=orderNumber;
			order.orderName=$scope.imgObj.proName;
			order.orderPrice=$scope.imgObj.proPrice;
			order.orderAddress="深圳坪山";
			order.orderTel="17607550844";
			orderService.addOrder(order);
			alert('购买成功');
		}else{
			alert('请先登录');
		}
	}
})