/// <reference types="vite/client" />
declare global {
    interface Window {
        dataLayer: any[];  // Declaración global para que TypeScript lo reconozca
        gtag: (...args: any[]) => void;
    }
}

export {};