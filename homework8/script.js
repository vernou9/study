class Person {
  
    constructor (fullname,age) {
         this.fullname = fullname 
         this.age = age 
     }
   
    talk(){
        console.log(`Такой-то ${this.fullname} говорит`)
    }    
}


class Student  {
    constructor (firstname,secondname,group,averagemark ){
        this.firstname=firstname
        this.secondname=secondname
        this.group=group
        this.averagemark=averagemark
    }
    print (){
        console.log(`Студент ${this.firstname} ${this.secondname} учится в ${this.group}`)
    }
    schoolarship() { 
        var stipa
        if (this.averagemark==5){
            this.stipa = 100
            console.log(`стипендия ${this.firstname} ${this.secondname} `+this.stipa)
        } else { 
        this.stipa=80 
         console.log(`стипендия ${this.firstname} ${this.secondname} `+this.stipa)}
    }
}

class Aspirant extends Student {
    article=true  
    print (){
        console.log(`Аспирант ${this.firstname} ${this.secondname} учится в ${this.group}`)
    } 
    schoolarship() { 
        var stipa
        if (this.averagemark==5)
        {
            this.stipa=200;
            console.log(`стипендия ${this.firstname} ${this.secondname} `+ this.stipa);
        } else {
        this.stipa=180 ;
        console.log(`стипендия ${this.firstname} ${this.secondname} `+ this.stipa);
        }
    }  
}

let u1= new Person("ivi","25")
u1.talk()
let s1= new Student ("ter","ret","132",4.5)
s1.print()
s1.schoolarship()

let a1= new Aspirant ("ter","ver","2132",3.5)
a1.print()
a1.schoolarship()

let university = [
    s1,
    a1,
]

console.log (university[0],university[1])