// JS FUNCTION
// setTimeOut
//Exercise 1
//Create a new HTML file
//Create a banner saying "The sales end in 10min ! " . Style the banner and make it visible to the user after 5 sec.

//the setTimeout function will call
//the createBanner function 
// 5 seconds after the user opens the page
// 5 seconds = 5000 milliseconds

setTimeout(createBanner, 5000)

function createBanner(){
	//retrieve the div parent
	let container = document.getElementById("container")
	//create the div child
	let newDiv = document.createElement("div")
	//styling the new div
	newDiv.style.backgroundColor ="pink"
	newDiv.style.padding ="20px"
	newDiv.style.border ="2px solid blue"
	//add some content
	newDiv.textContent = "The sales end in 10min"
	//append the new div to the div parent
	container.appendChild(newDiv)
}


//Exercise 2
//Use the same code as before but create a countdown in the banner.

//... "The sales end in 10sec ! "

//... "The sales end in 9sec ! "

//etc ... until 0

//If you need help for this exercise, look at the 1st video of this tutorial
<script>
        let timer = setInterval(myTimer, 1000);
        let count = 10
        function myTimer() {
            console.log("hi")
            let p = document.getElementsByTagName("p")[0]

            p.innerHTML = `The sales end in ${count}sec ! `
            count--
            if (count == 0) {
                clearInterval(timer);
            }
        }
    </script>



//-----------------------
//setInput and setInterval
// built-in function-method
// setTimeout(paramaters,parameters);
// setTimeout(function, timer)

//function sayHi(message) {
//	console.log("console.log in settimeout")
//	let container = document.getElementById("container")
//	container.textContent = message
//	container.style.backgroundColor="yellow"
//}


// //1
//console.log("1st console.log Before set timeout")

// //2 - wait 2 second 
//setTimeout(sayHi, 2000, "Your cart is empty");

// //3
//console.log("2st console.log After set timeout")

//--- setInterval


//let bye = document.getElementById("containerBye")

//set the setinterval : the interval is called "timing"
//let timing = setInterval(sayHi, 2000);

//bye.addEventListener("click", stopTimer)

//function sayHi() {
//	console.log("console.log in setinterval")   
//}

//function stopTimer(){
	//stop the interval called "timing"
//	clearInterval(timing)
//}