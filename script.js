let colorChangeOn = function (event){
    event.target.style.backgroundColor = "blue";
}

let colorChangeOut = function (event){
    event.target.style.backgroundColor = "royalblue";
}

document.getElementById("bioLink").addEventListener("mouseover", colorChangeOn);
document.getElementById("researchLink").addEventListener("mouseover", colorChangeOn);
document.getElementById("teachingLink").addEventListener("mouseover", colorChangeOn);

document.getElementById("bioLink").addEventListener("mouseout", colorChangeOut);
document.getElementById("researchLink").addEventListener("mouseout", colorChangeOut);
document.getElementById("teachingLink").addEventListener("mouseout", colorChangeOut);