// let x = /abc/  //case sencetive
// let x = /abc/i      //case insencetive
// let x = /[A-Z]/      //startin with A to Z 
// let x = /[A-Za-z]/       // NUMBER WILL NOT GOING TO ACCEPTED IF WE NOT SPECIFIED NUMBERS
// let x =/^[A-Z][a-z]$/       //[^]startin with A to Z (signle char)  and [$]end with a to b
// let x = /[A-B][a-z]+/
let x = /[A-Za-z][0-9]{3}/   //number and alphabets
let y = "Aasda515ghg"
let a = y.match(x)
console.log(a)
// console.log(typeof(a))