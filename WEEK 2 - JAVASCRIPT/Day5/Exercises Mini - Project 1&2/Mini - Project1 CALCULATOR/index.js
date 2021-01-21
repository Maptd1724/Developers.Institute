let calcDisplay = document.getElementById("display");


let arr = [];
function my_f(sign){
    arr.push(sign);
    console.log(arr);

}

function calculate(){
    let str = arr.join('');
    console.log(str);
    let calc = eval(str);
    console.log(calc);
    
}

function reset(){
    arr = [];
    
}

function backspace(){
    arr.pop();

}