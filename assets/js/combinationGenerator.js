// generateCombination() Function. Triggered by clicking .tester-control "Inspire Me" in tester.html


function generateCombination() {
    let currentCounter = sessionStorage.getItem("counter") || 0;
    if (currentCounter <= 10){
        sessionStorage.setItem("counter", ++currentCounter);
        console.log("Combination Suggestion: " + currentCounter);
    } else {
        //----------------------------------------------------- This is meant to reset counter to zero but doesn't
        //sessionStorage.setItem("counter", --currentCounter);
        console.log("No more combination suggestions.");
    }
    
    //-----------------------------------------------------------------------------Combination Suggestion 1
    if(currentCounter <= 1){

            //Dark grey, orange and white
            let suggestions = ["#2F2F2C","#FF7129","#FFFFFF"];

            document.getElementById('color-sample-1').style.background = suggestions[1];
            document.getElementById('color-sample-1').style.borderBottom = "2px solid " + suggestions[2];
            document.getElementById('color-sample-2').style.background = suggestions[1];
            document.getElementById('color-sample-2').style.borderBottom = "2px solid " + suggestions[2];
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

    //-----------------------------------------------------------------------------Combination Suggestion 2
    else if(currentCounter == 2){

            //Beige, dark brown, brown
            let suggestions = ["#F2BE94","#31110D","#76271F"];

            document.getElementById('color-sample-1').style.background = suggestions[1];
            document.getElementById('color-sample-1').style.border = "none";
            document.getElementById('color-sample-2').style.background = suggestions[2];
            document.getElementById('color-sample-2').style.border = "none";
            document.getElementById('color-sample-3').style.background = suggestions[1];
            document.getElementById('color-sample-3').style.border = "none";
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

            //document.getElementsByClassName('pcr-current-color').style.color = rgb(255,255,255);
        }

    //-----------------------------------------------------------------------------Combination Suggestion 3
    else if(currentCounter <= 3){

            //Pastel green, navy and cream
            let suggestions = ["#5CDB94","#05396B","#EDF5E0"];

            document.getElementById('color-sample-1').style.background = suggestions[1];
            document.getElementById('color-sample-2').style.background = suggestions[0];
            document.getElementById('color-sample-3').style.background = suggestions[1];
            document.getElementById('sample-heading').style.color = suggestions[2];
            document.getElementById('sample-subheading').style.color = suggestions[2];
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
    else if(currentCounter <= 4){

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
    else if(currentCounter <= 5){

            //Almost black, bright blue, white, medium blue, deep blue
            let suggestions = ["#282828","#3500D5","#FFFFFF","#23008F","#1A0061"];

            document.getElementById('color-sample-1').style.background = suggestions[1];
            document.getElementById('color-sample-2').style.background = suggestions[3];
            document.getElementById('color-sample-3').style.background = suggestions[4];
            document.getElementById('sample-heading').style.color = suggestions[2];
            document.getElementById('sample-subheading').style.color = suggestions[2];
            document.getElementById('sample-paragraph').style.color = suggestions[2];
            document.getElementById('colour-sampling-area').style.background = suggestions[0];

            // Changes the hex labels to match suggestions
            document.getElementById('hex-one').innerText = suggestions[1];
            document.getElementById('hex-two').innerText = suggestions[1];
            document.getElementById('hex-three').innerText = suggestions[1];
            document.getElementById('hex-four').innerText = suggestions[2];
            document.getElementById('hex-five').innerText = suggestions[2];
            document.getElementById('hex-six').innerText = suggestions[2];
            document.getElementById('hex-seven').innerText = suggestions[0];
        }

    //-----------------------------------------------------------------------------Combination Suggestion 6
    else if(currentCounter <= 6){

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
    else if(currentCounter <= 7){

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
    else if(currentCounter <= 8){

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
        else if(currentCounter <= 9){

            //dark black, orange, yellow, green
            let suggestions = ["#272727","#FF642F","#FFE402","#14A76A"];

            document.getElementById('color-sample-1').style.background = suggestions[1];
            document.getElementById('color-sample-1').style.borderBottom = "none";
            document.getElementById('color-sample-2').style.background = suggestions[2];
            document.getElementById('color-sample-2').style.borderBottom = "none";
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
        else if(currentCounter <= 10){

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
            //Return to original red, green and purple colours
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
