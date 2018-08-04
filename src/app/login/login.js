app.controller("loginController",function ($scope,userService) {
	$scope.userName="";
	$scope.userPwd="";
	$scope.tel="";
	$scope.login=function () {
		var flag=true;
		userService.userArr.forEach(function (item) {
			if (item.userName==$scope.userName && item.userPwd==$scope.userPwd && item.userTel==$scope.tel) {
				flag=false;
			}
		})
		if (flag) {
			$scope.home="login";
			alert("用户名或密码错误，请重新输入！");
		}else{
			$scope.home="home";
			sessionStorage.setItem("user",$scope.userName);
			alert("登录成功！");
		}
	}
})