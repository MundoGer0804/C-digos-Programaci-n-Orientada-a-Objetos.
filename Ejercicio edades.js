var cumpleaños = new Date("2004-04-08");

var fechahoy = new Date();

var edad = fechahoy.getFullYear() - cumpleaños.getFullYear();
var m = fechahoy.getMonth() - cumpleaños.getMonth();
if (m < 0 || (m === 0 && fechahoy.getDate() < cumpleaños.getDate())) {
    edad--;
}

console.log("Tú tienes " + edad + " años.");