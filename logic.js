let expression="";
document.getElementsByClassName('add')[0].addEventListener('click', () => appendToDisplay('+'));
document.getElementsByClassName('mul')[0].addEventListener('click', () => appendToDisplay('*'));
document.getElementsByClassName('div')[0].addEventListener('click', () => appendToDisplay('/'));
document.getElementsByClassName('sub')[0].addEventListener('click', () => appendToDisplay('-'));
document.getElementsByClassName('one')[0].addEventListener('click', () => appendToDisplay('1'));
document.getElementsByClassName('two')[0].addEventListener('click', () => appendToDisplay('2'));
document.getElementsByClassName('three')[0].addEventListener('click', () => appendToDisplay('3'));
document.getElementsByClassName('four')[0].addEventListener('click', () => appendToDisplay('4'));
document.getElementsByClassName('five')[0].addEventListener('click', () => appendToDisplay('5'));
document.getElementsByClassName('six')[0].addEventListener('click', () => appendToDisplay('6'));
document.getElementsByClassName('seven')[0].addEventListener('click', () => appendToDisplay('7'));
document.getElementsByClassName('eight')[0].addEventListener('click', () => appendToDisplay('8'));
document.getElementsByClassName('nine')[0].addEventListener('click', () => appendToDisplay('9'));
document.getElementsByClassName('zero')[0].addEventListener('click', () => appendToDisplay('0'));
document.getElementsByClassName('out')[0].addEventListener('click', calculate);
document.getElementsByClassName('reset')[0].addEventListener('click',res);
function appendToDisplay(num) {
    expression += num;
    document.getElementsByClassName('output')[0].innerHTML = `<h3 class='fin'>${expression} </h3> `;
}

function calculate() {
    try {
        var result = eval(expression);
        res();
        document.getElementsByClassName('output')[0].innerHTML = `<h3 class='fin'>${result} </h3> `;
    } catch (error) {
        res();
        document.getElementsByClassName('output')[0].innerHTML = "ERROR";
    }
}

function res() {
    document.getElementsByClassName('output')[0].innerHTML = " ";
    expression = "";
}