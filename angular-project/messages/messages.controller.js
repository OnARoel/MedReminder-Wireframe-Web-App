(function () {
    'use strict';

    angular
        .module('app')
        .controller('MessagesController', MessagesController);

    MessagesController.$inject = ['UserService', '$rootScope'];

    function MessagesController(UserService, $rootScope) {
        var vm = this;

        vm.user = null;
        vm.deleteUser = deleteUser;
        vm.loadJS = loadJS;
        vm.sendMessage = sendMessage;

        initController();

        function initController() {
            loadCurrentUser();
            loadJS();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                });
        }

        function loadJS() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    $(".conversation-content").animate({
                        scrollTop: $(document).height()
                    }, "slow");
                });
        }

        function sendMessage() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    var text = $("#input-message").val();
                    $("#input-message").val('');

                    $('.conversation-content').append("<div class='message-wrapper clearfix'><div class =" + '"conversation-message right"' + '>' + text + '</div></div>');
                    $(".conversation-content").animate({
                        scrollTop: $(document).height()
                    }, "slow");
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
