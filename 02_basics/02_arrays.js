const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

let name= marvel_heros.push(dc_heros) //push stores all elements of another array into the same array no new array is created 
console.log(name) //list no of elements considers an entire array as 1 element
console.log(marvel_heros)  //other array is given as other array entirely it becomes matrix not good(one array in another array)

const marvel_heros2 = ["thor", "Ironman", "spiderman"]
const dc_heros2 = ["superman", "flash", "batman"]
 const allHeros = marvel_heros2.concat(dc_heros2) // concat returns new arry instead of storing in same array hence we create new array
 console.log(allHeros);  // concat creates new array to store all individual elements 

 const all_new_heros = [...marvel_heros2, ...dc_heros2]  //...array is spread operator: the elements of the array are spread as individual elements, so you're not nesting them like matrix
 console.log(all_new_heros);

 
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //makes any nested array into a single array
console.log(real_another_array);

//methods- Array.method(array_name/argument)  /syntax

console.log(Array.isArray("Hitesh"))//Checks if "Hitesh" is an array.
console.log(Array.isArray(another_array))

console.log(Array.from("Hitesh")) //Converts an iterable (like a string) into an array of characters.

console.log(Array.from({name: "hitesh"})) // interesting - the object is not iterable, so JavaScript doesn't know how to convert it. we need to specify more for it to convert

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // Creates an array from the provided arguments.