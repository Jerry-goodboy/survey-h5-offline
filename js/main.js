$(function(){
	function setYearAndMonth(domYear, domMonth) {
		var now = new Date();
		var year = now.getFullYear();
		var month = now.getMonth() + 1;
		$(domYear).text(year);
		$(domMonth).text(month);
	}

	function offlineCall(e) {
		console.log('offline');
		console.log(e);
	}

	function onlineCall(e) {
		console.log('online');
		console.log(e);
	}

	setYearAndMonth(".auto-year", ".auto-month");

	window.removeEventListener('offline', offlineCall);
	window.removeEventListener('online', onlineCall);

	window.addEventListener('offline', offlineCall);
	window.addEventListener('online', onlineCall);

});