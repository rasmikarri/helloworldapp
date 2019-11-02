var app = angular.module('catsvsdogs', []);


var bg1 = document.getElementById('background-stats-1');
var bg2 = document.getElementById('background-stats-2');


app.controller('statsCtrl', function($scope){
  $scope.aPercent = 50;
  $scope.bPercent = 50;
  $scope.whichEnv = window.location.hostname
  document.body.style.opacity=1;
});

