var map;
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.799160, lng: 37.695273}, 
    zoom: 15
});
}







// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 55.799160, lng: 37.695273},
//     zoom: 15
// //     styles: 
// // [
// // {
// //   "featureType": "administrative",
// //   "elementType": "labels.text.fill",
// //   "stylers": [
// //       {
// //           "color": "#444444"
// //       }
// //   ]
// // },
// // {
// //   "featureType": "landscape",
// //   "elementType": "all",
// //   "stylers": [
// //       {
// //           "color": "#f2f2f2"
// //       }
// //   ]
// // },
// // {
// //   "featureType": "poi",
// //   "elementType": "all",
// //   "stylers": [
// //       {
// //           "visibility": "off"
// //       }
// //   ]
// // },
// // {
// //   "featureType": "road",
// //   "elementType": "all",
// //   "stylers": [
// //       {
// //           "saturation": -100
// //       },
// //       {
// //           "lightness": 45
// //       }
// //   ]
// // },
// // {
// //   "featureType": "road.highway",
// //   "elementType": "all",
// //   "stylers": [
// //       {
// //           "visibility": "simplified"
// //       }
// //   ]
// // },
// // {
// //   "featureType": "road.arterial",
// //   "elementType": "labels.icon",
// //   "stylers": [
// //       {
// //           "visibility": "off"
// //       }
// //   ]
// // },
// // {
// //   "featureType": "transit",
// //   "elementType": "all",
// //   "stylers": [
// //       {
// //           "visibility": "off"
// //       }
// //   ]
// // },
// // {
// //   "featureType": "water",
// //   "elementType": "all",
// //   "stylers": [
// //       {
// //           "color": "#46bcec"
// //       },
// //       {
// //           "visibility": "on"
// //       }
// //   ]
// // }
// // ]
// //   });

// //   // Создаем маркер на карте
// // var marker = new google.maps.Marker({

// // // Определяем позицию маркера
// // position: {lat: 55.799160, lng: 37.695273},

// // // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
// // map: map,

// // // Пишем название маркера - появится если навести на него курсор и немного подождать
// // title: 'Наш маркер: Большой театр',
// // icon: 'cog-solid.svg'
// });

// }