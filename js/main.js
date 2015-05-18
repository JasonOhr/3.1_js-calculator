/**
 * Created by firewaterjoe on 5/18/15.
 */
(function(){
    var array = [5, "x", 5, "+", 30, "/", 6];
    array.push("x");
    array.push(20);
    var operatorArray = ["x", "/"];

    console.log(array);
    function doMultiplication(arrayToCheck){
        for (var i = 0; i < arrayToCheck.length; i++) {
            if (arrayContainsOperator("x", arrayToCheck, i)){

            }
        }
    }

    function doDivision(arrayToCheck){
        for (var i = 0; i < arrayToCheck.length; i++) {
            if (arrayContainsOperator("/", arrayToCheck, i)){

            }
        }
    }

    function doAddition(arrayToCheck){
        for (var i = 0; i < arrayToCheck.length; i++) {
            if (arrayContainsOperator("+", arrayToCheck, i)){

            }
        }
    }

    function doSubtraction(arrayToCheck){
        for (var i = 0; i < arrayToCheck.length; i++) {
            if (arrayContainsOperator("-", arrayToCheck, i)){

            }
        }
    }

    function arrayContainsOperator(operator, arrayToCalculate, index){
        var newNumber = 0;
        if (arrayToCalculate[index] === operator){
            switch (operator){
                case "x":
                    newNumber = arrayToCalculate[index-1] * arrayToCalculate[index+1];
                    arrayToCalculate.splice(index-1, 3, newNumber);
                    console.log(arrayToCalculate);
                    break;

                case "/":
                    newNumber = arrayToCalculate[index-1] / arrayToCalculate[index+1];
                    arrayToCalculate.splice(index-1, 3, newNumber);
                    console.log(arrayToCalculate)
                    break;

                case "+":
                    newNumber = arrayToCalculate[index-1] + arrayToCalculate[index+1];
                    arrayToCalculate.splice(index-1, 3, newNumber);
                    console.log(arrayToCalculate);
                    break;

                case "-":
                    newNumber = arrayToCalculate[index-1] - arrayToCalculate[index+1];
                    arrayToCalculate.splice(index-1, 3, newNumber);
                    break;
            }

        } else {
            console.log('not an operator:', operator)
        }
    }
    doMultiplication (array);

    doDivision(array);

    doAddition(array);

    doSubtraction(array);
    //for (var i = 0; i < array.length; i++) {
    //    if (arrayContainsOperator(operatorArray, array[i], array, i)){
    //        // what
    //    }
    //
    //
    //
    //}
}) ();

//arrayToCheck is the array with the operators in it

