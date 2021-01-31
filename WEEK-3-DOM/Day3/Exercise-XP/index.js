//WEEK 3 - DAY3 -EXERCISE XP
//Exercise 1 : Move The Box
//Move the box from left to right
//Tip: use setInterval

// 1. Retrieve the div that we want to move : animate
// this div has an id : getElementById

// 2. create a function that will move the red box

// 3. use the left or right properties - left property because we are pushing the red square 
// from left to right
//CSS PROPERTIES
//top: space from the bottom to the element
//bottom: space from the bottom to the element
//left: space from the left to the element
//right: space from the right to the element

// 4. setInterval: repetition depending a timer
//we do the action X every Y millisecond - 5 ms

//5. we create the position of the object that needs to be moved
//position 0
//action X of the setinterval function is to increase the 
//position by 1 everyTIME

// 6. we neeD to stop the interval from running when it reached the 
//right corder - endpoint - 350px

//7. *start an interval: let timerinterval = setInterval(function called, timer : every 5ms)
   //*stop an interval : clearInterval(timerInterval)
//8. * where do we use clearInterval
  // * when do we want to stop the interval  

let button = document.getElementById("btn")
button.addEventListener("click", myMove)

//global variables
//can be accessed and "seen" everywhere
let position;
let timerInterval;

function myMove () {
    position = 0
    //local variable
    //it cannot be accessed outside of the myMove() function
    timerInterval = setInterval(moveRedBox, 5)  
}

function moveRedBox(){
    let animateDiv = document.getElemantById("animate")
    if (position == 350) { //we can put whatever we want
        clearInterval(timerInterval)
    } else { 
        position ++
        animateDiv.style.left = position + "px"
    }   
}