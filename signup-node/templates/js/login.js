$(document).ready(function () {
    $('#show-pass').change(function () {
        if ($(this).is(':checked')) {
            $("#password-field").attr('type', '');
        } else {
            $("#password-field").attr('type', 'password');
        }
    });
});
