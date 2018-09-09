(function(){

    var app = angular.module('storeDirectives',[]);

//var hearto = 0;
//var status =0;
app.directive("heartAdder",function(){

return{

	restrict: 'E',
	templateUrl: '../views/directives/heart-adder.html',
	controller: function(){ 
		
		
		this.addHeart = function(id){

		 if(status===0){
				
				hearto++;
				status= 1;
		}else{

			//this.status=1;
		hearto--;
			status=0;
		}
console.log(hearto);
		}
     
	},
	controllerAs:'heartCtrl'


}


});
app.directive('composeMessagePage',function(){


		return{

			restrict: 'E',
			templateUrl:'../views/compose-message-page.html',
					controller: function() {
    	this.imageIndex = 0;
    	this.currentImageChange = function(imageNumber) {
      	console.log(imageNumber);
      	this.imageIndex = imageNumber || 0;
    	};},
		controllerAs: 'gallery'
		}

	});
app.directive('messagePage',function(){


		return{

			restrict: 'E',
			templateUrl:'../views/message-page.html',
					controller: function() {
    	this.imageIndex = 0;
    	this.currentImageChange = function(imageNumber) {
      	console.log(imageNumber);
      	this.imageIndex = imageNumber || 0;
    	};},
		controllerAs: 'gallery'
		}

	});
app.directive('timesheetPage',function(){


		return{

			restrict: 'E',
			templateUrl:'../views/timesheet-page.html',
					controller: function() {
    	this.imageIndex = 0;
    	this.currentImageChange = function(imageNumber) {
      	console.log(imageNumber);
      	this.imageIndex = imageNumber || 0;
    	};},
		controllerAs: 'gallery'
		}

	});
    app.directive('infoPage',function(){


		return{

			restrict: 'E',
			templateUrl:'../views/info-page.html',
					controller: function() {
    	this.imageIndex = 0;
    	this.currentImageChange = function(imageNumber) {
      	console.log(imageNumber);
      	this.imageIndex = imageNumber || 0;
    	};},
		controllerAs: 'gallery'
		}

	});
	 app.directive('schedulePage',function(){


		return{

			restrict: 'E',
			templateUrl:'../views/schedule-page.html',
				controller: function() {
    	this.imageIndex = 0;
    	this.currentImageChange = function(imageNumber) {
      	console.log(imageNumber);
      	this.imageIndex = imageNumber || 0;
    	};},
		controllerAs: 'gallery'
		
		}

	});
	 app.directive('scheduledJobPage',function(){


		return{

			restrict: 'E',
			templateUrl:'../views/scheduled-job-page.html',
				controller: function() {
					
    	this.imageIndex = 0;
		     this.labels = ["Activity"];
  this.data = [ 100];
    	this.currentImageChange = function(imageNumber) {
      	console.log(imageNumber);
      	this.imageIndex = imageNumber || 0;
    	};},
		controllerAs: 'scheduledJob'
		
		}

	});
	
    app.directive('landingGalleryShop',function(){


		return{

			restrict: 'E',
			templateUrl:'../views/landing-gallery-shop.html',
					controller: function() {
    	this.imageIndex = 0;
    	this.currentImageChange = function(imageNumber) {
      	console.log(imageNumber);
      	this.imageIndex = imageNumber || 0;
    	};},
		controllerAs: 'gallery'
		}

	});
	app.directive('landingPage',function(){

		return{

				restrict:'E',
				templateUrl:'../views/landing-page.html'


		}




	});

    app.directive('productGallery', function(){

	return{

		restrict: 'E',
		templateUrl: '../views/product-gallery.html',
		controller: function() {
    	this.imageIndex = 0;
    	this.currentImageChange = function(imageNumber) {
      	console.log(imageNumber);
      	this.imageIndex = imageNumber || 0;
    	};},
		controllerAs: 'gallery'
		};
});
//Custom element directive w/no controller.
app.directive('productTitle', function() {

	return{

		restrict: 'E',
		templateUrl: '../views/product-title.html'
		

	};

});
//Custom controller directive w/PanelController controller
app.directive('productPanels',function(){

	return{

		restrict: 'E',
		templateUrl:'../views/product-panels.html',
		//move controller functionality into directive.
		controller: function(){
       this.tab = 1;

       this.selectTab = function(setTab){

       this.tab = setTab;

	   };
	   this.isSelected = function(checkTab){

		return this.tab === checkTab;};},
		controllerAs: 'panel'};
});

app.directive('specificationPanel',function(){

		return{

			restrict: 'E',
			templateUrl: '../views/specification-panel.html'


		};




});
app.directive('fadeIn', function($timeout){
    return {
        restrict: 'A',
        link: function($scope, $element, attrs){
            $element.addClass("ng-hide-remove");
            $element.on('load', function() {
                $element.addClass("ng-hide-add");
            });
        }
    };
})





})();