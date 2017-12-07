var app = angular.module("Courses", ['ngMaterial','ngAnimate', 'ngSanitize','ngRoute','ngResource','ngMdIcons','ui.bootstrap']);
app.factory('MyService', function() {
  return {
    data: {}
  };
});
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
      image:'img/inicio/tech.JPG',
      text: 'Si eres padre de familia y deseas aprender sobre seguridad informatica para cuidar a tus hijos, da click aquí',
      title:'Padres de familia',
      id: 2,
      url : "menores"
    });

    slides.push({
      image:'img/inicio/test1.jpg',
      text: 'Pon a prueba todos tus conocimientos en seguridad informática con este sencillo test',
      title: 'Pruebate',
      id: 3,
      url : "tests"
    });

    slides.push({
      image:'img/inicio/tool.jpg',
      text: 'Preparate con las mejores herramientas de seguridad informática y navega de forma segura',
      title:'Herramientas',
      url : "menores#herramientas",
      id: 4
    });

    slides.push({
      image:'img/inicio/new.jpeg',
      text: 'Todas las noticias relevantes sobre seguridad informática a la comodidad de un click',
      title:'Noticias',
      id: 5,
      url : "noticias"
    });

    slides.push({
      image:'img/inicio/help.jpg',
      text: '¿No sabes como navegar en nuestra página web? Ve este sencillo tutorial',
      title:'Ayuda',
      id: 6,
      url : "ayuda"
    });

    
 
}]);
