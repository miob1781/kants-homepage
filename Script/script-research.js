const olay = document.getElementById("overlay");
const titles = [".cpr", ".gr", ".mfns", ".cprr", ".cpj", ".rel", ".peace", ".mm"];

const onClose = event => {
    event.target.style.backgroundColor = "rgb(167, 3, 167)";
    event.target.style.cursor = "pointer";
};

const outClose = event => {
    event.target.style.backgroundColor = "inherit";
};

titles.forEach(t => {

    const book = document.querySelector(t + ".book");
    const summary = document.querySelector(t + ".summary");
    const close = summary.querySelector(".close");
    const domRectBook = book.getBoundingClientRect();
    const domRectSummary = summary.getBoundingClientRect();

    const openSummary = () => {
        olay.style.visibility = "visible";
        summary.style.visibility = "visible";
        window.scroll(domRectSummary.x, domRectSummary.y)
    };

    const closeSummary = () => {
        olay.style.visibility = "hidden";
        summary.style.visibility = "hidden";
    };
        
    close.addEventListener("mouseover", onClose);
    close.addEventListener("mouseout", outClose);   
    book.querySelector("img").addEventListener("click", openSummary);
    close.addEventListener("click", closeSummary);
    olay.addEventListener("click", closeSummary);
});
