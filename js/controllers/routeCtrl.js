app.config(function($routeProvider) {
    $routeProvider
    .when('/menu',{
	    templateUrl: 'html/home.html',
        controller: 'mainCtrl'
	})
    .when('/ayuda', {
        templateUrl : 'html/ayuda.html',
        controller: 'ayudaCtrl'
    })
    .when('/acerca', {
        templateUrl : 'html/acerca.html',
        controller : 'acercaCtrl'
    })
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
    .when('/cursos', {
        templateUrl : 'html/seguridad.html',
        controller  : 'seguridadCtrl'
    })
    .when('/basico', {
        templateUrl : 'html/basico.html',
        controller  : 'seguridadCtrl'
    })
    .when('/guia', {
        templateUrl : 'html/guia.html',
        controller: 'guiaCtrl'
    })
    .otherwise({
        redirectTo: '/menu',
        controller: 'mainCtrl'
    });
});
