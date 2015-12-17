var controllers = angular.module ('fotografica.controllers', [])

controllers.controller('HomeController', ['$scope' ,function($scope) {

	$scope.designShow = function(){
        $scope.hoverDesign = true;
    };

    $scope.designHide = function(){
        $scope.hoverDesign = false;
    };

    $scope.photoShow = function(){
        $scope.hoverPhoto = true;
    };

    $scope.photoHide = function(){
        $scope.hoverPhoto = false;
    };

    $scope.contactShow = function(){
        $scope.hoverContact = true;
    };

    $scope.contactHide = function(){
        $scope.hoverContact = false;
    };

    $scope.blogShow = function(){
        $scope.hoverBlog = true;
    };

    $scope.blogHide = function(){
        $scope.hoverBlog = false;
    };

    $scope.storeShow = function(){
        $scope.hoverStore = true;
    };

    $scope.storeHide = function(){
        $scope.hoverStore = false;
    };
                  
}]);