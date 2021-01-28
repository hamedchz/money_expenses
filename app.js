//var
const view = document.querySelector('#viewer');

let number1 = '';
let number2 = '';
let operator = '';
let result;
let equal = '';
const cal = new Calculate();
const ui = new Ui();
///listeners

listeners();
function listeners(){
    document.querySelector('#clear').addEventListener('click', ()=>{
        ui.resetDisplay();
    });

    document.querySelector('#zero').addEventListener('click', ()=>{
        cal.getData(document.querySelector('#zero').value)
    });
    document.querySelector('#one').addEventListener('click', ()=>{
        cal.getData(document.querySelector('#one').value)
    });
    document.querySelector('#two').addEventListener('click', ()=>{
        cal.getData(document.querySelector('#two').value)
    });
    document.querySelector('#three').addEventListener('click', ()=>{
        cal.getData(document.querySelector('#three').value)
    });
    document.querySelector('#four').addEventListener('click', ()=>{
        cal.getData(document.querySelector('#four').value)
    });
    document.querySelector('#five').addEventListener('click', ()=>{
        cal.getData(document.querySelector('#five').value)
    });
    document.querySelector('#six').addEventListener('click', ()=>{
        cal.getData(document.querySelector('#six').value)
    });
    document.querySelector('#seven').addEventListener('click', ()=>{
        cal.getData(document.querySelector('#seven').value)
    });
    document.querySelector('#eight').addEventListener('click', ()=>{
        cal.getData(document.querySelector('#eight').value)
    });
    document.querySelector('#nine').addEventListener('click', ()=>{
        cal.getData(document.querySelector('#nine').value)
    });
    document.querySelector('#plus').addEventListener('click', ()=>{
        cal.getData(document.querySelector('#plus').value)
    });
    document.querySelector('#times').addEventListener('click', ()=>{
        cal.getData(document.querySelector('#times').value)
    });
    document.querySelector('#equals').addEventListener('click', ()=>{
        cal.getData(document.querySelector('#equals').value)
    });
    document.querySelector('#divide').addEventListener('click', ()=>{
        cal.getData(document.querySelector('#divide').value)
    });
    document.querySelector('#minus').addEventListener('click', ()=>{
        cal.getData(document.querySelector('#minus').value)
    });
    document.querySelector('#dot').addEventListener('click', ()=>{
        cal.getData(document.querySelector('#dot').value)
    });


}


