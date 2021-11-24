// Rewrite the _.filter function

const _ = {};

_.filter = function(arr, cb) {
  // create a new array
  const storage =[];
  //loop through arr
  for (let i = 0; i = arr.length; i++) {
    //check if cb returns true
    if (cb(list[i])) {
      //if return true push into array
      storage.push(list[i]);
    }
  }
  // return array
  return storage;
}