$(function () {
    $(window).on('load resize', function () {
        // masthead scroll
        var header = $('.l-header'); // fixed DOM
        var headerIn = $('.p-header__inner'); // fixed DOM
        var addclass = 'scrolled'; // add css class
        var offset = header.offset();
        var scrollY = offset.top + 0; // scroll

        $(window).scroll(function () {
            if ($(window).scrollTop() > scrollY) {
                header.addClass(addclass);
                headerIn.addClass(addclass);
            } else {
                header.removeClass(addclass);
                headerIn.removeClass(addclass);
            }
        });
    });
});