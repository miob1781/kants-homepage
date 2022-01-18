document.querySelectorAll(".lecture").forEach(function (lecture) {

    const h2 = lecture.querySelector("h2");
    const p = lecture.querySelectorAll("p");
    const plus = lecture.querySelector(".fa-plus-circle");
    const minus = lecture.querySelector(".fa-minus-circle");

    const overH2 = () => {
        h2.style.backgroundColor = "rgb(167, 3, 167)";
        h2.style.cursor = "pointer";
    };

    const outH2 = () => {
        h2.style.backgroundColor = "inherit";
    };

    const clickPlus = () => {
        p.forEach(para => {para.style.display = "block"});
        plus.style.display = "none";
        minus.style.display = "inline";
        h2.removeEventListener("click", clickPlus);
        h2.addEventListener("click", clickMinus);
    };

    const clickMinus = () => {
        p.forEach(para => {para.style.display = "none"});
        plus.style.display = "inline";
        minus.style.display = "none";       
        h2.removeEventListener("click", clickMinus);
        h2.addEventListener("click", clickPlus);
    };

    h2.addEventListener("mouseover", overH2);
    h2.addEventListener("mouseout", outH2);
    h2.addEventListener("click", clickPlus);
});
