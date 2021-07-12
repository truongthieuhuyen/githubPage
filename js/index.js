// show/hidden Gallery ---------------------------------------------------
$(document).ready(function() {
    // Handle click on paging links
    $(".menu-item--link").click(function(e) {
        e.preventDefault();

        var current = $(this).text().toLowerCase();
        $(".menu-gallery--page").addClass("hidden");
        $("#gallery-page--" + current).removeClass("hidden");
        $(".menu-item--link").removeClass("active");
        $(this).addClass("active");
    });

    $(".side-item--link").click(function(e) {
        e.preventDefault();

        var cate = $(this).text().toLowerCase();
        $(".side-item--link").removeClass("active");
        $(this).addClass("active");
        $(".menu").addClass("hidden");
        $("#menu-" + cate).removeClass("hidden");
    });

    $(".gallery-tag").click(function(e) {
        e.preventDefault();
    });
    $(".gallery-title").click(function(e) {
        e.preventDefault();
    });
    $("#signIn").click(function(e) {
        e.preventDefault();
    })
    $("#account").click(function(e) {
        e.preventDefault();
    })
});



// Header scroll ----------------------------------------------------------
window.onscroll = function() { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

//SlideShow ---------------------------------------------------------------
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("autoSlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    slides[slideIndex - 1].style.display = "contents";
    dots[slideIndex - 1].className += " dot-active";
    setTimeout(showSlides, 2500); // Change image every 2 seconds
}


// <!-- JavaScript for adding
// slider for multiple images
// shown at once--> ---------------------------------------------------------------
$(window).load(function() {
    $(".carousel .item").each(function() {
        var i = $(this).next();
        i.length || (i = $(this).siblings(":first")),
            i.children(":first-child").clone().appendTo($(this));

        for (var n = 0; n < 4; n++)(i = i.next()).length ||
            (i = $(this).siblings(":first")),
            i.children(":first-child").clone().appendTo($(this))
    })
});