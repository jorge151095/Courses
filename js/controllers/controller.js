var app = angular.module("Courses", ['ngMaterial','ngAnimate', 'ngSanitize','ngRoute','ngResource','ngMdIcons','ui.bootstrap']);
app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
  
    slides.push({
      image:'img/inicio/who2.jpg',
      text: 'Infórmate todo sobre nosotros, nuestra misión, visión y objetivos como empresa',
      title: '¿Quienes somos?',
      id: 0,
      url : "acerca"
    });

    slides.push({
      image:'img/inicio/courses2.jpeg',
      text: 'Conoce todos los cursos que ofrecemos para ti, de acuerdo a tu nivel',
      title: 'Cursos',
      id: 1,
      url : "cursos"
    });

    slides.push({
      image:'img/inicio/test1.jpg',
      text: 'Pon a prueba todos tus conocimientos en seguridad informática con este sencillo test',
      title: 'Pruebate',
      id: 2,
      url : "tests"
    });

    slides.push({
      image:'img/inicio/tool.jpg',
      text: 'Preparate con las mejores herramientas de seguridad informática y navega de forma segura',
      title:'Herramientas',
      url : "menores#herramientas",
      id: 3
    });

    slides.push({
      image:'img/inicio/new.jpeg',
      text: 'Todas las noticias relevantes sobre seguridad informática a la comodidad de un click',
      title:'Noticias',
      id: 4,
      url : "noticias"
    });
 
}]);
