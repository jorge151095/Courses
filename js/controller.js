var app = angular.module("Courses", ['ngMaterial','ngAnimate', 'ngSanitize','ngRoute','ngResource']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'html/menu.html',
        controller  : 'mainController'
    })
    .when('/menu', {
        templateUrl : 'html/menu.html',
        controller  : 'mainController'
    })
    .when('/basico', {
        templateUrl : 'html/basico.html',
        controller  : 'mainController'
    })
    .when('/intermedio', {
        templateUrl : 'html/video.html',
        controller  : 'mainController'
    })
    .when('/avanzado', {
        templateUrl : 'html/avanzado.html',
        controller  : 'mainController'
    })
    .when('/noticias', {
        templateUrl : 'html/noticias.html',
        controller  : 'mainController'
    })
    .when('/tips', {
        templateUrl : 'html/tips.html',
        controller  : 'mainController'
    })
    .when('/ayuda', {
        templateUrl : 'html/ayuda.html',
        controller  : 'mainController'
    })
    .when('/acerca', {
        templateUrl : 'html/acerca.html',
        controller  : 'mainController'
    })
    .when('/video', {
        templateUrl : 'html/video.html',
        controller  : 'mainController'
    });
});

app.controller('mainController', function($scope,$mdDialog) {
    $scope.urlvideo = "assets/video/B1.mp4";
    /*$scope.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: './html/about.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
      .then(function(answer) {
        $scope.status = 'You said the information was '' + answer + ''.';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
    };*/

    /*function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.accept = function() {
        $mdDialog.hide();
      };
    };*/
});