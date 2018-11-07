'use strict';

// Declare app level module which depends on views, and core components
angular.module('calendarTodoApp', [
    'ngRoute'
]).
        config(['$routeProvider', function ($routeProvider) {

                $routeProvider
                        .when('/', {
                            templateUrl: 'calendar/calendar.html',
                            controller: 'CalendarCtrl',
                            controllerAs: 'calendar'
                        });

                $routeProvider.otherwise({redirectTo: '/'});
            }]);
