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
        vm.addMed = addMed;
        vm.populateMed = populateMed;
        vm.updateMed = updateMed;
        vm.deleteMed = deleteMed;

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
                    var count = Object.keys(user.medications).length;
                    console.log(count);
                    var medication = new Object();
                    var daysOfWeek = new Object();
                    if ($('#add-med-monday').is(':checked')) {
                        daysOfWeek.monday = 1;
                    } else {
                        daysOfWeek.monday = 0;
                    };
                    if ($('#add-med-tuesday').is(':checked')) {
                        daysOfWeek.tuesday = 1;
                    } else {
                        daysOfWeek.tuesday = 0;
                    };
                    if ($('#add-med-wednesday').is(':checked')) {
                        daysOfWeek.wednesday = 1;
                    } else {
                        daysOfWeek.wednesday = 0;
                    };
                    if ($('#add-med-thursday').is(':checked')) {
                        daysOfWeek.thursday = 1;
                    } else {
                        daysOfWeek.thursday = 0;
                    };
                    if ($('#add-med-friday').is(':checked')) {
                        daysOfWeek.friday = 1;
                    } else {
                        daysOfWeek.friday = 0;
                    };
                    if ($('#add-med-saturday').is(':checked')) {
                        daysOfWeek.saturday = 1;
                    } else {
                        daysOfWeek.saturday = 0;
                    };
                    if ($('#add-med-sunday').is(':checked')) {
                        daysOfWeek.sunday = 1;
                    } else {
                        daysOfWeek.sunday = 0;
                    };
                    medication.ID = count;
                    medication.name = $("#add-med-name").val();
                    medication.time = $("#add-med-time").val();
                    medication.DoW = daysOfWeek;
                    medication.type = $("#add-med-dosage-type").val();
                    medication.amount = $("#add-med-dosage-amount").val();
                    user.medications[count] = medication;
                    UserService.Update(vm.user);
                    console.log(vm);
                    location.reload();
                });
        }

        function populateMed(medication) {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    $("#edit-med-id").text(medication.ID);
                    $("#edit-med-name").val(medication.name);
                    $("#edit-med-time").val(medication.time);
                    $("#edit-med-dosage-type").val(medication.type);
                    $("#edit-med-dosage-amount").val(medication.amount);
                    if (medication.DoW.monday == 1) {
                        $('#edit-med-monday').prop("checked", true);
                    } else {
                        $('#edit-med-monday').prop("checked", false);
                    }
                    if (medication.DoW.tuesday == 1) {
                        $('#edit-med-tuesday').prop("checked", true);
                    } else {
                        $('#edit-med-tuesday').prop("checked", false);
                    }
                    if (medication.DoW.wednesday == 1) {
                        $('#edit-med-wednesday').prop("checked", true);
                    } else {
                        $('#edit-med-wednesday').prop("checked", false);
                    }
                    if (medication.DoW.thursday == 1) {
                        $('#edit-med-thursday').prop("checked", true);
                    } else {
                        $('#edit-med-thursday').prop("checked", false);
                    }
                    if (medication.DoW.friday == 1) {
                        $('#edit-med-friday').prop("checked", true);
                    } else {
                        $('#edit-med-friday').prop("checked", false);
                    }
                    if (medication.DoW.saturday == 1) {
                        $('#edit-med-saturday').prop("checked", true);
                    } else {
                        $('#edit-med-saturday').prop("checked", false);
                    }
                    if (medication.DoW.sunday == 1) {
                        $('#edit-med-sunday').prop("checked", true);
                    } else {
                        $('#edit-med-sunday').prop("checked", false);
                    }
                    console.log(medication);
                });
        }

        function updateMed() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                    var medication = new Object();
                    var daysOfWeek = new Object();
                    if ($('#edit-med-monday').is(':checked')) {
                        daysOfWeek.monday = 1;
                    } else {
                        daysOfWeek.monday = 0;
                    };
                    if ($('#edit-med-tuesday').is(':checked')) {
                        daysOfWeek.tuesday = 1;
                    } else {
                        daysOfWeek.tuesday = 0;
                    };
                    if ($('#edit-med-wednesday').is(':checked')) {
                        daysOfWeek.wednesday = 1;
                    } else {
                        daysOfWeek.wednesday = 0;
                    };
                    if ($('#edit-med-thursday').is(':checked')) {
                        daysOfWeek.thursday = 1;
                    } else {
                        daysOfWeek.thursday = 0;
                    };
                    if ($('#edit-med-friday').is(':checked')) {
                        daysOfWeek.friday = 1;
                    } else {
                        daysOfWeek.friday = 0;
                    };
                    if ($('#edit-med-saturday').is(':checked')) {
                        daysOfWeek.saturday = 1;
                    } else {
                        daysOfWeek.saturday = 0;
                    };
                    if ($('#edit-med-sunday').is(':checked')) {
                        daysOfWeek.sunday = 1;
                    } else {
                        daysOfWeek.sunday = 0;
                    };
                    medication.name = $("#edit-med-name").val();
                    medication.time = $("#edit-med-time").val();
                    medication.DoW = daysOfWeek;
                    medication.type = $("#edit-med-dosage-type").val();
                    medication.amount = $("#edit-med-dosage-amount").val();
                    medication.ID = $("#edit-med-id").text();
                    user.medications[medication.ID] = medication;
                    UserService.Update(vm.user);
                    location.reload();
                });
        }

        function deleteMed() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                    var removeMedication = new Object();
                    removeMedication.ID = null;
                    user.medications[$("#edit-med-id").text()] = removeMedication;
                    UserService.Update(vm.user);
                    location.reload();
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
