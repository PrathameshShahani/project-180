let latitude, longitude, destination;
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FyZ3ByaXlhbnNoYSIsImEiOiJjbDBvbmVlbmQwaWhkM2NudDJzcmY4Nmx1In0.aC8EZryP1SDw0EzcHlyNMQ';

$(document).ready (function(){
    alert("Let us know the location of this device.");
    initGeoLocation();
})

$(function(){
    $("#navigate-button").click(function(){
        window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`;
    })
})
function initGeoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success)
    }else{
        alert("Sorry, your device does not support geolocation!")
    }
}

function success(position){
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [longitude, latitude],
    zoom: 4
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
)

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
)

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }).on('result', function(e){
        destination = e.result.center
    })
);

var imgamber = document.querySelector("#amber")
var imggateway = document.querySelector("#gateway")
var imggate = document.querySelector("#gate")
var imglotus = document.querySelector("#lotus")
var imgvictoria = document.querySelector("#victoria")

const marker = new mapboxgl.Marker({
    element: imgamber
})
    .setLngLat([75.85133, 26.98547])
    .addTo(map);

const marker1 = new mapboxgl.Marker({
    element: imggateway
})
    .setLngLat([72.834608,18.921935])
    .addTo(map);

const marker2 = new mapboxgl.Marker({
    element: imggate
})
    .setLngLat([77.2273157,28.612912,])
    .addTo(map);

const marker3 = new mapboxgl.Marker({
    element: imglotus
})
    .setLngLat([77.2566324,28.553492])
    .addTo(map);

const marker4 = new mapboxgl.Marker({
    element: imgvictoria
})
    .setLngLat([88.3403638,22.5448082])
    .addTo(map);
}