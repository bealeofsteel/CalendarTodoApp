'use strict';

angular.module('calendarTodoApp')
        .service('OverlayService', function (CREATE_MODE, EDIT_MODE) {
            var service = {};

            // task being modified by the create/edit form
            service.task = undefined;

            // original task to apply changes to when an edit is saved
            service.originalTask = undefined;

            service.showOverlay = false;

            service.hourOptions = [];

            service.mode = undefined;

            for (var i = 0; i < 24; i++) {
                service.hourOptions.push(i);
            }

            service.createNewTask = function (timestamp) {

                service.task = {
                    title: '',
                    // date input expects value as a javascript date
                    date: timestamp.toDate(),
                    hour: moment().hour()
                };
            };

            service.setCreateMode = function () {
                service.mode = CREATE_MODE;
            };

            service.setEditMode = function () {
                service.mode = EDIT_MODE;
            };

            service.showCreateTaskOverlay = function (timestamp) {
                service.createNewTask(timestamp);
                service.setCreateMode();
                service.showOverlay = true;
            };

            service.showEditTaskOverlay = function (task) {
                service.task = angular.copy(task);
                service.setEditMode();
                service.originalTask = task;
                service.showOverlay = true;
            };

            return service;
        })

        .constant('CREATE_MODE', 'create')
        .constant('EDIT_MODE', 'edit');