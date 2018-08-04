app.controller("myCollectionController",function ($scope,productService,pageService) {
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
	var list=productService.ProductList.filter(function (item) {
		return item.isCollection==1;
	})
	$scope.totalPage=pageService.getTotalPage(list);
	$scope.currentPage=1;
	$scope.collectionList=pageService.firstPage(list,$scope.currentPage);
	$scope.prevePage=function () {
		$scope.currentPage--;
		if ($scope.currentPage<1) {
			$scope.currentPage=1;
			alert('已经是第一页');
		}
		$scope.collectionList=pageService.firstPage(list,$scope.currentPage);
	}
	$scope.nextPage=function () {
		$scope.currentPage++;
		if ($scope.currentPage>$scope.totalPage) {
			$scope.currentPage=$scope.totalPage;
			alert('已经是最后一页');
		}
		$scope.collectionList=pageService.firstPage(list,$scope.currentPage);
	}
	$scope.removePro=function (id) {
		list.forEach(function (item,index) {
			if (item.proId==id) {
				list.splice(index,1);
			}
		})
		$scope.collectionList=pageService.firstPage(list,$scope.currentPage);
		$scope.totalPage=pageService.getTotalPage(list);
	}
	$scope.addCar=function (id) {
		list.forEach(function (item) {
			if (item.proId==id) {
				item.isBuy=1;
			}
		})
	}
})