let count = 0;

let arr_1 = [1, 3, 2, 6, 43, 7, 9, 345, 67558, 87, 5, 4];

// Linear Searching
function LinearSearch(array, arg) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === arg) {
      return i;
    }
  }
  return null;
}


//Binary Search
let arr_2 = [];

for(let i = 0; i <= 1000000; i++){
    arr_2.push(i)
}

function BinarySearch(array, item) {
  let start = 0
  let end = array.length
  let middle;
  let found = false
  let position = -1

  while(found == false && start <= end){
    count+=1
    middle = Math.floor((start + end) / 2)
    if(array[middle] === item){
        found = true
        position = middle
        return position
    }
    if(item < array[middle]){
        end = middle - 1
    }
    if(item > array[middle]){
        start = middle + 1
    }
  }
  return position
}

//Recursive Binary Search

function RecursiveBinarySearch(array, arg, start, end){
    count+=1
    let middle = Math.floor((start + end)/2)
    if(array[middle] == arg){
        return middle
    }
    else if(arg < middle){
        return RecursiveBinarySearch(array, arg, start, middle - 1)
    }
    else if(arg > middle){
        return RecursiveBinarySearch(array, arg, middle + 1, end)
    }
}

console.log(RecursiveBinarySearch(arr_2, 7400, 0, arr_2.length))
console.log(count)