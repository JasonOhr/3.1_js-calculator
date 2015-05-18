/**
 * Created by firewaterjoe on 5/18/15.
 */
(function(){
    var array = [5, "x", 5, "+", 30];
    array.push("x");
    array.push(20);
    var operatorArray = ["x", "/"];
    //var expression = 0;
    //var operator = "";
    //var nextNumber = 0;
    console.log(array);
    function doMultiplication(arrayToCheck){

        for (var i = 0; i < arrayToCheck.length; i++) {
            if (arrayContainsOperator("x", arrayToCheck, i)){
                // what
            }



        }
    }

    function arrayContainsOperator(operator, arrayToCalculate, index){
        var newNumber = 0;
        if (operator){
            switch (operator){
                case "x":

                    newNumber = arrayToCalculate[index-1] * arrayToCalculate[index+1];
                    arrayToCalculate.splice(index-1, 3, newNumber);
                    console.log(arrayToCalculate);

                    break;
            }
        } else {
            console.log('not an operator:', operator)
        }
    }
    doMultiplication (array);
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

