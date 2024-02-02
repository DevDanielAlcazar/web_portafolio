$(document).ready(function () {
    var menu = $("#main-menu");
    var menuIcons = $("#menu-icons");

    $(window).scroll(function () {
        var scroll = $(this).scrollTop();

        if (scroll > 50) {
            menu.addClass("scrolled");
            menu.addClass(menuIcons);
            menu.addClass("hide-text");
        } else {
            menu.removeClass("scrolled");
            menu.removeClass(menuIcons);
            menu.removeClass("hide-text");
        }
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

    $('#scroll-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });
});
