document.addEventListener("keydown", function (event) {
    let pianoKeys = ["A", "S", "D", "F", "G", "H", "J", "W", "E", "T", "Y", "U"];
    let keyPressed = event.key.toUpperCase();
    let audio;
    if (pianoKeys.includes(keyPressed)) {
        console.log(`The '${keyPressed}' key is pressed`)
        audio = new Audio(document.getElementById(keyPressed).src);
        audio.play();
    } else {
        console.warn(`Unexpected '${keyPressed}' key is pressed`);
    }
});