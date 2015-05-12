// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])



//config
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  

  $stateProvider.state('app', {
    abstract: true,
    url:'/todos',
    views: {
      todos: {
        templateUrl: 'templates/todos.html',
        controller: 'TodosCtrl'
        
      }
    }
  })
  $stateProvider.state('app.todos', {
    url:'/todos',
    views: {
      todos2: {
        templateUrl: 'templates/todos.html',
        controller: 'TodosCtrl'
        
      }
    }
  });
  // inicio
  $stateProvider.state('home', {
    url:'/',
    views:{
      home:{
        templateUrl: 'templates/home.html',
        controller: 'control1'
      }
    }
    
  });
  $stateProvider.state('app.help',{
    url: '/help',
    views: {
      help: {
        templateUrl: 'templates/help.html',
        controller: 'control1'
      }
    }
  })








})

//controlladores
.controller('control1', ['$scope', '$log', function($scope, $log){
  
  $scope.servicios = [
    {servicio: "Hacer envío", clase:"ion-plus-circled", colorb:"positive",
      funcion: function(){ alert('esto es nuevo serv')}},
    {servicio: 'Horarios ', clase:"ion-clock", colorb:"assertive", 
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
