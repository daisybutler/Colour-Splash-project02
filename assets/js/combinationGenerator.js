// generateCombination() Function. Triggered by clicking .tester-control "Inspire Me" in tester.html


function generateCombination() {
    let currentCounter = sessionStorage.getItem("counter") || 0;
    if (currentCounter < 6){
        sessionStorage.setItem("counter", ++currentCounter);
        console.log("Combination Suggestion: " + currentCounter);
    } else {
        //----------------------------------------------------- This is meant to reset counter to zero but doesn't
        sessionStorage.setItem("counter", --currentCounter);
        console.log("No more combination suggestions.");
    }
    
    //Combination Suggestion 1
    if(currentCounter <= 1){

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

    else if(currentCounter == 2){

            //Brown, dark brown and beige
            let suggestions = ["#F2BE94","#31110D","#76271F"];

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



            //Resets counter to 0

        }

    }
