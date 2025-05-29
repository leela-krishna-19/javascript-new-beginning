// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj",8,9] // we can declare different data here in js in array

const myArr2 = new Array(1, 2, 3, 4)
 console.log(myArr[1]);

// Array methods

 myArr.push(6)
 console.log(myArr)

 myArr.push(7)  //add element at last
 console.log(myArr)

 myArr.pop()  // delete the last element 
 console.log(myArr)

myArr.unshift(9)  //add element at start of array
console.log(myArr)
 myArr.shift()  //removes the first element
 console.log(myArr)

 console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

 const newArr = myArr.join()  //converts to string if we use join

 console.log(myArr);
 console.log( newArr);
 console.log(typeof myArr)
 console.log(typeof newArr)


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //slice dont change exsisting array and dont include last one (1,3) - 1,2

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  //splice change exsisting array by removing the elements in range includes (1,3) includes 1,2,3
console.log("C ", myArr);
console.log(myn2);
