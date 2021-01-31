 // WEEK 2 - DAY 3 - DAILY CHALLENGE 1
  
   // Instructions
   //1. Write a JavaScript program to recreate the pattern below
   //2. Hint: use nested for loop.
   //3. Do this Daily Challenge by youself, without looking at the answers on the internet

   //Example
   //for (let i = 1; i <= 3; i++ )
       //console.log("variable i : ", i)
       //console.group()

       //nested for loop
       //running 5 times
    //for (let x = 10; x <= 14; x++){

    //}
    
    //*  
    //* *  
    //* * *  
    //* * * *  
    //* * * * *
    //* * * * * *
    //The 1st for loop run 6 times
    //Each line has a new star

    //1st line
    //2nd line
    //3rd
    // The quantity or the stars per line
    // = the number of times that the loop runs
     
    //let stars;
    //lines
    for (let i = 1; i <= 6; i++){
      //  for (let x = 1; x <= i; x++){
        let stars = "*".repeat(i)
        console.log(stars)
    }