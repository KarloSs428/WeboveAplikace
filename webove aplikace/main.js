$(function () {

    var sticky = navbar.offsetTop;

    window.onscroll = function () {
        scrollNav();
    };

    function scrollNav() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }

})