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
















