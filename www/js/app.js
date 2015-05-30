// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])



//config
.config(function($stateProvider, $urlRouterProvider){
  
  //tab
  $stateProvider
    .state('tabs', {
      url:'/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })
        //tab/home *********  
    .state('tabs.home', {
      url:'/home',
      views: {
        'home-tab': {
          templateUrl: 'templates/home.html'
        
        }  
      }  
    })
    //tab/facts
    .state('tabs.facts', {
      url:'/facts', 
      views: {  
        'home-tab': {
          templateUrl: 'templates/facts.html'
        }
      }  
    })
    //tab/facts2
    .state('tabs.facts2',{
      url: '/facts2',
      views: {
        'home-tab': {
          templateUrl: 'templates/facts2.html',
          controller: 'PostsCtrl'

        }
      }
    })
    //tab/about
    .state('tabs.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html',
          controller: 'AccountCtrl'
        }
      }
    })
    //tab/navstack
    .state('tabs.navstack', {
      url: '/navstack',
      views: {
        'about-tab': {
          templateUrl: 'templates/nav-stack.html',
          controller: 'AccountCtrl'
        }
      }
    })
    //tab/contact
    .state('tabs.contact', {
      url: '/contact',
      views: {
        'contact-tab': {
          templateUrl: 'templates/contact.html'
        }
      }
    });//porlo que es el último


  $urlRouterProvider.otherwise('/tab/home');
  
  
})


// .controller('MapController', ['$scope', function(){
//   google.maps.event.addDomListener(window, "load", function(){
//     var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

//     var mapOptions = {
//       center: myLatlng,
//       zoom: 16,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     };

//     var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//     $scope.map = map;
//   });
// }])
.controller('AccountCtrl', function($scope, $ionicLoading) {
console.log("AccountCtrl");
$scope.initialise = function() {
console.log("In Google.maps.event.addDomListener");
var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
var mapOptions = {
center: myLatlng,
zoom: 16,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
        console.log(mapOptions);
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    navigator.geolocation.getCurrentPosition(function(pos) {
        console.log(pos);
        map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        var myLocation = new google.maps.Marker({
            position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
            map: map,
            title: "My Location"
        });
    });

    $scope.map = map;
};
google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialise());
})






// // .controller('GeoCtrl', function($cordovaGeolocation) {

// //   var posOptions = {timeout: 10000, enableHighAccuracy: false};
// //   $cordovaGeolocation
// //     .getCurrentPosition(posOptions)
// //     .then(function (position) {
// //       var lat  = position.coords.latitude
// //       var long = position.coords.longitude
// //     }, function(err) {
// //       // error
// //       console.log("error del bueno", err);
// //     });


//   var watchOptions = {
//     frequency : 1000,
//     timeout : 3000,
//     enableHighAccuracy: false // may cause errors if true
//   };

//   var watch = $cordovaGeolocation.watchPosition(watchOptions);
//   watch.then(
//     null,
//     function(err) {
//       // error
//     },
//     function(position) {
//       var lat  = position.coords.latitude
//       var long = position.coords.longitude
//   });


//   watch.clearWatch();
//   // OR
//   // $cordovaGeolocation.clearWatch(watch)
//   //   .then(function(result) {
//   //     // success
      
//   //     }, function (error) {
//   //     // error
//   //   });
// })












//controlladores
.controller('control1', ['$scope', '$log', function($scope, $log){
  
  $scope.servicios = [
    {servicio: "Hacer envío", clase:"ion-plus-circled", colorb:"positive",
      funcion: function(){ alert('esto es nuevo serv')}},
    {servicio: 'Horario servicios ', clase:"ion-clock", colorb:"assertive", 
      funcion: function(){ alert('HORARIO')}},
    {servicio: "Dónde esta mi envío", clase:"ion-help-circled", colorb:"balanced",
      funcion: function(){ alert('donde esta mi envio')}}
  ];

  $scope.refrescar = function(){
    alert('refresh button pressed');
  };

  $scope.nuevoServicio = function(){
    alert('botton nuevo servicio');
  };

}])




.controller('contactoCtrl', ['$scope', function($scope){
  $scope.contactos = [
    {contacto: 'contacto@tudomiciliario.com', body:"Email: "},
    {contacto: 3168335043, body:"Telefono: "}
  ];
}])

.controller('PostsCtrl', ['$scope', function($scope){
  // necesario para ng-model 
  $scope.sumadre = {};
  $scope.agregarServicio = function(){
    if($scope.sumadre.handle){
      //unshift agrega al inicio de un array posts
      $scope.posts.unshift({
        trabajo:'Pago Recibo',
        locacion: $scope.sumadre.handle});
      $scope.sumadre.handle = null;
    }  
  }
  //modelo pasado a datos de envío
  $scope.posts = [];


  // geolocalizacion google maps
  // google.maps.event.addDomListener(window, "load", function(){
  //   var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

  //   var mapOptions = {
  //     center: myLatlng,
  //     zoom: 16,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };

  //   var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  //   $scope.map = map;


  // });
  // geolocalizacion google maps

}])



//viene con angular blank
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

//ionic tabs


})
