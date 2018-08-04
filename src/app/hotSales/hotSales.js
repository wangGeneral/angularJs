app.controller("hotSalesController",function ($scope,productService,pageService) {
	var recommentPro=productService.ProductList.filter(function (item) {
		return item.isHot=='1';
	})
	$scope.currentPage=1;
	$scope.totalPage=pageService.getTotalPage(recommentPro);
	$scope.proList=pageService.firstPage(recommentPro,$scope.currentPage);
	$scope.nextPage=function () {
		$scope.currentPage++;
		if ($scope.currentPage>$scope.totalPage) {
			alert("已经是最后一页了！");
			$scope.currentPage=$scope.totalPage;
		}
		$scope.proList=pageService.nextPage(recommentPro,$scope.currentPage);
	}
	$scope.prevPage=function () {
		$scope.currentPage--;
		if ($scope.currentPage<1) {
			alert("已经是第一页了！");
			$scope.currentPage=1;
		}
		$scope.proList=pageService.prevPage(recommentPro,$scope.currentPage);
	}
	$scope.toDetails=function (url) {
		localStorage.setItem("Url",url);
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