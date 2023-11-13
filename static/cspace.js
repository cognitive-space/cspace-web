function newsletter_signup (sel) {
  var email = document.querySelector(sel).value;
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
          document.querySelector(sel).value = '';
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
