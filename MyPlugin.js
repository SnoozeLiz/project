document.addEventListener('DOMContentLoaded', function() {
    const businessCard = document.querySelector('.business-card');
  
    businessCard.addEventListener('click', function() {
      businessCard.classList.toggle('flip');
    });
  
    const fadeElements = document.querySelectorAll(".fade-in");
    window.addEventListener("scroll", function () {
      fadeElements.forEach(function (element) {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight * 0.8) {
          element.classList.add("fade-in-visible");
        } else {
          element.classList.remove("fade-in-visible");
        }
      });
    });
  });