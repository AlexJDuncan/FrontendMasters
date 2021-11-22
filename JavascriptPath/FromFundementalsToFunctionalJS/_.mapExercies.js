// _.map(list, callback(v, i, list))

const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function(item) {
  return `broken ${item}`;
};

// use _.map to get an array of broken weapons from weapons list
let brokenWeapons = _.map(weapons, makeBroken);

// rewrite _.map
_.map = function(list, callback) {
  let result = [];
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      result.push(callback(list[i], i, list));
    }
  } else {
    for (var key in list) {
      result.push(callback(list[key], key, list));
    }
  }
  return result;
}

// using _.each to implement
_.map = function(list, callback) {
  const storage = [];

  _.each(list, function(v, i, list) {
    storage.push(v, i, list);
  })

  return storage;
}