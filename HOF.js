const transactions=[1000, 2000, 4000, 3000, -898, 3800, -4500];
const inrtodollar=80;

let dollar_transactions = transactions.map(function(n){
    return (n/80).toFixed(0); //toFixed method used to not get the decimal points and round it
}) //here map function is acting like a loop by taking each element from the array and doing the required task and return it a new array
//we can also write this function as ternery operator like :
// transactions.map((n)=>{ 
// return n/80})

console.log(dollar_transactions); 



//we can also write this program in for each method

let dollar_transaction=transactions.forEach((n)=>{
    console.log((n/inrtodollar).toFixed(0))
}) // so here for-each function cannot return , we have to console.log it inside its block
//and returns the values one by one not in an array

