// Code your solutions in this file

function writeCards(arr, event) {
    const messages = [];
    for (let i = 0; i < arr.length; i++) {
        messages[i] = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
        debugger;
    }

    return messages;
}

let names = ['amy', 'bob', 'carl'];
writeCards(names, "birthday");

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}