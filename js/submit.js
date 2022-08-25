// login loader
$(function () {
    $("#button").click(function () {
        $("#button").addClass("onclick", 250, validate);
    });

    function validate() {
        setTimeout(function () {
            $("#button").removeClass("onclick");
            $("#button").addClass("validate", 450, callback);
        }, 2250);
    }
    function callback() {
        setTimeout(function () {
            $("#button").removeClass("validate");
        }, 1250);
    }
});