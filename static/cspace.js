// Contact form submission via Formspree
document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.getElementById("contact-form");
  var formStatus = document.getElementById("form-status");

  console.log("contact-form element:", contactForm);
  console.log("form-status element:", formStatus);

  if (!contactForm || !formStatus) return;

  console.log("Contact form handler attached");

  var submitBtn = contactForm.querySelector('[type="submit"]');

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    formStatus.textContent = "";
    submitBtn.disabled = true;

    try {
      var response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: new FormData(contactForm),
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        contactForm.reset();
        formStatus.textContent = "Thank you. Your message has been submitted.";
      } else {
        formStatus.textContent = "There was a problem submitting the form. Please try again.";
      }
    } catch (error) {
      formStatus.textContent = "There was a problem submitting the form. Please try again.";
    } finally {
      submitBtn.disabled = false;
    }
  });
});

function newsletter_signup (form) {
  var email = form.elements['email'].value;

  if (email) {
    fetch(
      "https://ecgvz68tdc.execute-api.us-west-2.amazonaws.com/api/pipedrive-newsletter",
      {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email})
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status == 'Successfully Added') {
          form.elements['email'].value = '';
          alert("Successfully added to newsletter.");
        } else {
          alert(data.status);
        }
      })
      .catch((e) => {
        console.error(e);
        alert("Error signing up for Newsletter");
      });
  } else {
    alert('Enter E-Mail');
  }

  return false;
}
