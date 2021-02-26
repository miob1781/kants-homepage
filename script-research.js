const olay = document.getElementById("overlay")
const close = document.querySelectorAll(".close")
const titles = [".cpr", ".gr", ".mfns", ".cprr", ".cpj", ".rel", ".peace", ".mm"]

titles.forEach(t => {

    let book = document.querySelector(t + ".book")
    let summary = document.querySelector(t + ".summary")

    let onClose = event => {
        event.target.style.backgroundColor = "rgb(167, 3, 167)";
        event.target.style.cursor = "pointer";
    };
    
    let outClose = event => {
        event.target.style.backgroundColor = "inherit";
    };
    
    close.forEach(el => {el.addEventListener("mouseover", onClose)})
    close.forEach(el => {el.addEventListener("mouseout", outClose)})
    
    let openSummary = () => {
        olay.style.visibility = "visible";
        summary.style.visibility = "visible";
    };

    let closeSummary = () => {
        olay.style.visibility = "hidden";
        summary.style.visibility = "hidden";
    };
        
    book.querySelector("img").addEventListener("click", openSummary)
    close.forEach(el => {el.addEventListener("click", closeSummary)})
    olay.addEventListener("click", closeSummary)
})