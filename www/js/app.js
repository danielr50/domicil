// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])



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
          templateUrl: 'templates/home.html',
          controller: 'TodosCtrl'
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
          templateUrl: 'templates/facts2.html'
        }
      }
    })
    //tab/about
    .state('tabs.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html'
        }
      }
    })
    //tab/navstack
    .state('tabs.navstack', {
      url: '/navstack',
      views: {
        'about-tab': {
          templateUrl: 'templates/nav-stack.html'
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
    });


  $urlRouterProvider.otherwise('/tab/home');
  
  
})

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
.controller('TodosCtrl', function($scope){
    $scope.todos = [
      {title:"Take out trash", done:true},
      {title:'Do laundrty', done:false},
      {title:'Start cooking', done:false}
    ]
})



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
