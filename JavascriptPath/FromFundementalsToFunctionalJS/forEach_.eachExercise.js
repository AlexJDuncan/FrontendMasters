// _.each usage example
// var rooms = ['observatory', 'ballroom', 'library'];
// var logger = function(val) {
//   console.log(val);
// }

// _.each(rooms, logger);
// 'observatory'
// 'ballroom'
// 'library

// Exercise
// Complete the rest of this function so that it works as described in the previous slides:
 _.each = function(list, callback) {
   // loop through list
   if (Array.isArray(list)) {
     // call the callback with a list item
     for (var i = 0; i < list.length; i++) {
       callback(list[i]);
     }
   }

   if (typeof(list) === object) {
     for (var key in list) {
       callback(list[key]);
     }
   }
}

// Solution
_.each = function(list, callback) {
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    for (var key in list) {
      callback(list[key], key, list);
    }
  }
}