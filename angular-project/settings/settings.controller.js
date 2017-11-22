(function () {
    'use strict';

    angular
        .module('app')
        .controller('SettingsController', SettingsController);

    SettingsController.$inject = ['UserService', '$rootScope'];

    function SettingsController(UserService, $rootScope) {
        var vm = this;

        vm.user = null;
        vm.loadJS = loadJS;

        initController();

        function initController() {
            loadCurrentUser();
            loadJS();
        }

        function loadJS() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    $("#fader").on("input", function () {
                        $('#v-28').css("font-size", $(this).val() + "px");
                        $("#fontsize").text($(this).val() + "px");
                    });
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
