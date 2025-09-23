(function() {
  function initAOS() {
    const elements = document.querySelectorAll("[data-aos]");
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("aos-animate");
      }
    });
  }

  window.addEventListener("scroll", initAOS);
  window.addEventListener("load", initAOS);
})();
