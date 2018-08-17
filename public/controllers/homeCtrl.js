(function () {

    var app = angular.module('homeController', [])
    app.config(function () {

        console.log("Home Controller Loaded")
    })

    app.controller('homeCtrl', function ($scope, $rootScope, $timeout) {
        $scope.shineHomeOpen = true;
        $scope.navBar = false;
        $scope.codingPageOpen = false;
        $scope.rosePageOpen = false;
        $scope.fadein = true;
        $scope.fadeout = false;
        $scope.fadeinCodeDisplay = true;
        $scope.fadeoutCodeDisplay = false;
        $scope.codeDisplay = false;
        $scope.borderTop = false;
        $scope.borderRight = false;
        $scope.borderLeft = false;
        $scope.borderBottom = false;
        $scope.openQlhPage = function () {
            console.log("clicked")
            $scope.fadein = false;
            $scope.qlhPageOpen = true;
            $scope.codeDisplay = false;
            $scope.codingPageOpen = false;
        }
        $scope.openHouseOfShoesPage = function () {
            console.log("clicked")
            $scope.fadein = false;
            $scope.houseOfShoesPageOpen = true;
            $scope.codeDisplay = false;
            $scope.codingPageOpen = false;
        }
        $scope.openRosePage = function () {
            console.log("clicked")
            $scope.fadein = false;
            $scope.rosePageOpen = true;
            $scope.codeDisplay = false;
            $scope.codingPageOpen = false;
        }
        $scope.openShineHome = function () {
            if (!$scope.shineHomeOpen) {
                $scope.rosePageOpen = false;
                $scope.houseOfShoesPageOpen = false;
                $scope.qlhPageOpen = false;
                $scope.navBar = false;
                $scope.fadein = false;
                $scope.fadeout = true;
                $timeout(function () {

                    $scope.shineHomeOpen = true;
                    $scope.codingPageOpen = false;
                    $scope.fadeout = false;
                    $scope.fadein = true;
                    $scope.codeDisplay = false;
                    $scope.fadeinCodeDisplay = false;

                }, 500)
            }
        }
        $scope.musicPageOpen = false;

        $scope.openMusicPage = function () {
            console.log("clicked")
            if (!$scope.musicPageOpen) {
                $scope.fadein = false;
                $scope.fadeout = true;

                $timeout(function () {
                    $scope.musicPageOpen = true;
                    $scope.shineHomeOpen = false;
                    $scope.codingPageOpen = false;
                    $scope.fadeout = false;
                    $scope.fadein = true;

                }, 500)
                $timeout(function () {
                    $scope.codeDisplay = true;
                    $scope.fadeinCodeDisplay = true;
                }, 1300)
                $timeout(function () {
                    $scope.navBar = true;
                }, 2100)

            } else {

            }
        }
        $scope.fadeoutmusicpage = false;
        $scope.fadeinmusicpage = false;
        $scope.fadeInMusic = false;
        $scope.fadeOutMusic= true;
        $scope.audio = new Audio('../audio/bride.wav')
        $scope.playTrack = function () {
            console.log("Play")
            if (!$scope.fadeoutmusicpage) {
                $scope.fadeoutmusicpage = true;
              $scope.fadeOutMusic = false;
                $scope.fadeInMusic = true;
                $scope.fadeinmusicpage = true;
                //var audio = new Audio('../audio/bride.wav');
        $scope.audio.play();

            }else{
  $scope.fadeOutMusic = false;
                $scope.fadeInMusic = true;
            }
        }
            $scope.stopTrack = function () {
        
            //if (!$scope.fadeoutmusicpage) {
                $scope.fadeoutmusicpage = false;
                // $scope.fadeinmusicpage = true;
                $scope.fadeInMusic = false;
                $scope.fadeOutMusic = true;
                
               
                //var audio = new Audio('../audio/bride.wav');
        $scope.audio.pause();
$scope.audio.currentTime = 0;;

            //}
        }
        $scope.openCodingPage = function () {
            console.log("CLICKED")
            if (!$scope.codingPageOpen) {
                $scope.fadein = false;
                $scope.fadeout = true;

                $timeout(function () {
                    $scope.codingPageOpen = true;
                    $scope.shineHomeOpen = false;
                    $scope.musicPageOpen = false;
                    $scope.fadeout = false;
                    $scope.fadein = true;

                }, 500)
                $timeout(function () {
                    $scope.codeDisplay = true;
                    $scope.fadeinCodeDisplay = true;
                }, 1300)
                $timeout(function () {
                    $scope.navBar = true;
                }, 2100)

            } else {

            }
        }
    })

}());