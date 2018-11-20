L.mapbox.accessToken = 'pk.eyJ1IjoiYXBleGJsbiIsImEiOiJjam9nem5oMHAwa2pyM3BuMHFqY2JqcmxyIn0.deyw0HuvXOvy0zfjI-ha2g';
var geocoder = L.mapbox.geocoder('mapbox.places'),
    map = L.mapbox.map('map', 'examples.map-h67hf2ic');

geocoder.query('Simon Dach Straße 19 Berlin', showMap);

function showMap(err, data) {
    // The geocoder can return an area, like a city, or a
    // point, like an address. Here we handle both cases,
    // by fitting the map bounds to an area or zooming to a point.
   if (data.lbounds) {
        map.fitBounds(data.lbounds);
   } else if (data.latlng) {
       map.setView([data.latlng[0], data.latlng[1]], 13);
		var a= (data.latlng[0]) +" , "+ (data.latlng[1]);
	//	alert(a);
	var lat= data.latlng[0];
	var lng= data.latlng[1];
	document.getElementById("textDivlat").value=lat;
	document.getElementById("textDivlng").value=lng;

	
    }
} 
