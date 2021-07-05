var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            throw new Error('Stack is full');
        }
        this.elements.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.elements.length == 0) {
            throw new Error('Stack is empty');
        }
        return this.elements.pop();
    };
    return Stack;
}());
var stack = new Stack(5);
console.log(stack.isEmpty());
console.log(stack.isFull());
stack.push(1);
stack.push(5);
stack.push(2);
stack.push(3);
console.log(stack.pop());
