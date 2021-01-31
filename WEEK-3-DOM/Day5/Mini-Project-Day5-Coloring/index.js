var canvas = document.getElementById("canvas");
for (i = 0; i<1440; i++) {
    canvas.innerHTML += "<div></div>";   
}

// var color = null;
// var mousedown = false;
// var body = document.getElementsByTagName("body")[0];
// console.log(body);

// var colorBlocks = document.querySelectorAll("#sidebar>*");
// console.log(colorBlocks);

// var fillblocks = document.querySelectorAll("#canvas>*");
// console.log(fillblocks);

// var clearButton = document.getElementsByTagName("button")[0];
// console.log(clearButton);

// clearButton.addEventListener("click", function(){
//     for (fillblock of fillblocks){
//         fillblock.style.backgroundColor="white";
//     }
// })

// body.addEventListener("mousedown", function(){
//     mousedown = true;
// })

// body.addEventListener("mouseup", function(){
//     mousedown = false;
// })

//    for (colorBlock of colorBlocks){
//         colorBlock.addEventListener("click", function(event){
//         color=event.target.style.backgroundColor;
//     })
// }

//    for (fillblock of fillblocks){
//        fillblock.addEventListener("mousedown", function(event){
//        if (color !=null)event.target.style.backgroudColor = color;
//        })
//        fillblock.addEventListener("mouseover", function(event){
//         if (mousedown && color !=null)event.target.style.backgroudColor = color;
//        })

//    }

let color = null;
let mousedown = false;

let body = document.getElementsByTagName("body")[0];
let color_blocks = document.querySelectorAll("#sidebar > *");
let fill_blocks = document.querySelectorAll("#canvas > *");
let clear_button = document.getElementsByTagName("button")[0];

clear_button.addEventListener("click", function(){
    for (fill_block of fill_blocks){
        fill_block.style.backgroundColor = "white";
    }
});

body.addEventListener("mousedown", function(){
    mousedown = true;
})

body.addEventListener("mouseup", function(){
    mousedown = false;
})


for (color_block of color_blocks){
    color_block.addEventListener("click", function(event){
        color = event.target.style.backgroundColor;
    });
}

for (fill_block of fill_blocks){
    fill_block.addEventListener("mousedown", function(event){
        if (color != null) event.target.style.backgroundColor = color;
    });
    fill_block.addEventListener("mouseover", function(event){
        if (mousedown && color != null) event.target.style.backgroundColor = color;
    });
}
