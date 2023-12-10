// let x = "[0-9]{2,3}-[0-9]{3}-[0-9]{8}"
// let y = "91-400-12345678"

let x ="[a-z]@gamil\.[a-z]{3}"
let y = "mini@gmail.com"
let a = y.match(x)
console.log(a)