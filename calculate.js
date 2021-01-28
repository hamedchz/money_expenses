class Calculate{
    getData(data){
        if(operator == ''){

        if (data === '+' || data === '-' || data === '*' ||data === '/' ) {
          operator += data;
          ui.showResult(operator);
        }else{ 
            number1 += data;
            ui.showResult(number1);
            
        }
    }else{
        this.getNumberSecond(data);
    }
    
    }

    getNumberSecond(data){
        if(data === '='){
            // equal += data;
            number1 = parseFloat(number1);
            number2 = parseFloat(number2)
            switch (operator) {
                case '+':
                    result = number1+number2
                    break;
                    case '-':
                        result = number1-number2
                        break; 
                         case '/':
                            result = number1/number2
                            break;
                            case '*':
                                result = number1*number2
                             break;
            
                default:
                    break;
            }
            ui.showResult(result)
        }else{
            number2 += data;
            ui.showResult(number2);
            // console.log('object')
        }
    }
}