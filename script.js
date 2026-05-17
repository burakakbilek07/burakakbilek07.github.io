function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.scrollY - 50;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; 
    let start = null;

    function animation(currentTime) {
        if (!start) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}
