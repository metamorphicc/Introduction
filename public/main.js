

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const faders = document.querySelectorAll('.fade-in-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
    }
  });
});

faders.forEach(el => observer.observe(el));

function scrollToIntro() {
    const target = document.querySelector(".empty-1");
    if (target) {
      target.scrollIntoView({behavior: "smooth"})
    }
}

function openModal() {
  const modal = document.getElementById("modal-window");
  const backdrop = document.getElementById("back-modal");

  backdrop.classList.add("show-backdrop");
  backdrop.style.display = "block";

  modal.style.display = "block";
  setTimeout(() => {
    modal.classList.add("show-modal");
  }, 10);

  document.getElementById('header').style.backgroundColor = "#f4f7f900";
  document.body.style.overflow = "hidden";
}

function openModalGmail() {
  const modal = document.getElementById("modal-window-gmail");
  const backdrop = document.getElementById("back-modal");

  backdrop.classList.add("show-backdrop");
  backdrop.style.display = "block";

  modal.style.display = "block";
  setTimeout(() => {
    modal.classList.add("show-modal");
  }, 10);

  document.getElementById('header').style.backgroundColor = "#f4f7f900";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("modal-window");
  const backdrop = document.getElementById("back-modal");

  modal.classList.remove("show-modal");
  backdrop.classList.remove("show-backdrop");

  modal.addEventListener("transitionend", () => {
    modal.style.display = "none";
  }, { once: true });

  backdrop.addEventListener("transitionend", () => {
    backdrop.style.display = "none";
  }, { once: true });

  document.getElementById('header').style.backgroundColor = "#f4f7f9";
  document.body.style.overflow = "auto";
}

function closeModalGmail() {
  const modal = document.getElementById("modal-window-gmail");
  const backdrop = document.getElementById("back-modal");

  modal.classList.remove("show-modal");
  backdrop.classList.remove("show-backdrop");

  modal.addEventListener("transitionend", () => {
    modal.style.display = "none";
  }, { once: true });

  backdrop.addEventListener("transitionend", () => {
    backdrop.style.display = "none";
  }, { once: true });

  document.getElementById('header').style.backgroundColor = "#f4f7f9";
  document.body.style.overflow = "auto";
}

function copyEmail() {
  const text = document.getElementById("copyText").innerText;
  navigator.clipboard.writeText(text).then(() => {
    const popup = document.getElementById("copiedPopup");
    popup.style.opacity = "1";

    setTimeout(() => {
      popup.style.opacity = "0";
    }, 1000); 
  }).catch(err => {
    console.error("Ошибка копирования:", err);
  });
}




