'use strict';

angular.module('calendarTodoApp')
        .service('DateTasksService', function () {
            var service = {};

            // map of date -> (map of task ids -> tasks)
            service.tasksForDate = {};

            service.getTasksForDate = function (date) {
                return _.values(service.tasksForDate[date]);
            };

            service.addTaskForDate = function (task, date) {

                var tasksById = service.tasksForDate[date];

                if (!tasksById) {
                    tasksById = {};
                    service.tasksForDate[date] = tasksById;
                }

                tasksById[task.id] = task;
            };

            service.deleteTask = function (task, date) {
                delete service.tasksForDate[date][task.id];
            };

            service.moveTask = function (task, oldDate, newDate) {
                service.deleteTask(task, oldDate);
                service.addTaskForDate(task, newDate);
            };

            return service;
        });