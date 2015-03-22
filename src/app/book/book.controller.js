(function () {
    'use strict';

    angular
        .module('book')
        .controller('BookCtrl', BookCtrl);

    BookCtrl.$inject = [
        '$scope',
        '$timeout'
    ];


    function BookCtrl($scope, $timeout) {

    }
})();


