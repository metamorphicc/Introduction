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
        // observer.unobserve(entry.target); // чтобы один раз срабатывало
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