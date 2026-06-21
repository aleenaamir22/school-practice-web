const form = document.getElementById("admissionForm");
const letterSection = document.getElementById("letterSection");
const letterText = document.getElementById("letterText");
const statusBtn = document.getElementById("statusBtn");

let statusIndex = 0;
const statuses = ["Received", "Under Verification", "Accepted"];

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const father = document.getElementById("father").value;
    const bform = document.getElementById("bform").value;
    const className = document.getElementById("class").value;
    const subjects = document.getElementById("subjects").value;
    const interest = document.getElementById("interest").value;
    const academic = document.getElementById("academic").value;
    const address = document.getElementById("address").value;

    const letter = `
Dear ${name},

We have successfully received your admission information.

Please press the SEND button to move forward in the admission process.

We will get back to you once we verify your information.

Kindly stay connected with the school administration for updates.

---

STUDENT DETAILS:
Name: ${name}
Age: ${age}
Father Name: ${father}
Email: ${email}
B-Form/CNIC: ${bform}
Class: ${className}
Favorite Subjects: ${subjects}
Interests: ${interest}
Academic Details: ${academic}
Address: ${address}

---

Summit International School Admissions Office
`;

    letterText.innerText = letter;
    letterSection.style.display = "block";
});

/* SEND BUTTON */
function sendForm(){
    alert("Application sent successfully! We will contact you soon.");
}

/* DOWNLOAD LETTER */
function downloadLetter(){
    const text = document.getElementById("letter").innerText;
    const blob = new Blob([text], {type:"text/plain"});
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "Admission_Letter.txt";

    link.click();
}

/* STATUS BUTTON */
function changeStatus(){

    statusIndex = (statusIndex + 1) % statuses.length;

    statusBtn.innerText = "Status: " + statuses[statusIndex];

    statusBtn.className = "status-btn " + (
        statusIndex === 0 ? "received" :
        statusIndex === 1 ? "under" :
        "accepted"
    );
}