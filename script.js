// ── Navbar scroll effect ──
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── Active nav link on scroll ──
var sections  = document.querySelectorAll('section[id]');
var navLinks  = document.querySelectorAll('#navbar a');

window.addEventListener('scroll', function() {
  var scrollY = window.scrollY;
  sections.forEach(function(section) {
    var sectionTop    = section.offsetTop - 100;
    var sectionHeight = section.offsetHeight;
    var sectionId     = section.getAttribute('id');
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + sectionId) {
          link.classList.add('active');
        }
      });
    }
  });
});

// ── Contact form submit ──
var sendBtn = document.querySelector('.contact-form .btn-red');
if (sendBtn) {
  sendBtn.addEventListener('click', function() {
    var inputs   = document.querySelectorAll('.contact-form input');
    var textarea = document.querySelector('.contact-form textarea');
    var allFilled = true;

    inputs.forEach(function(input) {
      if (!input.value.trim()) allFilled = false;
    });

    if (!textarea.value.trim()) allFilled = false;

    if (allFilled) {
      sendBtn.textContent = 'Message Sent!';
      sendBtn.style.background = '#16a34a';
      setTimeout(function() {
        sendBtn.textContent = 'Send Message';
        sendBtn.style.background = '';
        inputs.forEach(function(i) { i.value = ''; });
        textarea.value = '';
      }, 3000);
    } else {
      sendBtn.textContent = 'Please fill all fields!';
      sendBtn.style.background = '#dc2626';
      setTimeout(function() {
        sendBtn.textContent = 'Send Message';
        sendBtn.style.background = '';
      }, 2000);
    }
  });
}

// ── Smooth scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});