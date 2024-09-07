class person{
    constructor(_name, _age) {
        var name=_name
        this.age=_age

        this.getname=function(){
            return name
        }
    }
}

let person1= new person("Mark", 56)
console.log(person1.getname(), person1.age)
//so here we create a getname method to encapsulate the original value by not exposing the power to outside environment to change it