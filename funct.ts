interface PortfolioElement {
    id: string;
    title: string;
    description?: string;
    isActive: boolean;
}

interface ProjectMetadata {
    lastUpdate: string;
    author: string;
    tags: string[];
    version: number;
}

class SiteManager {
    private config: ProjectMetadata;
    private elements: PortfolioElement[];

    constructor() {
        this.config = {
            lastUpdate: "2024-05-17",
            author: "Burak",
            tags: ["HTML", "CSS", "TS"],
            version: 1.1
        };
        this.elements = [
            { id: "home", title: "Home Page", isActive: true },
            { id: "projects", title: "My Projects", isActive: true },
            { id: "contact", title: "Contact Section", isActive: true }
        ];
    }

    public scrollToSection(sectionId: string): void {
        const element: HTMLElement | null = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    public getStatus(): string {
        return `Site version ${this.config.version} managed by ${this.config.author}`;
    }

    private logActivity(action: string): void {
        const timestamp: string = new Date().toISOString();
        console.log(`[${timestamp}] Action: ${action}`);
    }
}

const manager = new SiteManager();
const currentStatus: string = manager.getStatus();
const isEnabled: boolean = true;
