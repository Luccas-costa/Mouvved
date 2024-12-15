// js/index.js
document.addEventListener("DOMContentLoaded", function () {
    const words = ["engajamento", "resultados", "metricas"];
    let currentWordIndex = 0;
    const spanElement = document.querySelector(".dynamic-text");
    let isDeleting = false;
    let charIndex = 0;

    function typeEffect() {
        const currentWord = words[currentWordIndex];
        if (isDeleting) {
            spanElement.textContent = currentWord.substring(0, charIndex--);
        } else {
            spanElement.textContent = currentWord.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => (isDeleting = true), 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
        }

        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
});

document.addEventListener("DOMContentLoaded", () => {
    const animateNumber = (element, targetValue, duration) => {
      let startValue = 0;
      const increment = Math.ceil(targetValue / (duration / 16)); // 16ms por frame (~60fps)
      const interval = setInterval(() => {
        startValue += increment;
        if (startValue >= targetValue) {
          startValue = targetValue; // Garante que o número final seja exato
          clearInterval(interval);
        }
        element.textContent = `+ ${startValue.toLocaleString()}`;
      }, 16);
    };
  
    // Selecione os elementos para animar
    const counters = [
      { element: document.querySelectorAll("#numeros")[0], target: 400000 },
      { element: document.querySelectorAll("#numeros")[1], target: 30000 },
      { element: document.querySelectorAll("#numeros")[2], target: 90000 },
    ];
  
    // Inicie as animações
    counters.forEach(({ element, target }) => {
      animateNumber(element, target, 4000); // 2000ms (2 segundos) de duração
    });
  });
  

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // Responsividade
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  const swiper2 = new Swiper(".toSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // Responsividade
      600: {
        slidesPerView: 2,
      },
      880: {
        slidesPerView: 3,
      },
      1170: {
        slidesPerView: 4,
      },
    },
  });
