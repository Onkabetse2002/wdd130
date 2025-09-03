// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

// Close mobile menu after clicking link
function closeMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.add("hidden");
}

// Contact form handler
function submitForm(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    alert("⚠️ Please fill in all fields before submitting.");
    return;
  }

  // Example success (you can connect this to backend/email API later)
  alert(`✅ Thank you ${name}, your message has been sent!`);
  
  // Reset form
  document.getElementById("contact-form").reset();
}
