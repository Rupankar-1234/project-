let a = function(){
    console.log("hello javascript")
}

let b = p=>{ // this is the way of writing a arrow function instead of writing the function keyword
    console.log(p)
}

let c = (q, r) => {
    console.log(q+r)
}

a()
b(5)
c(9, 10)