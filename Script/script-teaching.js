$(function () {
    $(".lecture").each(function () {
        const h2 = $(this).find("h2");
        const p = $(this).find("p");
        const siblings = $(this).siblings();
        const plus = $(this).find(".fa-plus-circle");
        const minus = $(this).find(".fa-minus-circle");

        h2.on("click", function () {
            p.slideToggle(300);
            plus.toggle();
            minus.toggle();
            siblings.find("p").slideUp(200);
            siblings.find(".fa-minus-circle").hide();
            siblings.find(".fa-plus-circle").show();
        });
    });
});
