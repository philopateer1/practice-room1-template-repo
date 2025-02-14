async function checkGameOver() {
    console.log("Checking game over conditions...");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Game over conditions checked");
}
checkGameOver();