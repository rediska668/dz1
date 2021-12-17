
'use strict';
/**
 * @param  {number} arg1 поясненине для параматра .
 * @param  {number} arg2 поясненине для параматра .
 * @param  {number} operation поясненине для параматра.
 * @return {number} Пояснение для возвращаемого значения.
 */
function mathOperation(arg1, arg2, operation) {
    switch(operation){
        case 1:
            console.log("Сумма равна");
            return arg1 + arg2;
        case 2:
            console.log("Разность равна");
            return arg1 - arg2;
        case 3:
            console.log("Произведение равна");
            return arg1 * arg2;
        case 4:
            console.log("Частное равна");
            return arg1 / arg2;
    }
}

let rezult = mathOperation(10, 12, 1);
console.log(rezult);