// generateCombination Function

//Combination Suggestion One
function generateCombination(suggestionOne){
    //Dark grey, orange and white
    let suggestions = ["#2F2F2C","#FF7129","#FFFFFF"];

    document.getElementById('color-sample-1').style.background = suggestions[1];
    document.getElementById('color-sample-2').style.background = suggestions[1];
    document.getElementById('color-sample-3').style.background = suggestions[1];
    document.getElementById('sample-heading').style.color = suggestions[0];
    document.getElementById('sample-subheading').style.color = suggestions[2];
    document.getElementById('sample-paragraph').style.color = suggestions[2];
    document.getElementById('colour-sampling-area').style.background = suggestions[0];

    // Changes the hex labels to match suggestions
    document.getElementById('hex-one').innerText = suggestions[1];
    document.getElementById('hex-two').innerText = suggestions[1];
    document.getElementById('hex-three').innerText = suggestions[1];
    document.getElementById('hex-four').innerText = suggestions[0];
    document.getElementById('hex-five').innerText = suggestions[2];
    document.getElementById('hex-six').innerText = suggestions[2];
    document.getElementById('hex-seven').innerText = suggestions[0];

    //document.getElementsByClassName('pcr-current-color').style.color = rgb(255,255,255);
}
