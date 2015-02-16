angular.module('basic.controllers', ['basic.services'])
.controller('BasicCtrl', function() {

	$scope.$watch('name', function() {
		if($scope.name.toLowerCase()=== 'aaron') {
			$scope.greeting = 'Nutella!!!!';
		}
		if($scope.name.toLowerCase()=== 'travis') {
			$scope.greeting = 'My eyes, the goggles do nothing';
		}
		else {
			$scope.greeting = '';
		}
	});
});