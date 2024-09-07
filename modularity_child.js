function add(a,b){
    console.log(a+b)
}

function sub(a, b){
    console.log(a-b)
}

function mul(a, b){
    console.log(a*b)
}

function div(a, b){
    console.log(a/b)
}

module.exports={
    addition : add,
    substraction : sub,
    multiplication : mul,
    division : div
} // here module.exports is an object to hold the exported values of object or functions, so child module can call it 