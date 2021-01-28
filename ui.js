class Ui{
    

    showResult(data){
        view.innerHTML = data;

    }
    resetDisplay(){
         number1 = '';
         number2 = '';
         operator = '';
         result = '';
         equal = '';
         view.innerHTML = '0';
    }

}