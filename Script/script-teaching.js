$(function () {
    $(".lecture").each(function () {
        const h2 = $(this).find("h2");
        const p = $(this).find("p");
        const plus = $(this).find(".fa-plus-circle");
        const minus = $(this).find(".fa-minus-circle");

        const handleClick = () => {
            p.each(function () {
                $(this).slideToggle(300)
            });
            plus.toggle();
            minus.toggle();
        };

        h2.on("click", handleClick);
    });
});
