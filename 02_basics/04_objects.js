// const tinderUser = new Object()  --singleton creation of object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

 console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//combining 2 objects 
 const obj3 = { obj1, obj2 }  //bad as it becomes nested
 console.log(obj3);

 const obj5 = Object.assign({}, obj1, obj2, obj4) //Object,assign(target{} , source-other objects)  -better but not used
 console.log(obj5);

const obj6 = {...obj1, ...obj2} //best 
console.log(obj6);


const users = [   //an array is  created and inside objects are stored
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

 console.log(Object.keys(tinderUser)); //gives keys as array
 console.log(Object.values(tinderUser)); //gives values as array
 console.log(Object.entries(tinderUser)); //maps key values to array

 console.log(tinderUser.hasOwnProperty('isLoggedIn')); //checks if particular key is present or not