// src/config/navSections.ts
export type NavSectionId = "about" | "edu" | "projects" | "contact";

export type NavSection = {
    id: NavSectionId;
    label: string;
    href: string;        // kam scrollovat
    iconClass: string;   // Font Awesome ikonka pro mobil
};

export const navSections: NavSection[] = [
    {
        id: "about",
        label: "O mně",
        href: "#about-me",
        iconClass: "fa-solid fa-user",
    },
    {
        id: "edu",
        label: "Vzdělání, práce a brigády v IT",
        href: "#edu-work-brig",
        iconClass: "fa-solid fa-graduation-cap",
    },
    {
        id: "projects",
        label: "Projekty",
        href: "#projects",
        iconClass: "fa-solid fa-folder",
    },
    {
        id: "contact",
        label: "Kontakt na mě",
        href: "#footer",
        iconClass: "fa-solid fa-paper-plane",
    },
];