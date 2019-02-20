'use strict'

function generate(testLengthArray){
  const arr = [];

  for(let i = 0; i < testLengthArray.length; i++){
    if(i == 1){
      let n = testLengthArray[i];
      let arr1 = [];
      for(let j = 0; j < n; j++){
        arr1[j] = j;
      }

      var obj = {
        input: arr1,
        target: n + 8,
        output: -1
      }
      arr[i] = obj;
    }
    else{
      let n = testLengthArray[i];
      let arr1 = [];
      for(let j = 0; j < n; j++){
        arr1[j] = j;
      }

      let obj = {
        input: arr1,
        target: n - 1,
        output: n - 1
      }
      arr[i] = obj;
    }
  }
  return arr;
}

module.exports = generate
