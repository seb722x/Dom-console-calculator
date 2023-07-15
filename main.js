

class Process {
  constructor(screenType, screenResult) {
    this.screenType = screenType;
    this.screenResult = screenResult;
  }

  printType(text) {
    console.log(`you entered the following numbers: ${text}`);
    this.screenType.innerText = text.slice(0, text.length - 1) + text[text.length - 1];
  }

  calculate(evaluate) {
    console.log(`your request is equal to: ${eval(evaluate)}`);
    this.screenResult.innerText = eval(evaluate);
  }

  clearScreen() {
    this.screenType.innerText = "";
    this.screenResult.innerText = "0";
  }

  eraseLast(data) {
    console.log(data.substring(0, data.length - 1));
    this.screenType.innerText = data.substring(0, data.length - 1);
  }
}

class Events {
  constructor(process) {
    this.process = process;
    this.arraysFinals = [];
  }

  eventsClickKey(e) {
    switch (e) {
      case "Enter":
        this.process.calculate(this.arraysFinals.join(""));
        console.log("ok You pushed to calculate");
        break;
      case "Delete":
        this.process.clearScreen();
        this.arraysFinals = [];
        break;
      case "Backspace":
        this.process.eraseLast(this.arraysFinals.join(""));
        break;
      default:
        this.arraysFinals.push(e);
        this.process.printType(this.arraysFinals.join(""));
    }
  }
}

class Calculator {
  constructor() {
    this.screenType = null;
    this.screenResult = null;
  }

  calculate(input) {
    try {
      const result = eval(input);
      return result;
    } catch (error) {
      return "Invalid input";
    }
  }

  start() {
    if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
      const readline = require("readline");
      const interfaceRedline = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      interfaceRedline.setPrompt("> Ingrese la operación matematica: >> ");
      interfaceRedline.prompt();

      interfaceRedline.on("line", (input) => {
        const result = this.calculate(input);
        console.log(result);

        interfaceRedline.prompt();
      });
    } else {
      this.screenType = document.querySelector("#type");
      this.screenResult = document.querySelector("#result");

      const initProcess = new Process(this.screenType, this.screenResult);
      const inputEvents = new Events(initProcess);

      document.onkeyup = (e) => {
        let element = e.key;
        console.log(element);
        inputEvents.eventsClickKey(element);
      };

      document.getElementById("numPad").onclick = (e) => {
        let event = e.target.name;
        inputEvents.eventsClickKey(event);
      };
    }
  }
}

const calculator = new Calculator();
calculator.start();
