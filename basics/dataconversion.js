let name = "455"  //string
let ans = Number(name)

console.log(typeof ans)

let score = 35
let result = String(score)
console.log(typeof result)

let age = "hi78t98"
let num = Number(score)
console.log(typeof num)
console.log(num)  //sometimes we get NAN which NaN (Not a Number) is a special value in JavaScript representing an undefined or unrepresentable value, often resulting from invalid mathematical operations or type coercion.

//*****************operations*************** */

console.log(2+1) //all arithmetic operations like -,*,%,/ 
console.log("2"+1)
console.log(2+"1")
console.log("2"+1+1)
console.log(2+1+"1") //it happens due to precedence of operators or like how js functions which are defined 

/*🔎 Line by Line Explanation 
✅ console.log("2" + 1 + 1);
"2" + 1 → "21" (string + number → string)

"21" + 1 → "211" (string + number → string)

Final result: "211" (string)

✅ console.log(2 + 1 + "1");
2 + 1 → 3 (number + number → number)

3 + "1" → "31" (number + string → string)

Final result: "31" (string)

*/