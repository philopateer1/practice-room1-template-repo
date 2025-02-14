async function initialzeGame() {
    console.log("Initializing game..");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Game Initialized");
}

initialzeGame();