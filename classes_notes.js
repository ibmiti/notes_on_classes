// CLASS in programming

// instantiation or copying classes
// classes ar meant to be copied and used else where 
// to use a already defined class is to instantiate that class


class Player {
    constructor(first_name, last_name, type){
        this.first_name = first_name;
        this.last_name  = last_name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.first_name + ' ' +  this.last_name}, I'm a ${this.type}`);
    }
}

const player1 = new Player('john', 'doe', 'wizard').introduce();
