//WEEK 3 - EXERCISE XP
//Exercise 1 : Change The Navbar
 //<div id="navBar">
  //  <ul>
  //      <li><a href="#">Profile</a></li>
  //      <li><a href="#">Home</a></li>
      //  <li><a href="#">My Friends</a></li>
   //     <li><a href="#">Messenger</a></li>
   //     <li><a href="#">My Pics</a></li>
 //   </ul>
//</div>`

//In the div above, change the value of the identity attribute (id) from navBar to socialNetworkNavigation, using the setAttribute method.
//We are going to add a new li to the ul.
//First, create a new li tag (use the createElement method)
//Then create a new text node with “Logout” as its specified text.
//Append the text node to the newly created list node (li).
//Finally, append this updated list node to the unordered list above, using the appendChild method.
//Bonus
//Use the firstChild and the lastChild properties to retrieve the first and last li elements under the parent ul node. Display the text of each link.(Hint: nodeValue property).

// 1. 
let navBar = document.getElementById('navBar');
console.log(navBar);
navBar.setAttribute('id', 'socialNetworkNavigation');

// 2.
let ul = document.getElementsByTagName('ul')[0];// first access
console.log(ul);

let liNew = document.createElement('li'); //access li
let anchor = document.createElement('a'); //access "a" tag
let att = document.createAttribute('href'); //access href 
att.value = '#'                             //assigned a value '#' to href
anchor.setAttributeNode(att);
let text = document.createTextNode('Logout'); // assign text
anchor.appendChild(text);   //attach "text" to "anchor"
liNew.appendChild(anchor);   //attach "anchor" to "liNew"
ul.appendChild(liNew);     //attach "liNew" to "ul"

//access ul
console.log(liNew);


// EXERCISE 2

// 1. access second li 

let ul = document.body.firstElementChild.nextElementSibling; // access first ul
let li = ul.lastElementChild // access first li


// 2. change name

let liTwo = document.getElementsByTagName('li')[1].innerHTML='Richard'; //change name
console.log(liTwo); 



let allUl = document.getElementsByTagName('ul');

for (let selectedUl of allUl){
    selectedUl.firstElementChild.innerHTML = 'Mary'
    let liNew = document.createElement('li') //3. create new 'li'
    let text = document.createTextNode('Hey Student'); //3. create text
    liNew.appendChild(text); //3. apprendChild to liNew
    selectedUl.apprendChild(liNew) //3. apprendChild to selectedUl

}

//3. add at the end of each <ul>, a <li> that says "Hey Students"
      //(see above)

//4. delete the <li> Sarah

let liFive = document.getElementsByTagName('li')[4];        //name variable 'Sarah'
let secondUl = document.getElementsByTagName('ul')[1];      //name variable 'ul' two, position 'li' two (sarah).

secondUl.removeChild(liFive);                           //remove item(sarah)
console.log(liFive);                                    //Print check.
