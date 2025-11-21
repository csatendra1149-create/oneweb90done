// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dynamic footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Footer contact form handling
const footerForm = document.getElementById('footerContactForm');
const footerNote = document.getElementById('footerNote');

if (footerForm) {
  footerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = footerForm.querySelector('#fname').value.trim();
    const email = footerForm.querySelector('#femail').value.trim();
    const qual = footerForm.querySelector('#fqual').value.trim();
    const msg = footerForm.querySelector('#fmsg').value.trim();

    if (!name || !email || !qual || !msg) {
      footerNote.textContent = 'Please fill in all fields.';
      footerNote.style.color = 'crimson';
      return;
    }

    footerNote.style.color = '';
    footerNote.textContent = 'Sending message...';
    setTimeout(() => {
      footerNote.textContent = 'Thank you! We will contact you shortly.';
      footerForm.reset();
    }, 900);
  });
}
// abouts
document.addEventListener("DOMContentLoaded", () => {
  const aboutCards = document.querySelectorAll(".about-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  aboutCards.forEach((card) => observer.observe(card));
});




document.querySelectorAll('.orbit-item').forEach(item => {
  item.addEventListener('click', () => {
    const infoBox = document.getElementById('orbit-info');
    const allItems = document.querySelectorAll('.orbit-item');

    const isActive = item.classList.contains('active');

    // Reset all items first
    allItems.forEach(el => {
      el.classList.remove('active');
      el.style.animationPlayState = "running"; // others keep moving
    });

    if (isActive) {
      // If already active, reset info box
      infoBox.classList.remove('active');
      infoBox.querySelector('h3').textContent = "Click a service to learn more";
      infoBox.querySelector('p').textContent = "";
      return;
    }

    // Activate clicked item only
    item.classList.add('active');
    item.style.animationPlayState = "paused"; // pause just this one
    infoBox.classList.add('active');

    const type = item.getAttribute('data-info');
    let title = "", desc = "";

    switch (type) {
      case "admissions":
        title = "🎓 University Admissions";
        desc = "We help you choose top universities, prepare SOPs, and manage your application process with expert guidance.";
        break;
      case "abroad":
        title = "🌍 Study Abroad Guidance";
        desc = "Comprehensive support for studying in the USA, UK, Canada, Australia, and Europe — from application to relocation.";
        break;
      case "career":
        title = "💼 Career Counselling";
        desc = "We help you identify your goals and align them with the right academic and career path.";
        break;
      case "scholarships":
        title = "💰 Scholarships & Financial Aid";
        desc = "Find scholarships and funding options that make your education globally accessible and affordable.";
        break;
      case "visa":
        title = "🛂 Visa Assistance";
        desc = "End-to-end guidance on visa paperwork, documentation, and interview preparation for smooth approval.";
        break;
    }

    infoBox.querySelector('h3').textContent = title;
    infoBox.querySelector('p').textContent = desc;
  });
});






const form = document.getElementById('footerContactForm');
const feedback = document.getElementById('footerNote');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Stop page reload

  const formData = new FormData(form);

  // Basic validation
  if (!formData.get('fname') || !formData.get('femail') || !formData.get('fqual') || !formData.get('fmsg')) {
    feedback.textContent = "❌ Please fill in all fields.";
    feedback.style.color = "red";
    return;
  }

  // Send using Formspree (replace with your actual endpoint if needed)
  fetch("https://formspree.io/f/meopaqrv", {
    method: "POST",
    headers: { "Accept": "application/json" },
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      if (data.ok || data.success) {
        feedback.textContent = "✅ Thank you! We will contact you shortly.";
        feedback.style.color = "green";
        form.reset();

        // ⏳ Hide message after 3 seconds
        setTimeout(() => {
          feedback.textContent = "";
        }, 3000);
      } else {
        feedback.textContent = "❌ Something went wrong. Try again.";
        feedback.style.color = "red";

        // Hide error after 3 seconds
        setTimeout(() => {
          feedback.textContent = "";
        }, 3000);
      }
    })
    .catch(err => {
      console.error(err);
      feedback.textContent = "❌ Error sending message.";
      feedback.style.color = "red";

      // Hide error after 3 seconds
      setTimeout(() => {
        feedback.textContent = "";
      }, 3000);
    });
});

document.getElementById('year').textContent = new Date().getFullYear();


const scrollTopBtn = document.getElementById('scrollTopBtn');

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});






// HERO SLIDESHOW
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slideshow img');
  let current = 0;

  function changeSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  setInterval(changeSlide, 3500);
});






