//function my_func_1(p1,p2){
 //   console.log(p1,p2);
//}
//my_func_1(60,p2);

//---

//let names = ['Ziv', 'Matan', 'Jackie', 'Benjie']
//1. create a function that get a name as a parameter
//2. check if the name exist in the array
//3. yes - return exist/the name
//4. no- return not exist
//5. matan@gmail.com



//function retname(p) {

    //loop the array (length)
  //  for (let i = 0; i < names.length; i++) {
        //find the name
    //    if(p===names[i]){
            //to add the extension email
      //      let mail = addemail(names[i]);
        //    return mail;
        //}
    //}
    //return 'NOT EXIST';
//}
//function addemail(name){
  //  return name="@gmail.com"
//}
//let n = retname('Matan');
//console.log(n);

//-----------------------

//function retname(p) {

    //loop the array (length)
  //  for (let i = 0; i < names.length; i++) {
        //find the name
    //    if(p===names[i]){
            //to add the extension email
      //      let mail = addemail(names[i]);
        //    return mail;
        //}
    //}
    //return 'NOT EXIST';
//}
//function addemail_1(name){
  //  return name+"@gmail.com";
//}
//const addemail = function(name){
  //  return name+"@gmail.com";
//}
//const addemail_2 = (name) => {

//}
//addmail_2('Matan');

//console.log(addemail);
//let n = retname('Matan');
//console.log(n);



//--------

//let names = ['Ziv', 'Matan', 'Jackie', 'Benjie']
//console.log(name[3]);//we will get benjie
//for (let i = 0; i < names.length; i++) {
  //  console.log(i, name[i]);
//}

//------

//let names = ['Ziv', 'Matan', 'Jackie', 'Benjie']
//for (let i = 0; i < names.length; i++) {
    //console.log(i, name[i]);
//}
//for(x in names){
  //  console.log(a);
//}
//-------

//let names = ['Ziv', 'Matan', 'Jakie', 'Benjie','Ziv', 'Matan', 'Jakie', 'Benjie'];
//for (let i = 0; i < names.length; i++) {
  // console.log(i,names[i]);
//}
//for(x in names){
  // console.log(names[x]);
//}
//for(a of names){
  // console.log(a);
//}
//names.forEach(item => {
 // console.log(item);
//}

const users = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz'
    },
    {
      id: 11,
      name: 'Yosi & Isaac DuBuque',
      username: 'Yosi.Isaac',
      email: 'yosi.isaac@karina.biz'
    }
  ];

  function getData(arr){
      for (var i = 0; i < arr.length; i++){
          console.log(arr[i]);
      }
  }
  getData(users);


  //-------
  function getData(arr){
    for (var i = 0; i < arr.length; i++){
        console.log(arr[i].name + " " + arr[i]).username + " " + arr[i].email;
    }
}
getData(users);

//---------

function getData(arr){
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].name + " " + arr[i].username + " " + arr[i].email);
    }
    for(x in arr){
      console.log(arr[x].name + "#" + arr[x].username + "#" + arr[x].email);
    }
    for(item of arr){
      console.log(item.name + "," + item.username + "," + item.email);
    }
    arr.forEach(item => {
      console.log(item.name + "^" + item.username + "^" + item.email);
    })
  }
  getData(users);

  //-------------
  // while loops:
function getData(arr){
    let i = 0
    while (i < arr.length){ 
      console.log(arr[i].name + " 555 " + arr[i].username + " 555 " + arr[i].email);
    i++
    }
  }
  getData(users)
  
  // function and for loops:
  // function getData(arr){
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(arr[i].name + " " + arr[i].username + " " + arr[i].email);
  //   }
  //   for(x in arr){
  //     console.log(arr[x].name + "#" + arr[x].username + "#" + arr[x].email);
  //   }
  //   for(item of arr){
  //     console.log(item.name + "," + item.username + "," + item.email);
  //   }
  //   arr.forEach(item => {
  //     console.log(item.name + "^" + item.username + "^" + item.email);
  //   })
  // }
  // getData(users);


  