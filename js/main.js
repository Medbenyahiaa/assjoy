const responsive = {
    0: {
        items: 1,
    },
    320: {
        items: 1,
    },
    560: {
        items: 2,
    },
    960: {
        items: 3,
    },
};

$(document).ready(function () {
    $nav = $(".nav");
    $toggleCollapse = $(".toggle-collapse");

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass("collapse");
    });
    /*
    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });
    */

    // click to scroll top
    $(".move-up span").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            1000
        );
    });

    // AOS Instance
    AOS.init();

    Swal.fire({
        titleText: "Faites un don sur :",
        html: "RIB :</br><span class='rib'>127 480 2111119145730008 58</span></br>Titulaire : Madame SALMA BOUTALLAKA",
        showClass: {
            popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
            popup: "animate__animated animate__fadeOutUp",
        },
        showCloseButton: true,
    });
});

$("#who-li").click(function () {
    $("html, body").animate(
        {
            scrollTop: $(".presentation").offset().top,
        },
        1500
    );
});

$("#actions-li").click(function () {
    $("html, body").animate(
        {
            scrollTop: $(".posts").offset().top,
        },
        1500
    );
});

$("#members-li").click(function () {
    $("html, body").animate(
        {
            scrollTop: $(".members").offset().top,
        },
        1500
    );
});

$("#contacts-li").click(function () {
    $("html, body").animate(
        {
            scrollTop: $(".about-us").offset().top,
        },
        1500
    );
});
