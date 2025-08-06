/**
 * LEXICAL SCOPING IN JAVASCRIPT
 * 
 * Lexical Scoping (Static Scoping) means that the accessibility of variables 
 * is determined by where they are declared in the code structure, not where 
 * they are called from.
 * 
 * JavaScript uses lexical scoping to determine variable access through the scope chain.
 */

console.log("=== LEXICAL SCOPING EXAMPLES ===\n");

// ==========================================
// 1. BASIC LEXICAL SCOPING
// ==========================================
console.log("1. Basic Lexical Scoping:");

function outerFunction() {
    let outerVariable = "I'm in outer scope";
    
    function innerFunction() {
        let innerVariable = "I'm in inner scope";
        
        // Inner function can access outer variables (lexical scoping)
        console.log("From inner:", outerVariable);
        console.log("From inner:", innerVariable);
    }
    
    innerFunction();
    
    // Outer function cannot access inner variables
    console.log("From outer:", outerVariable);
    // console.log("From outer:", innerVariable);
}

outerFunction();
console.log("");

// ==========================================
// 2. SCOPE CHAIN DEMONSTRATION
// ==========================================
console.log("2. Scope Chain:");

let globalVar = "Global scope";

function level1() {
    let level1Var = "Level 1 scope";
    
    function level2() {
        let level2Var = "Level 2 scope";
        
        function level3() {
            let level3Var = "Level 3 scope";
            
            // Can access all variables from outer scopes
            console.log("Level 3 accessing:", globalVar);
            console.log("Level 3 accessing:", level1Var);
            console.log("Level 3 accessing:", level2Var);
            console.log("Level 3 accessing:", level3Var);
        }
        
        level3();
    }
    
    level2();
}

level1();
console.log("");

// ==========================================
// 3. VARIABLE SHADOWING
// ==========================================
console.log("3. Variable Shadowing:");

let name = "Global John";

function shadowExample() {
    let name = "Function John"; // Shadows global variable
    
    function innerShadow() {
        let name = "Inner John"; // Shadows function variable
        console.log("Inner name:", name); // "Inner John"
    }
    
    innerShadow();
    console.log("Function name:", name); // "Function John"
}

shadowExample();
console.log("Global name:", name); // "Global John"
console.log("");

// ==========================================
// 4. LEXICAL SCOPING WITH DIFFERENT DECLARATION TYPES
// ==========================================
console.log("4. Different Declaration Types:");

function declarationTypes() {
    var varVariable = "var variable";
    let letVariable = "let variable";
    const constVariable = "const variable";
    
    if (true) {
        var blockVar = "block var"; // Function scoped
        let blockLet = "block let"; // Block scoped
        const blockConst = "block const"; // Block scoped
        
        console.log("Inside block - var:", blockVar);
        console.log("Inside block - let:", blockLet);
        console.log("Inside block - const:", blockConst);
    }
    
    console.log("Outside block - var:", blockVar);
    // console.log("Outside block - let:", blockLet); 
    // console.log("Outside block - const:", blockConst);
}

declarationTypes();
console.log("");

// ==========================================
// 5. LEXICAL SCOPING AND CLOSURES
// ==========================================
console.log("5. Lexical Scoping Enables Closures:");

function createCounter() {
    let count = 0;
    
    // This function "closes over" the count variable
    return function() {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log("Counter 1:", counter1()); // 1
console.log("Counter 1:", counter1()); // 2
console.log("Counter 2:", counter2()); // 1 (separate closure)
console.log("Counter 1:", counter1()); // 3
console.log("");

// ==========================================
// 6. MULTIPLE NESTED FUNCTIONS
// ==========================================
console.log("6. Multiple Nested Functions:");

function grandParent() {
    let grandParentVar = "GrandParent's variable";
    
    function parent() {
        let parentVar = "Parent's variable";
        
        function child1() {
            console.log("Child1 accessing:", grandParentVar);
            console.log("Child1 accessing:", parentVar);
        }
        
        function child2() {
            console.log("Child2 accessing:", grandParentVar);
            console.log("Child2 accessing:", parentVar);
            // child1 and child2 are siblings - they can't access each other's variables
        }
        
        child1();
        child2();
    }
    
    parent();
}

grandParent();
console.log("");

// ==========================================
// 7. LEXICAL SCOPING WITH ARROW FUNCTIONS
// ==========================================
console.log("7. Arrow Functions and Lexical Scoping:");

function arrowFunctionExample() {
    let message = "Hello from outer function";
    
    // Arrow function inherits lexical scope
    const arrowFunction = () => {
        console.log("Arrow function:", message);
        
        const nestedArrow = () => {
            console.log("Nested arrow:", message);
        };
        
        nestedArrow();
    };
    
    arrowFunction();
}

arrowFunctionExample();
console.log("");

// ==========================================
// 8. PRACTICAL EXAMPLE: MODULE PATTERN
// ==========================================
console.log("8. Module Pattern Using Lexical Scoping:");

const Calculator = (function() {
    // Private variables (lexically scoped)
    let result = 0;
    let history = [];
    
    // Private function
    function addToHistory(operation, value) {
        history.push(`${operation}: ${value}`);
    }
    
    // Public API (closure over private variables)
    return {
        add: function(value) {
            result += value;
            addToHistory("ADD", value);
            return this;
        },
        
        subtract: function(value) {
            result -= value;
            addToHistory("SUBTRACT", value);
            return this;
        },
        
        getResult: function() {
            return result;
        },
        
        getHistory: function() {
            return [...history]; // Return copy
        },
        
        reset: function() {
            result = 0;
            history = [];
            return this;
        }
    };
})();

Calculator.add(10).subtract(3).add(5);
console.log("Calculator result:", Calculator.getResult()); // 12
console.log("Calculator history:", Calculator.getHistory());
console.log("");

// ==========================================
// 9. LEXICAL SCOPING WITH CALLBACKS
// ==========================================
console.log("9. Lexical Scoping with Callbacks:");

function processArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

function callbackExample() {
    let prefix = "Item: ";
    
    const numbers = [1, 2, 3, 4, 5];
    
    // Callback function has access to prefix variable
    processArray(numbers, function(item, index) {
        console.log(`${prefix}${item} at index ${index}`);
    });
}

callbackExample();
console.log("");

// ==========================================
// 10. COMMON PITFALLS AND SOLUTIONS
// ==========================================
console.log("10. Common Pitfalls:");

// Pitfall: Loop with var and setTimeout
console.log("Pitfall - Loop with var:");
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("var loop:", i); // Always prints 3
    }, 100);
}

// Solution 1: Use let instead of var
console.log("Solution 1 - Use let:");
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("let loop:", i); // Prints 0, 1, 2
    }, 200);
}

// Solution 2: Use closure (IIFE)
console.log("Solution 2 - Use closure:");
for (var i = 0; i < 3; i++) {
    (function(index) {
        setTimeout(function() {
            console.log("closure loop:", index); // Prints 0, 1, 2
        }, 300);
    })(i);
}

// ==========================================
// 11. LEXICAL SCOPING RULES SUMMARY
// ==========================================
console.log("\n=== LEXICAL SCOPING RULES SUMMARY ===");
console.log(`
1. SCOPE DETERMINATION:
   - Determined at compile time (when code is written)
   - Based on where variables and functions are declared
   - Not affected by how/where functions are called

2. SCOPE CHAIN:
   - Inner scopes can access outer scopes
   - Outer scopes cannot access inner scopes
   - Search goes from inner to outer until variable is found

3. VARIABLE LOOKUP:
   - Starts in current scope
   - Moves up the scope chain
   - Stops when variable is found or global scope is reached
   - ReferenceError if not found

4. CLOSURE CREATION:
   - Functions "remember" their lexical environment
   - Inner functions retain access to outer variables
   - Even after outer function has finished executing

5. PRACTICAL BENEFITS:
   - Data encapsulation and privacy
   - Module patterns
   - Factory functions
   - Event handlers with persistent state
   - Avoiding global namespace pollution
`);

console.log("=== END OF LEXICAL SCOPING EXAMPLES ===");
