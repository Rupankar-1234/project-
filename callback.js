const fact= (n)=>{
    let factorial=1
    for(let i=1;i<=n;i++)
    {
        factorial=factorial*i;
    }
    return factorial
}

let result = (findfact, num)=>{
    let ffact=findfact(num)
    console.log(ffact)
}

result(fact, 9)