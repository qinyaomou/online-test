testPortalApp.controller('baQuizCtrl', function($scope, $window, $http) {

	$scope.index = 0;

	$scope.getQuizSession = function() {

		$http.get('/getBaQuizSession/' + $scope.session).success(function(res) {
			
			$scope.lists = res;
			$scope.length = res.length;

			//Set the state
			$scope.questions = $scope.lists[$scope.index];

		}).error(function(req, res) {console.log(err)});
	}

	$scope.incrementIndex = function() {
		$scope.index ++;
		//Set the state
		$scope.questions = $scope.lists[$scope.index];
		
	}

	$scope.decrementIndex = function() {
		$scope.index --;
		//Set the state
		$scope.questions = $scope.lists[$scope.index];
		
	}

	$scope.getQuizSession();
});