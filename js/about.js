$(document).ready(function() {
    // Handle click on paging links
    $(".feature-btn").click(function(e) {
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
};

//Slideshow ---------------------------------------------------------------
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var x = $(".slide-img");
    var dots = $(".dot");
    var caps = $(".caption");

    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.color = "white";
    }
    for (let i = 0; i < caps.length; i++) {
        caps[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].style.color = "coral";

    caps[slideIndex - 1].style.display = "block";

}