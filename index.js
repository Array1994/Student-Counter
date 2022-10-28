let counter = 0;
let saveEl = document.getElementById('save-el');
function increament(){
   counter = counter + 1; 
   document.getElementById('counter1').innerHTML = counter;
}


function save(){
    let counterdash = counter + " -";
    let saveEl = document.getElementById('save-el');
    saveEl.textContent += counterdash;
}
function reset(){
    counter = 0;
    document.getElementById('counter1').innerHTML = counter;
}


