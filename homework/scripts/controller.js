// Question 1
// app.controller('LoadingButtonCtrl', function($scope, $timeout) {
// 	$scope.buttonText='Test';
// 	$scope.buttonDisabled=false;
// 	$scope.startLoading=function(){
// 		console.log('Loading');
// 		$scope.buttonText="Loading...";
// 		$scope.buttonDisabled=true;
// 		$timeout(
// 			function() {
// 				$scope.buttonText='Test';
// 				$scope.buttonDisabled=false;
// 			},
			
// 			4000
// 		);
// 	} 
// });

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











