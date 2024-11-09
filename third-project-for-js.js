let email = "zeynep.cengiz@gmail.com";

let control = email.includes("@") && email.endsWith(".com");

console.log(control)
if (control == true) {
    console.log("Doğru biçimli e-mail.");
}
else{
    console.log("E-mail'de '@' ya da '.com'eksiktir." );
}
   
