(function () {
    'use strict';

    angular
        .module('book', [
            'ui.router'
        ])
        .config(config);

    config.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('book', {
                url: '/book',
                templateUrl: 'app/book/book.html',
                controller: 'BookCtrl'
            });
    }
})();


