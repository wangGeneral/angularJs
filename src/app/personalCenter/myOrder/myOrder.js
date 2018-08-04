app.controller("myOrderController",function ($scope,orderService,pageService) {
	var loginUser=sessionStorage.getItem("user");
	if (loginUser!=null) {
		$scope.title=loginUser;
		$scope.login="personalCenter";
	}else {
		$scope.title='登录';
		$scope.login="login";
	}
	$scope.delete=function () {
		sessionStorage.removeItem("user");
	}
	var list=orderService.orderDataList;
	$scope.orderNumber="";
	$scope.searchOrder=function () {
		$scope.orderList=list.filter(function (item) {
			return item.orderId==$scope.orderNumber;
		})
	}
	$scope.currentPage=1;
	$scope.totalPage=pageService.getTotalPage(list);
	$scope.orderList=pageService.firstPage(list,$scope.currentPage);
	$scope.prevePage=function () {
		$scope.currentPage--;
		if ($scope.currentPage<1) {
			$scope.currentPage=1;
			alert('已经是第一页');
		}
		$scope.orderList=pageService.firstPage(list,$scope.currentPage);
	}
	$scope.nextPage=function () {
		$scope.currentPage++;
		if ($scope.currentPage>$scope.totalPage) {
			$scope.currentPage=$scope.totalPage;
			alert('已经是最后一页');
		}
		$scope.orderList=pageService.firstPage(list,$scope.currentPage);
	}
	$scope.removeOrder=function (id) {
		list.forEach(function (item,index) {
			if (item.orderId==id) {
				list.splice(index,1);
			}
		})
		$scope.orderList=pageService.firstPage(list,$scope.currentPage);
		$scope.totalPage=pageService.getTotalPage(list);
	}
})