let a = '';     //
let b = '';     //  вспомогательные элементы для заполнения массива
let sign = '';  //
let res = ''; // строка с выроженим которое мы видим на экране
let arr = []; // массив с введенными элементами

const digit = ['0', '00', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', '×', '÷', '%', 'sin', 'cos', 'tan', 'inv', 'log', 'ln', '!', 'Pi', 'e', '^', '√', '(', ')', '='];

const out = document.querySelector('.calc-screen p');


function clear() {
    a = '';
    b = '';
    sign = '';
    arr.length = 0;
    res = '';
    finish = false;
    out.textContent = 0;
}

function calc(masCalc) {
    for (let i = 1; i < masCalc.length; i++) {
        switch (masCalc[i]) {
            case "×":
                multipy(masCalc, i);
                i--;
                break;
            case "÷":
                division(masCalc, i);
                i--;
                break;
        }
    }

    for (let i = 1; i < masCalc.length; i++) {
        switch (masCalc[i]) {
            case "+":
                plus(masCalc, i);
                i--;
                break;
            case "-":
                minus(masCalc, i);
                i--;
                break;
        }
    }

    return masCalc;
}

function hooks(masCalc) // функция для раскрытия скобок
{
    let triggerSin = false; // Тригер на наличия sin, cos, tan
    let triggerPow = false; // 
    let start;
    for (let i = 0; i < masCalc.length; i++) // цикл работает пока в вырожении не останится скобок
    {
        console.log("calc 0");
        console.log(masCalc);
        if (masCalc[i] === ')') // ищем первую закрытую скобку потому, что нам нужно раскрыть сначало внутренние скобки
        {
            for (let j = i; masCalc[j] !== '('; j--) // ищем открытую скобку чтобы узнать размер вырожения в скобках
                start = j;
            let mas = masCalc.slice(start, i); // записываем вырожения в скобках в отдельный массив для простоты
            let sizeMas = mas.length
            console.log("calc 0.0.1");
            console.log(mas);

            console.log("calc 0.0.2");
            console.log(mas);
            if (mas.length === 3 || mas.length === 1)
                if (masCalc[start - 2] === 'sin' || masCalc[start - 2] === 'cos' || masCalc[start - 2] === 'tan') // проверка на sin, cos tan
                    triggerSin = true

            masCalc.splice(start, sizeMas + 1);              //
            masCalc.splice(start - 1, 1, calc(mas).toString()); // заменяе скобки на результат вырожения в них
            console.log("calc 0.1");
            console.log(masCalc);
            if (triggerSin) // если есть sin cos tan вызываем функцию их расчета
            {
                masCalc.splice(start - 2, 1, calcTrigonometry(masCalc[start - 2], masCalc[start - 1])); //
                masCalc.splice(start - 1, 1);                                                       // заменям на результат вырожения
                trigger = false;
            }

            if (mas.length === 3 || mas.length === 1)
                if (masCalc[start - 2] === '^' || masCalc[start - 2] === '√') // проверка на степень
                    triggerPow = true

            if (triggerPow) // если есть sin cos tan вызываем функцию их расчета
            {
                masCalc.splice(start - 2, 1, calcPow(masCalc[start - 2], masCalc[start - 3], masCalc[start - 1])); //
                masCalc.splice(start - 1, 1);                                                                // заменям на результат вырожения
                masCalc.splice(start - 3, 1);                                                                // 
                trigger = false;
            }

            i = 0; // начинаем проверку на скобки с начало
        }
    }

    return masCalc;
}

function calcTrigonometry(sign, number) // функция для вычисления sin cos tan
{
    console.log("calc 1");
    console.log(sign, number);
    let resFun = 0;
    let rad = 0;
    switch (sign) {
        case "sin":
            console.log("calc 1.1");
            console.log(sign, number);

            rad = number * Math.PI / 180;
            resFun = Math.sin(rad);

            console.log("calc 1.2");
            console.log(number, rad);
            break;
        case "cos":
            rad = number * Math.PI / 180;
            resFun = Math.cos(rad);

            break;
        case "tan":
            rad = number * Math.PI / 180;
            resFun = Math.tan(rad);
            break;
    }

    return resFun;
}

function calcPow(sign, first, second) {
    let resFun = 0;
    switch (sign) {
        case "^":
            resFun = Math.pow(first, second);
            break
    }
    return resFun;
}

function plus(masCalc, id) // +
{
    let result = (+masCalc[id - 1]) + (+masCalc[id + 1]);
    masCalc.splice(id, 2);
    masCalc.splice(id - 1, 1, result.toString());
    return masCalc;
}

function minus(masCalc, id) // -
{
    let result = (+masCalc[id - 1]) - (+masCalc[id + 1]);
    masCalc.splice(id, 2);
    masCalc.splice(id - 1, 1, result.toString());
    return masCalc;
}

function multipy(masCalc, id) // *
{
    let result = (+masCalc[id - 1]) * (+masCalc[id + 1]);
    masCalc.splice(id, 2);
    masCalc.splice(id - 1, 1, result.toString());
    return masCalc;
}

function division(masCalc, id) // /
{
    let result = (+masCalc[id - 1]) / (+masCalc[id + 1]);
    masCalc.splice(id, 2);
    masCalc.splice(id - 1, 1, result.toString());
    return masCalc;
}
function factorial(masCalc) {
    for (let id = 0; id <= masCalc.length; id++) {
        if (masCalc[id] === '!') {
            let result = 1;
            for (let i = masCalc[id - 1]; i !== 0; i--)
                result *= i;
            masCalc.splice(id, 1);
            masCalc.splice(id - 1, 1, result.toString());
        }
    }

    console.log('factorial');
    console.log(masCalc);

    return masCalc;
}

document.querySelector('.C').onclick = clear;


document.querySelector('.buttons').onclick = (event) => {

    const key = event.target.textContent;

    if (digit.includes(key)) { // проверка на нажатие цифры
        res += key;
        a += key;
        console.log(a, b, sign);
        out.textContent = res;
    }

    if (action.includes(key)) { // проверка на нажатие знака
        sign = key;
        res += sign;
        if (a !== '') arr.push(a);
        arr.push(sign);
        a = '';
        out.textContent = res;
        console.log(a, b, sign, arr);
    }


    if (key === '=') {
        arr = factorial(arr); // считаем факториалы
        arr = hooks(arr); // Вызываем функцию для упрощения скобок
        arr = calc(arr); // Вызываем функция калькулятора
        arr.splice(arr.length - 1, 1); // Удаляем лишние символы
        out.textContent = arr;
    }

}