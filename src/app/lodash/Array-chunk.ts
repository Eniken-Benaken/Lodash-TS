const chunk = (array:Array<any>, splitNumber:number) => {
  /**
   * this func takes array and splits it on chunks of splitNumber size;
   * we create new array that will wrap our chunks
   * and counters so we could push next element each time
   */
  let arrayOfArrays: Array<any> = [];
  let arrayCounter: number = 0;
  let arrayMaxCounter: number = array.length-1;
  // this loop takes count of how many chunks of splitNumber size we can make
  for (let j: number = 0; j<Math.ceil(array.length/splitNumber); j++){
    let subarray = []
    for (let i: number = 0; i < splitNumber; i++){
      if(arrayCounter>arrayMaxCounter) break;
      subarray.push(array[arrayCounter]);
      arrayCounter++;
    }
    arrayOfArrays.push(subarray);
  }
  return arrayOfArrays;
};

export default chunk;
