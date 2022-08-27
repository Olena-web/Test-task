$(document).ready(function () {

    jQuery.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z, A-Z, а-я, А-Я]+$/i.test(value);
    }, "Letters only please");


    $("form").validate({
        rules: {
            message: {
                lettersonly: true,
            },

        }
    });

});