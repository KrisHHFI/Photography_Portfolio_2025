export interface GlobalContextType {
    activeGallery: string;
    menuVisible: boolean;
    setActiveGallery: (gallery: string) => void;
    toggleMenu: () => void;
}
