function scrollToKontakt() {
  const kontakt = document.getElementById("kontakt");
  kontakt.scrollIntoView({ behavior: "smooth" });
}

// Smooth Scrolling für alle Links mit Anker
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
