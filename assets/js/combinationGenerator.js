// generateCombination() function. Triggered by clicking .tester-control "Ideas" in tester.html

//When the user refreshes the page, the session storage is cleared, the counter resets to 0, and the combination suggestions will be displayed from 1 upwards again.
window.onload = function(){
sessionStorage.clear();
}

function generateCombination() {

    //Creates a counter beggining from 0
    let currentCounter = sessionStorage.getItem("counter") || 0;

    //Adds one to counter every time the user clicks the control.
    sessionStorage.setItem("counter", ++currentCounter);

    //If the counter is less than or equal to 10 (number of combinations available), increment counter by one and log the suggestion number to console.
    if (currentCounter <= 10){
        console.log("Combination Suggestion: " + currentCounter);

    //If the currentCounter is 11 or greater (i.e. on the next click there will be no more suggestions to display), log this infomation to console.
    } else {
        console.log("No more combination suggestions.");

        //Resets the counter to 0 so the user can click through the same 10 suggestions again if they wish.
        let currentCounter = sessionStorage.clear();
    }
    
    //-----------------------------------------------------------------------------Combination Suggestion 1
    if(currentCounter == 1){

        //Gold, white, dark green
        let suggestions = ["#9F6B17","#FFFFFF","#1A4D33"];

        document.getElementById('color-sample-1').style.background = suggestions[0];
        document.getElementById('color-sample-2').style.background = suggestions[1];
        document.getElementById('color-sample-3').style.background = suggestions[0];
        document.getElementById('sample-heading').style.color = suggestions[1];
        document.getElementById('sample-subheading').style.color = suggestions[0];
        document.getElementById('sample-paragraph').style.color = suggestions[1];
        document.getElementById('colour-sampling-area').style.background = suggestions[2];

        // Changes the hex labels to match suggestions
        document.getElementById('hex-one').innerText = suggestions[0];
        document.getElementById('hex-two').innerText = suggestions[1];
        document.getElementById('hex-three').innerText = suggestions[0];
        document.getElementById('hex-four').innerText = suggestions[1];
        document.getElementById('hex-five').innerText = suggestions[0];
        document.getElementById('hex-six').innerText = suggestions[1];
        document.getElementById('hex-seven').innerText = suggestions[2];

        //document.getElementsByClassName('pcr-current-color').style.color = rgb(255,255,255);
    }

    //-----------------------------------------------------------------------------Combination Suggestion 2
    else if(currentCounter == 2){

        //Beige, dark brown, brown
        let suggestions = ["#F2BE94","#31110D","#76271F"];

        document.getElementById('color-sample-1').style.background = suggestions[1];
        document.getElementById('color-sample-2').style.background = suggestions[2];
        document.getElementById('color-sample-3').style.background = suggestions[1];
        document.getElementById('sample-heading').style.color = suggestions[0];
        document.getElementById('sample-subheading').style.color = suggestions[0];
        document.getElementById('sample-paragraph').style.color = suggestions[0];
        document.getElementById('colour-sampling-area').style.background = suggestions[0];

        // Changes the hex labels to match suggestions
        document.getElementById('hex-one').innerText = suggestions[1];
        document.getElementById('hex-two').innerText = suggestions[2];
        document.getElementById('hex-three').innerText = suggestions[1];
        document.getElementById('hex-four').innerText = suggestions[0];
        document.getElementById('hex-five').innerText = suggestions[0];
        document.getElementById('hex-six').innerText = suggestions[0];
        document.getElementById('hex-seven').innerText = suggestions[0];
    }

    //-----------------------------------------------------------------------------Combination Suggestion 3
    else if(currentCounter == 3){

        //Pastel green, navy, cream, very pale green
        let suggestions = ["#5CDB94","#05396B","#EDF5E0", "#8DE4AF"];

        document.getElementById('color-sample-1').style.background = suggestions[1];
        document.getElementById('color-sample-2').style.background = suggestions[3];
        document.getElementById('color-sample-3').style.background = suggestions[1];
        document.getElementById('sample-heading').style.color = suggestions[2];
        document.getElementById('sample-subheading').style.color = suggestions[1];
        document.getElementById('sample-paragraph').style.color = suggestions[2];
        document.getElementById('colour-sampling-area').style.background = suggestions[0];

        // Changes the hex labels to match suggestions
        document.getElementById('hex-one').innerText = suggestions[1];
        document.getElementById('hex-two').innerText = suggestions[0];
        document.getElementById('hex-three').innerText = suggestions[1];
        document.getElementById('hex-four').innerText = suggestions[2];
        document.getElementById('hex-five').innerText = suggestions[2];
        document.getElementById('hex-six').innerText = suggestions[2];
        document.getElementById('hex-seven').innerText = suggestions[0];
    }

    //-----------------------------------------------------------------------------Combination Suggestion 4
    else if(currentCounter == 4){

        //Tuscan red, 'old lavender' purple, lighter purple, white
        let suggestions = ["#4E1B1E","#63495B","#83687A","#FFFFFF"];

        document.getElementById('color-sample-1').style.background = suggestions[0];
        document.getElementById('color-sample-2').style.background = suggestions[1];
        document.getElementById('color-sample-3').style.background = suggestions[2];
        document.getElementById('sample-heading').style.color = suggestions[3];
        document.getElementById('sample-subheading').style.color = suggestions[3];
        document.getElementById('sample-paragraph').style.color = suggestions[3];
        document.getElementById('colour-sampling-area').style.background = suggestions[3];

        // Changes the hex labels to match suggestions
        document.getElementById('hex-one').innerText = suggestions[0];
        document.getElementById('hex-two').innerText = suggestions[1];
        document.getElementById('hex-three').innerText = suggestions[2];
        document.getElementById('hex-four').innerText = suggestions[3];
        document.getElementById('hex-five').innerText = suggestions[3];
        document.getElementById('hex-six').innerText = suggestions[3];
        document.getElementById('hex-seven').innerText = suggestions[3];
    }

    //-----------------------------------------------------------------------------Combination Suggestion 5
    else if(currentCounter == 5){

        //Almost black, bright blue, light grey, medium blue, deep blue
        let suggestions = ["#282828","#3500D5","#D7CDCD","#23008F","#1A0061"];

        document.getElementById('color-sample-1').style.background = suggestions[1];
        document.getElementById('color-sample-2').style.background = suggestions[3];
        document.getElementById('color-sample-3').style.background = suggestions[4];
        document.getElementById('sample-heading').style.color = suggestions[2];
        document.getElementById('sample-subheading').style.color = suggestions[2];
        document.getElementById('sample-paragraph').style.color = suggestions[2];
        document.getElementById('colour-sampling-area').style.background = suggestions[0];

        // Changes the hex labels to match suggestions
        document.getElementById('hex-one').innerText = suggestions[1];
        document.getElementById('hex-two').innerText = suggestions[3];
        document.getElementById('hex-three').innerText = suggestions[4];
        document.getElementById('hex-four').innerText = suggestions[2];
        document.getElementById('hex-five').innerText = suggestions[2];
        document.getElementById('hex-six').innerText = suggestions[2];
        document.getElementById('hex-seven').innerText = suggestions[0];
    }

    //-----------------------------------------------------------------------------Combination Suggestion 6
    else if(currentCounter == 6){

        //Almost black, red, white, darker red, deep red
        let suggestions = ["#1A1A1D","#C4083E","#FFFFFF","#950841","#6F2332"];

        document.getElementById('color-sample-1').style.background = suggestions[1];
        document.getElementById('color-sample-2').style.background = suggestions[3];
        document.getElementById('color-sample-3').style.background = suggestions[4];
        document.getElementById('sample-heading').style.color = suggestions[2];
        document.getElementById('sample-subheading').style.color = suggestions[2];
        document.getElementById('sample-paragraph').style.color = suggestions[2];
        document.getElementById('colour-sampling-area').style.background = suggestions[0];

        // Changes the hex labels to match suggestions
        document.getElementById('hex-one').innerText = suggestions[1];
        document.getElementById('hex-two').innerText = suggestions[3];
        document.getElementById('hex-three').innerText = suggestions[4];
        document.getElementById('hex-four').innerText = suggestions[2];
        document.getElementById('hex-five').innerText = suggestions[2];
        document.getElementById('hex-six').innerText = suggestions[2];
        document.getElementById('hex-seven').innerText = suggestions[0];
    }

    //-----------------------------------------------------------------------------Combination Suggestion 7
    else if(currentCounter == 7){

        //Black/blue, fluroscent blue, white, black
        let suggestions = ["#1F2833","#66FCF2","#FFFFFF","#0B0C10"];

        document.getElementById('color-sample-1').style.background = suggestions[3];
        document.getElementById('color-sample-1').style.borderBottom = "2px solid " + suggestions[1];
        document.getElementById('color-sample-2').style.background = suggestions[3];
        document.getElementById('color-sample-2').style.borderBottom = "2px solid " + suggestions[1];
        document.getElementById('color-sample-3').style.background = suggestions[3];
        document.getElementById('sample-heading').style.color = suggestions[1];
        document.getElementById('sample-subheading').style.color = suggestions[1];
        document.getElementById('sample-paragraph').style.color = suggestions[1];
        document.getElementById('colour-sampling-area').style.background = suggestions[0];

        // Changes the hex labels to match suggestions
        document.getElementById('hex-one').innerText = suggestions[3];
        document.getElementById('hex-two').innerText = suggestions[3];
        document.getElementById('hex-three').innerText = suggestions[3];
        document.getElementById('hex-four').innerText = suggestions[1];
        document.getElementById('hex-five').innerText = suggestions[1];
        document.getElementById('hex-six').innerText = suggestions[1];
        document.getElementById('hex-seven').innerText = suggestions[0];
    }

    //-----------------------------------------------------------------------------Combination Suggestion 8
    else if(currentCounter == 8){

        //Light grey, dark pink, light pink
        let suggestions = ["#E5E4DF","#9B1750","#E3B0BC"];

        document.getElementById('color-sample-1').style.background = suggestions[2];
        document.getElementById('color-sample-1').style.borderBottom = "none";
        document.getElementById('color-sample-2').style.background = suggestions[1];
        document.getElementById('color-sample-2').style.borderBottom = "none";
        document.getElementById('color-sample-3').style.background = suggestions[2];
        document.getElementById('sample-heading').style.color = suggestions[1];
        document.getElementById('sample-subheading').style.color = suggestions[2];
        document.getElementById('sample-paragraph').style.color = suggestions[1];
        document.getElementById('colour-sampling-area').style.background = suggestions[0];

        // Changes the hex labels to match suggestions
        document.getElementById('hex-one').innerText = suggestions[2];
        document.getElementById('hex-two').innerText = suggestions[1];
        document.getElementById('hex-three').innerText = suggestions[2];
        document.getElementById('hex-four').innerText = suggestions[1];
        document.getElementById('hex-five').innerText = suggestions[2];
        document.getElementById('hex-six').innerText = suggestions[1];
        document.getElementById('hex-seven').innerText = suggestions[0];
    }

    //-----------------------------------------------------------------------------Combination Suggestion 9
    else if(currentCounter == 9){

        //dark black, orange, yellow, green
        let suggestions = ["#272727","#FF642F","#FFE402","#14A76A"];

        document.getElementById('color-sample-1').style.background = suggestions[1];
        document.getElementById('color-sample-2').style.background = suggestions[2];
        document.getElementById('color-sample-3').style.background = suggestions[3];
        document.getElementById('sample-heading').style.color = suggestions[0];
        document.getElementById('sample-subheading').style.color = suggestions[0];
        document.getElementById('sample-paragraph').style.color = suggestions[0];
        document.getElementById('colour-sampling-area').style.background = suggestions[0];

        // Changes the hex labels to match suggestions
        document.getElementById('hex-one').innerText = suggestions[1];
        document.getElementById('hex-two').innerText = suggestions[2];
        document.getElementById('hex-three').innerText = suggestions[3];
        document.getElementById('hex-four').innerText = suggestions[0];
        document.getElementById('hex-five').innerText = suggestions[0];
        document.getElementById('hex-six').innerText = suggestions[0];
        document.getElementById('hex-seven').innerText = suggestions[0];
    }

    //-----------------------------------------------------------------------------Combination Suggestion 10
    else if(currentCounter == 10){

        //Light blue, light red, light yellow, light grey
        let suggestions = ["#A8D2E7","#F76D6E","#F7E9A0","#DDDDDD"];

        document.getElementById('color-sample-1').style.background = suggestions[0];
        document.getElementById('color-sample-2').style.background = suggestions[1];
        document.getElementById('color-sample-3').style.background = suggestions[2];
        document.getElementById('sample-heading').style.color = suggestions[2];
        document.getElementById('sample-subheading').style.color = suggestions[0];
        document.getElementById('sample-paragraph').style.color = suggestions[1];
        document.getElementById('colour-sampling-area').style.background = suggestions[3];

        // Changes the hex labels to match suggestions
        document.getElementById('hex-one').innerText = suggestions[0];
        document.getElementById('hex-two').innerText = suggestions[1];
        document.getElementById('hex-three').innerText = suggestions[2];
        document.getElementById('hex-four').innerText = suggestions[2];
        document.getElementById('hex-five').innerText = suggestions[0];
        document.getElementById('hex-six').innerText = suggestions[1];
        document.getElementById('hex-seven').innerText = suggestions[3];
    }

    else {
        //Returns combination to original red, green and purple colours the user began with
        let suggestions = ["#EF7566","#46D9BD","#BD60CE", "#FFFFFF"];

        document.getElementById('color-sample-1').style.background = suggestions[0];
        document.getElementById('color-sample-2').style.background = suggestions[1];
        document.getElementById('color-sample-3').style.background = suggestions[2];
        document.getElementById('sample-heading').style.color = suggestions[3];
        document.getElementById('sample-subheading').style.color = suggestions[3];
        document.getElementById('sample-paragraph').style.color = suggestions[3];
        document.getElementById('colour-sampling-area').style.background = suggestions[3];

        // Changes the hex labels to match suggestions
        document.getElementById('hex-one').innerText = suggestions[0];
        document.getElementById('hex-two').innerText = suggestions[1];
        document.getElementById('hex-three').innerText = suggestions[2];
        document.getElementById('hex-four').innerText = suggestions[3];
        document.getElementById('hex-five').innerText = suggestions[3];
        document.getElementById('hex-six').innerText = suggestions[3];
        document.getElementById('hex-seven').innerText = suggestions[3];
    }
}
