// create an object that looks like this
// {"name": "Rusty", "room": "kitchen", "weapon": "candlestick"}
// extract out the weapon and location using destructuring

const obj = {
  name: "Rusty",
  room: "kitchen",
  weapon: "candlestick"
}

const { name, room, weapon } = {name: "Rusty", room: "kitchen", weapon: "candlestick"};

// omit certain values
var [a, , b] = [1, 2, 3];
console.log(a, b);
// => 1 3

// combine with spread/rest operator (accumulates the rest of the values)
var [a, ...b] = [1, 2, 3];
console.log(a, b);
// => 1 [2, 3]

// Swap variables easily without temp
var a = 1, b = 2;
[b, a] = [a, b];
console.log(a, b);
// => 2 1

// advance deep arrays
var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
console.log("a:", a, "b:", b, "c:", c, "d:", d);
// => a: 1 b: 2 c: [[3,4], 5] d: 6

// === objects

var {user: x} = {user: 5};
console.log(x);
// => 5

// Fail-safe

var {user: x} = {user2: 5};
console.log(x);
// => undefined


