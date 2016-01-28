var app = angular.module('erpApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl:'../views/home.html'		
	})
	.when('/',{
		templateUrl:'../views/login.html'
	});
})