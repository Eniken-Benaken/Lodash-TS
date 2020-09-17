export const chunk = (array:Array<any>, splitNumber:number) => {
  let arrayOfArrays: Array<any> = [];
  let arrayCounter: number = 0;
  let arrayMaxCounter: number = array.length-1;
  for (let j: number = 0; j<Math.ceil(array.length/splitNumber); j++){
    let subarray = []
    for (let i: number = 0; i < splitNumber; i++){
      if(arrayCounter>arrayMaxCounter) break;
      subarray.push(array[arrayCounter]);
      arrayCounter++;
    }
    arrayOfArrays.push(subarray);
  }
  console.log(arrayOfArrays);
};