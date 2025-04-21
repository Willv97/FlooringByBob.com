document.addEventListener("DOMContentLoaded", function () {
  // CONTACT FORM
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Message sent! We will get back to you soon.');
    });
  }

  // HAMBURGER NAV
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.querySelector('.main-nav ul');
  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  // LIGHTBOX
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.close');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const galleryLinks = Array.from(document.querySelectorAll('.lightbox-link'));
  let currentIndex = 0;

  function openLightbox(index) {
    const imgSrc = galleryLinks[index].getAttribute('href');
    lightboxImg.src = imgSrc;
    lightbox.classList.add('show');
    currentIndex = index;
  }

  function closeLightbox() {
    lightbox.classList.remove('show');
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryLinks.length;
    openLightbox(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryLinks.length) % galleryLinks.length;
    openLightbox(currentIndex);
  }

  galleryLinks.forEach((link, index) => {
    link.addEventListener('click', e => {
      e.preventDefault();
      openLightbox(index);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }
});

  

