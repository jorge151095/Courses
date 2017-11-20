app.controller('seguridadCtrl',['$scope',function($scope){
  $scope.setActive("menuSeguridad");
}]);

app.controller('info',function($scope,$http){
  $scope.topics = {};
  $scope.section = "Holas";
  $http.get('json/indice.json').success(function(data){
    $scope.topics = data.topics;
  });
  $scope.guia = function(){ $scope.section = "Guias"}
  $scope.siguiente = function(){  }
});
