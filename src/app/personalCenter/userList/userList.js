app.controller("userListController",function ($scope,userService,pageService) {
	var loginUser=sessionStorage.getItem("user");
	if (loginUser!=null) {
		$scope.title=loginUser;
	}else {
		$scope.title='登录';
	}
	$scope.delete=function () {
		sessionStorage.removeItem("user");
	}
	var list=userService.userArr;
	$scope.removeUser=function (id) {
		list.forEach(function (item,index) {
			if (item.userId==id) {
				list.splice(index,1);
			}
		})
		$scope.userList=pageService.firstPage(list,$scope.currentPage);
		$scope.totalPage=pageService.getTotalPage(list);
	}
	$scope.totalPage=pageService.getTotalPage(list);
	$scope.currentPage=1;
	$scope.userList=pageService.firstPage(list,$scope.currentPage);
	$scope.prevePage=function () {
		$scope.currentPage--;
		if ($scope.currentPage<1) {
			$scope.currentPage=1;
			alert('已经是第一页');
		}
		$scope.userList=pageService.firstPage(list,$scope.currentPage);
	}
	$scope.nextPage=function () {
		$scope.currentPage++;
		if ($scope.currentPage>$scope.totalPage) {
			$scope.currentPage=$scope.totalPage;
			alert('已经是最后一页');
		}
		$scope.userList=pageService.firstPage(list,$scope.currentPage);
	}
	$scope.editUser=function (id) {
		sessionStorage.setItem("userId",id);
	}
})