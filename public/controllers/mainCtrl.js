(function () {

    var app = angular.module('mainController', ['authServices', 'userServices', 'payperiodServices'])
    app.config(function () {

        console.log("Main Controller Loaded")
    })

    app.controller('mainCtrl', function ($scope, Auth, $timeout, $location, User, $rootScope, AuthToken, PayPeriod, $window) {

       $scope.shineHomeOpen = true;
       $scope.codingPageOpen = true;
       $scope.openCodingPage = function(){
           console.log("CLICKED")
           if(!$scope.codingPageOpen){
               $scope.codingPageOpen = true;
               $scope.shineHomeOpen = false;
           }else{
                
           }
       }

    })

}());