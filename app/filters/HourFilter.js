'use strict';

angular.module('calendarTodoApp')
        .filter('hourFormat', function () {
            return function (hour) {

                var prefix = hour;

                // hour 0 -> 12am
                if (hour === 0) {
                    prefix = 12;
                    // hours 13-23 -> 1pm-11pm
                } else if (hour > 12) {
                    prefix = hour - 12;
                }

                var suffix = hour < 12 ? 'am' : 'pm';

                return prefix + suffix;
            };
        });