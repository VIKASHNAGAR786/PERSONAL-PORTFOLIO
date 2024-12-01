let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.id;

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

function openResume() {
    window.open('VIKASH_RESUME.pdf', '_blank');
}



// email

// Initialize EmailJS with your Public Key
(function() {
    emailjs.init('J8sJUYFFGXfKoDqPF'); // Replace with your Public Key
})();

// Add event listener to the form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send the form data using EmailJS
    emailjs.sendForm('8696169735', 'template_yvqe73l', this) // Replace placeholders
        .then(function(response) {
            alert('Message sent successfully!'); // Show success message
            console.log('Success:', response.status, response.text);
            document.getElementById('contact-form').reset(); // Reset the form
        }, function(error) {
            alert('Failed to send message. Please try again.'); // Show error message
            console.error('Error:', error);
        });
});





function serviceAnimation() {
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {




            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {

            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 90,
                y: dets.y - elem.getBoundingClientRect().y - 215
            })
        })
    })
}
serviceAnimation()
