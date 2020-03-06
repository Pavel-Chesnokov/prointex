var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.799160, lng: 37.695273},
    zoom: 15,
    styles:
    [
      {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "lightness": 33
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "labels",
          "stylers": [
              {
                  "saturation": "-100"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "labels.text",
          "stylers": [
              {
                  "gamma": "0.75"
              }
          ]
      },
      {
          "featureType": "administrative.neighborhood",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "lightness": "-37"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f9f9f9"
              }
          ]
      },
      {
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [
              {
                  "saturation": "-100"
              },
              {
                  "lightness": "40"
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "saturation": "-100"
              },
              {
                  "lightness": "-37"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "saturation": "-100"
              },
              {
                  "lightness": "100"
              },
              {
                  "weight": "2"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "saturation": "-100"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "saturation": "-100"
              },
              {
                  "lightness": "80"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [
              {
                  "saturation": "-100"
              },
              {
                  "lightness": "0"
              }
          ]
      },
      {
          "featureType": "poi.attraction",
          "elementType": "geometry",
          "stylers": [
              {
                  "lightness": "-4"
              },
              {
                  "saturation": "-100"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#c5dac6"
              },
              {
                  "visibility": "on"
              },
              {
                  "saturation": "-95"
              },
              {
                  "lightness": "62"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
              {
                  "saturation": "-100"
              },
              {
                  "gamma": "1.00"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.text",
          "stylers": [
              {
                  "gamma": "0.50"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "saturation": "-100"
              },
              {
                  "gamma": "0.50"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#c5c6c6"
              },
              {
                  "saturation": "-100"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "lightness": "-13"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "lightness": "0"
              },
              {
                  "gamma": "1.09"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#e4d7c6"
              },
              {
                  "saturation": "-100"
              },
              {
                  "lightness": "47"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "lightness": "-12"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "saturation": "-100"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#fbfaf7"
              },
              {
                  "lightness": "77"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "lightness": "-5"
              },
              {
                  "saturation": "-100"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "saturation": "-100"
              },
              {
                  "lightness": "-15"
              }
          ]
      },
      {
          "featureType": "transit.station.airport",
          "elementType": "geometry",
          "stylers": [
              {
                  "lightness": "47"
              },
              {
                  "saturation": "-100"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                "color": "#46bcec"
                  // "color": "#acbcc9"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "saturation": "53"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "lightness": "-42"
              },
              {
                  "saturation": "17"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [
              {   
                  "lightness": "61"
              }
          ]
      }
  ]
// [
// {
//   "featureType": "administrative",
//   "elementType": "labels.text.fill",
//   "stylers": [
//       {
//           "color": "#444444"
//       }
//   ]
// },
// {
//   "featureType": "landscape",
//   "elementType": "all",
//   "stylers": [
//       {
//           "color": "#f2f2f2"
//       }
//   ]
// },
// {
//   "featureType": "poi",
//   "elementType": "all",
//   "stylers": [
//       {
//           "visibility": "off"
//       }
//   ]
// },
// {
//   "featureType": "road",
//   "elementType": "all",
//   "stylers": [
//       {
//           "saturation": -100
//       },
//       {
//           "lightness": 45
//       }
//   ]
// },
// {
//   "featureType": "road.highway",
//   "elementType": "all",
//   "stylers": [
//       {
//           "visibility": "simplified"
//       }
//   ]
// },
// {
//   "featureType": "road.arterial",
//   "elementType": "labels.icon",
//   "stylers": [
//       {
//           "visibility": "off"
//       }
//   ]
// },
// {
//   "featureType": "transit",
//   "elementType": "all",
//   "stylers": [
//       {
//           "visibility": "off"
//       }
//   ]
// },
// {
//   "featureType": "water",
//   "elementType": "all",
//   "stylers": [
//       {
//           "color": "#46bcec"
//       },
//       {
//           "visibility": "on"
//       }
//   ]
// }
// ]
  });

  // Создаем маркер на карте
var marker = new google.maps.Marker({

// Определяем позицию маркера
position: {lat: 55.798682, lng: 37.695816},


// Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
map: map,

// Пишем название маркера - появится если навести на него курсор и немного подождать
title: 'Колодезный переулок, д. 2а, стр. 1',
icon: './wp-content/themes/prointex/img/contacts/icon.png'
});

// var marker2 = new google.maps.Marker({
// position: (55.79450442905439, 37.698978377768185),
// map: map, //global variable 'map' from opening function
// icon: '../img/marker.png'
// });

// var myCoordinates = [
//   new google.maps.LatLng(55.794986,37.700572),
//   new google.maps.LatLng(55.796072,37.699209),
//   new google.maps.LatLng(55.796512,37.698608),
//   new google.maps.LatLng(55.798333,37.696613),
//   new google.maps.LatLng(55.799232,37.695617)
//   ];
//   var polyOptions = {
//   path: myCoordinates,
//   strokeColor: "#FF0000",
//   strokeOpacity: 1,
//   strokeWeight: 3
//   }
//   var it = new google.maps.Polyline(polyOptions);
//   it.setMap(map);
  
//   var myCoordinates2 = [
//     new google.maps.LatLng(55.789240,37.681030),
//     new google.maps.LatLng(55.789350,37.681290),
//     new google.maps.LatLng(55.789650,37.682080),
//     new google.maps.LatLng(55.790470,37.684210),
//     new google.maps.LatLng(55.791760,37.687530),
//     new google.maps.LatLng(55.792090,37.688350),
//     new google.maps.LatLng(55.793110,37.691020),
//     new google.maps.LatLng(55.793290,37.691560),
//     new google.maps.LatLng(55.793370,37.691830),
//     new google.maps.LatLng(55.793420,37.692100),
//     new google.maps.LatLng(55.793830,37.694730),
//     new google.maps.LatLng(55.794010,37.695990),
//     new google.maps.LatLng(55.794330,37.698560),
//     new google.maps.LatLng(55.794410,37.699180),
//     new google.maps.LatLng(55.794450,37.699480)
//     ];
//     var polyOptions = {
//     path: myCoordinates2,
//     strokeColor: "#FF0000",
//     strokeOpacity: 1,
//     strokeWeight: 3
//     }
//     var it2 = new google.maps.Polyline(polyOptions);
//     it2.setMap(map);

//     var myCoordinates3 = [
//       new google.maps.LatLng(55.796220,37.715620),
//       new google.maps.LatLng(55.796120,37.715050),
//       new google.maps.LatLng(55.796010,37.714550),
//       new google.maps.LatLng(55.795810,37.713500),
//       new google.maps.LatLng(55.795580,37.712250),
//       new google.maps.LatLng(55.795420,37.711370),
//       new google.maps.LatLng(55.795350,37.710910),
//       new google.maps.LatLng(55.795290,37.710240),
//       new google.maps.LatLng(55.795280,37.709290),
//       new google.maps.LatLng(55.795300,37.708700),
//       new google.maps.LatLng(55.795330,37.706850),
//       new google.maps.LatLng(55.795350,37.705840),
//       new google.maps.LatLng(55.795330,37.705470),
//       new google.maps.LatLng(55.795210,37.704210),
//       new google.maps.LatLng(55.795070,37.702990),
//       new google.maps.LatLng(55.794820,37.701120),
//       new google.maps.LatLng(55.794700,37.699980),
//       new google.maps.LatLng(55.794650,37.699630)
//       ];
//       var polyOptions = {
//       path: myCoordinates3,
//       strokeColor: "#FF0000",
//       strokeOpacity: 1,
//       strokeWeight: 3
//       }
//       var it3 = new google.maps.Polyline(polyOptions);
//       it3.setMap(map);
    
  
}
window.initMap = initMap;