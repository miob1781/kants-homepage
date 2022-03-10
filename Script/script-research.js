$(function () {
    const titles = [".cpr", ".gr", ".mfns", ".cprr", ".cpj", ".rel", ".peace", ".mm"];
    const olay = $("#overlay");
    const close = $(".close");

    titles.forEach(title => {
        const book = $(title + ".book").find("img");
        const summary = $(title + ".summary");
        const domRectSummary = document.querySelector(title + ".summary").getBoundingClientRect();

        const openSummary = () => {
            olay.css({visibility: "visible", opacity: 0}).fadeTo(600, 0.5)
            summary.css({visibility: "visible"});
            window.scroll(domRectSummary.x, domRectSummary.y)
        };

        const closeSummary = () => {
            olay.css("visibility", "hidden");
            summary.css("visibility", "hidden");
        };

        book.on("click", openSummary);
        close.on("click", closeSummary);
        olay.on("click", closeSummary);
    });
});
