
    //get the body
//let bodyWebsite = document.body
    //get the div
//let divWebsite = bodyWebsite.firstElementChild
                //bodyWebsite.children[0]
    //get the ul
//let ulWebsite = divWebsite.firstElementChild
    //get the li
//let liThirdwebsite = ulwebsite.lastElementChild
//console.log(liWebsite)
   //change the text node of the li
//liThirdWebsite.textContent = "John"

   //get the second li of the ul
//let liSecondWebsite = liThirdWebsite.previousElementSibling
//console.log("Second li : ", liSecondWebsite)

   //get the parent of the li
//console.log("parent of li: ", liSecondWebsite.parentNode) 


//Exercise 1
//<html>
//<body>
 // <div>Users:</div>
 // <ul>
 //   <li>John</li>
 //   <li>Pete</li>
 // </ul>
//</body>
//</html>
//For each of the questions, find 2 WAYS of accessing :

//1. The div DOM node?

//2. The ul DOM node?

//3. The second li (with Pete)?

//let bodyWebsite = document.body
//let ulWebsite = bodywebsite.children[1]
//let secondli = ulWebsite.children[1]
      //ul.website.lastelementChild



//let divwebsite = document.getElementById("usersTitle")
//console.log("div: ", divWebsite) 


//Add 5 paragraphs and 5 images at the same time to the DOM

let bodyWebsite = document.body
let newDiv = document.createElement("div")

for (let i = 0; i < 5; i++){
	let newImage = document.createElement("img")
	newImage.setAttribute("src", "cat.jpg")
	let newParagraph = document.createElement("p")
	newParagraph.className = "welcomeUser"
	let newContent = document.createTextNode("Hello new users " + i)
	newParagraph.appendChild(newContent)
	newDiv.appendChild(newParagraph)
	newDiv.appendChild(newImage)
}

bodyWebsite.appendChild(newDiv)