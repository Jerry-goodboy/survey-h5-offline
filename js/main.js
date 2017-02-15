$(function(){
	window.addEventListener('offline', function(e) { alert('offline'); });

	window.addEventListener('online', function(e) { alert('online'); });
});