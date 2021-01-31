//EXERCISE 1: Your Favorite Colors
//1. Create an array to hold your top colors.
//2. For each choice, console.log a string like: “My #1 choice is blue”, “My #2 choice is red” ect…
//3. Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the right suffix for the number.
   //Hint : create an array of suffix to do the Bonus

let colors =["Blue", "Red", "Green", "Yellow"];
let suffix =["st", "nd", "rd", "th"]; //BONUS

for (let i =0; i<colors.length; i++){
    console.log("My #" + (i+1) + " " +  "choice is" + " " + colors[i]) 
}

//bonus 
for (let i =0; i<colors.length; i++){
    console.log("My " + (i+1) + (suffix[i]) + " " +  "choice of color is" + " " + colors[i]) 
}


// EXERCISE 2: List of People

//let people = ["Greg", "Mary", "Devon", "James"]

//1. Write the command to remove “Greg” from the array.
//2. Write the command to replace “James” by “Jason” in the array.
//3. Write the command to add your name to the end of the array.
//4. Using a loop, iterate through this array and console.log all of the people.
//5. Using a loop, iterate through this array and after console.log-ing “Jason”, exit from the loop.
//6. Write the command to make a copy of the array using slice. The copy should NOT include “Mary” or your name.
//7. Write the command that gives the indexOf where “Mary” is located. Look on google what indexOf is
//8. Write the command that gives the indexOf where “Foo” is located (this should return -1). Why does it return -1
//9. Write a variable called last which value is the last element of the array.
//   Hint: What is the relationship between the index of the last element in the array and the length of the array?


//1.
let people = ["Greg", "Mary", "Devon", "James"];

for (let person of people){
    console.log(person);  //should display the names
}

//2.

people.splice(0,1); // starts at postition 0 , splices off 1
console.log(people);


//3.
people.splice(2,1,"Jason"); //starts off at position 2, cuts off 1 item, adds Jason
console.log(people);

//4.
people.push("MaryAnn"); //pushes MaryAnn to end
console.log(people);

//5.
for (let person = 0; person < people.length; person++){
    if (people[person] == "Jason"){
        break;
    } 
    console.log(people[person])
}


//6.
let newPeopleArray = [];  //create new array
for (person of people) {  // start running loop
    if (person != 'Mary') //if persons are NOT mary
    newPeopleArray.push(person) //push person to newPeopleArray
}
console.log(newPeopleArray);



//EXERCISE 3: Repeat the question
//1. Ask a number to the user, while the number is smaller than 10, ask him for a new number.
// Tip : Which while loop is more relevant for this situation?

let number = prompt("Give me a number!")

    number = 10; // x equals to 0

do {  
    number++;  //DO add x +1
    prompt("New Number pls"); // display console.log ("x=" + x)
}while (number <10) // While x is smaller than 5



//EXERCISE 4: Attendance
//Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object. You have to make the attendance.

//1. Ask the student for his name :
   //If the name is in the object, console.log the name of the student and the country he comes from.
   // "Hi! I'm [name], and I'm from [country]."
   //Hint: Look up the statement if in
   //If the name is not in the object, console.log :"Hi! I'm a guest."

let guestList = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
}

for (let person in guestList){
    console.log("Hi I'm" + " " + person + " " + "from" + " " + (guestList[person]));
}


//EXERCISE 5: Family
//1. Create an object called family with a few properties.
//2. Display only the properties. (using a for loop)
//3. Display only the values. (using a for loop)

let family = {
    "size": 3,
    "residence": "germany",
    "origin": "lithuania"
}
//only properties
for (let elements in family){
    console.log(elements);
}

//only value ??

    
//EXERCISE 6: Secret Group
//let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
//1. A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their firstnames, sorted in alphabetical order.
    //Hint: a string is an array of letters
//2. Console.log the name of their secret society.

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"] 

let SecretName = names.map(x => x[0]).join('');

console.log(SecretName);