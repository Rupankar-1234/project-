//array destructuring
let arr=[ 1 , 2 , 3, 4, 5]

let  [a, b, c, d, e]=arr // this way of accesing each element in one line is known as array destructuring
console.log(a)

//object destructuting
let obj={
    name: 'Rup',
    age: 19,
    college: 'gnit',
    address:{
        city: 'kolkata',
        pincode: 712235,
        naac: 'A+'
    }
}

let {name, age, college, city}=obj // this way of accesing each key value pair from object is known as destructing object
console.log(name , `
    ${age}`,`
    ${college}`,`  
    ${city}`) //the use of ``(back tick) to get the output in next line as in the same way it is written in the code