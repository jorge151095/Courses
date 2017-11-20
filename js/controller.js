//var app = angular.module("Courses", ['ngMaterial','ngAnimate', 'ngSanitize','ngRoute','ngResource','angularCSS']);
var app = angular.module("Courses", ['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

	$scope.menuPrincipal = 'html/menu.html';

	$scope.setActive = function(Opcion){
			$scope.menuInicio      ="";
			$scope.menuGuia        ="";
			$scope.menuMenores     ="";
			$scope.menuNoticias    ="";
			$scope.menuSeguridad   ="";
			$scope.menuTest        ="";
			$scope.menuAyuda       ="";
			$scope.menuAcerca      ="";

			$scope[Opcion] = "active";

	}

}]);
