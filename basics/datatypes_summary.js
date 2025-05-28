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



//++++++++++++++++++++++++++++++++++++++++++++++++++
//data stored in fashion:

//stack(primitive) - copy : no change in original
let name1 = "leela"
let name2 = name1
console.log(name1)
console.log(name2)
name2 = "king"  //here only name2 is changed as it took copy of name1 not original name1
console.log(name1)
console.log(name2)

//heap(non-primitive) - reference : change leads to entire change
let obj1 = {
    email: "lee@123"
}
let obj2 = obj1
console.log(obj1)
console.log(obj2)
obj2.email = "king@123"  // here email of obj1 and obj2 is changed as heap gives original value access
console.log(obj1)
console.log(obj2)