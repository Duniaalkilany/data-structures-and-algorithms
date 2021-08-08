let array1 = ["side", "other", "the", "from", "Hello"];


function reverseArray (arr) {
    let initial = 1
    let newArr =[]
    for(let i=0; i<arr.length; i++) {
        newArr.push(arr[arr.length - initial])
        initial++
    }
    return newArr
}

console.log('orginal array:',array1);
console.log('array after reversing:',reverseArray(array1));


module.exports={
    reverseArray
}

