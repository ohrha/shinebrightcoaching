(function(){

//console.log("app.js loaded");

var app = angular.module('qlc',['appRoutes', 'mainController',"homeController"]);
																																																  
app.config(function($compileProvider){

	//$httpProvider.interceptors.push('AuthInterceptors');
	//$window.Stripe.setPublishableKey('pk_test_aE3UDuxFXzcslBrNanFIIi6Q');
    console.log("app module loaded.")
	$compileProvider.preAssignBindingsEnabled(true);

});
app.controller('QlhController', [  function() {
console.log("QlhController")


}])
}());


