window.onload = function() {

	if(navigator.geolocation){
	    var geo_location = navigator.geolocation;
		//todo gpsが機能しない場合は？
	    geo_location.getCurrentPosition(function (position){
	        var coords = position.coords;
			location.href = 'https://ebbing58.github.io/mapbox/?lng=' + position.coords.longitude + '&lat=' + position.coords.latitude + '&z=13';
	    });
	}
};