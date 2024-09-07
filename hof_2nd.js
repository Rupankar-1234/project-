//find function helps in getting the first value from an array which satisfy the condition
let transactions=[1000, 230,-383, 4400, 569, -4590]

let first_withdraw=transactions.find(function(n){
    return n<0
})

console.log(first_withdraw)

//findindex helps in getting the index value of the element in an array that satisfy the condition
let first_withdraw_index=transactions.findIndex(function(b){
    return b<0
})

console.log(first_withdraw_index)

//some: condition check: get true/false
//it will return true if atleast 1 condition satisfy

let anywithdraw=transactions.some(function(n){
    return n<0
})
console.log(anywithdraw)

//every : condition check: get true/false
//it will return true if all the elements meets the condition otherwise false
let alldeposit=transactions.every(function(n){
    return n>0
})
console.log(alldeposit)


//filter : this function is used to get all the elements from an array that satisfy condition and returns an array as result

let deposits=transactions.filter(function(n){
    return n>0
})
console.log(deposits)

//reduce : this function is used to get a single element and also as output after performing a task provided

let balance=transactions.reduce(function(sum, n){
    sum=sum+n
    return sum
}, 0)
console.log(balance)