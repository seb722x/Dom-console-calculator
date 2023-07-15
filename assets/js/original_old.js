let erase =document.querySelector("#erase");
let clear =document.querySelector("#clear");
let equal =document.querySelector("#answer");

let btn_0 =document.querySelector("#zero");
let btn_1 =document.querySelector("#one");
let btn_2 =document.querySelector("#two");
let btn_3 =document.querySelector("#three");
let btn_4 =document.querySelector("#four");
let btn_5 =document.querySelector("#five");
let btn_6 =document.querySelector("#six");
let btn_7 =document.querySelector("#seven");
let btn_8 =document.querySelector("#eight");
let btn_9 =document.querySelector("#nine");


let btn_plus =document.querySelector("#plus");
let btn_minus =document.querySelector("#minus");
let btn_multiply =document.querySelector("#multiply");
let btn_division =document.querySelector("#division");
let btn_point =document.querySelector("#point");
let btn_percentage =document.querySelector("#percentage");

let write_me = document.querySelector("#type");
let result = document.querySelector("#result");

btn_0.onclick = () => {
    console.log("youclicked 0")
    type_to(0);
}

btn_1.onclick = () => {
    type_to(1);
}

btn_2.onclick = () => {
    type_to(2);
}

btn_3.onclick = () => {
    type_to(3);
}

btn_4.onclick = () => {
    type_to(4);
}

btn_5.onclick = () => {
    type_to(5);
}

btn_6.onclick = () => {
    type_to(6);
}

btn_7.onclick = () => {
    type_to(7);
}

btn_8.onclick = () => {
    type_to(8);
}


btn_9.onclick = () => {
    type_to(9);
}

btn_plus.onclick = () => {
    type_to("+");
}

btn_minus.onclick = () => {
    type_to("-");
}

btn_division.onclick = () => {
    type_to("/");
}

btn_multiply.onclick = () => {
    type_to("*");
}

btn_percentage.onclick = () => {
    type_to("%");
}

btn_point.onclick = () => {
    type_to(".");
}

clear.onclick = () => {
    clear_screen();
}

erase.onclick = () => {
    erase_last();
}

equal.onclick= () =>{
    calculate();
}


document.onkeyup = e=>{
    if(e.key =="0" || e.key == "Num0"){
        type_to(0);
    }else if (e.key =="0" || e.key == "Num0"){
        type_to(0);
    }else if (e.key =="1" || e.key == "Num1"){
        type_to(1);
    }else if (e.key =="2" || e.key == "Num2"){
        type_to(2);
    }else if (e.key =="3" || e.key == "Num3"){
        type_to(3);
    }else if (e.key =="4" || e.key == "Num4"){
        type_to(4);
    }else if (e.key =="5" || e.key == "Num5"){
        type_to(5);
    }else if (e.key =="6" || e.key == "Num6"){
        type_to(6);
    }else if (e.key =="7" || e.key == "Num7"){
        type_to(7);
    }else if (e.key =="8" || e.key == "Num8"){
        type_to(8);
    }else if (e.key =="9" || e.key == "Num9"){
        type_to(9);

    }else if (e.key =="+" || e.key == "Num+"){
        type_to("+");
    }else if (e.key =="-" || e.key == "Num-"){
        type_to("-");
    }else if (e.key =="/" || e.key == "Num/"){
        type_to("/");
    }else if (e.key =="*" || e.key == "Num*" || e.key == "x"){
        type_to("*");
    }else if (e.key =="%" || e.key == "Num%"){
        type_to("%");
    }else if (e.key =="." || e.key == "Num."){
        type_to(".");
    }else if (e.key =="*" || e.key == "Num*"){
        type_to("*");       
    }else if (e.key =="Enter" || e.key == "Numenter"){
        calculate();       
    }else if (e.key =="Delete" ){
        clear_screen();      
    }
    else if (e.key =="Backspace" || e.key == "Escape" ){
        erase_last();      
    }
    
};




let type_to = (text) => {
    if(write_me.innerText == ""){
        write_me.innerText = text;
    }else if(write_me.innerText.length <= 23){
        write_me.innerText = write_me.innerText + text;
    }else{
        console.warn("limited reached")
        alert("MAX Digits")
    }
}

let calculate = () => {
    let res=write_me.innerText
    result.innerText = eval(res);
}


let clear_screen = () => {
    write_me.innerText ="";
}

let erase_last = () => {
    write_me.innerText =write_me.innerText.substr(0,write_me.innerText.length-1);

}



console.log("conecting")



