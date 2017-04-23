angular.module('starter.controllers')
.controller('TasksController', function ($rootScope, $scope, Tasks) {
	$scope.tasks_undone = Tasks.all(0);
	$scope.tasks_done = Tasks.all(1);
	$scope.listCanSwipe = true
  	$scope.listCannotSwipe = true
	$scope.complete=function(item){
		$scope.tasks_undone.splice($scope.tasks_undone.indexOf(item), 1);
		$scope.tasks_done.push(item);
		Tasks.complete(item,$scope.tasks_undone.indexOf(item));
	};
});