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
  for (var i = 0; i < list.length; i++) {
    result.push(callback(list[i]));
  }
  return result;
}