//import { InitProcess } from "./calculateClass.mjs";

class Events  {
    constructor(){
        
        this.arraysFinals=[]
    }

    eventsClickKey (e) {   
        switch(e){
            case "Enter":
                InitProcess.calculate(this.arraysFinals.join(""))
                console.log("ok You pushed to calculate")
                break;
            case "Delete":
                InitProcess.clearScreen (" ");
                this.arraysFinals = []
                break;
            case "Backspace":
                InitProcess.eraseLast(this.arraysFinals.join(""));
                break;
            default:
                this.arraysFinals.push(e);
                InitProcess.printType(this.arraysFinals.join(""))
        } 
    }
        
}


const InputEvents= new Events();
//export { InputEvents}
console.log("Keyboard conected")