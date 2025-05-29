// singleton   -later 
// Object.create  -later

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", //each key is stored in "" by default as string hence it dont show , we can explicitly write it 
    [mySym]: "mykey1",    //symbol need to be enclosed by [] in key pair 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

 console.log(JsUser.email) // to write in [] we need to place key in ""
 console.log(JsUser["email"])  // we need to use [] to call in future as if we have keys like "full name" that cant be accessed by dot
 console.log(JsUser["full name"])
 console.log(JsUser[mySym])

//if we did not declare a method we need to use dot to create it 
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo= function(){
    console.log(`Hello JS user, ${this.name}`); // this refers to the specific objects key
}

console.log(JsUser.greeting());
console.log(JsUser["greetingTwo"]());  //another way to access a function using []

JsUser.email = "hitesh@chatgpt.com"
 Object.freeze(JsUser)   // doesnot alllow changes to the object
JsUser.email = "hitesh@microsoft.com"
 console.log(JsUser);