$(function () {
    $("#header__btn").on("click", function () {
        if (!$(".reservation-inner").hasClass("is_open")) {
            $(".reservation-inner").addClass("is_open");
        } else {
            $(".reservation-inner").removeClass("is_open");
        }
    });
});