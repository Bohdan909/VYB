var map;
function initialize() {
  	var mapOptions = {
   		zoom: 14,
   		scrollwheel: false,
   		center: new google.maps.LatLng(51.984298, 5.900494 )
 	};
 	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var point = new google.maps.LatLng(51.984298, 5.900494);

    var image = new google.maps.MarkerImage(
        'images/marker.png',
        new google.maps.Size(16,22)
    );

    var marker = new google.maps.Marker({
        icon: image,
        draggable: false,
        raiseOnDrag: false,
        map: map,
        position: point
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
