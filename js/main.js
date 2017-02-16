$(function(){
	function setYearAndMonth(domYear, domMonth) {
		var now = new Date();
		var year = now.getFullYear();
		var month = now.getMonth() + 1;
		$(domYear).text(year);
		$(domMonth).text(month);
	}

	function checkRadio() {
		if ($("[name='radio11']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio12']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio211']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio212']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio221']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio222']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio223']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio224']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio225']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio226']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio227']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio228']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio229']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio231']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio232']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio241']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio242']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio243']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio251']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio252']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio253']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio261']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio262']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio31']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio32']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio33']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}else if ($("[name='radio34']:checked").length == 0) {
			alert("Please Check completely");
			return false;
		}
		return true;
	}

	function storeParams() {
		var paramStr = '';
		var storeArr = localStorage.getItem("storearr");
		if(storeArr){
			storeArr = JSON.parse(storeArr);
		}else{
			storeArr = [];
		}
		$("[type='radio']:checked").each(function(i,e){
			paramStr += $(e).val() + "@";
		});
		storeArr.push(paramStr);
		storeArr = JSON.stringify(storeArr);
		localStorage.setItem("storearr", storeArr);
		return true;
	}

	function sendMsg() {
		if(navigator.onLine){
			localStorage.setItem("submittips", "已为您提交到服务器，感谢您的参与");
			onlineCall('');
		}else{
			alert('目前你的网络无法连接，下次网络连接后会自动提交，谢谢参与');
		}
	}

	function offlineCall(e) {
		alert("Your network is not connected");
		console.log('offline');
		console.log(e);
	}

	function onlineCall(e) {
		var submitTips = localStorage.getItem("submittips");
		var storeArr = localStorage.getItem("storearr");
		if(storeArr){
			var url = './php/receive.php';
			$.ajax({
				url:url,
				cache:false,
				type:"POST",
				dataType:"json",
				data:{
					"survey":storeArr
				},
				success:function (data) {
					if(submitTips){
						localStorage.removeItem("submittips");
						alert("已为您提交到服务器，感谢您的参与，共"+data+"条数据");
					}else{
						alert("上次未提交的问卷已为您提交到服务器，感谢您的参与，共"+data+"条数据");
					}
					localStorage.removeItem("storearr");
				},
				error:function (e) {
					console.log(e.reponseText);
				}
			});
		}
		// if(storeArr){
		// 	storeArr = JSON.parse(storeArr);
		// }else{
		// 	storeArr = [];
		// }

		// if(storeArr.length != 0){

		// }
	}

	setYearAndMonth(".auto-year", ".auto-month");
	sendMsg();
	
	$(document).off("click", "#surveySubmit");
	$(document).on("click", "#surveySubmit", function (e) {
		var checkBool = checkRadio();
		if(checkBool){
			if(storeParams()){
				sendMsg();
			};
		}
		return false;
	});

	window.removeEventListener('offline', offlineCall);
	window.removeEventListener('online', onlineCall);

	window.addEventListener('offline', offlineCall);
	window.addEventListener('online', onlineCall);

});