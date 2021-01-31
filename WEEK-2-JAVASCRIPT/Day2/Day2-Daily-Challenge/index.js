let sentence = "The movie is not so very bad . I liked it"
//How can work easily? Convert the string into an array
let arraySentence = sentence.split(" ")
// Create variable for code that I need to reuse
let notIndex = arraySentence.indexOf("not") ;
let badIndex = arraySentence.indexOf("bad");
//Count the words between not and bad ? We have a tool : indexOf
let wordCounts = badIndex-notIndex+1

//How to I check that the word "not" is before the word "bad" ?
if (notIndex < badIndex) {
	//               	startIndex, howManyElementsToDelete, ElementToAddInstead
	// How to I delete the "not .... bad" and replace it with "good"
	arraySentence.splice(notIndex, wordCounts, "good")
	// Now that I have an array, how can I display a string ?
	console.log(arraySentence.join(" "))
}