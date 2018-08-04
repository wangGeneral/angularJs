app.service("orderService",function () {
	var orderList=[];
	this.addOrder=function (obj) {
		orderList.push(obj);
	}
	this.orderLength=function () {
		return orderList.length;
	}
	this.orderDataList=orderList;
})