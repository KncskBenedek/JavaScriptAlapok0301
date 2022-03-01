function init() {
    document.getElementById("uzenet").innerHTML = "Szia!";
    //console.log("initben vagyunk");
}

window.addEventListener("load", init, false);

/*--------------*/
/*  Változók: var let const  */
var ertek;
ertek = "szöveg";
var a = 2;
var b = 3;
var osszeg = Number(a) + Number(b);
console.log(osszeg);

var logikai = false;
if (logikai) {
    console.log("Igaz");
} else {
    console.log("Hamis");
}

var szin = "red";
switch (szin) {
    case "red":
        console.log("red");
        break;
    case "orange":
        console.log("orange");
        break;
    case "green":
        console.log("green");
        break;
}

var szam = "2";

if (szam === 2){
    console.log("ez egy 2 szám")
    console.log(typeof szam)
}else{
    console.log("Ez nem egy szám")
    console.log(typeof szam)
}
