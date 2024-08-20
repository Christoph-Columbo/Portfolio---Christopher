// Initialize EmailJS with your User ID
emailjs.init("RsfbmAfHTXo6ZNbF6");

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm('service_8zoy75m', 'template_1', this)
        .then(function(response) {
            console.log('Message sent successfully!', response); // Debugging output
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); // Reset form fields
        }, function(error) {
            console.error('Failed to send message.', error); // Debugging output
            alert('Failed to send message. Please check your console for more details.');
        });

    // Close the popup after form submission
    document.getElementById("contact-popup").style.display = "none";
}

// Show the popup when the "Contact Me" tab is clicked
const popup = document.getElementById("contact-popup");
const trigger = document.getElementById("contact-trigger");
const closeBtn = document.querySelector(".close-btn");

// Show the popup
trigger.onclick = function(event) {
    event.preventDefault(); // Prevent default link behavior
    popup.style.display = "flex";
}

// Close the popup when the close button is clicked
closeBtn.onclick = function() {
    popup.style.display = "none";
}

// Close the popup when clicking outside the content box
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

// Attach the form submit handler
document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);







/**** FUNCTIONALITY TO AUDIO BUTTONS  *****/

// Variable to keep track of the currently playing audio
let currentAudio = null;

function toggleAudio(audioId) {
    // Get the audio element by its ID
    const audio = document.getElementById(audioId);

    // If there is a different audio playing, pause it and reset its time
    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset the audio to the beginning
    }

    // If the selected audio is paused, play it
    if (audio.paused) {
        audio.play(); // Play the audio
        currentAudio = audio; // Update the currently playing audio
    } else {
        // If the audio is playing, pause it
        audio.pause();
        currentAudio = null; // Clear the reference to the current audio
    }
}

// Event listener for all audio elements to handle when the audio ends
document.querySelectorAll('audio').forEach(audio => {
    audio.addEventListener('ended', () => {
        currentAudio = null; // Reset currentAudio when the track ends
    });
});

/**** FUNCTIONALITY TO AUDIO BUTTONS  *****/
