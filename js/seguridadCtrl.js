app.controller('seguridadCtrl',['$scope',function($scope){
  $scope.setActive("menuSeguridad");
}]);

app.controller('info',function($scope,$http){
  $scope.topics = {};
  $scope.section = "Holas";
  
  $scope.topics = [
    {
      "title" : "Titulo A",
      "summary" : "orem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatum ullam, possimus aliquam mollitia, inventore ipsam quaerat atque. Corporis, excepturi.",
      "labels"  : "basico"
    },
    {
      "title" : "Titulo B",
      "summary" : "orem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatum ullam, possimus aliquam mollitia, inventore ipsam quaerat atque. Corporis, excepturi.",
      "labels"  : "basico"
    },
    {
      "title" : "Titulo C",
      "summary" : "orem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatum ullam, possimus aliquam mollitia, inventore ipsam quaerat atque. Corporis, excepturi.",
      "labels"  : "basico"
    },
    {
      "title" : "Titulo A",
      "summary" : "orem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatum ullam, possimus aliquam mollitia, inventore ipsam quaerat atque. Corporis, excepturi.",
      "labels"  : "basico"
    },
    {
      "title" : "Titulo C",
      "summary" : "orem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatum ullam, possimus aliquam mollitia, inventore ipsam quaerat atque. Corporis, excepturi.",
      "labels"  : "basico"
    },
    {
      "title" : "Titulo E",
      "summary" : "orem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatum ullam, possimus aliquam mollitia, inventore ipsam quaerat atque. Corporis, excepturi.",
      "labels"  : "basico"
    }
  ]


  $scope.guia = function(){ $scope.section = "Guias"}
  $scope.siguiente = function(){  }
});
