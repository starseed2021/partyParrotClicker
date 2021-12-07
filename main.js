const state = {
    clickCount: 0
};


// Create event handler for clicking on parrot
const clickParrot = (event) => {
    const parrotCounterEl = document.getElementById("parrotCount");
    
    // Parrot Count Behavior
    state.clickCount += 1;
    parrotCounterEl.textContent = state.clickCount;
    
    console.log("clickety click click")
};

const resetCount = () => {
    const parrotCounterEl = document.getElementById("parrotCount");
    state.clickCount = 0;
    parrotCounterEl.textContent = state.clickCount;
};

const registerHandlers = (event) => {
    const parrot = document.getElementById("parrot");
    parrot.addEventListener("click", clickParrot);

    const resetEl = document.getElementById("resetButton");
    resetEl.addEventListener("click", resetCount);
};

document.addEventListener("DOMContentLoaded", registerHandlers);






// Box 1: When the mouse hovers over Box 1, switch the background to pink
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
// Box 4: When Box 4 is double clicked, an alert shows up 