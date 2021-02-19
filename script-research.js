let cprI = document.getElementById("cpr-img")
let grI = document.getElementById("gr-img")
let mfnsI = document.getElementById("mfns-img")
let cprrI = document.getElementById("cprr-img")
let cpjI = document.getElementById("cpj-img")
let relI = document.getElementById("rel-img")
let peaceI = document.getElementById("peace-img")
let mmI = document.getElementById("mm-img")

let cprS = document.getElementById("cpr-summary")
let grS = document.getElementById("gr-summary")
let mfnsS = document.getElementById("mfns-summary")
let cprrS = document.getElementById("cprr-summary")
let cpjS = document.getElementById("cpj-summary")
let relS = document.getElementById("rel-summary")
let peaceS = document.getElementById("peace-summary")
let mmS = document.getElementById("mm-summary")

let olay = document.getElementById("overlay")
let close = document.querySelectorAll(".close")
let summary = document.querySelectorAll(".summary")

let closeAll = () => {
    olay.style.visibility = "hidden";
    summary.forEach(element => {element.style.visibility = "hidden"});
};

cprI.addEventListener("click", function () {olay.style.visibility = "visible", cprS.style.visibility = "visible"})
grI.addEventListener("click", function () {olay.style.visibility = "visible", grS.style.visibility = "visible"})
mfnsI.addEventListener("click", function () {olay.style.visibility = "visible", mfnsS.style.visibility = "visible"})
cprrI.addEventListener("click", function () {olay.style.visibility = "visible", cprrS.style.visibility = "visible"})
cpjI.addEventListener("click", function () {olay.style.visibility = "visible", cpjS.style.visibility = "visible"})
relI.addEventListener("click", function () {olay.style.visibility = "visible", relS.style.visibility = "visible"})
peaceI.addEventListener("click", function () {olay.style.visibility = "visible", peaceS.style.visibility = "visible"})
mmI.addEventListener("click", function () {olay.style.visibility = "visible", mmS.style.visibility = "visible"})

olay.addEventListener("click", closeAll)

let onClose = event => {
    event.target.style.backgroundColor = "rgb(167, 3, 167)";
    event.target.style.cursor = "pointer";
};

let outClose = event => {
    event.target.style.backgroundColor = "inherit";
};

close.forEach(element => {element.addEventListener("mouseover", onClose)})
close.forEach(element => {element.addEventListener("mouseout", outClose)})
close.forEach(element => {element.addEventListener("click", closeAll)})