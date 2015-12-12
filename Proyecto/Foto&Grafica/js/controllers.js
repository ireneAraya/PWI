var controllers = angular.module ('fotografica.controllers', [])

controllers.controller('HomeController', ['$scope' ,function($scope) {

	$scope.designSlides = [
            {image1: 'img/ardilla1.jpg', description: 'Ardilla'},
            {image2: 'img/emma1.jpg', description: 'Bebé'}
        ];
    $scope.photoSlides = [
            {image: 'img/ardilla2.jpg', description: 'Ardilla'},
            {image: 'img/emma2.jpg', description: 'Bebé'}
        ];
    $scope.contactSlides = [
            {image: 'img/ardilla3.jpg', description: 'Ardilla'},
            {image: 'img/emma3.jpg', description: 'Bebé'}
        ];
    $scope.blogSlides = [
            {image: 'img/ardilla4.jpg', description: 'Ardilla'},
            {image: 'img/emma4.jpg', description: 'Bebé'}
        ];
    $scope.storeSlides = [
            {image: 'img/ardilla5.jpg', description: 'Ardilla'},
            {image: 'img/emma5.jpg', description: 'Bebé'}
        ];
                  
}]);