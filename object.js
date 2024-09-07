//in js we can create object
var me = {
    firstname: 'Rup',
    lastname : 'Nandi',
    age : 20,
    course : 'btech ECE',
    college : {
        Name : 'GNIT',
        Under : 'JIS',
        year : 1994
    },
    address : 'Baranagar'
}

console.log(me.college.Under)

//defining a new characteristic from outside of the object
me.NAAC = "A++"

console.log(me)