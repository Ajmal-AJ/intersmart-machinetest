$(window).scroll(function () {

    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".navbar-scroll").addClass("scrll-bg");

    } else {
        $(".navbar-scroll").removeClass("scrll-bg");

    }
});

$("#desktoggle").click(function(){
    $(".desktogitem").toggleClass('hidden');
})
$(".navbar-toggler").click(function(){
    
    $(".navbar-scroll").addClass("scrll-bg");

})