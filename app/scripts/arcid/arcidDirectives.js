'use strict';

/**
 * @ngdoc function
 * @name arcidDirectives 
 * @description
 * # arcidDirectives
 * Directives for xman
 **/
angular.module('arcidDirectives', ['crnaConstants', 'smart-table', 'arcidServices'])
// ARCID Single flight detail panel
.directive('arcidFlightPanel', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/arcid/_arcidFlightPanel.html',
    scope: {
      flight: '='
    }
  };
});
