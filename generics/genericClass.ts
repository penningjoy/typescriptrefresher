
class Stack<T> {
    private elements: T[] = [];

    constructor(private size:number){
    }

    isEmpty():boolean {
        return this.elements.length === 0;
    }

    isFull():boolean {
        return this.elements.length === this.size;
    }

    push(element: T): void {
        if(this.elements.length === this.size){
            throw new Error('Stack is full');
        }
        this.elements.push(element);
    }

    pop(): T {
        if(this.elements.length == 0){
            throw new Error('Stack is empty');
        }
        return this.elements.pop();
    }
}


let stack = new Stack(5);
console.log(stack.isEmpty())
console.log(stack.isFull())
stack.push(1)
stack.push(5)
stack.push(2)
stack.push(3)
console.log(stack.pop())