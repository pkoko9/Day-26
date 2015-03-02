
// Question 5

app.controller('LoadingButtonCtrl', function($scope, $window) {

	// $window.location = 'http://theironyard.com';
	$scope.submit = function(user) {
		console.log(user);
	};
	$scope.userName = 'Paul';
	$scope.isContentVisible = false;
	$scope.logName = function() {
		console.log($scope.name);
	};

	$scope.showContent = function() {
		$scope.isContentVisible = !$scope.isContentVisible;
	}

});















