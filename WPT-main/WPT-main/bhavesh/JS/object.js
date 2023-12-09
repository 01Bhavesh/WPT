let obj = {
        fname : "bhavesh",
        lname : "gharat",
        education : {10 : "78" , 12 : "63" , bsc : "66" , msc : "70"},
        hobbies : ["swemming", "play cricket"],
        show : function()
        {
            console.log(this.fname , this.lname)
        }
}
console.log(obj.fname)
console.log(obj.education)
console.log(typeof(obj)) //object
console.log(typeof(obj.education)) //object
console.log(typeof(obj.hobbies))  //object
let a = JSON.stringify(obj)
console.log(a)
console.log(typeof(a))
let b = JSON.parse(a)
console.log(typeof(b))
console.log(b)
obj.show()
console.log(typeof(obj.show))
console.log(obj["fname"])
console.log(obj["education"]["msc"])