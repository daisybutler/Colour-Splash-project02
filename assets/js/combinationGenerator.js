// generateCombination() function. Triggered by clicking .tester-control "Ideas" in tester.html

//When the user refreshes the page, the session storage is cleared, the counter resets to 0, and the combination suggestions will be displayed from 1 upwards again.
window.onload = function () {
	sessionStorage.clear();
};

function generateCombination() {

	//Creates a counter beggining from 0
	let currentCounter = sessionStorage.getItem("counter") || 0;

	//Adds one to counter every time the user clicks the control.
	sessionStorage.setItem("counter", ++currentCounter);

	//If the counter is less than or equal to 13 (number of combinations available), increment counter by one and log the suggestion number to console.
	if (currentCounter <= 13) {
		console.log("Combination Suggestion: " + currentCounter);

		//If the currentCounter is 14 or greater (i.e. on the next click the default colours will display again), log this infomation to console.
	} else {
		console.log("No more combination suggestions.");

		//Resets the counter to 0 so the user can click through the same 13 suggestions again if they wish.
		let currentCounter = sessionStorage.clear();
	}

	//-----------------------------------------------------------------------------Combination Suggestion 1
	if (currentCounter == 1) {

		//Beige, dark brown, brown
		let suggestions = ["#F2BE94", "#31110D", "#76271F"];

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

		//Creates an ordered array of colours for this specific combination, to be passed in to the changePcrButtonColours() function
		let pcrButtonColours = ["#31110D", "#76271F", "#31110D", "#F2BE94", "#F2BE94", "#F2BE94", "#F2BE94"];
		changePcrButtonColours(pcrButtonColours);
	}

	//-----------------------------------------------------------------------------Combination Suggestion 2
	else if (currentCounter == 2) {

		//Gold, white, dark green
		let suggestions = ["#9F6B17", "#FFFFFF", "#1A4D33"];

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

		//Creates an ordered array of colours for this specific combination, to be passed in to the changePcrButtonColours() function
		let pcrButtonColours = ["#9F6B17", "#FFFFFF", "#9F6B17", "#FFFFFF", "#9F6B17", "#FFFFFF", "#1A4D33"];
		changePcrButtonColours(pcrButtonColours);
	}

	//-----------------------------------------------------------------------------Combination Suggestion 3 
	else if (currentCounter == 3) {

		//Pastel green, navy, cream, very pale green
		let suggestions = ["#5CDB94", "#05396B", "#EDF5E0", "#8DE4AF"];

		document.getElementById('color-sample-1').style.background = suggestions[1];
		document.getElementById('color-sample-2').style.background = suggestions[3];
		document.getElementById('color-sample-3').style.background = suggestions[1];
		document.getElementById('sample-heading').style.color = suggestions[2];
		document.getElementById('sample-subheading').style.color = suggestions[1];
		document.getElementById('sample-paragraph').style.color = suggestions[2];
		document.getElementById('colour-sampling-area').style.background = suggestions[0];

		// Changes the hex labels to match suggestions
		document.getElementById('hex-one').innerText = suggestions[1];
		document.getElementById('hex-two').innerText = suggestions[3];
		document.getElementById('hex-three').innerText = suggestions[1];
		document.getElementById('hex-four').innerText = suggestions[2];
		document.getElementById('hex-five').innerText = suggestions[1];
		document.getElementById('hex-six').innerText = suggestions[2];
		document.getElementById('hex-seven').innerText = suggestions[0];

		//Creates an ordered array of colours for this specific combination, to be passed in to the changePcrButtonColours() function
		let pcrButtonColours = ["#05396B", "#8DE4AF", "#05396B", "#EDF5E0", "#05396B", "#EDF5E0", "#5CDB94"];
		changePcrButtonColours(pcrButtonColours);
	}

	//-----------------------------------------------------------------------------Combination Suggestion 4 
	else if (currentCounter == 4) {

		//Tuscan red, 'old lavender' purple, lighter purple, white
		let suggestions = ["#4E1B1E", "#63495B", "#83687A", "#FFFFFF"];

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

		//Creates an ordered array of colours for this specific combination, to be passed in to the changePcrButtonColours() function
		let pcrButtonColours = ["#4E1B1E", "#63495B", "#83687A", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
		changePcrButtonColours(pcrButtonColours);
	}

	//-----------------------------------------------------------------------------Combination Suggestion 5
	else if (currentCounter == 5) {

		//Almost black, bright blue, light grey, medium blue, deep blue
		let suggestions = ["#282828", "#3500D5", "#D7CDCD", "#23008F", "#1A0061"];

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

		//Creates an ordered array of colours for this specific combination, to be passed in to the changePcrButtonColours() function
		let pcrButtonColours = ["#3500D5", "#23008F", "#1A0061", "#D7CDCD", "#D7CDCD", "#D7CDCD", "#282828"];
		changePcrButtonColours(pcrButtonColours);
	}

	//-----------------------------------------------------------------------------Combination Suggestion 6
	else if (currentCounter == 6) {

		//Almost black, red, white, darker red, deep red
		let suggestions = ["#1A1A1D", "#C4083E", "#FFFFFF", "#950841", "#6F2332"];

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

		//Creates an ordered array of colours for this specific combination, to be passed in to the changePcrButtonColours() function
		let pcrButtonColours = ["#C4083E", "#950841", "#6F2332", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#1A1A1D"];
		changePcrButtonColours(pcrButtonColours);
	}

	//-----------------------------------------------------------------------------Combination Suggestion 7
	else if (currentCounter == 7) {

		//Black/blue, fluroscent blue, white, black
		let suggestions = ["#1F2833", "#66FCF2", "#0B0C10"];

		document.getElementById('color-sample-1').style.background = suggestions[2];
		document.getElementById('color-sample-1').style.borderBottom = "2px solid " + suggestions[1];
		document.getElementById('color-sample-2').style.background = suggestions[2];
		document.getElementById('color-sample-2').style.borderBottom = "2px solid " + suggestions[1];
		document.getElementById('color-sample-3').style.background = suggestions[2];
		document.getElementById('sample-heading').style.color = suggestions[1];
		document.getElementById('sample-subheading').style.color = suggestions[1];
		document.getElementById('sample-paragraph').style.color = suggestions[1];
		document.getElementById('colour-sampling-area').style.background = suggestions[0];

		// Changes the hex labels to match suggestions
		document.getElementById('hex-one').innerText = suggestions[2];
		document.getElementById('hex-two').innerText = suggestions[2];
		document.getElementById('hex-three').innerText = suggestions[2];
		document.getElementById('hex-four').innerText = suggestions[1];
		document.getElementById('hex-five').innerText = suggestions[1];
		document.getElementById('hex-six').innerText = suggestions[1];
		document.getElementById('hex-seven').innerText = suggestions[0];

		//Creates an ordered array of colours for this specific combination, to be passed in to the changePcrButtonColours() function
		let pcrButtonColours = ["#0B0C10", "#0B0C10", "#0B0C10", "#66FCF2", "#66FCF2", "#66FCF2", "#1F2833"];
		changePcrButtonColours(pcrButtonColours);
	}

	//-----------------------------------------------------------------------------Combination Suggestion 8
	else if (currentCounter == 8) {

		//Light grey, dark pink, light pink
		let suggestions = ["#E5E4DF", "#9B1750", "#E3B0BC"];

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

		//Creates an ordered array of colours for this specific combination, to be passed in to the changePcrButtonColours() function
		let pcrButtonColours = ["#E3B0BC", "#9B1750", "#E3B0BC", "#9B1750", "#E3B0BC", "#9B1750", "#E5E4DF"];
		changePcrButtonColours(pcrButtonColours);
	}

	//-----------------------------------------------------------------------------Combination Suggestion 9
	else if (currentCounter == 9) {

		//dark black, orange, yellow, green
		let suggestions = ["#272727", "#FF642F", "#FFE402", "#14A76A"];

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

		//Creates an ordered array of colours for this specific combination, to be passed in to the changePcrButtonColours() function
		let pcrButtonColours = ["#FF642F", "#FFE402", "#14A76A", "#272727", "#272727", "#272727", "#272727"];
		changePcrButtonColours(pcrButtonColours);
	}

	//-----------------------------------------------------------------------------Combination Suggestion 10
	else if (currentCounter == 10) {

		//Light blue, light red, light yellow, light grey
		let suggestions = ["#A8D2E7", "#F76D6E", "#F7E9A0", "#DDDDDD"];

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

		//Creates an ordered array of colours for this specific combination, to be passed in to the changePcrButtonColours() function
		let pcrButtonColours = ["#A8D2E7", "#F76D6E", "#F7E9A0", "#F7E9A0", "#A8D2E7", "#F76D6E", "#DDDDDD"];
		changePcrButtonColours(pcrButtonColours);
	}

	//-----------------------------------------------------------------------------Combination Suggestion 11
	else if (currentCounter == 11) {

		//Taupe, warm light brown, rose, grey
		let suggestions = ["#EAE8DC", "#D8C3A4", "#E88073", "#8E8D89"];

		document.getElementById('color-sample-1').style.background = suggestions[1];
		document.getElementById('color-sample-2').style.background = suggestions[3];
		document.getElementById('color-sample-3').style.background = suggestions[2];
		document.getElementById('sample-heading').style.color = suggestions[0];
		document.getElementById('sample-subheading').style.color = suggestions[0];
		document.getElementById('sample-paragraph').style.color = suggestions[0];
		document.getElementById('colour-sampling-area').style.background = suggestions[0];

		// Changes the hex labels to match suggestions
		document.getElementById('hex-one').innerText = suggestions[1];
		document.getElementById('hex-two').innerText = suggestions[3];
		document.getElementById('hex-three').innerText = suggestions[2];
		document.getElementById('hex-four').innerText = suggestions[0];
		document.getElementById('hex-five').innerText = suggestions[0];
		document.getElementById('hex-six').innerText = suggestions[0];
		document.getElementById('hex-seven').innerText = suggestions[0];

		//Creates an ordered array of colours for this specific combination, to be passed in to the changePcrButtonColours() function
		let pcrButtonColours = ["#D8C3A4", "#8E8D89", "#E88073", "#EAE8DC", "#EAE8DC", "#EAE8DC", "#EAE8DC"];
		changePcrButtonColours(pcrButtonColours);
	}

	//-----------------------------------------------------------------------------Combination Suggestion 12
	else if (currentCounter == 12) {

		// Dark, purple, lighter purple, grey
		let suggestions = ["#2B1C3C", "#43328D", "#8165A7", "#A4B3B6"];

		document.getElementById('color-sample-1').style.background = suggestions[1];
		document.getElementById('color-sample-2').style.background = suggestions[2];
		document.getElementById('color-sample-3').style.background = suggestions[3];
		document.getElementById('sample-heading').style.color = suggestions[3];
		document.getElementById('sample-subheading').style.color = suggestions[3];
		document.getElementById('sample-paragraph').style.color = suggestions[0];
		document.getElementById('colour-sampling-area').style.background = suggestions[0];

		// Changes the hex labels to match suggestions
		document.getElementById('hex-one').innerText = suggestions[1];
		document.getElementById('hex-two').innerText = suggestions[2];
		document.getElementById('hex-three').innerText = suggestions[3];
		document.getElementById('hex-four').innerText = suggestions[3];
		document.getElementById('hex-five').innerText = suggestions[3];
		document.getElementById('hex-six').innerText = suggestions[0];
		document.getElementById('hex-seven').innerText = suggestions[0];

		//Creates an ordered array of colours for this specific combination, to be passed in to the changePcrButtonColours() function
		let pcrButtonColours = ["#43328D", "#8165A7", "#A4B3B6", "#A4B3B6", "#A4B3B6", "#2B1C3C", "#2B1C3C"];
		changePcrButtonColours(pcrButtonColours);
	}

	//-----------------------------------------------------------------------------Combination Suggestion 13
	else if (currentCounter == 13) {

		//Purple, yellow, nude, white
		let suggestions = ["#A54AC9", "#FDCD06", "#FFB38F", "#FFFFFF"];

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

		//Creates an ordered array of colours for this specific combination, to be passed in to the changePcrButtonColours() function
		let pcrButtonColours = ["#A54AC9", "#FDCD06", "#FFB38F", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
		changePcrButtonColours(pcrButtonColours);
	} else {
		//Returns combination to original red, green and purple colours the user began with
		let suggestions = ["#EF7566", "#46D9BD", "#BD60CE", "#FFFFFF"];

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

		let pcrButtonColours = ["#EF7566", "#46D9BD", "#BD60CE", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
		changePcrButtonColours(pcrButtonColours);
	}
}

//-------------------------------------------------Function to iterate through every .pcr-button and change its colour to match its corresponding sample.

function changePcrButtonColours(pcrButtonColours) {
	const pcrButtons = document.getElementsByClassName('pcr-button');
	for (i = 0; i < pcrButtons.length; i++) {
		pcrButtons[i];
		pcrButtons[i].style.color = pcrButtonColours[i];
	}
}