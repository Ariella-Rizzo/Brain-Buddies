document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  const thankYouMessage = document.getElementById("thankYouMessage");

  if (!form) {
    console.warn("No form with id 'contactForm' found.");
    return;
  }


  let errorContainer = document.getElementById("formErrors");
  if (!errorContainer) {
    errorContainer = document.createElement("div");
    errorContainer.id = "formErrors";
    errorContainer.style.display = "none";
    errorContainer.setAttribute("aria-live", "polite");
    form.parentNode.insertBefore(errorContainer, form); 
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    // clear previous errors
    errorContainer.innerHTML = "";
    errorContainer.style.display = "none";

    const errors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailInput || !emailRegex.test(String(emailInput.value).trim())) {
      errors.push("Please enter a valid email address.");
    }
    if (!subjectInput || String(subjectInput.value).trim().length < 3) {
      errors.push("Subject must be at least 3 characters long.");
    }
    if (!messageInput || String(messageInput.value).trim().length < 6) {
      errors.push("Message must be at least 6 characters long.");
    }

    if (errors.length > 0) {
      // show inline errors
      const ul = document.createElement("ul");
      errors.forEach(err => {
        const li = document.createElement("li");
        li.textContent = err;
        ul.appendChild(li);
      });
      errorContainer.appendChild(ul);
      errorContainer.style.display = "block";
      // focus first invalid
      if (!emailRegex.test(String(emailInput.value || "").trim())) emailInput.focus();
      else if (String(subjectInput.value).trim().length < 3) subjectInput.focus();
      else messageInput.focus();
      return;
    }

    form.style.display = "none";                // hide the form

    if (thankYouMessage) {
      thankYouMessage.style.display = "block";  // show the thank you

      const heading = thankYouMessage.querySelector("h1,h2,h3");
      if (heading) heading.focus && heading.focus();
    }
  });
});
