angular.module('starter.services')
.factory('Tasks', function() {
	return {
		all: function(i) {
			var tasks=[];
			if(i==0){
				var taskString = window.localStorage['tasks_undone'];
				if(taskString){
					tasks=angular.fromJson(taskString);
				}
			}else{
				var taskString = window.localStorage['tasks_done'];
				if(taskString){
					tasks=angular.fromJson(taskString);
				}
			}
			return tasks;
			
		},

		save: function(task) {
			var tasks = [];
			var taskString = window.localStorage['tasks_undone'];
			if(taskString) {
				tasks = angular.fromJson(taskString);
			}
			tasks.push(task);
			window.localStorage['tasks_undone'] = angular.toJson(tasks);
		},

		complete:function(item,index){
			var tasks = [];
			var tasks2 = [];
			var taskString = window.localStorage['tasks_done'];
			if(taskString) {
				tasks = angular.fromJson(taskString);
			}
			tasks.push(item);
			window.localStorage['tasks_done'] = angular.toJson(tasks);
			
			var taskString2 = window.localStorage['tasks_undone'];
			if(taskString2) {
				tasks2 = angular.fromJson(taskString2);
			}
			tasks2.splice(index,1);
			window.localStorage['tasks_undone'] = angular.toJson(tasks2);
		},

	}
})