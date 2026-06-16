// Function: Returns the calculated value directly
function dotProductFunction(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

// Refactored algorithm using the function
function checkOrthogonalRefactored(v1, v2) {
    const ps = dotProductFunction(v1, v2);
    return ps === 0;
}

// Example usage
const vecA = [1, 0];
const vecB = [0, 1];
console.log(checkOrthogonalRefactored(vecA, vecB)); // Output: true