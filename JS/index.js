function rotateArray(arr) {
    console.log("Original Array: ", arr);
    let shift_count = 2;
    while (shift_count) {
        let temp = arr[0];
        for (let i = 1; i < arr.length; i++) {
            arr[i-1] = arr[i];
        }
        arr[arr.length - 1] = temp;
        shift_count--;
    }
    return arr;
}

// Example usage
const myArray = [1, 2, 3, 4, 5];
const rotatedArray = rotateArray(myArray);
console.log("Rotated Array in a right side direction by 2:", rotatedArray);
