const arr = [
  0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
  3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7,
  -1, -5, 23,
];
let count = 0;

//Selectional Sort

function selectionalSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}

//Bubble Sort

function bubbleSort(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j+1]<array[j]){
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }
            count+=1
        }
    }
    return array
}

//Quick Sort

function quickSort(array){
    if(array.length <= 1){
      return array
    }
    let pivotIndex = Math.floor(array.length / 2)
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for(let i = 0; i < array.length; i++){
      count += 1
      if(i === pivotIndex){
        continue
      }
      if(array[i] < pivot){
        less.push(array[i])
      }
      else{
        greater.push(array[i])
      }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arr))
console.log("Count = ", count);
