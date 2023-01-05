const operations = document.querySelectorAll(".operations");
const numbers = document.querySelectorAll(".numbers");
const clear = document.querySelector(".clear");
const deleteElm = document.querySelector(".delete");
const prev = document.querySelector(".prev");
const after = document.querySelector(".after");
const equalsTo = document.querySelector(".equalsTo");

class Calculator {
    constructor(prev, after) {
        this.prev = prev;
        this.after = after;
        this.clear();
    }
    clear() {
        this.prevOperand = "";
        this.currOperand = "";
    }
    append(number) {
        if (number === "." && this.currOperand.includes(number)) {
            return;
        }
        this.currOperand = this.currOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        this.prevOperand = this.currOperand;
        this.currOperand = "";
        this.operation = operation;
        if (this.prevOperand == "") {
            return;
        } else {
            this.compute();
        }
    }

    compute() {
        const prev1 = parseFloat(this.prevOperand);

        const current = parseFloat(this.currOperand);

        let computation;
        if (isNaN(prev1) || isNaN(current)) return;
        switch (this.operation) {
            case "+":
                computation = prev1 + current;
                break;
            case "-":
                computation = prev1 - current;
                break;
            case "*":
                computation = prev1 * current;
                break;
            case "/":
                computation = prev1 / current;
                break;
            default:
                return;
        }

        this.currOperand = computation;
        this.prevOperand = "";
    }

    updateDisplay() {
        this.after.innerText = this.currOperand;
        this.prev.innerText = this.prevOperand;
    }
    delete() {
        this.currOperand = String(this.currOperand);
        this.currOperand = this.currOperand.slice(0, -1);
    }
}
const calculator = new Calculator(prev, after);

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        calculator.append(number.innerText);
        calculator.updateDisplay();
    });
});

deleteElm.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
});

clear.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
});

operations.forEach((operation) => {
    operation.addEventListener("click", () => {
        calculator.chooseOperation(operation.innerText);
        calculator.updateDisplay;
    });
});
equalsTo.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
});
