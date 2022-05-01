
function countingSort(arr) {

  // helper array to store

  var counter = [];
  // loop to fill the counter in number of how many times each number appeared in the arr

  for (var i = 0; i < arr.length; i++) {  // --------------------O(n)--------------------
    // for the first time the cell in index (i), is stored nothing, then it will update to one
    if (!counter[arr[i]]) {
      counter[arr[i]] = 1;
    }

    // After that each time added 1 to the value 
    else {
      counter[arr[i]] ++;
    }
  }

  // create a new array to store a sorting numbers

  var newArr = [];
  for (i in counter) {   //------------------------O(n)--------------------
    while (counter[i] > 0) {
      newArr.push(parseInt(i));
      counter[i]--;
    }
  }
  return newArr;
}

var arr = [10, 4, 30, 13, 9, 17, 24, 11, 5, 7,1];
console.log(countingSort(arr));

  // O(n) + O(n) = O(2n) ===> O(n)