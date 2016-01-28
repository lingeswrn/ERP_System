app.controller('loginPageCtrl',function($scope,$http){
	$scope.openLogin = true;
	$scope.sts = false;
	$scope.signup = {};
	$scope.login = {};
	$scope.head = 'Login';
	$scope.openSignupForm = function(){
		$scope.openLogin = false;
		$scope.openSignup = true;
		$scope.head = 'Sign Up';
	}
	$scope.openLoginForm = function(){
		$scope.openLogin = true;
		$scope.openSignup = false;
		$scope.head = 'Login';
	}
	$scope.sigupUser = function(){		
		if(!angular.equals({}, $scope.signup) && Object.keys($scope.signup).length == 3){
			$http.post('/signupUserData',$scope.signup).success(function(response){				
				if(response == 1){
					$scope.sts = true;
					$scope.stsclass = 'alert-success';
					$scope.message = 'Sucessfully created';
				}else{
					$scope.sts = true;
					$scope.stsclass = 'alert-warning';
					$scope.message = 'Email already Registered';
				}
			});
		}else{
			$scope.sts = true;
			$scope.stsclass = 'alert-danger';
			$scope.message = 'Fill all the fields';
		}
	}
	$scope.loginUser = function(){
		
		if(!angular.equals({}, $scope.login) && Object.keys($scope.login).length == 2){
			$http.post('/loginUserData',$scope.login).success(function(response){				
				if(Object.keys(response).length != 0)
					location.replace("http://localhost:8000/#/home");
			});
		}else{
			$scope.sts = true;
			$scope.stsclass = 'alert-danger';
			$scope.message = 'Fill all the fields';
		}
	}
});