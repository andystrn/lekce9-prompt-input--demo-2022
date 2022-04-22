// funkce pro výpočet BMI
function vypocitejBMI() {
    let vyskaMetry = parseFloat(document.querySelector('input[name="vyska"]').value / 100);
    let vahaKilogramy = parseFloat(document.querySelector('input[name="vaha"]').value);

    return Math.round(vahaKilogramy / Math.pow(vyskaMetry, 2));
}

//funkce pro zapsání do UI
function vypisBMI(BMI) {
    document.querySelector('#vysledek > span').innerHTML = BMI;
}

function vypocitejVypisBMI() {
    let BMI = vypocitejBMI();
    vypisBMI(BMI);
}

document.querySelectorAll('input').forEach((element) => {
    element.addEventListener('change', vypocitejVypisBMI);
});