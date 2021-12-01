// Rewrite the _.filter function

const _ = {};

// _.filter = function(arr, cb) {
//   // create a new array
//   const storage =[];
//   //loop through arr
//   for (let i = 0; i = arr.length; i++) {
//     //check if cb returns true
//     if (cb(arr[i], i, arr) === true) {
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

  _.each(arr, function(item, i, list) {
    if (cb(item[i], i, list) === true) {
      storage.push(item);
    }
  });

  return storage;
}

// Apply _.filter to the test data

const videoData = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billard room': false},
      {library: false}
    ]
  },
  {
    name: 'Mrs. White',
    present: false,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billard room': false},
      {library: false}
    ]
  },
  {
    name: 'Reverend Green',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billard room': false},
      {library: false}
    ]
  },
  {
    name: 'Rusty',
    present: false,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billard room': false},
      {library: false}
    ]
  },
  {
    name: 'Colonel Mustard',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billard room': false},
      {library: false}
    ]
  },
  {
    name: 'Professor Plum',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billard room': false},
      {library: false}
    ]
  }
];

_.filter(videoData, function(suspectObject) {
  return suspectObject.present;
})