// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(locateSuccess, locateFail);
// }
// function locateSuccess(loc) {
//     var latitude = loc.coords.latitude;
//     var longitude = loc.coords.longitude;
//     alert('You are at ' + latitude + ', ' + longitude);
// }
// function locateFail(geoPositionError) {
//     switch (geoPositionError.code) {
//         case 0: // UNKNOWN_ERROR
//             alert('An unknown error occurred, sorry');
//             break;
//         case 1: // PERMISSION_DENIED
//             alert('Permission to use Geolocation was denied');
//             break;
//         case 2: // POSITION_UNAVAILABLE
//             alert('Couldn\'t find you...');
//             break;
//         case 3: // TIMEOUT
//             alert('The Geolocation request took too long and timed out');
//             break;
//         default:
//     }
// }
