// DAY 5 - DAILY CHALLENGE
//Instructions
//Daily Challenge : Planets
//This webpage is just a blank universe, and you’ll fill it with planets and moons in this challenge.
//You only have to work with a JS file

//1. Create an array of planets of the solar system
//2. For each planet, in the array, create a div using createElement. This div should have a class named ‘planet’.
//3. Each planet should have a different background color. (Hint: add a new class to each planet)
//4. Finally append each div to the body.
//Bonus: Do the same process for moons. Be careful, each planet has a certain amount of moons; How should you display them ?

// 1. Create an array of planets of the solar system
let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
//console.log(planets);
let colors = ['violet', 'indigo', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'pink'];
//let moons = [0, 0, 1, 2, 67, 62, 27, 14, 1]
//let i = 0;
// 2.  For each planet, in the array, create a div using createElement. This div should have a class named ‘planet’.
for (i=0; i<planets.length -1; i++) {
    let newDiv = document.createElement('div');
    //newDiv.classname = 'planet';
    newDiv.classList.add(planets[i], 'planet');
// 3. Each planet should have a different background color. (Hint: add a new class to each planet)
    newDiv.style.backgroundColor=colors[i]
    newDiv.style.margin='30px'
      
    let name=document.createTextNode(planets[i],'planets')
    newDiv.appendChild(name)
    document.body.appendChild(newDiv)
    console.log(newDiv); 
    
}
