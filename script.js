function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 50;
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}
