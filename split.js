const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseenter", () => left.classList.add("hoverleft"));
left.addEventListener("mouseleave", () => left.classList.remove("hoverleft"));

right.addEventListener("mouseenter", () => right.classList.add("hoverright"));
right.addEventListener("mouseleave", () =>
  right.classList.remove("hoverright")
);
