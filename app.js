angular.module('app',['LmbCityModule']).controller('AppCtrl',['$scope',function($scope){
    $scope.title="城市选择器";
    $scope.selectList=[{
        name:'山西',
        cities:['大同市', '晋城市', '晋中市']
    }];
}]);