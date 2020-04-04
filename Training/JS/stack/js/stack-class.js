class Stack {
    constructor(pLimit) {
        this.limit = pLimit;
        this.dataStore = [];
    }

    push(pValue) {
        if (isFull()){
            return;
        }
        this.dataStore.push(pValue);
    }

    pop() {
        if(this.isEmpty()){
            return;
        }
        let theLastElementInStack = dataStore.pop();
        return theLastElementInStack;
    }

    peek() {
        let theLastElementInStack = dataStore[dataStore.length - 1];
        return theLastElementInStack;
    }


    isFull() {
        return limit === dataStore.length;
    }

    isEmpty() {
        return dataStore.length === 0;
    }


}