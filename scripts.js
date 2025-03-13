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

document.getElementById("more-trigger").addEventListener("click", function() {
    var moreInfo = document.getElementById("more-info");
    moreInfo.classList.toggle("hidden");
    if(moreInfo.classList.contains("hidden")) {
        this.textContent = "more?";
    } else {
        this.textContent = "less?";
    }
});
