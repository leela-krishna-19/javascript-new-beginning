const name = "leela"
const age = 21

console.log("i am "+name.toLowerCase()+" i am "+age+" years") //this is old method to use +plus symbol , not good

console.log(`i am ${name.toUpperCase()} i am ${age} years`) // this is new method and these are not sigle quotes these are below esc button , we can use methods also inside flower brackets

//some methods 
console.log(name[2])
console.log(name.charAt(3))
console.log(name.indexOf('l'))
console.log(name.length)
console.log(name.substring(0,2))
console.log(name.slice(-4,2))  //******slice is tricky********* */

let zam = "    hero%2-king-man  "
console.log(zam.trim())
console.log(zam.replace('%2','$'))
console.log(zam.split('-'))
