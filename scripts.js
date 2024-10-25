function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('hidden');
}

const changeText = document.querySelector("#change-text");

changeText.addEventListener("click", function() {
  changeText.textContent = "not a webdev";
});