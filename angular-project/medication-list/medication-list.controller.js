(function () {
    'use strict';

    angular
        .module('app')
        .controller('MedicationListController', MedicationListController);

    MedicationListController.$inject = ['UserService', '$rootScope'];

    function MedicationListController(UserService, $rootScope) {
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

        function addMed() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                    var medication = new Object();
                    medication.name = "medication-name";
                    medication.type = "pill";
                    medication.amount = "1";
                    user.medications = medication;
                    UserService.Update(vm.user)
                    console.log(vm);
                });
        }

        function deleteUser(id) {
            UserService.Delete(id)
                .then(function () {
                    loadCurrentUser();
                });
        }
    }

})();
