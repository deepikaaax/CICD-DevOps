// Handle User Details Submission
document.getElementById('startFeedback').addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const roll = document.getElementById('roll').value.trim();

    if (name === '' || roll === '') {
        alert("Please enter your Name and Roll Number.");
        return;
    }

    document.getElementById('userDetails').classList.add('hidden');
    document.getElementById('feedbackForm').classList.remove('hidden');
});

// Function to Show Follow-up Questions Dynamically
function handleRatingChange(questionId, improvementId) {
    document.getElementById(questionId).addEventListener('change', function() {
        const rating = parseInt(this.value);
        const improvementField = document.getElementById(improvementId);

        if (rating < 3) {
            improvementField.classList.remove('hidden'); // Show improvement suggestion
        } else {
            improvementField.classList.add('hidden'); // Hide if rating is 3 or above
        }
    });
}

// Apply Dynamic Behavior to Each Question
handleRatingChange('q1', 'improvementQ1');
handleRatingChange('q2', 'improvementQ2');
handleRatingChange('q3', 'improvementQ3');

// Handle Feedback Form Submission
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const feedback = {
        course: document.getElementById('course').value,
        q1: document.getElementById('q1').value,
        q2: document.getElementById('q2').value,
        q3: document.getElementById('q3').value,
        improvement: {
            q1: document.getElementById('improvementText1')?.value || "N/A",
            q2: document.getElementById('improvementText2')?.value || "N/A",
            q3: document.getElementById('improvementText3')?.value || "N/A"
        },
        media: document.getElementById('mediaUpload').files.length > 0 ? "Uploaded" : "No Media"
    };

    console.log("Anonymous Feedback Submitted:", feedback);
    document.getElementById('responseMessage').innerText = "Thank you for your feedback!";
    document.getElementById('feedbackForm').reset();
    document.getElementById('feedbackForm').classList.add('hidden');
});
