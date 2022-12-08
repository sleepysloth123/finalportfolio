// const element = document.getElementById("portfolio");
// element.scrollIntoView({behavior: "smooth"});

$("portfoliolink").click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolio").offset().top, behavior:"smooth"},
        "smooth");
});