(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope'];

    function HomeController(UserService, $rootScope) {
        var vm = this;

        vm.user = null;
        vm.loadTodayMeds = loadTodayMeds;

        initController();

        function initController() {
            loadCurrentUser();
            loadTodayMeds();
        }

        function loadTodayMeds() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    var d = new Date();
                    var n = d.getDay();
                    console.log(n);
                });
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                });
        }

    }

})();
