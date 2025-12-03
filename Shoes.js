function sayThanks() {
  const email = document.getElementById("email").value;
  const msg = document.getElementById("msg");

  if (email === "") {
    msg.textContent = "Please enter your email address.";
    msg.style.color = "red";
  } else {
    msg.textContent = "Thanks for subscribing!";
    msg.style.color = "green";
  }
}
