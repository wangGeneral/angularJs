app.controller("myCarController",function ($scope,productService,pageService) {
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
		return item.isBuy==1;
	})
	$scope.totalPrice=0;
	$scope.getTotal=function () {
		$scope.totalPrice=0;
		list.forEach(function (item) {
			if (item.isChecked) {
				$scope.totalPrice+=(item.proNumber*item.proPrice);
			}
		})
	}
	$scope.removePro=function (id) {
		list.forEach(function (item,index) {
			if (item.proId==id) {
				list.splice(index,1);
			}
		})
		$scope.carList=pageService.firstPage(list,$scope.currentPage);
		$scope.totalPage=pageService.getTotalPage(list);
	}
	$scope.selectAll=function () {
		if ($scope.isAll) {
			list.forEach(function (item) {
				item.isChecked=true;
			})
			$scope.isAll=true;
		}else{
			list.forEach(function (item) {
				item.isChecked=false;
			})
			$scope.isAll=false;
		}
	}
	$scope.select=function () {
		var flag=true;
		list.forEach(function (item) {
			if (item.isChecked==false) {
				flag=false;
			}
		})
		if (flag) {
			$scope.isAll=true;
		}else{
			$scope.isAll=false;
		}
	}
	$scope.totalPage=pageService.getTotalPage(list);
	$scope.currentPage=1;
	$scope.carList=pageService.firstPage(list,$scope.currentPage);
	$scope.prevePage=function () {
		$scope.currentPage--;
		if ($scope.currentPage<1) {
			$scope.currentPage=1;
			alert('已经是第一页');
		}
		$scope.carList=pageService.firstPage(list,$scope.currentPage);
	}
	$scope.nextPage=function () {
		$scope.currentPage++;
		if ($scope.currentPage>$scope.totalPage) {
			$scope.currentPage=$scope.totalPage;
			alert('已经是最后一页');
		}
		$scope.carList=pageService.firstPage(list,$scope.currentPage);
	}
	$scope.toDetails=function (id) {
		localStorage.setItem("ID",id);
	}
})