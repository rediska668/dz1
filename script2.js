'use strict';
        
   /**
     * Сумма двух чисел
     * @param  {number} a поясненине для параматра a.
     * @param  {number} b поясненине для параматра b.
     * @returns {number} Пояснение для возвращаемого значения.
     */
    function summa(a,b){
        return a + b;
    }
    /**
     * Разность двух чисел
     * @param  {number} a поясненине для параматра a.
     * @param  {number} b поясненине для параматра b.
     * @returns {number} Пояснение для возвращаемого значения.
     */
    function difference(a,b){
        return a - b;
    }
   /**
     * Произведение двух чисел
     * @param  {number} a поясненине для параматра a.
     * @param  {number} b поясненине для параматра b.
     * @returns {number} Пояснение для возвращаемого значения.
     */
    function product(a,b){
        return a * b;
     }
    /**
     * Частное двух чисел
     * @param  {number} a поясненине для параматра a.
     * @param  {number} b поясненине для параматра b.
     * @returns {number} Пояснение для возвращаемого значения.
     */
    function quotient(a,b){
        return a / b;
    }

        let rezult1 = summa(10,5);
        let rezult2= difference(10,5);
        let rezult3 = product(10,5);
        let rezult4 = quotient(10,5);
        alert("Сумма равна :" + rezult1);
        alert("Разность равна :" + rezult2);
        alert("Произведение равно :" + rezult3);
        alert("Частное равно :" + rezult4);
