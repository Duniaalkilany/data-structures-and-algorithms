

let array1=[42,8,15,23,42]

function insertShiftArray(arr, value) {

    let newArr = [];
    for (let i = 0; i < (arr.length / 2); i++) {      newArr.push(arr[i]);
    }
    newArr.push(value);
    for (var i = 0; i <= (arr.length / 2) - 1; i++) {
      let index = i + (arr.length / 2);
      newArr.push(arr[Math.ceil(index)]);
    }
    return newArr;
  
  }
  console.log('orginal array:',array1);
  console.log('shiftting array :',insertShiftArray(array1, 16));//expected output [42,8,15,16,23,42]

