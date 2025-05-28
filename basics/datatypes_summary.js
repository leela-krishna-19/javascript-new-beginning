//primitive - number,string,boolean,big int,null,undefined,symbol

//js we assign datatype dynamically , we dont specify datat type

const id1 = Symbol('123')
const id2 = Symbol('123')
console.log(id1==id2)  // we get false as even same symbol they create unique value


//*****************null is an object type ************* */
console.log(typeof null)

//reference or (non primitive ) --array , object , functions

const array = [ "lee" , "king"]

let object1 = //stored in key value pairs
{
    name: "leela",
    age: 21
}

const myfun = function(){
    console.log("hi")
}

myfun()
