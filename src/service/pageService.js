app.service("pageService",function () {
	this.getTotalPage=function (arr) {
		return Math.ceil(arr.length/10);
	}
	this.firstPage=function (arr,currentPage) {
		return arr.filter(function (item,index) {
			return index>=currentPage*10-10 && index<=currentPage*10-1;
		})
	}
	this.nextPage=function (arr,currentPage) {
		return arr.filter(function (item,index) {
			return index>=currentPage*10-10 && index<=currentPage*10-1;
		})
	}
	this.prevPage=function (arr,currentPage) {
		return arr.filter(function (item,index) {
			return index>=currentPage*10-10 && index<=currentPage*10-1;
		})
	}
})