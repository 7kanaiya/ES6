//Private Method Declaration
//Symbol scope in within a file only
const privateMethodDemo = Symbol("privateMethodDemo");

export default class classDemo{
    
    //Here we cant create the Global Variables
    //Like ES5 the variables have to created inside the Constructor
    //JS can have only one constructor default or parameterized

    constructor(){

        //constructor is Automatically called when the instance of class is created.
        console.log("classDemo Constructor");
    }

    //Private Method
    [privateMethodDemo](){
        console.log("Private Method Demo");
    }

    //Public Method
    publicMethodDemo(){

        console.log("Public Method Demo");

        //Calling Private Method
        this[privateMethodDemo]();
    }

}

const privateMethodDemo2 = Symbol("privateMethodDemo2");

//export default class classDemo2{
export class classDemo2{
    constructor(){
        console.log("Constructor classDemo2");
    }

    [privateMethodDemo2](){
        console.log("Demo2 Private");
    }

    publicMethodDemo2(){
        console.log("Demo2 Public Method");
        this[privateMethodDemo2]();
    }

    
}