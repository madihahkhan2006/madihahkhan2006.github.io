
document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project-card");
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close-btn");

  projects.forEach(project => {
    project.addEventListener("click", () => {
      modalTitle.textContent = project.dataset.title;
      modalDesc.textContent = project.dataset.desc;
      modalImage.src = project.querySelector("img").src;
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});
