

function exportSelection() {
    var hex1 = document.getElementById("hex-one").innerText;
    var hex2 = document.getElementById("hex-two").innerText;
    var hex3 = document.getElementById("hex-three").innerText;
    var hex4 = document.getElementById("hex-four").innerText;
    var hex5 = document.getElementById("hex-five").innerText;
    var hex6 = document.getElementById("hex-six").innerText;
    var hex7 = document.getElementById("hex-seven").innerText;

    var blob = new Blob(["~ BLOCK COLOURS ~ 1: ", hex1, " 2: ", hex2, " 3: ", hex3, " ~ TEXT COLOURS ~ Heading: ", hex4, " Sub-heading: ", hex5, " Paragraph: ", hex6, " ~ BACKGROUND COLOUR ~ ", hex7], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "colour-combination.txt");
}