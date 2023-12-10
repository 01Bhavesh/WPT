// function add(a,b) {
//     return a+b
// }
// let ans = add(10,30)
// console.log(ans)
function add(a = 12 , b = 30)
{
    return a+b
}
// let ans = add(1,5,10)        //6
// let ans = add(2)                //32
// let ans = add(100,200,500)          //300
// let ans = add(100)                  //130
// let ans = add("bhavesh "," gharat")      //bhaveshgharat
let ans = add("12","20")     //1220
console.log(ans)