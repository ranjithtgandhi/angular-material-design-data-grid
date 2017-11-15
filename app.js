(function() {
 'use strict';


	angular.module('mainApp', ["ui.router",'ui.bootstrap','angularUtils.directives.dirPagination','ngMaterial',"ngMessages","mainControllers","mainServices"])
	.config(function($stateProvider, $urlRouterProvider) {	 	
	 	
		 	$stateProvider.state("list", {
		 		url: "/",
		 		templateUrl: "views/list.html",
		 		controller: "mainCtrl"
		 	});
		 	$urlRouterProvider.otherwise("/");

	})
	.run(function($rootScope){
		$rootScope.currentYear = new Date().getFullYear();
	});

})();
