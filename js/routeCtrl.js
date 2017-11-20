app.config(function($routeProvider) {
    $routeProvider
    .when('/',{
			templateUrl: 'html/home.html',
      controller: 'inicioCtrl'
		})
    .when('/ayuda', {
        templateUrl : 'html/ayuda.html',
        controller: 'ayudaCtrl'
    })
    .when('/acerca', {
        templateUrl : 'html/acerca.html',
        controller : 'acercaCtrl'
    })/*
    .when('/anexo', {
        templateUrl : 'html/anexo.html',
    })*/
    .when('/menores', {
        templateUrl : 'html/menores.html',
        controller: 'menoresCtrl'
    })
    .when('/noticias', {
        templateUrl : 'html/noticias.html',
        controller: 'noticiasCtrl'
    })
    .when('/tests', {
        templateUrl : 'html/tests.html',
        controller: 'testCtrl'
    })
    .when('/seguridad', {
        templateUrl : 'html/seguridad.html',
        controller  : 'seguridadCtrl'
    })
    .when('/guia', {
        templateUrl : 'html/guia.html',
        controller: 'guiaCtrl'
    })
    .otherwise({
			redirectTo: '/'
		});
});
