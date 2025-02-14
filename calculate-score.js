async function calculateScore() {
    console.log("Calculating score...");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Score calculated");
}
calculateScore();