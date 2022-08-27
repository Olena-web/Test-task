import { countNumber } from './word-counter.js';

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
    // $('#text').keypress(function (e) {
    //     e.preventDefault();
    //     let maxLength = countNumber();
    //     let text = $(this).val();
    //     let textLength = text.length;
    //     if (textLength > maxLength) {
    //         $(this).val(text.substring(0, (maxLength)));
    //         alert("Sorry, you only " + maxLength + " characters are allowed");
    //     }
    //     else {
    //         //alert("Required Min. 500 characters");
    //     }
    // });
});