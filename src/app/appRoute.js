app.config(function ($routeProvider) {
	$routeProvider.
	when("/home",{
		templateUrl:"/angularJs03/src/app/index/index.html",
		controller:"indexController"
	}).
	when("/recommendation",{
		templateUrl:"/angularJs03/src/app/recommendation/recommendation.html",
		controller:"recommendationController"
	}).
	when("/newProduct",{
		templateUrl:"/angularJs03/src/app/newProduct/newProduct.html",
		controller:"newProductController"
	}).
	when("/hotSales",{
		templateUrl:"/angularJs03/src/app/hotSales/hotSales.html",
		controller:"hotSalesController"
	}).
	when("/specilaOffer",{
		templateUrl:"/angularJs03/src/app/specilaOffer/specilaOffer.html",
		controller:"specilaOfferController"
	}).
	when("/productDetails",{
		templateUrl:"/angularJs03/src/app/details/details.html",
		controller:"productDetailsController"
	}).
	when("/login",{
		templateUrl:"/angularJs03/src/app/login/login.html",
		controller:"loginController"
	}).
	when("/register",{
		templateUrl:"/angularJs03/src/app/register/register.html",
		controller:"registerController"
	}).
	when("/personalCenter",{
		templateUrl:"/angularJs03/src/app/personalCenter/personalCenter.html",
		controller:"personalCenterController"
	}).
	when("/personalCenter/myCar",{
		templateUrl:"/angularJs03/src/app/personalCenter/myCar/myCar.html",
		controller:"myCarController"
	}).
	when("/personalCenter/myOrder",{
		templateUrl:"/angularJs03/src/app/personalCenter/myOrder/myOrder.html",
		controller:"myOrderController"
	}).
	when("/personalCenter/myCollection",{
		templateUrl:"/angularJs03/src/app/personalCenter/myCollection/myCollection.html",
		controller:"myCollectionController"
	}).
	when("/personalCenter/goodsList",{
		templateUrl:"/angularJs03/src/app/personalCenter/goodsList/goodsList.html",
		controller:"goodsListController"
	}).
	when("/personalCenter/addGoods",{
		templateUrl:"/angularJs03/src/app/personalCenter/addGoods/addGoods.html",
		controller:"addGoodsController"
	}).
	when("/personalCenter/userList",{
		templateUrl:"/angularJs03/src/app/personalCenter/userList/userList.html",
		controller:"userListController"
	}).
	when("/personalCenter/editUser",{
		templateUrl:"/angularJs03/src/app/personalCenter/editUser/editUser.html",
		controller:"editUserController"
	}).
	otherwise({
		redirectTo:"/home"
	})
})