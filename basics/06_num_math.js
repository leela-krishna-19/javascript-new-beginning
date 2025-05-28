const score = 100
console.log(score)
console.log(typeof score)

const runs = new Number(100)
console.log(runs)
console.log(typeof runs)

const num = new Number(100.584)
console.log(num.toString().length)//once its converted to string we can perform all string operations
console.log(num.toFixed(2))
console.log(typeof num)

const rage  =15367700
console.log(rage.toLocaleString()) // converts to us like currency structure
 


//+++++++++++++++++++math+++++++++++
console.log(Math)
console.log(Math.abs(-4))  //converts -ve to positive value only
console.log(Math.round(13.34))
console.log(Math.floor(13.34))  //gives low 
console.log(Math.ceil(13.34))  //gives high number
console.log(Math.min(3,5,3,6))
console.log(Math.max(3,4,5,3))
console.log(Math.random()) //random always give value between 0 and 1