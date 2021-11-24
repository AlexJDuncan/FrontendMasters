// Rewrite the _.filter function

const _ = {};

// _.filter = function(arr, cb) {
//   // create a new array
//   const storage =[];
//   //loop through arr
//   for (let i = 0; i = arr.length; i++) {
//     //check if cb returns true
//     if (cb(list[i], i, arr) === true) {
//       //if return true push into array
//       storage.push(arr[i]);
//     }
//   }
//   // return array
//   return storage;
// }

// With _.each

_.filter = function(arr, cb) {
  const storage = [];

  _.each(arr, function(val, i, list) {
    if (cb(val, i, list) === true) {
      storage.push(val);
    }
  });

  return storage;
}