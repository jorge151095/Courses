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
        { name: '\t    1.1 ¿Qué es la seguridad informática?', url: '' },
        { name: '\t 1.2 Principales amenazas de seguridad informática', url: '' },
        { name: '\t 1.3 Medidas indispensables para tu seguridad informática', url: '' }
    ];
    $scope.bs2 = [
        { name: '2.1 Conceptos de seguridad informática', url: '' },
        { name: '2.2 Seguridad en la información', url: '' },
        { name: '2.3 Principios de seguridad', url: '' }
    ];
    $scope.bs3 = [
        { name: '3.1 Secreto de confidencialidad', url: '' },
        { name: '3.2 Integridad', url: '' },
        { name: '3.3 Accesibilidad o disponibilidad', url: '' },
        { name: '3.4 Autenticidad', url: '' },
        { name: '3.5 No repudio', url: '' },
        { name: '3.6 Consistencia', url: '' },
        { name: '3.7 Aislamiento', url: '' },
        { name: '3.8 Auditoria', url: '' },
        { name: '3.9 Prevención e información', url: '' }
    ];
    $scope.bs4 = [
        { name: '4.1 Como sentirse seguro al navegar', url: '' },
        { name: '4.2 Navegadores web', url: '' },
        { name: '4.3 Contrafuegos (Firewall)', url: '' },
        { name: '4.4 Correo electrónico', url: '' },
        { name: '4.5 Redes sociales', url: '' }
    ];
    $scope.bs5 = [
        { name: '5.1 El virus en acción', url: '' },
        { name: '5.2 ¿Qué tipo de virus existen?', url: '' },
        { name: '5.3 La prevención - antivirus', url: '' },
        { name: '5.4 El antivirus en acción', url: '' }
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