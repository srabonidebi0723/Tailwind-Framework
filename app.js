document.addEventListener("DOMContentLoaded", () => {
    let boxes = document.querySelectorAll(".box");
    let reset = document.getElementById("reset");
    let message = document.getElementById("message");
    let turnO = true; // X starts first
    let gameActive = true; // Check if game is still running

    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8], // Rows
        [0,3,6], [1,4,7], [2,5,8], // Columns
        [0,4,8], [2,4,6] // Diagonals
    ]; 

    // ✅ Click event for each box
    boxes.forEach((box, index) => {
        box.addEventListener("click", () => {
            if (!box.innerText && gameActive) { // Prevent overwriting existing values
                box.innerText = turnO ? "O" : "X";
                turnO = !turnO; 
                checkWinner(); // Check for a winner after every move
            }
        });
    });

    // ✅ Function to check winner
    const checkWinner = () => {
        for (let pattern of winPatterns) {
            let [a, b, c] = pattern;
            if (
                boxes[a].innerText &&
                boxes[a].innerText === boxes[b].innerText &&
                boxes[a].innerText === boxes[c].innerText
            ) {
                gameActive = false; // Stop the game
                message.innerText = `${boxes[a].innerText} Wins! 🎉`;
                disableBoxes();
                return;
            }
        }
        
        // Check for a draw
        if ([...boxes].every(box => box.innerText !== "")) {
            gameActive = false;
            message.innerText = "It's a Draw! 🤝";
        }
    };

    // ✅ Function to disable all boxes after game ends
    const disableBoxes = () => {
        boxes.forEach(box => box.disabled = true);
    };

    // ✅ Reset Button
    reset.addEventListener("click", () => {
        boxes.forEach(box => {
            box.textContent = ""; // Clear all boxes
            box.disabled = false; // Enable buttons again
        });

        message.innerText = ""; // Clear winner message
        turnO = true; // Reset turn to O
        gameActive = true; // Reactivate game
    });
});
