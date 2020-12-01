/*jshint esversion: 6 */

// -------------------------------------------------- EmailJS API: https://www.emailjs.com/

// sendMail() Function

function sendMail(contactForm) {
	emailjs.send("service_xu52dyr", "colour_splash_contact", {
			"from_name": contactForm.name.value,
			"from_email": contactForm.emailaddress.value,
			"message": contactForm.message.value,
		})
		.then(
			function (response) {
				console.log("SUCCESS", response);

				// Success message to user
				document.getElementById("result-message").innerHTML = "<p style = 'color: #46D9BD';>Thank You!<br>We will get back to you shortly.</p>";
			},
			function (error) {
				console.log("FAILED", error);

				// Error message to user
				document.getElementById("result-message").innerHTML = "<p style = 'color: #EF7566; text-align: center; padding-top: 10px'>Oops!<br>Your question can't be sent at the moment.<br>Please try again later.</p>";
			}
		);

	// Resets the form input fields once submit has been clicked
	var clearInput = document.getElementById('contactForm');
	clearInput.reset();

	// Prevents page from refreshing when submit is clicked
	return false;
}