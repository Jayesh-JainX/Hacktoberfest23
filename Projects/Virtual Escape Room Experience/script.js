document.addEventListener("DOMContentLoaded", () => {
    const puzzle1Button = document.getElementById("puzzle1-button");
    const puzzle2Button = document.getElementById("puzzle2-button");
    const puzzle2Input = document.getElementById("puzzle2-input");
    const puzzle3Button = document.getElementById("puzzle3-button");
    const puzzle3List = document.getElementById("puzzle3-list");
    const successMessage = document.getElementById("success-message");
    const failMessage = document.getElementById("fail-message");

    let solvedPuzzle1 = false;
    let solvedPuzzle2 = false;
    let solvedPuzzle3 = false;

    puzzle1Button.addEventListener("click", () => {
        solvedPuzzle1 = true;
        puzzle1Button.disabled = true;
        checkCompletion();
    });

    puzzle2Button.addEventListener("click", () => {
        if (puzzle2Input.value === "code123") {
            solvedPuzzle2 = true;
            puzzle2Button.disabled = true;
            checkCompletion();
        }
    });

    puzzle3Button.addEventListener("click", () => {
        const items = Array.from(puzzle3List.getElementsByTagName("li")).map(li => li.textContent);
        if (items[0] === "Item 2" && items[1] === "Item 1" && items[2] === "Item 3") {
            solvedPuzzle3 = true;
            puzzle3Button.disabled = true;
            checkCompletion();
        }
    });

    function checkCompletion() {
        if (solvedPuzzle1 && solvedPuzzle2 && solvedPuzzle3) {
            successMessage.style.display = "block";
        } else if (solvedPuzzle1 || solvedPuzzle2 || solvedPuzzle3) {
            // Partial success
        } else {
            failMessage.style.display = "block";
        }
    }
});
