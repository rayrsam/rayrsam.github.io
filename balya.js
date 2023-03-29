let counter = 0;
let power = 1;
let bratok_power = 0;
let bratva;

function poEbalu(elem, sila = power){
    counter += sila;
    elem.innerHTML = "ДИМА ОТДАЛ " + counter + " РУБЛЕЙ";
}
function Upgrade(elem){
    let a = power*power*10;
    if (counter >= a) {
        power++;
        poEbalu(document.getElementById("count"), -a);
        elem.innerHTML = "ДЛЯ УСИЛЕНИЯ: " + power*power*10 + " РУБЛЕЙ";
    }
    else alert("ДЛЯ УЛУЧШЕНИЯ НЕОБХОДИМО ВЫБИТЬ " + a + " РУБЛЕЙ")
}

function Bratok(elem){
    let a = (bratok_power+1)*(bratok_power+1)*50;
    if (counter >= a) {
        bratok_power++;
        clearInterval(bratva);
        bratva = setInterval(poEbalu, 1000, document.getElementById("count"), bratok_power);
        poEbalu(document.getElementById("count"), -a);
        elem.innerHTML = "НАНЯТЬ БРАТКА: " + (bratok_power+1)*(bratok_power+1)*50 + " РУБЛЕЙ";
    }
    else alert("ДЛЯ УЛУЧШЕНИЯ НЕОБХОДИМО ВЫБИТЬ " + a + " РУБЛЕЙ")
}