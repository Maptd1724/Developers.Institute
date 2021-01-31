//<!DOCTYPE html>
//<html>
//<head>
	//<title></title>
//</head>
//<body>
  //	<div id="container"></div>

//	<script src="script.js"></script>
//</body>
//</html>

//SOLUTION ON ABOVE :
//Create a container on the HTML file to add new elements (using this container as a parent)
//let container = document.getElementById("container")
//for (let i = 0; i<3; i++){
//	let p = document.createElement("p")
//	let content = document.createTextNode("Hello")
//	p.appendChild(content)
//	container.appendChild(p)
//} 

//------------
//INLINE EVENT HANDLER
//<!DOCTYPE html>
//<html>
//<head>
//	<title></title>
//	<style type="text/css">
//		.welcomeUser {
//			background-color: yellow;
//		}
//	</style>
//</head>
//<body>
  //	<p id="p" onclick="clickParagraph()">Hello You can click me</p>

	//<script src="script.js"></script>
	//</body>
//</html>

//function clickParagraph() {
//	console.log("hello")
//	document.getElementById("p").classList.toggle("welcomeUser")
//}

//-----------
//Set A Handler Using A DOM Property
//<!DOCTYPE html>
//<html>
//<head>
	//<title></title>
//	<style type="text/css">
//		.welcomeUser {
//			background-color: yellow;
//		}
//	</style>
//</head>
//<body>
  //  <p id="p">Hello You can click me</p>
	
	//<script src="script.js"></script>
//</body>
//</html>

//document.getElementById("p").onclick = function () {
	//console.log("hello")
	//document.getElementById("p").classList.toggle("welcomeUser")
//}

//----------
//addEventListener()
//<body>

//<p id="p">Hello how are you</p>
//<div>
  //  <ul id="list" name="listFruits">
    //    <li>Apple</li>
      //  <li>Pear</li>
        //<li>Banana</li>
    //</ul>
//</div>


//<script src="script"></script>
//</body>

//retrieve the element
//let paragraph = document.getElementById("p")
//paragraph.addEventListener("click",clickMe)

//retrieve the element
//let listShopping =  document.getElementById("list")
//listShopping.addEventListener("click",clickMe)

//function clickMe(event){
//	console.log("event : ", event)
	//event.target retrives the element that was clicked
	//the paragraph
//	event.target.style.backgroundColor = "yellow"
//}

//---------
//let listHtml = document.querySelector('ul[name="listFruits"]')
//console.log(listHtml)

//<!DOCTYPE html>
//<html>
//<head>
//	<title></title>
//</head>
//<body>
//	<form>
//		<input name="username" placeholder="write here">
//		<button>Click here</button>
//	</form>
​//	<div id="container"></div>
​//	<script src="script.js"></script>
//</body>
//</html>

//let formHtml = document.forms[0]
//let buttonHtml = formHtml.elements[1]
//buttonHtml.addEventListener("click", retrieveInput)

//function retrieveInput (event) {
	//preventing the button from refreshing the page
//	event.preventDefault()
//	let inputHtml = event.target.previousElementSibling

//	let divHtml = document.getElementById("container")
	//create a paragraph
//	let p = document.createElement("p")
	//create a text node
//	let content = document.createTextNode(inputHtml.value)
	//append the text node to the paragraph
//	p.appendChild(content)
	// append the p to the div
//	divHtml.appendChild(p)
//}



//-------------
//DOM EVENTS EXERCISES
//EXERCISE 1 WITH TABLE

//function insert_Row(){
 
     
   //var table = document.getElementById("sampleTable");
    // Find a <table> element with id="sampleTable":


	// Create an empty <tr> element and add it to the 1st position of the table:
	//var row = table.insertRow(2);

	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	//var cell1 = row.insertCell(0);
	//var cell2 = row.insertCell(1);

	// Add some text to the new cells:
	//cell1.innerHTML = "NEW CELL1";
	//cell2.innerHTML = "NEW CELL2";

//}

function insert_Row() {
	// access the table
	let tableHtml = document.getElementById("sampleTable")
	//create a row
	let rowHtml = document.createElement("tr")
	//create 2 cells (or columns)
	for (let i = 0; i<2; i++){
		//create a column
		let columnHtml = document.createElement("td")
		//add text content to the column
		let contentCell = document.createTextNode(`Row New cell${i+1}`)
		//add the text node to the column
		columnHtml.appendChild(contentCell)
		//add the column to the row
		rowHtml.appendChild(columnHtml)
	}
	//add row to the table
	tableHtml.appendChild(rowHtml)
}

//Exercise 2
//Add a few event listener to the button. The event listeners should change the style of the button

//<button id="jsstyle">Style</button> 