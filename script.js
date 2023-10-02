document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const slideWidth = slider.querySelector(".slide").offsetWidth;
    let currentIndex = 0;
  
    // Function to update the active card
    function updateActiveCard() {
      const activeIndex = Math.round(slider.scrollLeft / slideWidth);
      currentIndex = activeIndex;
      const slides = document.querySelectorAll(".slide");
  
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
  
      const activeSlide = document.querySelector(`.slide[data-index="${activeIndex + 1}"]`);
      activeSlide.classList.add("active");
    }
  
    // Event listener for the "Next" button
    nextBtn.addEventListener("click", function () {
      currentIndex = Math.min(currentIndex + 1, slider.children.length - 1);
      slider.scrollTo({
        left: currentIndex * slideWidth,
        behavior: "smooth",
      });
      updateActiveCard();
    });
  
    // Event listener for the "Previous" button
    prevBtn.addEventListener("click", function () {
      currentIndex = Math.max(currentIndex - 1, 0);
      slider.scrollTo({
        left: currentIndex * slideWidth,
        behavior: "smooth",
      });
      updateActiveCard();
    });
  
    // Initialize active card
    updateActiveCard();
  
    // Event listener for scroll events to update the active card
    slider.addEventListener("scroll", updateActiveCard);
  });
  