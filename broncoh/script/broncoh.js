// Contact form submission handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Form Submitted:", { name, email, message });

  alert("Thank you, " + name + "! Your message has been received.");
  
  // Reset form
  this.reset();
});
