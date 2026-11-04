document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const confirmation = document.createElement("b");
    confirmation.textContent = "¡Gracias! Te responderemos pronto.";
    form.replaceChildren(confirmation);
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  document.querySelectorAll("main section").forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
  });
}
