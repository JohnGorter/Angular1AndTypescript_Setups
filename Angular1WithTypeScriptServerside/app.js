var johncontroller = (function () {
    function johncontroller($scope) {
        this.$scope = $scope;
        this.$scope.message = 'hello classes';
    }
    return johncontroller;
})();
angular.module("john", []).controller('johncontroller', johncontroller);
angular.element(document).ready(function () {
    angular.bootstrap(document, ['john']);
});
