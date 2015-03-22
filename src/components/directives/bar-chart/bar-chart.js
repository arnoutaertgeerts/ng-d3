(function () {
    'use strict';

    angular
        .module('d4')
        .directive('barChart', barChart);


    function barChart() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'components/directives/bar-chart/bar-chart.html',
            scope: {
                data: '='
            },
            link: linkFunc,
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true // because the scope is isolated
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    Controller.$inject= ['$timeout'];

    function Controller($timeout) {

        var vm = this;

        $timeout(function() {
            d3.selectAll('.bar')
                .data(vm.data)
                .style('width', function (d) {
                    return d + '%'
                })
        });
    }

})();
