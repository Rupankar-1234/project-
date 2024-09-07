class person{
    constructor(_name, _age){
        this.name=_name
        this._age=_age
    }

    welcome(subj)
    {
        console.log(`Hi I am ${this.name}, you new ${subj}`)
    }
}

class teacher extends person{
    constructor(_name, _age, _subject_spl){
        super(_name, _age)// super keyword is used to get the properties from the parent class to child class
        this.subject_spl=_subject_spl
    }

    intro(sub)
    {
        super.welcome("Maths")
    }
}

class student extends person{
    constructor(_name, _age, _cgpa)
    {
        super(_name, _age)
        this.cgpa=_cgpa
    }
}

let person1=new teacher("Raj", 45, "Maths")
//console.log(person1)

person1.intro()