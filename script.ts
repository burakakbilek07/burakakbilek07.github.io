function scrollToSection(sectionId: string): void {
    const element: HTMLElement | null = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
