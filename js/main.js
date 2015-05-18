/**
 * Created by firewaterjoe on 5/18/15.
 */
(function(){

    var numberAsText = "";
    var accumulated_number=[];
    var decimal = false;
    var operator = false;
    var operator_used = "";
    var specialButtonUsed = "";
    var equal_pressed = false;


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
                    break;

                case "/":
                    newNumber = arrayToCalculate[index-1] / arrayToCalculate[index+1];
                    arrayToCalculate.splice(index-1, 3, newNumber);
                    break;

                case "+":
                    newNumber = arrayToCalculate[index-1] + arrayToCalculate[index+1];
                    arrayToCalculate.splice(index-1, 3, newNumber);
                    break;

                case "-":
                    newNumber = arrayToCalculate[index-1] - arrayToCalculate[index+1];
                    arrayToCalculate.splice(index-1, 3, newNumber);
                    break;
            }

        }
    }

    function specialButtonPressed(display){
        var num = 0;
        switch (specialButtonUsed){
            case "+/-":
                if(numberAsText.length > 0){
                    num = Number(numberAsText)* -1;
                    numberAsText = num.toString();
                    display.textContent = numberAsText;

                }else if (equal_pressed){
                    accumulated_number[0] *= -1;
                    display.textContent = accumulated_number[0];
                }
                break;
            case "%":
                if(accumulated_number.length == 0){
                    return;
                }
                else {
                    //speciaButtonFlag = true;
                    accumulated_number.pop();
                    //this removes the operator off the back of the array

                    if (accumulated_number.length > 1){
                        num =  specialEqual();
                        // this totals accumulated_numbers array before continuing
                    }else {
                        num = accumulated_number[0];
                        //used if there is only one number in the accumulated_numbers array
                    }
                    switch (operator_used){
                        case "+":

                            num = num + (num * Number(numberAsText) / 100 );
                            resetSpecial(display,num);
                            break;
                        case "-":

                            num = num - (num * Number(numberAsText) / 100 );
                            resetSpecial(display, num);
                            break;
                        case "x":
                            //num =  Number(accumulated_number.pop());
                            num = num * (Number(numberAsText) / 100 );
                            resetSpecial(display, num);
                            break;
                        case "/":

                            num = num / (Number(numberAsText) / 100 );
                            resetSpecial(display,num);
                            break;
                    }
                }
        }
    }

    function equalPressed(display){
        if (!equal_pressed){
            //needed to stop multiple equal pushes and issues with the special key when using the equal button
            pushNumberToArray(Number(numberAsText));
        }
        doMultiplication (accumulated_number);

        doDivision(accumulated_number);

        doAddition(accumulated_number);

        doSubtraction(accumulated_number);
        display.textContent = accumulated_number[0];
        numberAsText= "";
        equal_pressed = true;
        operator = false;
    }
    function resetSpecial(display, num){
        accumulated_number = [];
        numberAsText = "";
        accumulated_number.push(num);
        equal_pressed = true;
        display.textContent = num.toString();
    }
    function specialEqual(){

        doMultiplication (accumulated_number);

        doDivision(accumulated_number);

        doAddition(accumulated_number);

        doSubtraction(accumulated_number);

        return accumulated_number.pop();
    }

    function pushNumberToArray(number){
        
        accumulated_number.push(number);
    }

    function alertButton(event){
        var button = event.target;

        var calc_input = button.textContent;//
        var button_type = button.className;
        var display = document.getElementById('answer');
        switch (button_type){

            case 'number zero':
                if (numberAsText=="0") numberAsText = 0;
            //this ensures that that the number 0 is used
            case 'number':
                if(equal_pressed && !operator){
                    /*This is saying your done with the previous calculations
                     so this clears the accumulated_number in order to start fresh
                     and takes the first new number
                     */
                    accumulated_number = [];
                    equal_pressed = false;
                    numberAsText += calc_input;
                    display.textContent = numberAsText.toString();
                }else {
                    // this just adds the numbers pressed to the numberAsText string
                    numberAsText += calc_input;
                    display.textContent = numberAsText.toString();
                }


                break;
            case 'operator':
                if(equal_pressed) {
                    /*this allows you to keep doing calculations
                     after hitting the equal sign:
                     Since the equal button has been hit, the answer
                     (accumulated_number) is now stored in numberAsText and can
                     be reset, also, the and equal_pressed needs to be reset
                     */

                    equal_pressed = false;
                    numberAsText = accumulated_number.pop();
                }
                if(numberAsText.length == 0) {
                    //this keeps you from using the operator first before entering a
                    //number. I realize if you want to add something to 0 this will
                    // be a problem
                    display.textContent = "0";
                }else if(operator && accumulated_number.length > 0){
                    //if a number and operator have already been entered, this adds
                    // makes the calculation by calling operatorPressed() and stores
                    // the operator
                    //operatorPressed();


                    operator_used = button.textContent;

                    pushNumberToArray(Number(numberAsText))
                    pushNumberToArray(operator_used);
                    numberAsText = "";
                    display.textContent = button.textContent;
                }else{
                    //If this is the first time an operator has been pushed,
                    //it and there is a number string in numberAsText, it
                    //pushes the number with pushNumberToArray, stores the operator,
                    //the decimal flag is returned to false here because it
                    //allows it to be used after an operator has been pushed

                    operator_used = button.textContent;
                    pushNumberToArray(Number(numberAsText));
                    pushNumberToArray(operator_used);
                    numberAsText = "";
                    display.textContent = button.textContent;
                    operator=true;
                    decimal=false;
                }
                break;
            case 'special':
                specialButtonUsed = calc_input;
                specialButtonPressed(display);
                break;
            case 'equal':
                equalPressed(display) ;
                break;
            case 'decimal':
                if (!decimal) {
                    numberAsText += calc_input;
                    display.textContent = numberAsText.toString();
                    decimal = true;
                }
                break;
            case 'clear-btn':
                //answer = 0;
                numberAsText = "";
                accumulated_number = [];
                display.textContent = "0";
                decimal=false;
                equal_pressed = false;
                break;
        }







    }


    [].forEach.call(document.querySelectorAll('.number'),
        function(element) {
            element.addEventListener('click',alertButton);
        },false);

    [].forEach.call(document.querySelectorAll('.operator'),
        function(element) {
            element.addEventListener('click',alertButton);
        },false);

    [].forEach.call(document.querySelectorAll('.special'),
        function(element) {
            element.addEventListener('click',alertButton);
        },false);
    [].forEach.call(document.querySelectorAll('.clear-btn'),
        function(element) {
            element.addEventListener('click',alertButton);
        },false);
    [].forEach.call(document.querySelectorAll('.decimal'),
        function(element) {
            element.addEventListener('click',alertButton);
        },false);
    [].forEach.call(document.querySelectorAll('.equal'),
        function(element) {
            element.addEventListener('click',alertButton);
        },false);

}) ();



