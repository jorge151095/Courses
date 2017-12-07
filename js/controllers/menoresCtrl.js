app.controller('menoresCtrl',function($scope,$location,MyService){
    $scope.goToVideoAv = function(id){
        MyService.data.id = id;
        $location.path('/temaAvanzado').replace();
      };
    
    $scope.goToVideoIn = function(id){
    MyService.data.id = id;
    $location.path('/temaIntermedio').replace();
    };

    $scope.goToVideoBa = function(id){
    MyService.data.id = id;
    $location.path('/temaBasico').replace();
    };
});
