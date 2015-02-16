// Question 1
app.controller('LoadingButtonCtrl', function($scope, $timeout) {
	$scope.buttonText='Test';
	$scope.buttonDisabled=false;
	$scope.startLoading=function(){
		console.log('Loading');
		$scope.buttonText="Loading...";
		$scope.buttonDisabled=true;
		$timeout(
			function() {
				$scope.buttonText='Test';
				$scope.buttonDisabled=false;
			},
			
			4000
		);
	} 
});


	// $window.location = 'http://google.com';
	// $scope.submit = function(user) {
	// 	console.log(user);
	// };
	// $scope.name = 'Aaron';
	// $scope.isContentVisible = false;
	// $scope.logName = function() {
	// 	console.log($scope.name);
	// };

	// $scope.showContent = function() {
	// 	$scope.isContentVisible = !$scope.isContentVisible;
	// }

	// $scope.buttonText = 'Click Me';
	// $scope.buttonDisabled = false;
	// $scope.startLoading = function() {
	// 	$scope.buttonText = 'Loading...';
	// 	$scope.buttonDisabled = true;

	// 	setTimeout(function() {
	// 		console.log('test');
	// 		$scope.buttonText = 'Click Me';
	// 		$scope.buttonDisabled = false;
	// 		$scope.$apply();
	// 	}, 2000);
	// }