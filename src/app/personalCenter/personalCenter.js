app.controller("personalCenterController",function ($scope) {
	$scope.delete=function () {
		sessionStorage.removeItem("user");
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