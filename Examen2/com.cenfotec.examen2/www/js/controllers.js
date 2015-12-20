angular.module('examen.controllers', [])

.controller('ExamenController', function($scope, $cordovaCamera) {
  
  $scope.images = [
    {
      name: 'Photo01',
      date: '12/15/2015',
      src: '../img/photos.png', 
    },
  ];

    $scope.getPhoto= function() {
      var options = {
        destinationType : Camera.DestinationType.FILE_URI,
        encodingType : Camera.EncodingType.JPEG,
        saveToPhotoAlbum: false,
        quality : 75,
        allowEdit : false,
      };

      $cordovaCamera.getPicture(options).then(function (imageURI) {
        var image = angular.element('#image');
        image.src = imageURI;
      }, function(error){
          console.error(error);
      });
    }

    $scope.postPhoto = function(imgageURI) {
      var image = angular.element('#image');
      image.src = imageURI;
      image.date = new Date(dateString);
      image.name = imageURI.fullPath.substr(imageURI.fullPath.lastIndexOf('/') +1);

      images.push(new image); 
    }
 })   
