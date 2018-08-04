app.controller("registerController",function($scope,userService){
	var loginUser=sessionStorage.getItem("user");
	if (loginUser!=null) {
		$scope.title=loginUser;
	}else {
		$scope.title='登录';
	}
	$scope.username="";
	$scope.userpwd="";
	$scope.usertel="";
	$scope.useradd="";
	$scope.usergen="";
	var count=1;
	$scope.getSubmit=function () {
		var obj={};
		if ($scope.username!="") {
			if ($scope.userpwd!="") {
				if ($scope.usertel!="") {
					if ($scope.useradd!="") {
						if ($scope.usergen!="") {
							if (count<10) {
								obj.userId="u00"+count;
							}else{
								obj.userId="u0"+count;
							}
							obj.userName=$scope.username;
							obj.userPwd=$scope.userpwd;
							obj.userTel=$scope.usertel;
							obj.userAdd=$scope.useradd;
							obj.userGen=$scope.usergen;
							userService.addUser(obj);
							$scope.login="login";
						}else{
							$scope.login="register";
							alert("请选择性别！");
						}
					}else{
						$scope.login="register";
						alert("请选择地址！");
					}
				}else{
					$scope.login="register";
					alert("请输入联系电话！");
				}
			}else{
				$scope.login="register";
				alert("请输入密码！");
			}
		}else{
			$scope.login="register";
			alert("请输入用户名！");
		}
	}
})