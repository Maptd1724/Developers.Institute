function signIn(){
    let userEmail = document.getElementById("exampleInputEmail1").value;
    let userPassword = document.getElementById("exampleInputPassword1").value;
    console.log(userEmail, userPassword);
}
let submit = document.getElementById("submit");
submit.addEventListener("click", signIn);