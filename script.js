// LOGIN FUNCTION

function loginUser() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    if (user === "" || pass === "") {
        alert("Please fill all login fields");
    }
    else {
        alert("Login Successful 🚀 Welcome to TraceHub");
        window.location.href = "index.html";
    }
}

// SIGN UP FUNCTION

function signupUser() {
    let user = document.getElementById("signupUser").value;
    let email = document.getElementById("signupEmail").value;
    let pass = document.getElementById("signupPass").value;

    if (user === "" || email === "" || pass === "") {
        alert("Please fill all Sign Up fields");
    }
    else {
        alert("Sign Up Successful 🎉 Please Login Now");
    }
}
function submitLostItem() {
    let itemName = document.getElementById("itemName").value;
    let itemLocation = document.getElementById("itemLocation").value;
    let itemDate = document.getElementById("itemDate").value;
    let itemDescription = document.getElementById("itemDescription").value;
    let contactInfo = document.getElementById("contactInfo").value;

    if (
        itemName === "" ||
        itemLocation === "" ||
        itemDate === "" ||
        itemDescription === "" ||
        contactInfo === ""
    ) {
        document.getElementById("lostOutput").innerHTML =
            "⚠ Please fill all the fields first.";
    }
    else {
        document.getElementById("lostOutput").innerHTML =
            "✅ Lost Item Report Submitted Successfully!<br><br>" +
            "📦 Item: " + itemName + "<br>" +
            "📍 Location: " + itemLocation + "<br>" +
            "📅 Date: " + itemDate + "<br>" +
            "📝 Description: " + itemDescription + "<br>" +
            "📞 Contact: " + contactInfo;
    }
}

function submitFoundItem() {
    let foundItemName = document.getElementById("foundItemName").value;
    let foundLocation = document.getElementById("foundLocation").value;
    let foundDate = document.getElementById("foundDate").value;
    let foundDescription = document.getElementById("foundDescription").value;
    let foundContact = document.getElementById("foundContact").value;

    if (
        foundItemName === "" ||
        foundLocation === "" ||
        foundDate === "" ||
        foundDescription === "" ||
        foundContact === ""
    ) {
        document.getElementById("foundOutput").innerHTML =
            "⚠ Please fill all the fields first.";
    }
    else {
        document.getElementById("foundOutput").innerHTML =
            "✅ Found Item Report Submitted Successfully!<br><br>" +
            "📦 Item: " + foundItemName + "<br>" +
            "📍 Location: " + foundLocation + "<br>" +
            "📅 Date: " + foundDate + "<br>" +
            "📝 Description: " + foundDescription + "<br>" +
            "📞 Contact: " + foundContact;
    }
}
function sendMessage() {

    let name = document.getElementById("contactName").value;
    let email = document.getElementById("contactEmail").value;
    let phone = document.getElementById("contactPhone").value;
    let subject = document.getElementById("contactSubject").value;
    let message = document.getElementById("contactMessage").value;

    if (name === "" || email === "" || phone === "" || message === "") {
        document.getElementById("contactOutput").innerHTML =
            "⚠ Please fill all fields!";
    }
    else {
        document.getElementById("contactOutput").innerHTML =
            "✅ Message Sent Successfully!<br><br>" +
            "👤 Name: " + name + "<br>" +
            "📧 Email: " + email + "<br>" +
            "📞 Phone: " + phone + "<br>" +
            "📌 Subject: " + subject + "<br>" +
            "💬 Message: " + message;
    }
}