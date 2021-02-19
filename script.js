let colorChangeOn = function (event){
    event.target.style.backgroundColor = "rgb(167, 3, 167)";
}

let colorChangeOut = function (event){
    event.target.style.backgroundColor = "purple";
}

document.querySelectorAll("nav a").forEach(element => {element.addEventListener("mouseover", colorChangeOn)})
document.querySelectorAll("nav a").forEach(element => {element.addEventListener("mouseout", colorChangeOut)})