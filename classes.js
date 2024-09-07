//in constructor js file , we know how to use constructor to make new objects
//but after ES6 , classes do the same job but in a precise and easy way

class person{
    constructor(_name, _age ){
        this.name=_name
        this.age=_age
    }

    //we can also write methods but not in constructor but inside the class 

    welcome(){
        console.log(`Welcome ${this.name}`)
    }
}

let person1=new person('Sonal', 20)

console.log(person1)
person1.welcome()