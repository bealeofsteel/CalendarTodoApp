'use strict';
angular.module('calendarTodoApp')
        .controller('CalendarCtrl', [function () {
                
                var _this = this;

                var offset = 0;
                
                var OFFSET_INCREMENT = 14;
                
                var getDates = function () {
                    _this.dates = [];
                    
                    for (var i = offset; i < offset + OFFSET_INCREMENT; i++) {
                        var date = moment().startOf('day');
                        date.add(i, 'day');
                        _this.dates.push(date);
                    }
                };
                
                getDates();

                this.getPreviousDates = function () {
                    offset -= OFFSET_INCREMENT;
                    getDates();
                };

                this.getNextDates = function () {
                    offset += OFFSET_INCREMENT;
                    getDates();
                };

            }]);
