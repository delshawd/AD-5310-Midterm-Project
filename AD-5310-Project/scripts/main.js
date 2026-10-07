const form = document.forms["device"];

if (form) {
    form["submit"].addEventListener("click", getQuote);
}

function getQuote(e) {
    e.preventDefault();

    if (
        !isEmpty(form["brand"]) ||
        !isEmpty(form["model"])
    ) {
        return;
    }

    let device = form["device"].value;
    let condition = form["condition"].value;
    let quote = 0;

    if (device == "phone") {
        quote = 300;
    } else if (device == "laptop") {
        quote = 500;
    } else if (device == "tablet") {
        quote = 200;
    } else {
        quote = 250;
    }

    if (condition == "good") {
        quote = quote - 50;
    } else if (condition == "fair") {
        quote = quote - 100;
    }

    alert("Your quote is $" + quote);
}

const contactForm = document.forms["contact"];

if (contactForm) {
    contactForm["submit"].addEventListener("click", submitForm);
}

function submitForm(e) {
    e.preventDefault();

    console.log(contactForm["name"].value, contactForm["email"].value, contactForm["message"].value);

    if (
        isEmpty(contactForm["name"]) &&
        isEmpty(contactForm["email"]) &&
        isEmpty(contactForm["message"]) &&
        isValidEmail(contactForm["email"])
    ) {
        alert("Thank you for your message!");
    }
}

function isEmpty(field) {
    if (field.value == "") {
        alert(field.name + " cannot be empty.");
        return false;
    } else {
        return true;
    }
}

function isValidEmail(email) {
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!validEmail.test(email.value)) {
        alert("Please enter a valid email.");
        return false;
    } else {
        return true;
    }
}