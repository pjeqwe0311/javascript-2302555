function printHello() {
    console.log('Hello');
}
printHello();
   
function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

//2.parameters
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 5. local scope
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
}
printMessage();

let globalMessage_ = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage_);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    console.log(childMessage);
}
printMessage();