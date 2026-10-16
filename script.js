const toggleButtons = document.querySelectorAll(".person-toggle");

toggleButtons.forEach((button) => {
  const descriptionId = button.getAttribute("aria-controls");
  const description = document.getElementById(descriptionId);
  const card = button.closest(".person");

  if (!description || !card) {
    return;
  }

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const willOpen = !isExpanded;

    button.setAttribute("aria-expanded", String(willOpen));
    description.hidden = !willOpen;
    card.classList.toggle("is-open", willOpen);
  });
});