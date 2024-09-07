//from the transaction array filter out the positive elements and calculate the total amount
const transaction=[1000,3000,4000,2000,-898,3800,-4500]

let amount=transaction.filter(function(n)
{
    return n>0
}).reduce(function(sum, n){
    return sum=sum+n
}, 0)

console.log(amount)