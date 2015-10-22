// import {Component, bootstrap} from 'angular2/angular2';
// import creates a module dependency on angular, so we cannot use this import here
// we have to link in our html and bootstrap manually after this script has loaded...


export class AppComponent {
	$scope;
	constructor($scope){
		this.$scope = $scope; 
		this.$scope.message = 'hello world from client side transpiling';
	}
 }


angular.module('john', []).controller('johncontroller', AppComponent);

angular.element(document).ready(function(){
	angular.bootstrap(document, ['john']);
	
}); 