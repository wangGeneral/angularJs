app.controller("editUserController",function ($scope,userService) {
	var loginUser=sessionStorage.getItem("user");
	if (loginUser!=null) {
		$scope.title=loginUser;
	}else {
		$scope.title='登录';
	}
	$scope.delete=function () {
		sessionStorage.removeItem("user");
	}
	var id=sessionStorage.getItem("userId");
	$scope.userName="";
	$scope.userPwd="";
	$scope.userTel="";
	$scope.userAdd="";
	$scope.userSex="";
	$scope.editUser=function () {
		userService.userArr.forEach(function (item) {
			if (item.userId==id) {
				item.userName=$scope.userName;
				item.userPwd=$scope.userPwd;
				item.userTel=$scope.userTel;
				item.userAdd=$scope.userAdd;
				item.userGen=$scope.userSex;
			}
		})
	}
})