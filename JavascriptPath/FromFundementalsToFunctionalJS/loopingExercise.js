//loop through the suspects array

const game = {
  'suspects': [
    {
      name: "Rusty",
      color: "orange"
    },
    {
      name: "Miss Scarlet",
      color: "red"
    }
  ]
}

const loopObj = (game) => {
  const name = [];
  const color = [];

  for (let i = 0; i < game['suspects'].length; i++) {  //could do game.suspects.length instead
    name.push(game['suspects'][i].name);
    color.push(game['suspects'][i].color);
  }
  return name && color;
}

loopObj(game);

//video solution
function foo(game) {
  for (let i = 0; i < game.suspects.length; i++) {
    console.log(game.suspects[i]);
  }
}

foo(game);

//for in loop
for (let key in obj) {
  obj[key];
}