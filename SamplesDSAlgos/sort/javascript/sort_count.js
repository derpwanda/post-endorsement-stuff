// COUNT SORT:
    // get maximum element from array
    // define count array of size [max+1]
    // set all elements in the count array to 0
    // increase count of each number which are found in the array
    // find cumulative frequency
    // store the number in the output array
    // decrease count for same numbers (count[i])
    // return the output array

// not an in-place sorting algorithm
// stable sort
// inefficient if range of key value k is very large
// can only sort discrete values like integer

// time complexity:  Best O(n+k)   |   Avg O(n+k)   |   Worst O(n+k)
    // O(Maximum key value – Minimum key value), linear
// space complexity:  O(k)

let countingSort2 = (
    originalArray,
    minValue = Math.min(...originalArray),
    maxValue = Math.max(...originalArray)
) => {
    const count = {};
    // First populate the count object
    for (let x = minValue; x <= maxValue; x++) count[x] = 0;
    
    for (let x = 0; x < originalArray.length; x++) count[originalArray[x]] += 1;
    
    // Now count is indexed by numbers, with values corresponding to occurrences
    // Then, iterate over count's properties from min to max:
    const sortedArray = [];
    for (let x = minValue; x <= maxValue; x++) {
        while (count[x] > 0) {
            sortedArray.push(x);
            count[x]--;
        }
    }
    return sortedArray;
};
let countingSort1 = (
    originalArray,
    minValue = Math.min(...originalArray),
    maxValue = Math.max(...originalArray)
) => {
    const count = {};
    for (let x = minValue; x <= maxValue; x++) count[x] = 0;    
    for (let x = 0; x < originalArray.length; x++) count[originalArray[x]] += 1;
    const sortedArray = [];
    for (let x = minValue; x <= maxValue; x++) {
        while (count[x] > 0) {
            sortedArray.push(x);
            count[x]--;
        }
    }
    return sortedArray;
};

countingSort = (
    oArray,
    minVal = Math.min(...oArray),
    maxVal = Math.max(...oArray)
) => {
    const count = {};
    for (let x = minVal; x <= maxVal; x++) count[x] = 0;
    for (let x = 0; x < oArray.length; x++) count[oArray[x]] += 1;
    const sArray = [];
    for (let x = minVal; x <= maxVal; x++) {
        while (count[x] > 0) {
            sArray.push(x);
            count[x]--;
        }
    }
    return sArray;
}


x = [3, 6, 5, 7, 5, 9];
console.log(`Original Array is ${x.toString()}`);
console.log(`Sorted Array is ${countingSort(x).toString()}`);
