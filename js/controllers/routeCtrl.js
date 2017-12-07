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
    .when('/noticia', {
        templateUrl : 'html/noticia.html',
        controller: 'noticiasCtrl'
    })
    .when('/tests', {
        templateUrl : 'html/tests.html',
        controller: 'testCtrl'
    })
    .when('/test', {
        templateUrl : 'html/test.html',
        controller: 'testCtrl'
    })
    .when('/retroalimentacion', {
        templateUrl : 'html/retroalimentacion.html',
        controller: 'testCtrl'
    })
    .when('/cursos', {
        templateUrl : 'html/seguridad.html',
        controller  : 'seguridadCtrl'
    })
    .when('/guia', {
        templateUrl : 'html/guia.html',
        controller: 'guiaCtrl'
    })
    .when('/basico', {
        templateUrl : 'html/basico.html',
        controller  : 'basicoCtrl'
    })
    .when('/temaBasico', {
        templateUrl : 'html/temaBasico.html',
        controller  : 'basicoCtrl'
    })
    .when('/intermedio', {
        templateUrl : 'html/intermedio.html',
        controller  : 'intermedioCtrl'
    })
    .when('/temaIntermedio', {
        templateUrl : 'html/temaIntermedio.html',
        controller  : 'intermedioCtrl'
    })
    .when('/avanzado', {
        templateUrl : 'html/avanzado.html',
        controller  : 'avanzadoCtrl'
    })
    .when('/temaAvanzado', {
        templateUrl : 'html/temaAvanzado.html',
        controller  : 'avanzadoCtrl'
    })
    .otherwise({
        redirectTo: '/menu',
        controller: 'mainCtrl'
    });
});
