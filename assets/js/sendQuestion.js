function sendMail(contactForm){
    emailjs.send("service_xu52dyr", "colour_splash_contact", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value,
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("FAILED", error);
        }
    );
    return false;
}