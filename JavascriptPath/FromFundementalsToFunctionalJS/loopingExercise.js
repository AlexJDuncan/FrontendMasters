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
  for (let i = 0; i < game['suspects'].length; i++) {  //could do game.suspects.length instead
    console.log(game['suspects'][i]);
  }
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

// Part 2
// Loop through all the properies of the suspect objects in the suspects array, mark them if you think they are guilty

const maybeGuilty = (game, color) => {
  for (let i = 0; i < game.suspects.length; i++) {
    if (game.suspects[i].color === color) {
      game.suspects[i].guilty = true;
    }
    game.suspects[i].guilty= false;
  }
  return game;
}

maybeGuilty(game, red);
maybeGuilty(game, orange);

//vid solution

