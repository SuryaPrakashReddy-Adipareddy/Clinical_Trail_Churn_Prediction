let data = [];
let recommendations = {
    "Lost to follow-up": [
        "Implement regular communication check-ins.",
        "Schedule reminders for follow-up visits.",
        "Simplify the follow-up process for convenience.",
        "Offer telehealth options for remote monitoring."
    ],
    "Adverse events": [
        "Increase monitoring for potential side effects.",
        "Educate patients about managing common side effects.",
        "Provide closer supervision during treatment.",
        "Encourage regular check-ins with healthcare providers."
    ],
    "Protocol violations": [
        "Provide clear instructions for protocol adherence.",
        "Offer training sessions on study protocols.",
        "Use digital reminders to support protocol tracking.",
        "Increase support for high-risk patients."
    ],
    "Patient Withdrawal": [
        "Provide counseling to address patient concerns.",
        "Explain benefits of study participation more clearly.",
        "Offer flexible scheduling to accommodate patient needs.",
        "Provide personalized care plans to increase comfort."
    ]
};

// File upload handler
document.getElementById("file-input").addEventListener("change", function(event) {
    const file = event.target.files[0];
    Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: function(results) {
            data = results.data;
            alert("Dataset loaded successfully!");
        }
    });
});

// Search for patient details and display
function searchPatient() {
    const patientID = document.getElementById("patient-id").value;
    const patient = data.find(row => row["Patient_ID"] === patientID);

    if (patient) {
        // Create a link to the Patient Details page
        const link = document.createElement("a");
        link.href = "patient-details.html?patientID=" + patientID;
        link.textContent = "View Patient Details and Recommendations";
        link.classList.add("btn");

        const linkDiv = document.getElementById("patient-details-link");
        linkDiv.innerHTML = "";
        linkDiv.appendChild(link);
    } else {
        alert("Patient ID not found. Please try again.");
    }
}