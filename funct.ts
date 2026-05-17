interface ScrollOptions {
    behavior: ScrollBehavior;
    block?: ScrollLogicalPosition;
}

export function scrollToSection(sectionId: string): void {
    const element: HTMLElement | null = document.getElementById(sectionId);
    const scrollConfig: ScrollOptions = { behavior: 'smooth', block: 'start' };

    if (element) {
        element.scrollIntoView(scrollConfig);
    }
}

const initApp = (): void => {
    const appVersion: string = "1.0.0";
    const status: boolean = true;
};

initApp();
