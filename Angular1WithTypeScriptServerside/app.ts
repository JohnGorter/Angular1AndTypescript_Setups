class johncontroller {
  $scope;
	
  constructor($scope){
      this.$scope = $scope;
      this.$scope.message = 'hello classes';
  }    
}

 angular.module("john", []).controller('johncontroller', johncontroller);  
  
 angular.element(document).ready(function(){
	 angular.bootstrap(document, ['john']);
 });
 
  
  

        