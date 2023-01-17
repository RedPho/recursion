//Assignment 1
function fibs(num) {
  myArray = [];
  for (let i = 0; i < num; i++) {
    if (i == 0 || i == 1) {
      myArray[i] = i;
    } else {
      myArray[i] = myArray[i-1] + myArray[i-2];
    }
  }
  return myArray;
}
console.log(fibs(8));

function fibsRec(num) {
  if (num == 1) {
    return [0];
  }
  else if (num == 2) {
    return [0, 1];
  }
  else {
    return (fibsRec(num-1)).concat([(fibsRec(num-1)[fibsRec(num-1).length-1] + fibsRec(num-2)[fibsRec(num-2).length-1])])
  }
}
console.log(fibsRec(13));

//Assignment 2
function mergeSort(intArray) {
  if (intArray.length < 2) {
    return intArray;
  } else {
    let half = Math.ceil(intArray.length / 2);
    let firstHalf = intArray.slice(0, half);
    let secondHalf = intArray.slice(half);
    let sortedFirst = mergeSort(firstHalf);
    let sortedSecond = mergeSort(secondHalf);
    let i = 0;
    let j = 0;
    let k = 0;
    let mergedArray = [];
    while (i < sortedFirst.length || j < sortedSecond.length) {
      if (sortedFirst[i] < sortedSecond[j] || j == sortedSecond.length) {
        mergedArray[k] = sortedFirst[i];
        i++;
      } else {
        mergedArray[k] = sortedSecond[j];
        j++;
      }
      k++;
    }
    return mergedArray;
  }
}
console.log(mergeSort([0, 8, 9, 13, 21, 15, 45, 123, 12, 32, 23, 123, 23, 45, 76, 86, 89, 23, 34, 54]))
