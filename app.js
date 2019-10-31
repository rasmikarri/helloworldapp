var app = angular.module('catsvsdogs', []);


var bg1 = document.getElementById('background-stats-1');
var bg2 = document.getElementById('background-stats-2');

app.controller('statsCtrl', function($scope){
  $scope.aPercent = 50;
  $scope.bPercent = 50;
  $scope.whichEnv ="localhost"

  var updateScores = function(){
       bg1.style.width = "50%";
       bg2.style.width = "50%";
       $scope.whichEnv ="localhost"
       $scope.$apply(function () {
         $scope.aPercent = percentages.a;
         $scope.bPercent = percentages.b;
         $scope.total = a + b;
       });

  };

  var init = function(){
    document.body.style.opacity=1;
    updateScores();
  };
  init();

});

