const date = new Date()  //object created if use new remember
console.log(date)
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toLocaleString())
console.log(typeof date)

const newdate = new Date(2025,0,23,8,0) //year,month,date,hour,minutes
console.log(newdate)

const newdate2 = new Date("1-24-2024") //mm-dd-yy
console.log(newdate2)

const timestamp =Date.now()
console.log(timestamp)

let date3 = new Date()
console.log(date3.getDate())
console.log(date3.getDay())

console.log(date3.toLocaleString('default',{
    weekday: "long",
}))