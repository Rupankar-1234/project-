//difference in for in and for of
// for in = helps in iterating the iterables and getting the keys inside an object
// for of = helps in inetrating the strings and arrays and getting the values inside an object

var obj = {
    a : 1,
    b : 20,
    c : 30 
}

for(var i in obj)
{
    console.log(i); //output is the keys inside the obj
}

// we cant iterate the enumerables in obj by using for of , for that we need to use for in or a method
// that it obj.entries in for of loop

for( var [keys, values] of Object.entries(obj)){
    console.log(keys, values); // now output will be both keys and values
}