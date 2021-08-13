
'use strict';
let array1 = [4, 8, 15, 16, 23, 42];


function BinarySearch(arr, value) {
    let lowValue = 0;
    let highValue = arr.length - 1

    while(lowValue <= highValue) {
        let midValue = Math.floor((lowValue + highValue) / 2)
        let middleItem = arr[midValue]
        if(middleItem === value) {
            return midValue
        }
    
        if(middleItem > value) {
            highValue = midValue - 1
        } else {
            lowValue =  midValue + 1
        }

    }    

    return -1
}
console.log('Orginal array:',array1);
console.log('After BinarySearch Function :',BinarySearch(array1, 15));//output 2

module.exports = BinarySearch;







     
