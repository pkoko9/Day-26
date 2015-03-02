
// Question 2

app.controller('LoadingButtonCtrl', function($scope) {

	$scope.showContentRed = function() {
		// $scope.isContentVisible = !$scope.isContentVisible;
		$scope.red = true;
		$scope.green = false;
		$scope.blue = false;
	}
	$scope.showContentGreen = function() {	
		$scope.red = false;
		$scope.green = true;
		$scope.blue = false;
	}
	$scope.showContentBlue = function() {
		$scope.red = false;
		$scope.green = false;
		$scope.blue = true;
	}
});
















