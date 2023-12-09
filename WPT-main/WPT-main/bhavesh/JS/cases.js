//let x = 10;

// if(x % 2 == 0){
//     console.log(x, "is even");
// }else{
//     console.log(x, "is odd");
// }

// let i = 0;

// while(++i < 10){
//     console.log(i);
// }

// function add(a = 10, b = 20) {
//     return a / b;
// }

// let a = add();

// console.log(a);


function total(...add){

    let sum = 0;

    for(let i = 0; i < add.length; i++){
        sum += add[i];
    }

    return sum;
}

//let ans = total(10, 20, 30, 40, 40.5, 0.5, 1.33);
let ans = total("hii", 'I', 'saurabh');
console.log(ans);