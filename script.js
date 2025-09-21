  const roles = ["Full Stack Developer", "Web Developer", "Backend Developer","Frontend Developer"];
  let roleIndex = 0;
  let charIndex = 0;
  const typingElement = document.getElementById("typing");
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenRoles = 2000;

  function type() {
    if (charIndex < roles[roleIndex].length) {
      typingElement.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenRoles);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 500);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (roles.length) setTimeout(type, 1000);
  });

function sendToWhatsApp() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0AMessage: ${message}`;
    
    const whatsappNumber = "918466966806"; 
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");

    alert("Redirecting to WhatsApp... Please press SEND in WhatsApp to complete.");
  }
  // Highlight active navbar link on scroll
const sections = document.querySelectorAll("section, main");
const navLinks = document.querySelectorAll("#nav-bar1 a");

window.addEventListener("scroll", () => {
  let current = "";
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Offset for header
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
