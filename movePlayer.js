async function movePlayer(direction) {
    console.log("Moving player ", direction);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Player moved ", direction);
}

movePlayer("right");
movePlayer("left");
movePlayer("up");
movePlayer("down");