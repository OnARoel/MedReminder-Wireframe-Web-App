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
        vm.updateCurrentUser = updateCurrentUser;
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

        function updateCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                    user.firstName = $("#edit-first").val();
                    user.lastName = $("#edit-last").val();
                    UserService.Update(vm.user);
                    location.reload();
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
