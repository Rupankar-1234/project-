function createcar(_model, _company, _color) {
    this.model=_model
    this.company=_company
    this.color=_color //here this keyword is used to specify the empty object which is called and done by the new keyword

    this.drive=function(){
        console.log(`I am driving a ${this.model} of ${this.color}`)
    }
}

let car1= new createcar("La-ferari", "Ferari", "Red")
car1.drive()
