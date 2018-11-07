'use strict';

angular.module('calendarTodoApp')
        .directive('date', ['DateTasksService', 'OverlayService', function (DateTasksService, OverlayService) {
                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: 'date-tasks/date.html',
                    scope: {
                        timestamp: '='
                    },
                    link: function (scope) {
                        scope.displayDate = scope.timestamp.format('ddd, MMM D');

                        scope.OverlayService = OverlayService;
                        scope.DateTasksService = DateTasksService;

                        scope.setTaskComplete = function (task, complete) {
                            task.complete = complete;
                        };
                    }
                };
            }]);
