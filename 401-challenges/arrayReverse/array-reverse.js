
var array1 = ["side", "other", "the", "from", "hello"];

function reverseArray (arr) {
    let sum = 1
    let newArr =[]
    for(let i=0; i<arr.length; i++) {
        newArr.push(arr[arr.length - sum])
        sum++
    }
    return newArr
}

console.log('the orginal array=',array1);
console.log('array after reversing=',reverseArray(array1));

module.exports={
    reverseArray
}
