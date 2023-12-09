let movie =
{
    name : "tumbbad",
    writter : ["Mitesh shah" , "Prasad Barve" , "Gandhi"],
    producer : ["Sohum shah" , "Aanand L. Rai" , "Mukesh Shah" , "Amita Shah"],
    hero : "Sohum Shah",
    dateOfRelease : "2018-10-12",
    budget : "5 crore",
    kids : true
}

console.log(movie["name"])
console.log(movie["producer"][0])
let x = Date.parse(movie["dateOfRelease"])
let y = new Date(x)
console.log(y)
let today = new Date()
// console.log(today)
// console.log(movie.hero)
// console.log(movie.kids)
let a = today.getFullYear()
let b = y.getFullYear()
let diff = a-b
console.log(diff)