
// os.chdir("E:\\projects\\LambdaSchool\\m6\\63a1\\src\\iterative_sorting\")
// exec(open("iterative_sorting.py").read())

// SELECTION SORT:  
    // Always select and move smallest element until all are in order.
    
// time complexity:  Best O(n^2)   |   Avg O(n^2)   |   Worst O(n^2)
// space complexity:  O(1)

selectionSort1 = (originalArray) => {
    // get array length and array length - 1
    let arrayLength = originalArray.length;
    let nextToLast = arrayLength-1
    let currentIndex, smallestIndex, nextIndex, currentItemX, currentItemY, smallestItem;
    // loop through n-1 elements
    for (let x = 0; x < nextToLast; x++) {
    // for (x in range(0, nextToLast)) {
        // set current index
        currentIndex = x

        // set smallest index as current index
        smallestIndex = currentIndex
        nextIndex = x + 1

        // loop through array starting at nextIndex to array length
        for (let y = nextIndex; y < arrayLength; y++) {
            // set current item
            currentItemY = originalArray[y]
            // set smallest item
            smallestItem = originalArray[smallestIndex]
            // compare current and smallest items
                // if current is smallest, set its index as smallest index
            if (currentItemY < smallestItem) smallestIndex = y;
        }

        // swap the minimum element with the current element
        // if smallest index isn't current item
        if (smallestIndex != x) {
            // swap arr[smallestIndex] and arr[x]
            // get smallest item
            smallestItem = originalArray[smallestIndex]
            // set current item
            currentItemX = originalArray[x]
            // set smallest item as current item
            originalArray[smallestIndex] = currentItemX
            // set current item as smallest item
            originalArray[x] = smallestItem
        }
    }
    // return sorted array
    return originalArray
}

selectionSort2 = (oArray) => {
    let nextToLast = oArray.length-1
    let curIndex, smallestIndex, nextIndex, curItemX, curItemY, smallestItem;
    for (let x = 0; x < nextToLast; x++) {
        curIndex = x;
        smallestIndex = curIndex;
        nextIndex = x + 1;
        for (let y = nextIndex; y < oArray.length; y++) {
            curItemY = oArray[y];
            smallestItem = oArray[smallestIndex];
            if (curItemY < smallestItem) smallestIndex = y;
        };
        if (smallestIndex != x) {
            smallestItem = oArray[smallestIndex];
            curItemX = oArray[x];
            oArray[smallestIndex] = curItemX;
            oArray[x] = smallestItem;
        }
    }
    return oArray;
}

selectionSort = (oArray) => {
    let nextToLast = oArray.length - 1;
    let curIndex, smallestIndex, nextIndex, curItemX, curItemY, smallestItem;
    for (let x = 0; x < nextToLast; x++) {
        curIndex = x;
        smallestIndex = curIndex;
        nextIndex = x + 1;
        for (let y = nextIndex; y < oArray.length; y++) {
            curItemY = oArray[y];
            smallestItem = oArray[smallestIndex];
            if (curItemY < smallestItem) smallestIndex = y;
        };
        if (smallestIndex !== x) {
            smallestItem = oArray[smallestIndex];
            curItemX = oArray[x];
            oArray[smallestIndex] = curItemX;
            oArray[x] = smallestItem;
        }
    }
    return oArray;
}


var inputArr = [2, 7, 9, 1, 8, 0, 6, 5, 3, 4];
console.log(`Here is the input array:   ${inputArr}`);
selectionSort(inputArr);
console.log(`Here is the sorted array:  ${inputArr}`);