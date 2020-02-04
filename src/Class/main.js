import classDemo from "./classDemo";
import classDemo2 from "./classDemo";


//default is used to for accessibility
//export used when any class or function is needed to be accessed from one file to other file.

export default class main{

    constructor(){

        console.log("Main Constructor");

    }

    onPageLoad(){

        //Creating instance of classDemo
        let classDemoObj = new classDemo();
        classDemoObj.publicMethodDemo();
    }

}


export function onPageLoadEvent(){

    let mainObj = new main();
    mainObj.onPageLoad();

}

export class main2{

    constructor(){

        console.log("Main2 Constructor");

    }

    onPageLoad2(){
        let classDemoObj2= new classDemo2();
        //classDemoObj2.publicMethodDemo2(); //classDemoObj2.publicMethodDemo2 is not a function
    }

}

export function onPageLoadEvent2(){
    let mainObj2 = new main2();
    mainObj2.onPageLoad2();
}