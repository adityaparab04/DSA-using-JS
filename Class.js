//reference type
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

// console.log(object1, object2, object3);
// console.log(object1 === object3); //false
// console.log(object1.value === object3.value); //true

//context vs scope

const object = {
    a: function add(){
            console.log(this);
        }
}

//instantiation

class Player{
    constructor(name, type){
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I am ${this.type}`);
    }
}

class Wizard extends Player{
    constructor(name, type){
        super(name, type);
    }
    play(){
        console.log(`Weee! I am a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', "Dark Magic");

console.log(wizard1);