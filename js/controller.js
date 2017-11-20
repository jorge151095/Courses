var app = angular.module("Courses", ['ngMaterial','ngAnimate', 'ngSanitize','ngRoute','ngResource','angularCSS','ngMdIcons']);

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
        controller  : 'mainController',
        //css: ['css/flexslider.css','css/bootstrap.min.css','css/bootstrap.min.css','css/fancybox/jquery.fancybox.css','css/jcarousel.css','skins/default.css']
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
    $scope.urlvideo = "video/B1.mp4";
    $scope.bs1 = [
        { name: 'Pepperoni', url: '' },
        { name: 'Sausage', url: '' },
        { name: 'Black Olives', url: '' },
        { name: 'Green Peppers', url: '' }
      ];
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