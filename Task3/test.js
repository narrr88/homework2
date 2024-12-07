const Timer = require("./timer.js");

const timer = new Timer(5);

timer.on("start", () => {
    console.log("Timer started");
})

timer.on("tick", (remainingTime) => {
    console.log(`Remaining Time: ${remainingTime} seconds`);
})

timer.on("end", () => {
    console.log("Timer ended");
})

timer.start()