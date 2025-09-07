export interface GlobalContextType {
    activeLink: string;
    menuVisible: boolean;
    setActiveLink: (gallery: string) => void;
    toggleMenu: () => void;
}

export interface SocialLink {
    alt: string;
    href: string;
    src: string;
};