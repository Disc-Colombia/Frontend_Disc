/// <reference types="vite/client" />
// declare global {
//     interface Window {
//         dataLayer: any[];  // Declaración global para que TypeScript lo reconozca
//         gtag: (...args: any[]) => void;
//     }
// }
//
// export {};

/// <reference types="vite/client" />

declare global {
    interface Window {
        dataLayer: Array<{ [key: string]: any }>;  // Tipo más específico para dataLayer
        gtag: (...args: Array<string | number | object>) => void;  // Tipo más específico para gtag
    }
}

export {};
