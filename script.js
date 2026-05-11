const glow = document.querySelector(".cursor-glow");

if (glow && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
    glow.style.opacity = "1";
  });

  window.addEventListener("pointerleave", () => {
    glow.style.opacity = "0";
  });
}

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (!header) return;
  header.style.borderBottom = window.scrollY > 24 ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent";
});
