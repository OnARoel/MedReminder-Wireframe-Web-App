﻿(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['UserService', '$location', 'AuthenticationService', '$rootScope', 'FlashService'];

    function LoginController(UserService, $location, AuthenticationService, $rootScope, FlashService) {
        var vm = this;

        vm.login = login;
        vm.register = register;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $(function () {
                        $('.ng-binding.ng-scope.alert.alert-danger').remove();
                    });
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };

        function register() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        vm.dataLoading = false;
                        $(function () {
                            $('#modal-signup').hide();
                        });
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        };
    }

})();
