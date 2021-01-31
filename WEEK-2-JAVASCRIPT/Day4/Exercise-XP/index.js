
//EXERCISE 1 - XP

//Exercise 1 : Keyless Car
//Ask the user for his age, and save the value into a variable
//Create a function called checkDriverAge() that will alert the user if he can drive depending on his age.
//if he is too young, alert “Sorry, you are too young to drive this car. Powering off”
//if he is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
//if he just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
//Instead of using prompt to ask the user for his age, make the checkDriverAge() function accept an argument age, so that if you enter: checkDriverAge(92); it alerts “You are old enough to drive, Powering On. Enjoy the rid


//1. Instruction
//global
let age = prompt("What's your age?");
//2. Instruction : Declare the function
//local scope

function checkDriverAge(age){
	//3. Intruction
if (age < 18){
      console.log('Sorry, you are too young to drive this car. Powering off')

	}else if (age > 18){
       console.log('You are old enough to drive, Powering On. Enjoy the ride!')
	}else {
	   console.log('Congratulations on your first year of driving. Enjoy the ride!')
	}
}  
//Call the function
checkDriverAge()



//Exercise 3: Find The Multiples Of 23
//Write a js function that console.log the multiples of 23 less than 500 and at the end return the sum of all of them.

//Elements : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
//391 414 437 460 483
//Sum : 5313

//1. Intruction

//let number = ("multiple of 23");

//function multiples () {
	//we create an array to hold the numbers
//let arrayNumber = [];
	//we loop throught a range of numbers from 0 to 500
    //   for (let number = 0; i <= 500; i++){
		//we check if the number is divisible by 23
	 //  if the number is divisible by 23
	 //  if (number % 23 == 0){
			//we push the number in the array that we created ealier (arrayNumber)
	//	arrayNumber.push(number)
		//if the number is not divisible by 23
//}else {
			//we skip this number
	//   continue;
	//	}	}
	//   console.log(arrayNumber)
//}
//multiples()


	//arrayNumber = [0, 23, 46, 69, 92, 115, 138, 161, 184, 207, 230, 253, 276, 299, 322, 
		// 345, 368, 391, 414, 437, 460, 483] 
		// The sum that we need to get : 5313
		
		//find the multiples of 23
function multiples () {
	  let arrayNumber = [];
      for (let number = 0; number <= 500; number++){
	    	if (number % 23 == 0){
				arrayNumber.push(number)	
            } else {
	         	continue;
	        }
		}
			//makes arrayNumber accessible outside
	    return arrayNumber;
}
		
		//Display the sum
function sumNumbers () {
		let listNumbers = multiples(); //let listNumbers = arrayNumber
		let sum = 0;
		for (let i = 0; i < listNumbers.length; i++){
				sum += listNumbers[i]
		}
		console.log(`The sum is ${sum}`)
}
		
sumNumbers()

//Exercise 4 : Amazon Shopping
//let amazonBasket = {
  //  glasses: 1,
  //  books: 2,
  //  floss: 100
//}
//1. Create a function called checkBasket().
//It should:
//ask the user for the item he wants
//and let him know if it’s in the basket or not
//Hint: Use the in keyword inside the conditional

let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}
// Create a function called checkBasket().
function checkBasket() {
// It should:
// ask the user for the item he wants
let itemRequest = glasses  //prompt("What item do you want?")
// and let him know if it's in the basket or not
// Hint: Use the in keyword inside the conditional
if itemRequest = amazonBasket
      console.log(`You already have ${Object.amazonBasket[]} + ${amazonBasket} in your cart`)
  }
}

