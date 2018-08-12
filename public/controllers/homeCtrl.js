(function(){

    var app = angular.module('homeController',['authServices'])
    app.config(function(){

        console.log("Home Controller Loaded")
    })

    app.controller('homeCtrl', function($scope,$rootScope,Auth,$timeout){
       $scope.shineHomeOpen = true;
       $scope.codingPageOpen = false;
       $scope.fadein = true;
       $scope.fadeout = false;
        $scope.fadeinCodeDisplay = true;
       $scope.fadeoutCodeDisplay = false;
       $scope.codeDisplay = false;
       $scope.borderTop = false;
       $scope.borderRight = false;
       $scope.borderLeft = false;
       $scope.borderBottom = false;

       $scope.openShineHome = function(){
           if(!$scope.shineHomeOpen){
                $scope.fadein=false;
               $scope.fadeout = true;
                  $timeout(function(){
                   
               $scope.shineHomeOpen = true;
               $scope.codingPageOpen = false;
                   $scope.fadeout= false;
                   $scope.fadein= true;
               
               },500)
           }
       }
       $scope.openCodingPage = function(){
           console.log("CLICKED")
           if(!$scope.codingPageOpen){
               $scope.fadein=false;
               $scope.fadeout = true;

               $timeout(function(){
                   $scope.codingPageOpen = true;
               $scope.shineHomeOpen = false;
                   $scope.fadeout= false;
                   $scope.fadein= true;
               
               },500)
                   $timeout(function(){
                       $scope.codeDisplay = true;
                       $scope.fadeinCodeDisplay = true;
                   },1300)
               
           }else{
                
           }
       }
    })

}());