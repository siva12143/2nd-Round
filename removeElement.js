function removeElement(arr, index) {
    let newArr = [];
    for (let i = 0, j = 0; i < arr.length; i++) {
        if (arr[i] !== index) {
            newArr[j] = arr[i];
            j++;
        }
    }
    return newArr;
}

// Example Usage
let arr = [10, 20, 30, 40, 50, 30];
let updatedArr = removeElement(arr, 50); // Removing element at index 2 (30)
console.log(updatedArr.length );