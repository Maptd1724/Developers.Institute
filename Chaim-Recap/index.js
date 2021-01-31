//let colorsArray = ['blue', 'yellow', 'green'];
//colorsArray.push('white')
//console.log(colorsArray);
//colorsArray.splice(1,1)
//console.log(colorsArray);

//let colors = ['red', 'green', 'yellow'];
//let color = colors[Math.floor(Math.random() * colors.length)];

//if (color === "red"){
//    console.log("stop")
//}
//else if (color === "green"){
  //  console.log("go")
//}
//else{
  //  console.log("slowdown")
//}


//function traficLight(color) {

    //if (color === "red") {
      //  console.log("stop")
    //}
    //else if (color === "green") {
      //  console.log("go")
    //}
    //else {
      //  console.log("slowdown")
    //}
//}   
//--------
//function hello(name){
  //  console.log('helo' + name);
//}
//hello("mary ann");


let arrayName = [" Lea", " Chaim", " Mary Ann"];

function hello(name) {
    for (name of arrayName) {
        console.log("hello"  + name)
    }
}
hello(arrayName);
