app.controller("goodsListController",function ($scope,productService,pageService) {
	var loginUser=sessionStorage.getItem("user");
	if (loginUser!=null) {
		$scope.title=loginUser;
	}else {
		$scope.title='登录';
	}
	$scope.delete=function () {
		sessionStorage.removeItem("user");
	}
	var list=productService.ProductList;
	$scope.removeGoods=function (id) {
		list.forEach(function (item,index) {
			if (item.proId==id) {
				list.splice(index,1);
			}
		})
		$scope.goodsList=pageService.firstPage(list,$scope.currentPage);
		$scope.totalPage=pageService.getTotalPage(list);
	}
	$scope.totalPage=pageService.getTotalPage(list);
	$scope.currentPage=1;
	$scope.goodsList=pageService.firstPage(list,$scope.currentPage);
	$scope.prevePage=function () {
		$scope.currentPage--;
		if ($scope.currentPage<1) {
			$scope.currentPage=1;
			alert('已经是第一页');
		}
		$scope.goodsList=pageService.firstPage(list,$scope.currentPage);
	}
	$scope.nextPage=function () {
		$scope.currentPage++;
		if ($scope.currentPage>$scope.totalPage) {
			$scope.currentPage=$scope.totalPage;
			alert('已经是最后一页');
		}
		$scope.goodsList=pageService.firstPage(list,$scope.currentPage);
	}
	$scope.toDetails=function (id) {
		localStorage.setItem("ID",id);
	}
})