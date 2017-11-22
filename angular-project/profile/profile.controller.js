(function () {
    'use strict';

    angular
        .module('app')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['UserService', '$location', '$rootScope'];

    function ProfileController(UserService, $location, $rootScope) {
        var vm = this;

        vm.user = null;
        vm.deleteUser = deleteUser;
        initController();

        function initController() {
            loadCurrentUser();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                });
        }

        function deleteUser(id) {
            UserService.Delete(id)
                .then(function () {
                    $location.path('/login');
                });
        }
    }

})();
