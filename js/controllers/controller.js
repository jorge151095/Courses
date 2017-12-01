var app = angular.module("Courses", ['ngMaterial','ngAnimate', 'ngSanitize','ngRoute','ngResource','ngMdIcons','ui.bootstrap']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
  
    slides.push({
      image:'img/C1.jpeg',
      text: 'welcome 1',
      title: 'Básico',
      id: 0
    });

    slides.push({
      image:'img/c5.jpeg',
      text: 'welcome 2',
      title: 'Intermedio',
      id: 1
    });

    slides.push({
      image:'img/C3.jpg',
      text: 'welcome 3',
      title:'Avanzado',
      id: 2
    });
 
}]);
