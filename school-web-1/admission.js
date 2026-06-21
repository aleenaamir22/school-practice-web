// ================= FORM LOGIC =================

const form = document.getElementById("admissionForm");
const resultSection = document.getElementById("resultSection");
const finalSection = document.getElementById("finalSection");
const appMessage = document.getElementById("appMessage");
const proceedBtn = document.getElementById("proceedBtn");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const father = document.getElementById("father").value;
    const className = document.getElementById("class").value;
    const address = document.getElementById("address").value;

    appMessage.innerHTML = `
    We have successfully combined all your submitted details.<br><br>
    Please check carefully before proceeding.<br><br>

    <b>Student Name:</b> ${name}<br>
    <b>Age:</b> ${age}<br>
    <b>Email:</b> ${email}<br>
    <b>Father Name:</b> ${father}<br>
    <b>Class:</b> ${className}<br>
    <b>Address:</b> ${address}<br><br>

    Click PROCEED to continue admission process.
    `;

    resultSection.style.display = "block";
});

// ================= PROCEED BUTTON =================

proceedBtn.addEventListener("click", function(){

    finalSection.style.display = "block";

    finalSection.scrollIntoView({
        behavior:"smooth"
    });
});

// ================= HAMBURGER MENU =================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    hamburger.innerHTML = navLinks.classList.contains("active")
        ? "✕"
        : "☰";
});