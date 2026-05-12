let activeSection = null;

function showSection(id) {
    const section = document.getElementById(id);

    if (activeSection === section) {
        section.style.display = "none";
        activeSection = null;
        return;
    }

    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.style.display = "none");

    section.style.display = "block";
    activeSection = section;
}
