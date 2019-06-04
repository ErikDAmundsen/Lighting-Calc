if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(successFunction, failureFunction, {enableHighAccuracy:false, maximumAge:30000, timeout:27000});
}