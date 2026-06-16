function sumOfDistinctElements(set1, set2) {
    let sum = 0;

    // Part 1: Compare Set 1 vs Set 2
    for (let i = 0; i < set1.length; i++) {
        let isFound = false;
        for (let j = 0; j < set2.length; j++) {
            if (set1[i] === set2[j]) {
                isFound = true;
                break; // Optimization: Stop checking once found
            }
        }
        if (!isFound) {
            sum += set1[i];
        }
    }

    // Part 2: Compare Set 2 vs Set 1
    for (let i = 0; i < set2.length; i++) {
        let isFound = false;
        for (let j = 0; j < set1.length; j++) {
            if (set2[i] === set1[j]) {
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            sum += set2[i];
        }
    }

    return sum;
}

// Example usage
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
console.log("Sum of distinct:", sumOfDistinctElements(set1, set2)); // Output: 13