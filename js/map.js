var map, map2;
function initialize() {
  	var mapOptions = {
   		zoom: 14,
   		scrollwheel: false,
   		center: new google.maps.LatLng(51.984298, 5.900494 )
 	  };

    var mapOptions2 = {
      zoom: 14,
      scrollwheel: false,
      center: new google.maps.LatLng(51.984298, 5.900494 )
    };

 	  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    map2 = new google.maps.Map(document.getElementById('map-canvas2'), mapOptions2);

    var point = new google.maps.LatLng(51.984298, 5.900494);
    var point2 = new google.maps.LatLng(51.984298, 5.900494);

    var image = new google.maps.MarkerImage(
        'images/marker.png',
        new google.maps.Size(16,22)
    );

    var image2 = new google.maps.MarkerImage(
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

    var marker2 = new google.maps.Marker({
        icon: image2,
        draggable: false,
        raiseOnDrag: false,
        map: map2,
        position: point2
    });

    var styles = [{
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
  ];

  map.setOptions({styles: styles});
  map2.setOptions({styles: styles});
}

google.maps.event.addDomListener(window, 'load', initialize);
