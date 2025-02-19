export interface GlobalContextType {
    activeGallery: string;
    menuVisible: boolean;
    setActiveGallery: (gallery: string) => void;
    toggleMenu: () => void;
}

export interface SocialLink {
    href: string;
    alt: string;
    src: string;
};