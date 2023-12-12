// let x = "[0-9]{2,3}-[0-9]{3}-[0-9]{8}"
// let y = "91-400-12345678"

let x ="[A-Za-z0-9]+[@]gmail[.][a-z]{2,3}"
// let y = "mini15@gmail.com"
let y = "mini@gmail.in"
let a = y.match(x)
console.log(a)