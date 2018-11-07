'use strict';

angular.module('calendarTodoApp')
        .directive('taskOverlay', ['OverlayService', 'DateTasksService', 'CREATE_MODE', 'EDIT_MODE', function (OverlayService, DateTasksService, CREATE_MODE, EDIT_MODE) {
                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: 'task-overlay/task-overlay.html',
                    scope: {
                    },
                    link: function (scope) {

                        scope.OverlayService = OverlayService;

                        var taskId = 0;

                        scope.saveTask = function () {
                            var newTask = OverlayService.task;

                            var momentNewDate = moment(newTask.date);

                            if (newTask.title && momentNewDate.isValid()) {

                                switch (OverlayService.mode) {
                                    case CREATE_MODE:
                                        newTask.id = taskId;
                                        taskId++;
                                        DateTasksService.addTaskForDate(newTask, momentNewDate);
                                        break;
                                    case EDIT_MODE:
                                        var originalTask = OverlayService.originalTask;

                                        originalTask.title = newTask.title;
                                        originalTask.hour = newTask.hour;

                                        if (originalTask.date !== newTask.date) {
                                            DateTasksService.moveTask(originalTask, moment(originalTask.date), momentNewDate);
                                        }
                                        break;
                                }
                                OverlayService.showOverlay = false;
                            }
                        };
                    }
                };
            }]);
