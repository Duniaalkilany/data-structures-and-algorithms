

let arrArrays = [ [1, 2, 3], [3, 5, 7], [1, 7, 10] ]
let addArrs=(array)=>{
  let newArray=[];
  let sum =0;
  for (let i = 0; i < array.length; i++){
    sum = 0;  
  
  for (let j = 0;j< array.length; j++) {
      
      
      sum = sum+array[i][j];
      
    }
    newArray.push(sum)
  }
  return newArray;
}

console.log('Orginal array:',arrArrays);
console.log('Output Array :',addArrs(arrArrays));
        
module.exports = addArrs;