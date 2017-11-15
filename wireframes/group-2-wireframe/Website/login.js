$(document).ready(function () {
    $('#show-pass').change(function () {
        if ($(this).is(':checked')) {
            $("#password-field").attr('type', '');
        } else {
            $("#password-field").attr('type', 'password');
        }
    });
    $("#fader").on("input", function () {
        $('#v-28').css("font-size", $(this).val() + "px");
        $("#fontsize").text($(this).val() + "px");
    });
    $('input.login-field').on('input', function (e) {
        if (($('input.login-field').val()) == "jsmith242@clc.ca") {
            $(".btn").attr("href", "dashboard.html")
        }

    });
    /* $(".btn").on('click', function (e) {
         if (($('input.login-field').val()) == "jsmith242@clc.ca") {
             $(".btn").attr("href", "dashboard.html")
         } else {
             $(".error-wrapper").show();
         }

     });*/


});
