// Custom Responsive JavaScript Code Written By Jeevan Taradi - UI Developer

$(document).ready(function () {

    $(".footer-socal-payment-row .footer-social").addClass("col-lg-8 col-md-8 col-sm-12");
    $(".footer-socal-payment-row .footer-payment-logo").addClass("col-lg-8 col-md-8 col-sm-12");
    $(".footer-socal-payment-row .newsletter").addClass("col-lg-8 col-sm-12");


    /* Oops url page code starts */

    // $('.oops-category-wrapper .rollover img').repeat().each($).addClass("blink").wait(1500).removeClass("blink");

    /* Oops url page code ends */

    /* Product item marquee effect starts here */



    /* Product item marquee effect ends here */



    /* List view container width code for dynamic margin value starts */


    /* List view container width code for dynamic margin value ends */


})
/* Login page script starts here*/



/* Login page script ends here*/

/*Home page script starts here*/
$(document).ready(function () {

    (function ($) {
        $.fn.clickToggle = function (func1, func2) {
            var funcs = [func1, func2];
            this.data('toggleclicked', 0);
            this.click(function () {
                var data = $(this).data();
                var tc = data.toggleclicked;
                $.proxy(funcs[tc], this)();
                data.toggleclicked = (tc + 1) % 2;
            });
            return this;
        };
    }(jQuery));

    $('#showLeftPush').clickToggle(function () {
        $(".header-wrapper-content").css({ "left": "240px" });
    }, function () {
        $(".header-wrapper-content").css({ "left": "0px" });
    });
});
/*Home page script ends here*/

/*Home page Navigation script starts here*/
$(document).ready(function () {
    $(".navigation .left-menu .dropdown").css({ "display": "none" });
    $(".navigation .left-menu .dropdown .subdropdown").css({ "display": "none" });

    var navHeight = $(window).height();
    $(".navigation .left-menu").css({ "height": navHeight + "px", "overflow-y": "scroll" });

    $(".navigation .left-menu li").find("ul").parent(".parent").append("<span class='glyphicon glyphicon-menu-down'></span>");
    $(".navigation .left-menu li ul li").find(".subdropdown li").parent(".subdropdown").parent(".navigation .left-menu li ul li").append("<span class='glyphicon glyphicon-menu-up'></span>");
    $(".navigation .left-menu li ul li").find(".subdropdown li").parent(".subdropdown").parent(".navigation .left-menu li ul li").css({ "background": "#fafafa" })

    $('.navigation .left-menu li').clickToggle(function () {
        $(this).children("span").toggleClass("glyphicon-menu-up");
        $(this).children('ul').css({ "display": "block" });
        $('.navigation .left-menu li ul li').children('ul').css({ "display": "block" });
        $(".navigation .left-menu li ul li").find("span.glyphicon").remove();
    }, function () {
        $(this).children("span").toggleClass("glyphicon-menu-up");
        $(this).children('ul').css({ "display": "none" });
        $('.navigation .left-menu li ul li').children('ul').css({ "display": "none" });
    });




});
$(document).ready(function () {
    $("#showLeftPush").click(function () {
        $("#fixed-menu").toggleClass("pushmenu");
        $("body").toggleClass('cbp-spmenu-push-toright');
    });
})
/*Home page Navigation script ends here*/


$(window).scroll(function () {
    // var currentScrollPosition = $(window).scrollTop();

    if ($(window).scrollTop() > 28) {

        $('body').addClass('scrollActive');
        $('.header-wrapper-content').animate({
            top: "-20px;"
        }, 'slow');



    } else {
        $('body').removeClass('scrollActive').css('padding-top', 0);
    }
});
/*Breadcrumbs hover script starts here*/
$(document).ready(function () {

});
/*Breadcrumbs hover script ends here*/
/*Brnad category script starts here*/
$(document).ready(function () {
    $(".one-page-grid-5-items ul li a").filter(function () {
        return this.href == location.href.replace(/#.*/, "");
    }).addClass('p_specail_active');

    $("#chk1").click(function () {
        window.location = 'http://www.kingsouq.com/productSpecial_85___.html';
    });
    $("#chk2").click(function () {
        window.location = 'http://www.kingsouq.com/productSpecial_86___.html';
    });
    $("#chk3").click(function () {
        window.location = 'http://www.kingsouq.com/productSpecial_87___.html';
    });
    $("#chk4").click(function () {
        window.location = 'http://www.kingsouq.com/productSpecial_88___.html';
    });
    $("#chk5").click(function () {
        window.location = 'http://www.kingsouq.com/productSpecial_89___.html';
    });


});

/*Brnad category script ends here*/
$(document).ready(function () {
    //  $('.ks_header_nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('ks_header_nav_active');

    var WinWidth = $(window).width();
    
    if (WinWidth <= 600) {
        $(".ks_header_nav_wrapper").append("<button id='nav-scroll-left' disabled><i class='fa fa-chevron-left'></i></button");
        $(".ks_header_nav_wrapper").append("<button id='nav-scroll-right'><i class='fa fa-chevron-right'></i></button");
        $("#nav-scroll-right").click(function () {
            $(".ks_header_nav").animate({ "left": "-=100px" }, "slow");

            var x = $(".ks_header_nav").position();
            if (x.left == 0) {
                $("#nav-scroll-left").removeAttr('disabled');
                $("#nav-scroll-left").css({ "cursor": "pointer" });
                $(".fa-chevron-left").css({ "color": "#ef6707" });
            }
            if (x.left == -700) {
                $("#nav-scroll-right").attr('disabled', 'disabled');
                $("#nav-scroll-right").css({ "cursor": "default" });
                $(".fa-chevron-right").css({ "color": "#999" });
            }

        });

        $("#nav-scroll-left").click(function () {
            $(".ks_header_nav").animate({ "left": "+=100px" }, "slow");
            var x = $(".ks_header_nav").position();
            if (x.left == -100) {

                $("#nav-scroll-left").attr('disabled', 'disabled');
                $(".fa-chevron-left").css({ "color": "#999" });
                $("#nav-scroll-left").css({ "cursor": "default" });
            }
            if (x.left == -800) {
                $("#nav-scroll-right").removeAttr('disabled');
                $("#nav-scroll-right").css({ "cursor": "pointer" });
                $(".fa-chevron-right").css({ "color": "#ef6707" });
            }
        });
    }
    else {
        $("#nav-scroll-left, #nav-scroll-right").remove();
    }


    /*$("#nav-scroll-right").click(function () {
        $(".ks_header_nav").animate({ "left": "-=100px" }, "slow");

        var x = $(".ks_header_nav").position();
        if (x.left == 0) {
            $("#nav-scroll-left").removeAttr('disabled');
            $("#nav-scroll-left").css({ "cursor": "pointer" });
            $(".fa-chevron-left").css({ "color": "#ef6707" });
        }
        if (x.left == -200) {
            $("#nav-scroll-right").attr('disabled', 'disabled');
            $("#nav-scroll-right").css({ "cursor": "default" });
            $(".fa-chevron-right").css({ "color": "#999" });
        }

    });

    $("#nav-scroll-left").click(function () {
        $(".ks_header_nav").animate({ "left": "+=100px" }, "slow");
        var x = $(".ks_header_nav").position();
        if (x.left == -100) {

            $("#nav-scroll-left").attr('disabled', 'disabled');
            $(".fa-chevron-left").css({ "color": "#999" });
            $("#nav-scroll-left").css({ "cursor": "default" });
        }
        if (x.left == -300) {
            $("#nav-scroll-right").removeAttr('disabled');
            $("#nav-scroll-right").css({ "cursor": "pointer" });
            $(".fa-chevron-right").css({ "color": "#ef6707" });
        }
    });*/

});