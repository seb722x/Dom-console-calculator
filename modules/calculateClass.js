//import {screenResult,screenType} from "../../main.mjs"

class Process {
    
    printType(text) {
        console.log(`you entered the following numbers: ${text}`)
        return screenType (text.slice(0,text.length-1) + text[text.length-1]) ;
    }

    calculate (evaluate) {
        console.log(`your request is equal to: ${eval(evaluate)}`);
        screenResult (eval(evaluate)); 
    }

    clearScreen () {
        screenType("");
        screenResult("0");
    }

    eraseLast (data) {
        console.log(data.substring(0, data.length - 1))
        screenType(data.substring(0, data.length - 1));
    }

}

const InitProcess = new Process();
// {Process,InitProcess}













//////////--------------------------------------------------------------------------------

export class MathCalculations extends Process {
    cosine() {
        let equal = screenType.innerText
        console.log(Math.cos(equal)) ;
    }
    sin() {
        let equal=screenType.innerText
        screenResult.innerText = Math.sin(equal);
    }

}


