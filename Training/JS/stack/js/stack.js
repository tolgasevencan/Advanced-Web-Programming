/**
 * Bu dosyada stack kullanimini saglayacak data yapilari ve bu datayi manipule edecek fonksyionlar olacaktir.
 */

let dataStore = [];
let limit = 10;

function push(pValue) {
    dataStore.push(pValue);
}

function pop() {
    let theLastElementInStack = dataStore.pop();
    return theLastElementInStack;   
}

function peek() {
    let theLastElementInStack = dataStore[dataStore.length - 1];
    return theLastElementInStack;
}
    

function isFull() {
    return limit === dataStore.length;
}

function isEmpty() {
    return dataStore.length === 0;
}
