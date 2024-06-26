const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

 // Show home section by default
 document.getElementById('home').style.display = 'block';

 // Prompt for user's name and change background color
 setTimeout(() => {
     const userName = prompt('Please enter your name:');
     if (userName) {
         document.body.style.backgroundImage = 'linear-gradient(to right, #43cea2, #185a9d)'; 
         const welcomeMessage = document.createElement('div');
         welcomeMessage.textContent = `Welcome to the site, ${userName}!`;
         welcomeMessage.classList.add('welcome-message');
         document.body.prepend(welcomeMessage);
     }
 }, 3000); // 3 seconds delay for demonstration, change to 30000 for 30 seconds

 // app.js
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.links a');
  const sections = document.querySelectorAll('.content-section');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('data-target');

      sections.forEach(section => {
        if (section.id === targetId) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });

  // Initially hide all sections except the first one
  sections.forEach((section, index) => {
    if (index !== 0) {
      section.style.display = 'none';
    }
  });
});
