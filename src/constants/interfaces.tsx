export interface GlobalContextType {
    activeGallery: string;
    menuVisible: boolean;
    setActiveGallery: (gallery: string) => void;
    toggleMenu: () => void;
}

export interface SocialLink {
    alt: string;
    href: string;
    src: string;
};